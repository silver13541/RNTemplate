import React from 'react'
import styled from 'styled-components/native'

import { BackArrow } from 'src/assets/images/icons/BackArrow'
import { colors } from 'src/theme/colors'

import { Input } from './input'

const Container = styled.View`
  height: 100%;
  background-color: ${colors.white};
`

const Header = styled.View`
  flex-direction: row;
  padding: 21.5px 0px 18px 8.5px;
`

const BackContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const BackText = styled.Text`
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.indigo};
  padding-left: 5.5px;
`

const Title = styled.Text`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: ${colors.black};
  margin-left: 104px;
`

const Line = styled.View`
  background-color: ${colors.gray[5]};
  height: 0.5px;
  width: 100%;
  margin-top: 8.5px;
`

interface IInputModal {
  title: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setFilter: (value: string) => void
  inputValue: string
}

export const InputModal = ({
  setShowModal,
  title,
  setFilter,
  inputValue,
}: IInputModal) => {
  return (
    <Container>
      <Header>
        <BackContainer onPress={() => setShowModal(false)}>
          <BackArrow />
          <BackText>Back</BackText>
        </BackContainer>
        <Title>{title}</Title>
      </Header>
      <Input value={inputValue} updateFilter={(text) => setFilter(text)} />
      <Line />
    </Container>
  )
}
