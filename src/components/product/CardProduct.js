import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'
import { Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { lautBercerita } from '../../../assets/images'
import { yellow } from '../../../assets/colors'

export default function CardProduct() {
  const widthScreen = useWindowDimensions().width

  return (
    <TouchableOpacity>
      <View className="rounded-md p-2" style={{ width: widthScreen/2.4 }}>
        <View className="overflow-hidden rounded-md w-full h-56">
          <Image source={ lautBercerita } style={{ width: '100%', height: '100%', resizeMode: 'cover'  }} />
        </View>
        
        <View className="py-2">
          <Text className="text-xs text-[#4A4A4A]">Leila S. Chudori</Text>
          <Text className="text-base font-semibold" numberOfLines={2}>Laut Bercerita</Text>
          <Text className="text-xs text-[#4A4A4A]">3 Agt 2022</Text>
          <Text className="text-base font-bold">Rp 142.500</Text>
          <View className="flex-row gap-1 items-center">
            <View className="flex-row">
              <Ionicons name="star" color={ yellow } size={ 16 } />
              <Text className="text-sm text-[#818588]">3.5</Text>
            </View>
            <Ionicons name="ellipse" size={ 4 } color={ '#818588' } />
            <Text className="text-[#818588]">500 Terjual</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
