import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CreateNavigator } from '../screens/create'
import { DecksNavigator } from '../screens/decks'
import { FriendsNavigator } from '../screens/friends'
import { HomeNavigator } from '../screens/home'
import { ProfileNavigator } from '../screens/profile'

import { BottomTabBar } from '../components/common-ui'

function getMainTabs() {
  const MainTabs = {
    HomeNavigator,
    FriendsNavigator,
    CreateNavigator,
    DecksNavigator,
    ProfileNavigator
  }

  return MainTabs
}

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const screens = getMainTabs();

  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      {
        Object.keys(screens).map(
          (screenKey) => {
            return (
              <Tab.Screen
                key={screenKey}
                name={screenKey}
                component={screens[screenKey]}
                options={props => screens[screenKey].options(props)}
              />
            )
          }
        )
      }
    </Tab.Navigator >
  )
}

export const AppNavigator = MainTabNavigator;