import { useState } from 'react'
import { View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { ChevronLeft, ChevronRight } from 'lucide-react-native'

const { width } = Dimensions.get('window')

export default function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20165457-zjJ67COmS8ZoLKDtHwLlX3JT4dZNcq.png',
    },
    {
      id: 2,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20165457-zjJ67COmS8ZoLKDtHwLlX3JT4dZNcq.png',
    },
    {
      id: 3,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20165457-zjJ67COmS8ZoLKDtHwLlX3JT4dZNcq.png',
    },
  ]

  return (
    <View className="relative h-48">
      <Image
        source={{ uri: slides[activeSlide].image }}
        className="w-full h-full rounded-lg"
        resizeMode="cover"
      />

      <View className="absolute inset-x-0 bottom-4 flex-row justify-center gap-x-2">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </View>

      <TouchableOpacity
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
        onPress={() =>
          setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        <ChevronLeft size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
        onPress={() =>
          setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
      >
        <ChevronRight size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
