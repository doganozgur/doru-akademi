import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddQuestionScreen() {
  const [question, setQuestion] = useState('');

  return (
    <ScrollView className="flex-1 bg-white dark:bg-slate-900 p-4">
      <Text className="text-xl font-bold text-slate-900 dark:text-white mb-6">Yeni Soru Ekle</Text>
      
      <View className="mb-4">
        <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Soru Metni</Text>
        <TextInput
          className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
          placeholder="Soruyu buraya yazın..."
          placeholderTextColor="#94a3b8"
          multiline
          numberOfLines={3}
          value={question}
          onChangeText={setQuestion}
        />
      </View>

      <View className="mb-4">
        <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Şıklar</Text>
        {['A', 'B', 'C', 'D'].map((opt) => (
          <TextInput
            key={opt}
            className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl mb-2 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
            placeholder={`Şık ${opt}`}
            placeholderTextColor="#94a3b8"
          />
        ))}
      </View>

      <TouchableOpacity 
        onPress={() => router.back()}
        className="bg-blue-600 p-4 rounded-xl items-center mt-4"
      >
        <Text className="text-white font-bold text-lg">Kaydet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
