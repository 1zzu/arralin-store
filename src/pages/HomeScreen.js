import React, { useCallback, useState } from 'react'
import { View, ScrollView, RefreshControl, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar'
import CarouselAds from '../components/Home/CarouselAds'
import HeaderSearch from '../components/Home/HeaderSearch'
import CategoryList from '../components/Home/CategoryList'
import BannerDisc from '../components/Home/BannerDisc'
import BottomCategory from '../components/Category/BottomCategory'


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
            <HeaderSearch />
            <ScrollView
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <CarouselAds />
                    <CategoryList />
                    {/* <BannerDisc /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
})
