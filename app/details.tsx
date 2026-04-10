import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { Container } from '@/presentation/components/Container';
import { ScreenContent } from '@/presentation/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  // Ensure name is always a string
  const displayName = Array.isArray(name) ? name.join(', ') : (name ?? 'Unknown');

  return (
    <View className="flex flex-1 bg-white">
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent
          path="screens/details.tsx"
          title={`Showing details for user ${displayName}`}
        />
      </Container>
    </View>
  );
}
