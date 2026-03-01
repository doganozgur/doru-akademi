import { Link } from 'expo-router';
import { BookOpen, FileText, GraduationCap, Play } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const ACTIONS = [
  {
    id: 'exam',
    title: 'Sınavı Başlat',
    icon: GraduationCap,
    color: '#3b82f6',
    link: '/exam',
  },
  {
    id: 'past',
    title: 'Çıkmış Sorular',
    icon: FileText,
    color: '#8b5cf6',
    link: '/materials',
  },
  {
    id: 'notes',
    title: 'Ders Notları',
    icon: BookOpen,
    color: '#10b981',
    link: '/materials',
  },
  {
    id: 'videos',
    title: 'Eğitim Videoları',
    icon: Play,
    color: '#f59e0b',
    link: '/materials',
  },
];

export function ActionGrid() {
  return (
    <View className="flex-row flex-wrap justify-between px-4">
      {ACTIONS.map((action) => (
        <Link 
          key={action.id} 
          href={action.link as any}
          asChild
        >
          <View className="w-[48%] bg-white dark:bg-slate-800 p-6 rounded-2xl mb-4 shadow-sm border border-slate-100 dark:border-slate-700 items-center">
            <View 
              style={{ backgroundColor: action.color + '20' }}
              className="p-3 rounded-xl mb-3"
            >
              <action.icon size={28} color={action.color} />
            </View>
            <Text className="text-slate-900 dark:text-white font-semibold text-center">
              {action.title}
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
