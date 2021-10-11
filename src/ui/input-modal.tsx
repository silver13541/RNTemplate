import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { Header } from './header'
import { Input } from './input'

const Container = styled.View`
  height: 100%;
  background-color: ${colors.white};
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
      <Header title={title} onPress={() => setShowModal(false)} />
      <Input value={inputValue} updateFilter={(text) => setFilter(text)} />
      <Line />
    </Container>
  )
}
