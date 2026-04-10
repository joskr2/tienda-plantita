import '../global.css';

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Stack />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
