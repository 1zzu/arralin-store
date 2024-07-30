import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TextInput, View } from 'react-native'
import { styled } from 'nativewind'
const StyledView = styled(View)

export default function HeaderSearch() {
  return (
    <View className="bg-white h-18 rounded-b-2xl -mb-3 z-10">
        <View className="mt-4 mb-4 mx-4">
            <View className="flex flex-row items-center gap-2">
                <StyledView className="flex-row flex-1 items-center bg-gray-100 border-gray-300 rounded-3xl p-1">
                    <Ionicons name="search-outline" size={22} style={{ position: 'absolute', left: 12, color: '#6D6D6D' }} />
                    <TextInput className="flex-1 pl-9 h-8 text-base" placeholder="Cari di Arralin Store" />
                </StyledView>
                <Ionicons name="notifications-outline" size={28} style={{ color: '#03346E' }} />
                <Ionicons name="cart-outline" size={28} style={{ color: '#03346E' }} />
            </View>
        </View>
    </View>
  )
}
