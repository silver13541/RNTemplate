import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterIcon } from 'src/assets/images/icons/CharacterIcon'
import { EpisodeIcon } from 'src/assets/images/icons/EpisodeIcon'
import { LocationIcon } from 'src/assets/images/icons/LocationIcon'
import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 34,
          fontWeight: 'bold',
          lineHeight: 41,
          paddingTop: 89,
          paddingBottom: 10,
        },
        headerStyle: { height: 140, backgroundColor: colors.gray[0] },
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          tabBarLabel: 'Character',
          headerTitle: 'Character',
          tabBarIcon: ({ focused }) => (
            <CharacterIcon
              color={focused ? `${colors.indigo}` : `${colors.gray[3]}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          headerTitle: 'Location',
          tabBarIcon: ({ focused }) => (
            <LocationIcon
              color={focused ? `${colors.indigo}` : `${colors.gray[3]}`}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episode',
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => (
            <EpisodeIcon
              color={focused ? `${colors.indigo}` : `${colors.gray[3]}`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
