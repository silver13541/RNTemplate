import React from 'react'
import styled from 'styled-components/native'

import { CharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const MainContainer = styled.View`
  padding-top: 19px;
  align-items: center;
  background-color: ${colors.gray[7]};
  padding-bottom: 20px;
`

const ContainerImage = styled.View`
  width: 135px;
  height: 135px;
  border-radius: 65px;
  border: 5px solid ${colors.gray[7]};
  overflow: hidden;
  align-items: center;
`

const Img = styled.Image`
  width: 130px;
  height: 130px;
  overflow: hidden;
`

const Status = styled.Text`
  margin-top: 20px;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[1]};
`

const Name = styled.Text`
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: ${colors.black};
`

const Species = styled.Text`
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray[8]};
`

interface IProps {
  data: CharacterQuery['character']
}

export const ImageContainer = ({ data }: IProps) => {
  return (
    <MainContainer>
      <ContainerImage>
        <Img source={{ uri: `${data?.image}` }} />
      </ContainerImage>
      <Status>{data?.status}</Status>
      <Name>{data?.name}</Name>
      <Species>{data?.species}</Species>
    </MainContainer>
  )
}
