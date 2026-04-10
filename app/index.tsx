import { Host as SwiftUIHost, Text as SwiftUIText } from '@expo/ui/swift-ui';
import { Link, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, Text as RNText, View } from 'react-native';

// Lazy load components based on platform
export default function TestScreen() {
  const [AndroidComponents, setAndroidComponents] = useState<{
    Host: React.ComponentType<any>;
    Text: React.ComponentType<any>;
  } | null>(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      import('@expo/ui/jetpack-compose').then((mod) => {
        setAndroidComponents({ Host: mod.Host, Text: mod.Text });
      });
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Stack.Screen options={{ title: '@expo/ui Test' }} />

      {Platform.OS === 'ios' && (
        <>
          <RNText style={{ padding: 20, fontSize: 16 }}>SwiftUI Components:</RNText>
          <SwiftUIHost style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
            <SwiftUIText>Hello from SwiftUI!</SwiftUIText>
          </SwiftUIHost>
        </>
      )}

      {Platform.OS === 'android' && AndroidComponents && (
        <>
          <RNText style={{ padding: 20, fontSize: 16 }}>Jetpack Compose Components:</RNText>
          <AndroidComponents.Host>
            <AndroidComponents.Text>¡Hola desde Jetpack Compose!</AndroidComponents.Text>
          </AndroidComponents.Host>
        </>
      )}

      {/* Navigation link to details */}
      <Link href="/details?name=test" asChild>
        <RNText style={{ padding: 20, fontSize: 16, color: '#2e78b7' }}>Ir a Details →</RNText>
      </Link>
    </View>
  );
}
