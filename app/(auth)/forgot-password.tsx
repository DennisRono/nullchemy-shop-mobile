import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Link } from 'expo-router'

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log('Reset password for:', email)
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 justify-center px-8 pt-16">
        <Text className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Forgot Password
        </Text>

        <Text className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Enter your email address and we'll send you instructions to reset your
          password.
        </Text>

        <View className="mb-6">
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

        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-3 mb-4"
          onPress={handleResetPassword}
        >
          <Text className="text-white text-center font-bold">
            Reset Password
          </Text>
        </TouchableOpacity>
        <Link href="/(auth)/driver/login">
          <TouchableOpacity>
            <Text className="text-blue-500 text-center">Back to Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  )
}
