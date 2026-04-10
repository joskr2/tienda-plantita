/**
 * Layout RAÍZ — Providers globales
 *
 * ¿Qué hace?
 *   - Envuelve TODA la app con providers de infraestructura
 *   - SafeAreaProvider: padding para notch/statusbar en iOS
 *   - ErrorBoundary: captura errores de toda la app
 *   - Stack global: define el comportamiento base de navegación
 *
 * ¿Quién lo usa?
 *   - TODOS los routes sin excepción (es el wrapper más externo)
 *
 * Ejemplo de uso:
 *   /tienda → pasa por _layout raíz → (pantallas) → (home)
 *   /categorias → pasa por _layout raíz → (pantallas)
 */
import '../global.css';

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Stack screenOptions={{ headerShown: false }} />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
