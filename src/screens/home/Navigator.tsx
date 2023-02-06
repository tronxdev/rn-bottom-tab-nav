import React from 'react'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
import { HomeScreen } from './HomeScreen';
import { OutlineHome, SolidHome } from '../../components/svgs'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}

MainNavigator.options = () => {
  const options: BottomTabNavigationOptions = {
    title: "Home",
    tabBarLabel: ({ focused, color }) =>
      <Text
        color={color}
        fontSize={10}
        fontWeight={focused ? 700 : 300}
      >
        Home
      </Text>,
    tabBarIcon: ({ focused, size, color }) => focused
      ? <SolidHome width={size} height={size} color={color} />
      : <OutlineHome width={size} height={size} color={color} />
  }

  return options
}

export default MainNavigator