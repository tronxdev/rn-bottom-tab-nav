import React from 'react'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { CreateScreen } from './CreateScreen';
import { Text } from 'native-base'
import { Plus } from '../../components/svgs'

type CreateStackParamList = {
  CreateScreen: undefined
}

const Stack = createStackNavigator<CreateStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
    </Stack.Navigator>
  )
}

MainNavigator.options = () => {
  const options: BottomTabNavigationOptions = {
    title: "Create",
    tabBarLabel: ({ focused, color }) =>
      <Text
        color={color}
        fontSize={10}
        fontWeight={focused ? 700 : 300}
      >
        Create
      </Text>,
    tabBarIcon: ({ size, color }) =>
      <Plus width={size} height={size} color={color} />
  }

  return options
}

export default MainNavigator