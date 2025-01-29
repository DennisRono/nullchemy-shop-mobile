import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Link } from 'expo-router'

export default function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Register with:', name, email, password)
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 justify-center px-8 pt-16">
        <Text className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Sign Up
        </Text>

        <View className="mb-4">
          <Text className="text-gray-700 dark:text-gray-300 mb-2">Name</Text>
          <TextInput
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3"
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="mb-4">
          <Text className="text-gray-700 dark:text-gray-300 mb-2">Email</Text>
          <TextInput
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3"
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
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3"
            placeholder="Enter your password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-3 mb-4"
          onPress={handleRegister}
        >
          <Text className="text-white text-center font-bold">Sign Up</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-700 dark:text-gray-300">
            Already have an account?{' '}
          </Text>
          <Link href="/login">
            <Text className="text-blue-500 font-bold">Login</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
