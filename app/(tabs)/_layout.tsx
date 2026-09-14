import { Stack } from 'expo-router';

export default function RootLayout() {

  return (

    <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: 'Coffee App',
        }}
      />

      <Stack.Screen
        name="menu"
        options={{
          title: 'Nuestro menú',
        }}
      />

      <Stack.Screen
        name="contacto"
        options={{
          title: 'Contacto',
        }}
      />

      <Stack.Screen
        name="producto/[id]"
        options={{
          title: 'Detalle del café',
        }}
      />

    </Stack>

  );

}
