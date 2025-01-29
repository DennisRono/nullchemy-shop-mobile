import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Menu, User, ShoppingCart, Search } from 'lucide-react-native'

export default function Header() {
  return (
    <View className="bg-black p-4 gap-y-4">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <Menu size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold">NULLCHEMY SHOP</Text>

        <View className="flex-row gap-x-4">
          <TouchableOpacity>
            <User size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ShoppingCart size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="relative">
        <TextInput
          placeholder="Search for Products..."
          placeholderTextColor="#666"
          className="bg-white rounded-full px-4 py-2 pl-10"
        />
        <Search size={20} color="#666" className="absolute left-3 top-2.5" />
      </View>
    </View>
  )
}
