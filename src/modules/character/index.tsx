import React, { useState } from 'react'
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { ModalMenu } from 'src/ui/modal'

import { CharacterCard } from './character-card'
import { useCharacterContext } from './character-context'
import { ModalFilter } from './modal-filter'

const Container = styled.View`
  background-color: ${colors.white};
`
const TextFilter = styled.Text`
  padding-right: 16px;
  color: ${colors.indigo};
  font-size: 17px;
  line-height: 22px;
`

const ActiveFilter = styled.View`
  background-color: ${colors.indigo};
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 6px;
`

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CharacterScreen = () => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const { applyFiltersCharacters } = useCharacterContext()

  navigation.setOptions({
    headerRight: () => (
      <FilterContainer>
        <ActiveFilter />
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <TextFilter>Filter</TextFilter>
        </TouchableOpacity>
      </FilterContainer>
    ),
  })

  const { data, loading, fetchMore } = useCharactersQuery({
    variables: {
      page: 1,
      filter: applyFiltersCharacters,
    },
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        page: currentPage + 1,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...(previousResult?.characters?.results ?? []),
              ...(fetchMoreResult?.characters?.results ?? []),
            ],
          },
        }
      },
    })
    setCurrentPage(currentPage + 1)
  }

  const renderItem = ({ item }) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) return <ActivityIndicator size="large" />

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => String(item?.name)}
        data={data?.characters?.results ?? []}
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        renderItem={renderItem}
      />
      <ModalMenu showModal={showModal} setShowModal={setShowModal}>
        <ModalFilter setShowModal={setShowModal} />
      </ModalMenu>
    </Container>
  )
}
