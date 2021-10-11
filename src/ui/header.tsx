import React from 'react'
import styled from 'styled-components/native'

import { BackArrow } from 'src/assets/images/icons/BackArrow'
import { Character, CharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const Container = styled.View`
  flex-direction: row;
  padding: 21.5px 0px 18px 8.5px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BackContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 5px;
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
`

interface IHeader {
  title: string | CharacterQuery['character']
  onPress: () => void
}

export const Header = ({ title, onPress }: IHeader) => {
  return (
    <Container>
      <BackContainer onPress={onPress}>
        <BackArrow />
        <BackText>Back</BackText>
      </BackContainer>
      <Title>{title}</Title>
    </Container>
  )
}
