/**
 * Layout PRODUCTO — Tab "/producto"
 *
 * ¿Qué hace?
 *   - Controla la navegación interna de producto
 *   - Su index.tsx responde a la ruta "/producto"
 *
 * ¿Quién lo usa?
 *   - Solo la ruta /producto
 */
import { Stack } from 'expo-router';

export default function ProductoLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
