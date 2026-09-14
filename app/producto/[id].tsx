import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  router,
  useLocalSearchParams,
} from 'expo-router';


export default function ProductoScreen() {

  const {
    id,
    nombre,
    precio,
    descripcion,
  } = useLocalSearchParams();


  return (

    <View style={styles.container}>

      <Text style={styles.etiqueta}>
        Producto #{id}
      </Text>

      <Text style={styles.titulo}>
        {nombre}
      </Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>

      <Text style={styles.precio}>
        ${precio}
      </Text>

      <Pressable
        style={styles.boton}
        onPress={() => router.back()}
      >

        <Text style={styles.botonTexto}>
          Regresar al menú
        </Text>

      </Pressable>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F3EF',
    justifyContent: 'center',
    padding: 30,
  },

  etiqueta: {
    fontSize: 13,
    color: '#8D6E63',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3E2723',
  },

  descripcion: {
    fontSize: 16,
    color: '#795548',
    marginTop: 15,
    lineHeight: 23,
  },

  precio: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginTop: 25,
  },

  boton: {
    backgroundColor: '#6D4C41',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 40,
  },

  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});
