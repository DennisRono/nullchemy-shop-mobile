import { ScrollView, View } from 'react-native'
import Header from '@/components/header'
import ImageSlider from '@/components/image-slider'
import CategorySlider from '@/components/category-slider'
import ProductCard from '@/components/product-card'

export default function TabOneScreen() {
  const recentProducts = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dkazrhnxq/image/upload/f_auto,q_auto/v1/nullcommerce/66c1afffef7849e45ef6dab9/qbqovvff8rih3wq6kvf0',
      title: "Men's Leather Jacket",
      price: '19,237.50',
    },
  ]

  return (
    <View className="flex-1 bg-white">
      <Header />
      <ScrollView className="flex-1 p-4">
        <ImageSlider />

        <View className="my-6">
          <CategorySlider title="Computing" />
        </View>

        <View className="mb-6">
          <CategorySlider title="Recently Added" />
        </View>

        <View className="flex-row flex-wrap justify-between">
          {recentProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
