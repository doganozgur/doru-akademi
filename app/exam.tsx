import { Stack } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function ExamScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
      <Stack.Screen options={{ title: 'Sınav Hazırlığı', headerBackTitle: 'Geri' }} />
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-2xl font-bold text-slate-900 dark:text-white text-center">
          Mock Sınav Modülü
        </Text>
        <Text className="text-slate-500 dark:text-slate-400 text-center mt-4">
          Yükleniyor... Yakında burada doru güvenlik sorularını çözebileceksiniz.
        </Text>
      </View>
    </SafeAreaView>
  );
}
