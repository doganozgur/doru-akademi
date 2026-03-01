import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, View } from 'react-native';

const CAROUSEL_HEIGHT = 200; // Fixed height for consistency

const BANNERS = [
// ... existing banners
  {
    id: '1',
    image: require('../assets/images/security_exam_2026_banner_wide_1772322135140.png'),
    link: '/exam',
  },
  {
    id: '2',
    image: require('../assets/images/security_notes_banner_wide_1772322152895.png'),
    link: '/materials',
  },
  {
    id: '3',
    image: require('../assets/images/mock_exam_banner_wide_1772322165960.png'),
    link: '/exam',
  },
];

export function NewsCarousel() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const itemWidth = Math.min(width - 32, 800);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollOffset / itemWidth);
    if (index !== activeIndex && index >= 0 && index < BANNERS.length) {
      setActiveIndex(index);
    }
  };

  const scrollToBanner = (index: number) => {
    scrollViewRef.current?.scrollTo({ x: index * (itemWidth + 16), animated: true });
    setActiveIndex(index);
  };

  return (
    <View style={{ marginBottom: 24, marginTop: 10 }}>
      <ScrollView 
        ref={scrollViewRef}
        horizontal 
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={itemWidth + 16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ 
          paddingHorizontal: (width - itemWidth) / 2,
        }}
      >
        {BANNERS.map((banner) => (
          <Link 
            key={banner.id} 
            href={banner.link as any}
            asChild
          >
            <View 
              style={{ 
                width: itemWidth, 
                height: CAROUSEL_HEIGHT - 80, // Slightly smaller cards to give dots more room
                marginRight: 16,
                borderRadius: 24,
                overflow: 'hidden',
                backgroundColor: '#010409',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 8,
              }}
            >
              <Image
                source={banner.image}
                style={{ 
                  width: '115%',
                  height: '100%',
                  left: '-7.5%',
                }}
                resizeMode="cover"
              />
            </View>
          </Link>
        ))}
      </ScrollView>

      {/* Pagination Dots - Moved closer to the image and added bottom spacing */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -25, paddingBottom: 10 }}>
        {BANNERS.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => scrollToBanner(index)}
            style={{
              width: activeIndex === index ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? '#3b82f6' : '#cbd5e1',
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}
