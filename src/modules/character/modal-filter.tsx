import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'

const Container = styled.View`
  height: 400px;
  background-color: ${colors.white};
  align-items: center;
`

const FilterApplyContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
  height: 93px;
  width: 100%;
  background-color: ${colors.gray[1]};
`

const FilterText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  margin-top: 21px;
`

const Apply = styled.TouchableOpacity`
  border-radius: 14px;
  width: 66px;
  height: 28px;
  margin-top: 18px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.indigo};
`

const B = styled(Button)`
  background-color: ${colors.indigo};
  height: 28px;
`

export const ModalFilter = () => {
  return (
    <Container>
      <FilterApplyContainer>
        <FilterText>Filter</FilterText>
        <B title={'APPLY'} />
      </FilterApplyContainer>
    </Container>
  )
}
