import React from 'react'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { FilterContainer } from 'src/ui/filter-container'
import { SelectContainer } from 'src/ui/select-container'

import { useCharacterContext } from './character-context'

interface IProps {
  isChecked?: boolean
}

const Container = styled.View`
  background-color: ${colors.white};
  align-items: center;
`

const FilterApplyContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 26.5px;
`

const FilterText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  margin-top: 21px;
  margin-right: 95px;
`

const Apply = styled(Button)`
  background-color: ${colors.indigo};
  height: 28px;
  margin-top: 18px;
  margin-right: 15px;
`

export const RadioButton = styled.View<IProps>`
  width: 22px;
  height: 22px;
  background-color: ${ifProp('isChecked', colors.indigo, 'transparent')};
  border-radius: 11px;
  border: 1.5px solid ${colors.gray[4]};
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

export const ModalFilter = () => {
  const { setStatus, setGender, gender, status } = useCharacterContext()
  const statusData = ['Alive', 'Dead', 'Unknown']
  const genderData = ['Female', 'Male', 'Genderless', 'Unknown']

  return (
    <Container>
      <FilterApplyContainer>
        <FilterText>Filter</FilterText>
        <Apply title={'APPLY'} />
      </FilterApplyContainer>
      <SelectContainer title="Name" subtitle="Give a name" />
      <SelectContainer title="Species" subtitle="Select one" />
      <HeadLine>Status</HeadLine>
      <FilterContainer setFilter={setStatus} data={status}>
        {statusData}
      </FilterContainer>
      <HeadLine>Gender</HeadLine>
      <FilterContainer setFilter={setGender} data={gender}>
        {genderData}
      </FilterContainer>
    </Container>
  )
}
