import React, { useEffect } from 'react'
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import { Characters } from '../components/Characters'

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        name
        status
        image
      }
    }
  }
`

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
          <Characters
            name={item.name}
            status={item.status}
            image={item.image}
          />
        )}
      />
    </View>
  )
}
