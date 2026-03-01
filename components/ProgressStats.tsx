import React from 'react';
import { Text, View } from 'react-native';

export function ProgressStats() {
  return (
    <View className="px-4 mb-6">
      <View className="bg-blue-600 p-6 rounded-3xl shadow-lg overflow-hidden">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-blue-100 text-sm font-medium">Sınav Hazırlık Durumu</Text>
            <Text className="text-white text-3xl font-bold mt-1">%75 Hazır</Text>
          </View>
          <View className="bg-white/20 p-3 rounded-2xl">
            <Text className="text-white font-bold">Harika!</Text>
          </View>
        </View>
        
        <View className="mt-6 bg-white/20 h-2 rounded-full overflow-hidden">
          <View className="bg-white h-full w-[75%]" />
        </View>
        
        <View className="flex-row justify-between mt-4">
          <View>
            <Text className="text-blue-100 text-xs">Çözülen Soru</Text>
            <Text className="text-white font-semibold">450/600</Text>
          </View>
          <View className="items-end">
            <Text className="text-blue-100 text-xs">Ortalama Puan</Text>
            <Text className="text-white font-semibold">78/100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
