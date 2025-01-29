import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronRight } from 'lucide-react-native'

export default function CategorySlider({ title }: { title: string }) {
  const items = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dkazrhnxq/image/upload/f_auto,q_auto/v1/nullcommerce/66c1afffef7849e45ef6dab9/qbqovvff8rih3wq6kvf0',
      title: 'Laptop Pro',
    },
  ]

  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">{title}</Text>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-gray-600 mr-1">See All</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-x-4"
      >
        {items.map((item) => (
          <TouchableOpacity key={item.id} className="w-48">
            <Image
              source={{ uri: item.image }}
              className="w-full h-32 rounded-lg bg-gray-200"
              resizeMode="cover"
            />
            <Text className="mt-2 font-medium">{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
