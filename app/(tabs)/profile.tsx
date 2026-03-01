import { useColorScheme } from '@/components/useColorScheme';
import { Bell, ChevronRight, LogOut, MessageSquare, Phone, Settings, Shield, Star } from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const { colorScheme } = useColorScheme();

  const MenuLink = ({ icon: Icon, label, value, onPress, color = '#64748b' }: any) => (
    <TouchableOpacity 
      onPress={onPress}
      className="flex-row items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800"
    >
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 items-center justify-center mr-3">
          <Icon size={20} color={color} />
        </View>
        <Text className="text-slate-700 dark:text-slate-200 font-medium">{label}</Text>
      </View>
      <View className="flex-row items-center">
        {value && <Text className="text-slate-400 mr-2">{value}</Text>}
        <ChevronRight size={18} color="#cbd5e1" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white dark:bg-slate-900">
      {/* Header / Avatar Section */}
      <View className="items-center pt-10 pb-6 px-4">
        <View className="w-28 h-28 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4 items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm">
          <Text className="text-5xl">👤</Text>
          <View className="absolute bottom-1 right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
        </View>
        <Text className="text-2xl font-bold text-slate-900 dark:text-white">Ahmet Yılmaz</Text>
        <View className="flex-row items-center mt-1">
          <Shield size={14} color="#3b82f6" fill="#3b82f6" />
          <Text className="text-blue-600 dark:text-blue-400 font-medium ml-1">Temel Eğitim Öğrencisi</Text>
        </View>
      </View>

      {/* Stats Cards */}
      <View className="flex-row px-4 mb-8">
        {[
          { label: 'Soru', value: '1,240', color: 'text-blue-600' },
          { label: 'Doğru', value: '1,020', color: 'text-green-600' },
          { label: 'Başarı', value: '%82', color: 'text-orange-600' },
        ].map((stat, i) => (
          <View key={i} className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl mx-1 items-center border border-slate-100 dark:border-slate-800">
            <Text className={`text-lg font-bold ${stat.color}`}>{stat.value}</Text>
            <Text className="text-xs text-slate-500 uppercase tracking-tighter">{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Profile Sections */}
      <View className="px-4 pb-10">

        <Text className="text-sm font-bold text-slate-400 uppercase mb-2 ml-1">Eğitim Bilgilerim</Text>
        <View className="bg-white dark:bg-slate-900 rounded-2xl mb-6">
          <MenuLink icon={Star} label="Kurs Başlangıç" value="12 Şub 2026" />
          <MenuLink icon={Bell} label="Sınav Tarihi" value="28 Mart 2026" color="#ef4444" />
          <MenuLink icon={Shield} label="Sertifika Durumu" value="Eğitim Devam Ediyor" />
        </View>

        <Text className="text-sm font-bold text-slate-400 uppercase mb-2 ml-1">Hesap Ayarları</Text>
        <View className="bg-white dark:bg-slate-900 rounded-2xl mb-6">
          <MenuLink icon={Star} label="Profil Bilgilerim" />
          <MenuLink icon={Settings} label="Uygulama Ayarları" />
        </View>

        <Text className="text-sm font-bold text-slate-400 uppercase mb-2 ml-1">Destek & İletişim</Text>
        <View className="bg-white dark:bg-slate-900 rounded-2xl mb-6">
          <MenuLink icon={Phone} label="Doru Güvenlik'i Ara" />
          <MenuLink icon={MessageSquare} label="WhatsApp Destek Hattı" />
        </View>

        <TouchableOpacity className="flex-row items-center justify-center p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl mt-4">
          <LogOut size={20} color="#ef4444" />
          <Text className="text-red-500 font-bold ml-2">Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Simple dummy User component for the icon since we are using lucide icons locally
const User = ({ size, color }: any) => <Star size={size} color={color} />;
