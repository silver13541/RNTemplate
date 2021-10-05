import React from 'react'
import styled from 'styled-components/native'

import { RightArrow } from 'src/assets/images/icons/RightArrow'
import { RadioButton } from 'src/modules/character/modal-filter'
import { colors } from 'src/theme/colors'

const ContainerSelect = styled.TouchableOpacity`
  width: 100%;
  border-top-width: 0.4px;
  border-bottom-width: 0.4px;
  align-items: center;
  padding: 9.5px 16px 9.5px 19px;
  flex-direction: row;
  margin-bottom: 19px;
`

const SelectNameContainer = styled.View`
  padding-left: 16px;
  width: 319px;
`

const SelectText = styled.Text`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
`

const SelectPrompt = styled.Text`
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[1]};
`

const ArrowContainer = styled.View`
  padding: 7px;
`

interface ISelectContainer {
  title: string
  subtitle: string
}

export const SelectContainer = ({ title, subtitle }: ISelectContainer) => {
  return (
    <ContainerSelect>
      <RadioButton />
      <SelectNameContainer>
        <SelectText>{title}</SelectText>
        <SelectPrompt>{subtitle}</SelectPrompt>
      </SelectNameContainer>
      <ArrowContainer>
        <RightArrow />
      </ArrowContainer>
    </ContainerSelect>
  )
}
