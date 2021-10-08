import React, { useState } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { FilterContainer } from 'src/ui/filter-container'
import { SelectContainer } from 'src/ui/select-container'

import { useCharacterContext } from './character-context'

interface IModalFilter {
  setShowModal: (showModal: boolean) => void
}

const Container = styled.View`
  background-color: ${colors.white};
  align-items: center;
`

const FilterApplyContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 15px 26.5px 16px;
`

const FilterText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`

const Apply = styled(Button)`
  background-color: ${colors.indigo};
  height: 28px;
`

const HeadLine = styled.Text`
  align-self: flex-start;
  padding-left: 16px;
  padding-bottom: 8.5px;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[6]};
`

const Clear = styled.TouchableOpacity`
  padding: 5px;
`
const ClearText = styled.Text`
  color: ${colors.indigo};
`

export const ModalFilter = ({ setShowModal }: IModalFilter) => {
  const {
    filtersCharacters,
    setFilterName,
    setFilterSpecies,
    setFilterGender,
    setFilterStatus,
    setFiltersCharacters,
    setApplyFiltersCharacters,
  } = useCharacterContext()
  const statusData = ['Alive', 'Dead', 'Unknown']
  const genderData = ['Female', 'Male', 'Genderless', 'Unknown']
  const [showName, setShowName] = useState(false)
  const [showSpecies, setShowSpecies] = useState(false)

  return (
    <Container>
      <FilterApplyContainer>
        <Clear
          onPress={() => {
            setFiltersCharacters({
              gender: '',
              name: '',
              species: '',
              status: '',
            })
          }}>
          <ClearText>Clear</ClearText>
        </Clear>
        <FilterText>Filter</FilterText>
        <Apply
          title={'APPLY'}
          onPress={() => {
            setApplyFiltersCharacters(filtersCharacters)
            setShowModal(false)
          }}
        />
      </FilterApplyContainer>
      <SelectContainer
        show={showName}
        setShow={setShowName}
        title="Name"
        subtitle="Give a name"
        setFilter={setFilterName}
        selectItem={filtersCharacters.name}
      />
      <SelectContainer
        show={showSpecies}
        setShow={setShowSpecies}
        title="Species"
        subtitle="Select one"
        setFilter={setFilterSpecies}
        selectItem={filtersCharacters.species}
      />
      <HeadLine>Status</HeadLine>
      <FilterContainer
        filterItem={filtersCharacters.status}
        setFilter={setFilterStatus}
        array={statusData}
      />
      <HeadLine>Gender</HeadLine>
      <FilterContainer
        filterItem={filtersCharacters.gender}
        setFilter={setFilterGender}
        array={genderData}
      />
    </Container>
  )
}
