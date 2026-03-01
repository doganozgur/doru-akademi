import { BarChart3, ChevronRight, Clock, HelpCircle, Trophy } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function QuizScreen() {
  const QuizCard = ({ title, questions, time, score, isLocked }: any) => (
    <TouchableOpacity 
      className={`mb-4 p-5 rounded-2xl flex-row items-center justify-between border ${isLocked ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-700'} shadow-sm`}
    >
      <View className="flex-1">
        <Text className={`text-lg font-bold ${isLocked ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>{title}</Text>
        <View className="flex-row items-center mt-2">
          <View className="flex-row items-center mr-4">
            <HelpCircle size={14} color="#94a3b8" />
            <Text className="text-slate-500 text-xs ml-1">{questions} Soru</Text>
          </View>
          <View className="flex-row items-center">
            <Clock size={14} color="#94a3b8" />
            <Text className="text-slate-500 text-xs ml-1">{time} Dakika</Text>
          </View>
        </View>
      </View>
      <View className="items-end">
        {score ? (
          <View className="bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-100 dark:border-green-900/30">
            <Text className="text-green-600 dark:text-green-400 font-bold">%{score}</Text>
          </View>
        ) : (
          <ChevronRight size={20} color="#cbd5e1" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-900">
      {/* Stats Header */}
      <View className="bg-blue-600 dark:bg-blue-700 px-6 pt-8 pb-10 rounded-b-[40px] shadow-lg">
        <Text className="text-blue-100 font-medium mb-1 text-base">Sınav Performansın</Text>
        <Text className="text-white text-3xl font-extrabold mb-6">Harika Gidiyorsun! 🚀</Text>
        
        <View className="flex-row">
          <View className="flex-1 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20 mr-2">
            <BarChart3 size={20} color="white" />
            <Text className="text-white/70 text-xs mt-2 uppercase font-bold tracking-wider">Genel Başarı</Text>
            <Text className="text-white text-2xl font-black mt-1">%82</Text>
          </View>
          <View className="flex-1 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20 ml-2">
            <Trophy size={20} color="white" />
            <Text className="text-white/70 text-xs mt-2 uppercase font-bold tracking-wider">Tamamlanan</Text>
            <Text className="text-white text-2xl font-black mt-1">14/20</Text>
          </View>
        </View>
      </View>

      <View className="p-4 -mt-6">
        <TouchableOpacity className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700 mb-8 overflow-hidden">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs">Aktif Modül</Text>
            <View className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              <Text className="text-blue-600 dark:text-blue-300 text-xs font-bold">Yeni</Text>
            </View>
          </View>
          <Text className="text-slate-900 dark:text-white text-xl font-black mb-1">Günün Deneme Sınavı</Text>
          <Text className="text-slate-500 dark:text-slate-400 text-sm mb-4">Karma sorulardan oluşan genel tekrar testi.</Text>
          <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl items-center">
            <Text className="text-white font-black text-base">Sınavı Başlat</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text className="text-lg font-black text-slate-800 dark:text-slate-100 mb-4 ml-1">Haftalık Denemeler</Text>
        <QuizCard title="Hafta 4: Genel Değerlendirme" questions="50" time="45" score="88" />
        <QuizCard title="Hafta 3: Hukuk & Sosyal Bilgiler" questions="40" time="35" score="74" />

        <Text className="text-lg font-black text-slate-800 dark:text-slate-100 mb-4 mt-4 ml-1">Geçmiş Sınav Soruları</Text>
        <QuizCard title="108. Dönem Sınav Soruları" questions="100" time="90" />
        <QuizCard title="107. Dönem Sınav Soruları" questions="100" time="90" score="91" />
        <QuizCard title="106. Dönem Sınav Soruları" questions="100" time="90" />
      </View>
    </ScrollView>
  );
}
