import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useCharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'
import { Header } from 'src/ui/header'

import { EpisodeContainer } from './episode-container'
import { ImageContainer } from './image-container'
import { InfoContainer } from './info-container'

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.gray[8]};
  padding: 20px 0 9.5px 16px;
`

export const CharacterInfo = ({ route }) => {
  const navigation = useNavigation()
  const { data, loading } = useCharacterQuery({
    variables: {
      id: route.params.id,
    },
  })

  if (loading) return <ActivityIndicator size="large" />

  return (
    <Container>
      <Header
        title={data?.character?.name}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <ImageContainer data={data?.character} />
        <Title>Informations</Title>
        <InfoContainer data={data?.character} />
        <Title>Episodes</Title>
        <EpisodeContainer data={data?.character} />
      </ScrollView>
    </Container>
  )
}
