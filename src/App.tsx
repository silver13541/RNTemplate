import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'
import { CharacterContextProvider } from './modules/character/character-context'

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
