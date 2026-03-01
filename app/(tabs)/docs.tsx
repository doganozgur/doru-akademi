import { BookOpen, Crosshair, Download, FileText, Scale, Search, ShieldCheck, Users } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DOC_CATEGORIES = [
  {
    title: 'Temel Eğitim Notları',
    icon: ShieldCheck,
    items: [
      { id: '1', name: 'Özel Güvenlik Hukuku', size: '3.2 MB', type: 'PDF', icon: Scale },
      { id: '2', name: 'Güvenlik Tedbirleri', size: '4.5 MB', type: 'PDF', icon: ShieldCheck },
      { id: '3', name: 'Etkili İletişim', size: '2.8 MB', type: 'PDF', icon: Users },
    ]
  },
  {
    title: 'Silah Bilgisi',
    icon: Crosshair,
    items: [
      { id: '4', name: 'Silah Bilgisi ve Atış', size: '5.1 MB', type: 'PDF', icon: Crosshair },
      { id: '5', name: 'Atış Teknikleri Klavuzu', size: '1.9 MB', type: 'PDF', icon: BookOpen },
    ]
  },
  {
    title: 'Yenileme Eğitimi',
    icon: FileText,
    items: [
      { id: '6', name: 'Yenileme Eğitimi Müfredatı', size: '2.1 MB', type: 'PDF', icon: FileText },
    ]
  }
];

export default function DocsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-900">
      {/* Search Header */}
      <View className="bg-white dark:bg-slate-800 px-4 pt-4 pb-6 shadow-sm">
        <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Eğitim Notları</Text>
        <View className="flex-row items-center bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-2xl">
          <Search size={20} color="#94a3b8" />
          <TextInput
            placeholder="Ders notu ara..."
            placeholderTextColor="#94a3b8"
            className="flex-1 ml-3 text-slate-900 dark:text-white"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View className="p-4">
        {DOC_CATEGORIES.map((category, catIndex) => {
          const filteredItems = category.items.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <View key={catIndex} className="mb-8">
              <View className="flex-row items-center mb-4 ml-1">
                {category.icon && <category.icon size={18} color="#3b82f6" />}
                <Text className="text-lg font-bold text-slate-800 dark:text-slate-100 ml-2">
                  {category.title}
                </Text>
                <View className="flex-1 h-[1px] bg-slate-200 dark:bg-slate-800 ml-3" />
              </View>

              {filteredItems.map((item) => {
                const Icon = item.icon || FileText;
                return (
                  <TouchableOpacity 
                    key={item.id} 
                    className="bg-white dark:bg-slate-800 mb-3 p-4 rounded-2xl flex-row items-center justify-between border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <View className="flex-row items-center flex-1">
                      <View className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl items-center justify-center mr-4">
                        <Icon size={24} color="#3b82f6" />
                      </View>
                    <View className="flex-1">
                      <Text className="text-slate-900 dark:text-white font-semibold text-base" numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                        {item.type} • {item.size}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity className="w-10 h-10 bg-slate-50 dark:bg-slate-700 rounded-full items-center justify-center">
                    <Download size={18} color="#64748b" />
                  </TouchableOpacity>
                </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
