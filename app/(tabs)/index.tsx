import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ActionGrid } from '../../components/ActionGrid';
import { NewsCarousel } from '../../components/NewsCarousel';
import { ProgressStats } from '../../components/ProgressStats';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-slate-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-6 pb-2">
          <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Hoş Geldiniz,</Text>
          <Text className="text-slate-900 dark:text-white text-3xl font-bold">Ahmet Yılmaz</Text>
        </View>

        <NewsCarousel />
        
        <ProgressStats />

        <View className="px-4 mb-4">
          <Text className="text-slate-900 dark:text-white text-xl font-bold mb-4">Hızlı Erişim</Text>
          <ActionGrid />
        </View>

        {/* Ad Space Placeholder */}
        <View className="mx-4 mb-10 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl items-center border border-dashed border-slate-300 dark:border-slate-600">
          <Text className="text-slate-400 dark:text-slate-500 font-medium">Reklam Alanı</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
