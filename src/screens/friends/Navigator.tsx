import React from 'react'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
import { FriendsScreen } from './FriendsScreen';
import { OutlineUserGroup, SolidUserGroup } from '../../components/svgs'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
    </Stack.Navigator>
  )
}

MainNavigator.options = () => {
  const options: BottomTabNavigationOptions = {
    title: "Friends",
    tabBarLabel: ({ focused, color }) =>
      <Text
        color={color}
        fontSize={10}
        fontWeight={focused ? 700 : 300}
      >
        Friends
      </Text>,
    tabBarIcon: ({ focused, size, color }) => focused
      ? <SolidUserGroup width={size} height={size} color={color} />
      : <OutlineUserGroup width={size} height={size} color={color} />
  }

  return options
}

export default MainNavigator