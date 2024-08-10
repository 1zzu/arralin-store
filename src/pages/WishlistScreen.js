import React from 'react'
import { View, FlatList } from 'react-native'
import CardProduct from '../components/product/CardProduct'

export default function WishlistScreen() {
  const products = [1,2,3,4]

  return (
    <>
      <View className="my-4 mx-4">
        <FlatList
          data={products}
          renderItem={({item}) => <CardProduct /> }
          horizontal
          contentContainerStyle={{ columnGap: 8 }}
          showsHorizontalScrollIndicator={ false }
        />
      </View>
    </>
  )
}
