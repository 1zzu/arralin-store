import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CategoryList() {
    const categoryData = [
        {
            id: '1',
            icon: 'brush-outline',
            title: 'Art, Music & Photography',
            color: '',
            iconColor: ''
        },
        {
            id: '2',
            icon: 'restaurant-outline',
            title: 'Food, Drink & Cookbook',
            color: '',
            iconColor: ''
        },
        {
            id: '3',
            icon: 'people-outline',
            title: 'Parenting & Relationships',
            color: '',
            iconColor: ''
        },
        {
            id: '4',
            icon: 'body-outline',
            title: 'Sports & Outdoors',
            color: '',
            iconColor: ''
        },
        {
            id: '5',
            icon: 'car-outline',
            title: 'Travel',
            color: '',
            iconColor: ''
        },
        {
            id: '6',
            icon: 'reader-outline',
            title: 'Comics & Graphic Novels',
            color: '',
            iconColor: ''
        },
        {
            id: '7',
            icon: 'home-outline',
            title: 'Home & Architecture',
            color: '',
            iconColor: ''
        },
        {
            id: '8',
            icon: 'laptop-outline',
            title: 'Technology, Games & Gadget',
            color: '',
            iconColor: ''
        },
    ]

    const topCategory = categoryData.slice(0, 7)

    return (
        <View className="flex-row flex-wrap justify-center items-center mt-8 mx-2">
            {topCategory.map((item) => (
                <TouchableOpacity className="w-1/4">
                    <View className="items-center">
                        <View key={item.id} className="bg-sky-900 w-12 h-12 rounded-2xl justify-center items-center">
                            <Ionicons name={item.icon} size={26} style={{ color: 'white', padding: 2 }} />
                        </View>
                        <View className="h-10 justify-start items-center mt-3">
                            <Text className="text-black font-medium text-xs text-center">{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity className="w-1/4">
                <View className="items-center">
                    <View key={''} className="bg-slate-200 w-12 h-12 rounded-full justify-center items-center">
                        <Ionicons name={'grid-outline'} size={26} style={{ color: 'black', padding: 2 }} />
                    </View>
                    <View className="h-10 justify-start items-center mt-3">
                        <Text className="text-black font-medium text-xs text-center">Others</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
