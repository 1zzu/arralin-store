import React, { useCallback, useState } from 'react'
import { View, Image, ScrollView, RefreshControl, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styled } from 'nativewind'

import { StatusBar } from 'expo-status-bar'
import { Image1, Image2, Image3 } from '../../assets/images'

const StyledView = styled(View)

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 500)
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor='white' />
            <View className="bg-white h-18 rounded-b-2xl -mb-3 z-10">
                <View className="mt-8 mb-4 mx-4">
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
            <ScrollView
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <Image source={Image1} className="w-screen h-56" />
                            <Image source={Image2} className="w-screen h-56" />
                            <Image source={Image3} className="w-screen h-56" />
                        </ScrollView>
                    </View>
                    <View>
                        
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
})
