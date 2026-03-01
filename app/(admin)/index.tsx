import { router } from 'expo-router';
import { ChevronRight, FilePlus, PlusCircle } from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AdminScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-slate-900 p-4">
      <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Yönetici Paneli</Text>
      
      <View className="flex-row flex-wrap justify-between">
        <TouchableOpacity 
          onPress={() => router.push('/(admin)/add-question')}
          className="w-[48%] bg-blue-50 dark:bg-slate-800 p-4 rounded-2xl mb-4 border border-blue-100 dark:border-slate-700 items-center"
        >
          <PlusCircle size={32} color="#3b82f6" />
          <Text className="text-slate-900 dark:text-white font-semibold mt-2">Soru Ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/(admin)/add-doc')}
          className="w-[48%] bg-green-50 dark:bg-slate-800 p-4 rounded-2xl mb-4 border border-green-100 dark:border-slate-700 items-center"
        >
          <FilePlus size={32} color="#22c55e" />
          <Text className="text-slate-900 dark:text-white font-semibold mt-2">Döküman Yükle</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-6">
        <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Mevcut İçerikler</Text>
        
        <TouchableOpacity className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl mb-2 flex-row justify-between items-center">
          <Text className="text-slate-800 dark:text-slate-200">24 Soru Yayında</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl mb-2 flex-row justify-between items-center">
          <Text className="text-slate-800 dark:text-slate-200">12 Döküman Yayında</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
