import React from 'react'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
import { DecksScreen } from './DecksScreen';
import { OutlineRectStack, SolidRectStack } from '../../components/svgs'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DecksScreen" component={DecksScreen} />
    </Stack.Navigator>
  )
}

MainNavigator.options = () => {
  const options: BottomTabNavigationOptions = {
    title: "Decks",
    tabBarLabel: ({ focused, color }) =>
      <Text
        color={color}
        fontSize={10}
        fontWeight={focused ? 700 : 300}
      >
        Decks
      </Text>,
    tabBarIcon: ({ focused, size, color }) => focused
      ? <SolidRectStack width={size} height={size} color={color} />
      : <OutlineRectStack width={size} height={size} color={color} />
  }

  return options
}

export default MainNavigator