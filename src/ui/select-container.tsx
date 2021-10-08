import React from 'react'
import styled from 'styled-components/native'

import { RightArrow } from 'src/assets/images/icons/RightArrow'
import { colors } from 'src/theme/colors'

import { InputModal } from './input-modal'
import { ModalMenu } from './modal'
import { RadioButton } from './radio-button'

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
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  setFilter: (value: string) => void
  selectItem: string
}

export const SelectContainer = ({
  show,
  setShow,
  title,
  subtitle,
  setFilter,
  selectItem,
}: ISelectContainer) => {
  return (
    <ContainerSelect onPress={() => setShow(true)}>
      <RadioButton isChecked={selectItem.length > 0} />
      <SelectNameContainer>
        <SelectText>{title}</SelectText>
        <SelectPrompt>{subtitle}</SelectPrompt>
      </SelectNameContainer>
      <ArrowContainer>
        <RightArrow />
      </ArrowContainer>
      <ModalMenu showModal={show} setShowModal={setShow}>
        <InputModal
          setShowModal={setShow}
          title={title}
          setFilter={setFilter}
          inputValue={selectItem}
        />
      </ModalMenu>
    </ContainerSelect>
  )
}
