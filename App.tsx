import "react-native-gesture-handler";
import React from "react";
import { Platform, StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NativeBaseProvider,
  Box,
} from "native-base";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { AppNavigator } from "./src/navigation/MainTabNavigator"
import theme from "./src/theme"
import { HomeScreen } from "./src/screens/home";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <Box
          flex={1}
          paddingTop={Platform.select({ android: StatusBar.currentHeight })}
          paddingBottom={Platform.select({ android: 48 })}
        >
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: "white"
                }
              }}>
              <Stack.Screen name="Main" component={AppNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </Box>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
