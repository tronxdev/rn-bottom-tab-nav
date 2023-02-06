import type { ITheme } from "native-base"
import { extendTheme } from "native-base"

const theme: ITheme = extendTheme({
  fontConfig: {
    Nunito: {
      100: {
        normal: "Nunito_200ExtraLight",
      },
      200: {
        normal: "Nunito_200ExtraLight",
      },
      300: {
        normal: "Nunito_300Light",
      },
      400: {
        normal: "Nunito_400Regular",
      },
      500: {
        normal: "Nunito_500Medium",
      },
      600: {
        normal: "Nunito_600SemiBold",
      },
      700: {
        normal: "Nunito_700Bold",
      },
      800: {
        normal: "Nunito_800ExtraBold",
      },
      900: {
        normal: "Nunito_900Black",
      },
    },
  },

  fonts: {
    heading: "Nunito",
    body: "Nunito",
    mono: "Nunito",
  },

  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});

export default theme;