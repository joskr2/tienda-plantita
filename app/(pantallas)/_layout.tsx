/**
 * Layout GRUPO — Pantallas compartidas
 *
 * ¿Qué hace?
 *   - Agrupa las pantallas principales de la app (home, categorias, producto)
 *   - Define el Stack que comparten entre sí
 *   - (pantallas) es INVISIBLE en la URL (route group)
 *
 * ¿Quién lo usa?
 *   - Solo las rutas dentro de (pantallas)/
 *   - Rutas fuera de (pantallas) NO pasan por aquí
 *
 * Ejemplo de uso:
 *   /categorias → pasa por _layout raíz → (pantallas) → categorias
 *   /producto → pasa por _layout raíz → (pantallas) → producto
 *   /auth → pasa por _layout raíz SOLO (no entra a (pantallas))
 */
import { Stack } from 'expo-router';

export default function PantallasLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
