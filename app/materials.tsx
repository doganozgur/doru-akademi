import { Stack } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function MaterialsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
      <Stack.Screen options={{ title: 'Eğitim Materyalleri', headerBackTitle: 'Geri' }} />
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-2xl font-bold text-slate-900 dark:text-white text-center">
          Ders Notları ve Çıkmış Sorular
        </Text>
        <Text className="text-slate-500 dark:text-slate-400 text-center mt-4">
          Burada PDF dökümanları ve video içerikleri listelenecek.
        </Text>
      </View>
    </SafeAreaView>
  );
}
