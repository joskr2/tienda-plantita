/**
 * Layout CATEGORIAS — Tab "/categorias"
 *
 * ¿Qué hace?
 *   - Controla la navegación interna de categorias
 *   - Su index.tsx responde a la ruta "/categorias"
 *
 * ¿Quién lo usa?
 *   - Solo la ruta /categorias
 */
import { Stack } from 'expo-router';

export default function CategoriasLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
