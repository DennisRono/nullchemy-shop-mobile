import "./global.css"
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen'
import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SessionProvider } from "@/context/Authentication"
import { MyDarkTheme, MyLightTheme } from "@/components/ThemeColor";

export { ErrorBoundary } from 'expo-router';

preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    "SpaceMono": require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {

    if (error) throw error;

    if (loaded) hideAsync()

  }, [error, loaded]);

  if (!loaded && !error) return null

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === 'light' ? MyLightTheme : MyDarkTheme}>
        <Slot />
      </ThemeProvider>
    </SessionProvider>
  )
}

