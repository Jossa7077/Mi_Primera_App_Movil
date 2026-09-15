import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D71920",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "SpiderStore" }}
      />

      <Stack.Screen
        name="formulario"
        options={{ title: "Registro" }}
      />

      <Stack.Screen
        name="resultado"
        options={{ title: "Datos registrados" }}
      />

      <Stack.Screen
        name="imagenes"
        options={{ title: "Productos" }}
      />

      <Stack.Screen
        name="contacto"
        options={{ title: "Contacto" }}
      />
    </Stack>
  );
}