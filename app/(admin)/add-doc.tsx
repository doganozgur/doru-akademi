import { router } from 'expo-router';
import { FileUp } from 'lucide-react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddDocScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-slate-900 p-4">
      <Text className="text-xl font-bold text-slate-900 dark:text-white mb-6">Döküman Yükle</Text>
      
      <View className="mb-4">
        <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Döküman Başlığı</Text>
        <TextInput
          className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
          placeholder="Örn: Ağ Güvenliği Giriş"
          placeholderTextColor="#94a3b8"
        />
      </View>

      <TouchableOpacity className="border-2 border-dashed border-slate-300 dark:border-slate-700 p-12 rounded-3xl items-center justify-center mb-8">
        <FileUp size={48} color="#94a3b8" />
        <Text className="text-slate-500 mt-4">PDF Seçmek İçin Dokunun</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => router.back()}
        className="bg-green-600 p-4 rounded-xl items-center"
      >
        <Text className="text-white font-bold text-lg">Yükle</Text>
      </TouchableOpacity>
    </View>
  );
}
