import React from 'react'
import { Image, useWindowDimensions, View } from 'react-native'
import { Iklan1 } from '../../../assets/images'

export default function BannerDisc() {
    const widthScreen = useWindowDimensions().width
    return (
        <View className="">
            <Image source={Iklan1} style={{ width: widthScreen, objectFit: 'contain' }} />
        </View>
    )
}
