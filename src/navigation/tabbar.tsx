import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Character } from 'src/assets/images/icons/Character'
import { Episode } from 'src/assets/images/icons/Episode'
import { Location } from 'src/assets/images/icons/Location'
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
          headerTitle: 'Character',
          tabBarIcon: ({ focused }) => <Character />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          headerTitle: 'Location',
          tabBarIcon: ({ focused }) => <Location />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => <Episode />,
        }}
      />
    </Tab.Navigator>
  )
}
