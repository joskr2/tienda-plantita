/**
 * Layout HOME — Pantalla raíz "/"
 *
 * ¿Qué hace?
 *   - Controla la navegación interna de la home
 *   - (home) es INVISIBLE en la URL (route group)
 *   - Su index.tsx responde a la ruta "/"
 *
 * ¿Quién lo usa?
 *   - Solo la ruta "/"
 *   - Si home tuviera sub-rutas (ej: /home/search), vivirían aquí dentro
 *
 * Ejemplo de uso:
 *   / → (pantallas) → (home)/index.tsx
 *   /home/search → (pantallas) → (home)/search.tsx (si existiera)
 */
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
