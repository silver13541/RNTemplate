import React, { useState } from 'react'
import { FlatList, StatusBar, Text } from 'react-native'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import { CharacterCard } from './character-card'

const Container = styled.View`
  background-color: ${colors.white};
`

export const CharacterScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading, fetchMore } = useCharactersQuery({
    variables: {
      page: 1,
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
              ...previousResult.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        }
      },
    })
    setCurrentPage(currentPage + 1)
  }

  const renderItem = ({ item }: IRenderItem) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) return <Text>Loading...</Text>

  return (
    <Container>
      <StatusBar hidden={true} />
      <FlatList
        key={'#'}
        keyExtractor={(item) => item.name}
        data={data.characters.results}
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        renderItem={renderItem}
      />
    </Container>
  )
}
