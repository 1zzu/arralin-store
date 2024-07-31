import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { blue1, blue2, dark1, green, purple, red } from '../../../assets/colors'

export default function CategoryList() {
    const categoryData = [
        {
            id: '1',
            icon: 'brush',
            title: 'Art, Music & Photography',
            iconColor: blue1,
            color: ''
        },
        {
            id: '2',
            icon: 'restaurant',
            title: 'Food, Drink & Cookbook',
            iconColor: purple,
            color: ''
        },
        {
            id: '3',
            icon: 'people',
            title: 'Parenting & Relationships',
            iconColor: blue2,
            color: ''
        },
        {
            id: '4',
            icon: 'body',
            title: 'Sports & Outdoors',
            iconColor: blue1,
            color: ''
        },
        {
            id: '5',
            icon: 'car',
            title: 'Travel',
            iconColor: dark1,
            color: ''
        },
        {
            id: '6',
            icon: 'reader',
            title: 'Comics & Graphic Novels',
            iconColor: red,
            color: ''
        },
        {
            id: '7',
            icon: 'home',
            title: 'Home & Architecture',
            iconColor: dark1,
            color: ''
        },
        {
            id: '8',
            icon: 'laptop',
            title: 'Technology, Games & Gadget',
            iconColor: red,
            color: ''
        },
    ]

    const topCategory = categoryData.slice(0, 7)

    return (
        <View className="flex-row flex-wrap justify-center items-center mt-8 mx-2">
            {topCategory.map((item) => (
                <TouchableOpacity key={item.id} className="w-1/4">
                    <View className="items-center">
                        <View className="bg-slate-50 w-14 h-14 rounded-2xl justify-center items-center">
                            <Ionicons name={item.icon} size={28} style={{ color: item.iconColor, padding: 2 }} />
                        </View>
                        <View className="h-10 justify-start items-center mt-3">
                            <Text className="text-[#4A4A4A] font-normal text-xs text-center">{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity className="w-1/4">
                <View className="items-center">
                    <View className="bg-slate-50 w-14 h-14 rounded-full justify-center items-center">
                        <Ionicons name={'grid-outline'} size={28} style={{ color: 'black', padding: 2 }} />
                    </View>
                    <View className="h-10 justify-start items-center mt-3">
                        <Text className="text-black font-medium text-xs text-center">Others</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
