import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'

import { Routes } from './routes'
import { Character } from 'src/assets/images/icons/Character'
import { Location } from 'src/assets/images/icons/Location'
import { Episode } from 'src/assets/images/icons/Episode'
import { colors } from 'src/theme/colors'

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
        headerStyle: { height: 140, backgroundColor: colors.gray },
        headerRight: () => (
          <Text
            style={{
              paddingRight: 16,
              color: `${colors.indigo}`,
              fontSize: 17,
              lineHeight: 22,
            }}>
            Filter
          </Text>
        ),
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
