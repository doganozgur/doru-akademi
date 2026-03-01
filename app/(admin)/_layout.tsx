import { Stack } from 'expo-router';

export default function AdminLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Hızlı İşlemler' }} />
      <Stack.Screen name="add-doc" options={{ title: 'Döküman Ekle' }} />
      <Stack.Screen name="add-question" options={{ title: 'Soru Ekle' }} />
    </Stack>
  );
}
