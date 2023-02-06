import React from 'react'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
import { ProfileScreen } from './ProfileScreen';
import { OutlineUser, SolidUser } from '../../components/svgs'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

MainNavigator.options = () => {
  const options: BottomTabNavigationOptions = {
    title: "Profile",
    tabBarLabel: ({ focused, color }) =>
      <Text
        color={color}
        fontSize={10}
        fontWeight={focused ? 700 : 300}
      >
        Profile
      </Text>,
    tabBarIcon: ({ focused, size, color }) => focused
      ? <SolidUser width={size} height={size} color={color} />
      : <OutlineUser width={size} height={size} color={color} />
  }

  return options
}

export default MainNavigator