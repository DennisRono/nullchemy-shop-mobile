import { useSession } from '@/context/Authentication'
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const { signIn } = useSession()

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login with:', email, password)
  }

  const handleSocialLogin = (platform: string) => {
    // Implement social login logic here
    console.log('Social login with:', platform)
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="h-screen flex items-center">
        <View className="flex-1 justify-center px-8">
          <View className="mb-4">
            <Text className="text-gray-700 dark:text-gray-300 mb-2">Email</Text>
            <TextInput
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-5"
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 dark:text-gray-300 mb-2">
              Password
            </Text>
            <TextInput
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-5"
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="bg-blue-500 rounded-lg p-4 mb-4"
            onPress={handleLogin}
          >
            <Text className="text-white text-center font-bold text-lg">
              Login
            </Text>
          </TouchableOpacity>

          <Link href="/forgot-password" className="my-4">
            <Text className="text-blue-500 text-center mb-6">
              Forgot Password?
            </Text>
          </Link>

          <View className="flex-row justify-center items-center my-6">
            <View className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700" />
            <Text className="mx-4 text-gray-500 dark:text-gray-400">Or</Text>
            <View className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700" />
          </View>

          <View className="flex-row justify-around mb-6">
            <TouchableOpacity
              className="bg-red-500 rounded-sm p-3 flex-row gap-4 w-full items-center justify-center"
              onPress={() => handleSocialLogin('Google')}
            >
              <Ionicons name="logo-google" size={24} color="white" />
              <Text>Google</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center">
            <Text className="text-gray-700 dark:text-gray-300">
              Don't have an account?{' '}
            </Text>
            <Link href="/register" asChild>
              <Text className="text-blue-500 font-bold">Sign Up</Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
