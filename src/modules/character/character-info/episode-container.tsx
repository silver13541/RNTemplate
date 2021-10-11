import React from 'react'
import styled from 'styled-components/native'

import { CharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const ItemTitle = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
`

const InfoEpContainer = styled.View`
  border-top-width: 0.3px;
  border-bottom-width: 0.3px;
  padding-left: 16px;
`

const ItemContainer = styled.TouchableOpacity`
  padding: 9px 0 11px 0;
  border-bottom-width: 0.3px;
`

const ItemValue = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[1]};
`

const ItemDate = styled.Text`
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: ${colors.gray[8]};
`

interface IProps {
  data: CharacterQuery['character']
}

export const EpisodeContainer = ({ data }: IProps) => {
  return (
    <InfoEpContainer>
      {data?.episode.map((episode) => (
        <ItemContainer
          key={episode?.id}
          onPress={() => console.log(episode?.id)}>
          <ItemTitle>{episode?.episode}</ItemTitle>
          <ItemValue>{episode?.name}</ItemValue>
          <ItemDate>{episode?.air_date}</ItemDate>
        </ItemContainer>
      ))}
    </InfoEpContainer>
  )
}
