import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFDF8" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* TÍTULO */}
        <Text style={styles.titulo}>Ramen Beta 🍜</Text>
        <Text style={styles.subtitulo}>
          Elige tu ramen favorito
        </Text>

        {/* IMAGEN 1 */}
        <View style={styles.producto}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800',
            }}
            style={styles.imagen}
            resizeMode="cover"
          />

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ordenar Ramen</Text>
          </Pressable>
        </View>

        {/* IMAGEN 2 */}
        <View style={styles.producto}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
            }}
            style={styles.imagen}
            resizeMode="cover"
          />

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ordenar Ramen</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFDF8',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF7A00',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  producto: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 25,
    elevation: 3,
  },

  imagen: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },

  boton: {
    backgroundColor: '#FF7A00',
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

