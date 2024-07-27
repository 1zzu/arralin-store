import React, { useCallback, useState } from 'react'
import { View, Text, ScrollView, RefreshControl, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HomeScreen() {
    const [ refreshing, setRefreshing ] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 500)
    }, [])

    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View className="mt-5 mx-4">
                    <View className="flex flex-1 flex-row justify-center items-center">
                        <Ionicons name="search-outline" size={24} />
                        <TextInput className="flex-1 border-gray-300 border-1 p-2 rounded-md bg-white" placeholder="Cari di Arralin Store" />
                    </View>
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
