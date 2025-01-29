import { Link, Stack } from 'expo-router'
import { Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found', headerShown: false }} />
      <View className="flex-1 bg-gray-100 dark:bg-gray-900 justify-center items-center px-6">
        <View className="bg-white dark:bg-gray-800 rounded-3xl p-8 items-center shadow-lg">
          <View className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full items-center justify-center mb-6">
            <Ionicons name="alert-circle-outline" size={64} color="#EF4444" />
          </View>
          <Text className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            Oops! Page Not Found
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 text-center mb-8">
            The page you're looking for doesn't exist or has been moved.
          </Text>
          <Link href="/" asChild>
            <Pressable className="bg-blue-500 py-3 px-6 rounded-full flex-row items-center">
              <Ionicons name="home-outline" size={24} color="white" />
              <Text className="text-white font-semibold ml-2">Go to Home</Text>
            </Pressable>
          </Link>
        </View>
        <Text className="text-gray-500 dark:text-gray-400 mt-8 text-center">
          If you believe this is an error, please contact support.
        </Text>
      </View>
    </>
  )
}
