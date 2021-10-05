import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { AlertProvider } from 'src/modules/alert-context'
import { CharacterContextProvider } from 'src/modules/character/character-context'
import { RootNavigation } from 'src/navigation/root'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <CharacterContextProvider>
        <AlertProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </AlertProvider>
      </CharacterContextProvider>
    </ApolloProvider>
  )
}
