import React from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { CHARACTERS_QUERY } from 'src/graphql/queries/characters'

import { CharacterCard } from './character-card'

export const CharacterScreen = () => {
  const { data, loading } = useQuery(CHARACTERS_QUERY)

  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <StatusBar hidden={true} />
      <FlatList
        data={data.characters.results}
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        renderItem={({ item }) => (
          <CharacterCard
            name={item.name}
            status={item.status}
            image={item.image}
          />
        )}
      />
    </View>
  )
}
