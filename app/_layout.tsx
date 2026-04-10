/**
 * Layout RAÍZ — NativeTabs
 *
 * ¿Qué hace?
 *   - Define la barra de tabs nativa con 3 secciones
 *   - Inicio, Categorías, Producto
 *
 * ¿Quién lo usa?
 *   - TODAS las rutas de la app
 */
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function Layout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="categorias">
        <NativeTabs.Trigger.Label>Categorías</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="category" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="producto">
        <NativeTabs.Trigger.Label>Producto</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="tag" md="inventory" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
