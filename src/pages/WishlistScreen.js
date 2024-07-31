import React from 'react'
import { View, Text, Image } from 'react-native'
import { Product1 } from '../../assets/images'

export default function WishlistScreen() {
  return (
    <>
        <View className="flex-1 items-center justify-center flex-row gap-2">
          <View className="flex-1">
            <Image source={Product1} className="rounded-md w-52 h-52" />
            <Text className="mt-3 text-base font-normal leading-4">Sandal Pria Loggo Duke Warna Navy Sandal Pria Loggo Duke Warna NavySandal Pria Loggo Duke Warna Navy</Text>
          </View>
        </View>
    </>
  )
}
