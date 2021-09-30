import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Container = styled.View`
  background-color: ${colors.white};
  margin: 9px 9px;
  width: 163px;
  border-radius: 8px;
`

const CharImage = styled.Image`
  width: 163px;
  height: 140px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const TextContainer = styled.View`
  padding: 12px;
`

const Status = styled.Text`
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[1]};
`

const Name = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  padding-bottom: 26px;
`

export const Characters = ({ name, status, image }) => {
  return (
    <Container>
      <CharImage source={{ uri: image }} />
      <TextContainer>
        <Status>{status}</Status>
        <Name>{name}</Name>
      </TextContainer>
    </Container>
  )
}
