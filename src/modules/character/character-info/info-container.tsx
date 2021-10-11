import React from 'react'
import styled from 'styled-components/native'

import { CharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const InfoItem = styled.TouchableOpacity`
  padding: 9px 0 11px 0;
  border-bottom-width: 0.3px;
`

const InfoEpContainer = styled.View`
  border-top-width: 0.3px;
  border-bottom-width: 0.3px;
  padding-left: 16px;
`

const ItemTitle = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
`

const ItemValue = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[1]};
`

interface IProps {
  data: CharacterQuery['character']
}

export const InfoContainer = ({ data }: IProps) => {
  return (
    <InfoEpContainer>
      <InfoItem>
        <ItemTitle>Gender</ItemTitle>
        <ItemValue>{data?.gender}</ItemValue>
      </InfoItem>
      <InfoItem>
        <ItemTitle>Origin</ItemTitle>
        <ItemValue>{data?.origin?.name}</ItemValue>
      </InfoItem>
      <InfoItem>
        <ItemTitle>Type</ItemTitle>
        <ItemValue>{data?.type === '' ? 'Unknown' : data?.type}</ItemValue>
      </InfoItem>
      <InfoItem onPress={() => console.log(data?.location?.id)}>
        <ItemTitle>Location</ItemTitle>
        <ItemValue>{data?.location?.name}</ItemValue>
      </InfoItem>
    </InfoEpContainer>
  )
}
