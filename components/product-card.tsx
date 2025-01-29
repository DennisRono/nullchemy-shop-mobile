import { View, Text, Image, TouchableOpacity } from 'react-native'

interface ProductCardProps {
  image: string
  title: string
  price: string
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <TouchableOpacity className="w-[48%] mb-4">
      <Image
        source={{ uri: image }}
        className="w-full h-48 rounded-lg bg-gray-200"
        resizeMode="cover"
      />
      <View className="mt-2">
        <Text className="font-medium">{title}</Text>
        <Text className="text-sm text-gray-600">KES {price}</Text>
      </View>
    </TouchableOpacity>
  )
}
