import React, { useRef, useEffect } from 'react';
import { FlatList, Image, useWindowDimensions, View } from 'react-native';

import { Ads2, Ads3, Poster1 } from '../../../assets/images/index'

export default function CarouselAds() {
  const widthScreen = useWindowDimensions().width;
  const flatListRef = useRef(null);
  const carouselData = [
    { id: "1", img: Poster1 },
    { id: "2", img: Ads2 },
    { id: "3", img: Ads3 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        currentIndex++;
        if (currentIndex === carouselData.length) {
          currentIndex = 0;
        }
        flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
      }
    }, 30000); // Change the interval time as needed

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.img} style={{ height: 260, width: widthScreen, objectFit: 'cover' }} />
    </View>
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScrollToIndexFailed={() => {}}
      />
    </View>
  );
}
