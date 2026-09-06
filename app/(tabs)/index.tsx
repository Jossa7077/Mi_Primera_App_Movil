import React, { useState } from 'react';

import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [nombre, setNombre] = useState('');
  const [ramen, setRamen] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [paraLlevar, setParaLlevar] = useState(false);

  const [resultado, setResultado] = useState('');
  const [procesando, setProcesando] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const seleccionarRamen = (tipoRamen: string) => {
    setRamen(tipoRamen);
  };

  const realizarPedido = () => {
    if (
      nombre.trim() === '' ||
      ramen.trim() === '' ||
      cantidad.trim() === ''
    ) {
      setResultado('Debes completar todos los campos.');
      setModalVisible(true);
      return;
    }

    setProcesando(true);
    setResultado('');

    setTimeout(() => {
      setProcesando(false);

      setResultado(
        `Cliente: ${nombre}
Ramen: ${ramen}
Cantidad: ${cantidad}
Para llevar: ${paraLlevar ? 'Sí' : 'No'}`
      );

      setModalVisible(true);
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFDF8"
      />

      <KeyboardAvoidingView
        style={styles.pantalla}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.titulo}>Ramen Beta 🍜</Text>

          <Text style={styles.subtitulo}>
            Elige tu ramen favorito
          </Text>

          <Text style={styles.label}>Nombre</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />

          <View
            style={[
              styles.producto,
              ramen === 'Ramen Shoyu' &&
                styles.productoSeleccionado,
            ]}
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800',
              }}
              style={styles.imagen}
              resizeMode="cover"
            />

            <Text style={styles.nombreRamen}>
              Ramen Shoyu
            </Text>

            <Pressable
              style={[
                styles.boton,
                ramen === 'Ramen Shoyu' &&
                  styles.botonSeleccionado,
              ]}
              onPress={() =>
                seleccionarRamen('Ramen Shoyu')
              }
            >
              <Text style={styles.textoBoton}>
                {ramen === 'Ramen Shoyu'
                  ? 'Seleccionado ✓'
                  : 'Elegir Ramen'}
              </Text>
            </Pressable>
          </View>
          

          <View
            style={[
              styles.producto,
              ramen === 'Ramen Tonkotsu' &&
                styles.productoSeleccionado,
            ]}
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
              }}
              style={styles.imagen}
              resizeMode="cover"
            />

            <Text style={styles.nombreRamen}>
              Ramen Tonkotsu
            </Text>

            <Pressable
              style={[
                styles.boton,
                ramen === 'Ramen Tonkotsu' &&
                  styles.botonSeleccionado,
              ]}
              onPress={() =>
                seleccionarRamen('Ramen Tonkotsu')
              }
            >
              <Text style={styles.textoBoton}>
                {ramen === 'Ramen Tonkotsu'
                  ? 'Seleccionado ✓'
                  : 'Elegir Ramen'}
              </Text>
            </Pressable>
          </View>

          <Text style={styles.label}>
            Ramen seleccionado
          </Text>

          <View style={styles.seleccion}>
            <Text style={styles.textoSeleccion}>
              {ramen || 'Ningún ramen seleccionado'}
            </Text>
          </View>

          <Text style={styles.label}>Cantidad</Text>

          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 2"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />

          <View style={styles.switchContainer}>
            <View>
              <Text style={styles.labelSwitch}>
                ¿Pedido para llevar?
              </Text>

              <Text style={styles.textoSecundario}>
                {paraLlevar
                  ? 'Sí, para llevar'
                  : 'No, comer aquí'}
              </Text>
            </View>

            <Switch
              value={paraLlevar}
              onValueChange={setParaLlevar}
              trackColor={{
                false: '#D3D3D3',
                true: '#FFB66F',
              }}
              thumbColor={
                paraLlevar ? '#FF7A00' : '#F4F3F4'
              }
            />
          </View>

          <Pressable
            style={[
              styles.botonPedido,
              procesando && styles.botonDeshabilitado,
            ]}
            onPress={realizarPedido}
            disabled={procesando}
          >
            {procesando ? (
              <View style={styles.cargando}>
                <ActivityIndicator
                  color="#FFFFFF"
                  size="small"
                />

                <Text style={styles.textoBoton}>
                  Procesando pedido...
                </Text>
              </View>
            ) : (
              <Text style={styles.textoBotonPedido}>
                Realizar Pedido 🍜
              </Text>
            )}
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTitulo}>
              {resultado.includes(
                'Debes completar todos los campos'
              )
                ? '⚠️ Atención'
                : '✅ Pedido realizado'}
            </Text>

            <Text style={styles.modalTexto}>
              {resultado}
            </Text>

            <Pressable
              style={styles.botonCerrar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBoton}>
                Cerrar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFDF8',
  },

  pantalla: {
    flex: 1,
  },

  container: {
    padding: 20,
    paddingBottom: 50,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF7A00',
    textAlign: 'center',
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  producto: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  productoSeleccionado: {
    borderColor: '#FF7A00',
  },

  imagen: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },

  nombreRamen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    textAlign: 'center',
  },

  boton: {
    backgroundColor: '#FF7A00',
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  botonSeleccionado: {
    backgroundColor: '#4CAF50',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  seleccion: {
    backgroundColor: '#FFF3E8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFCC9A',
  },

  textoSeleccion: {
    color: '#FF7A00',
    fontSize: 16,
    fontWeight: '600',
  },

  switchContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  labelSwitch: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  textoSecundario: {
    color: '#777',
    marginTop: 3,
  },

  botonPedido: {
    backgroundColor: '#FF7A00',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  botonDeshabilitado: {
    opacity: 0.7,
  },

  textoBotonPedido: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cargando: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  modalContenido: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
  },

  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF7A00',
    textAlign: 'center',
    marginBottom: 20,
  },

  modalTexto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    marginBottom: 25,
  },

  botonCerrar: {
    backgroundColor: '#FF7A00',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },
});