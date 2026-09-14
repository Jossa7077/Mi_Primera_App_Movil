import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';


export default function MenuScreen() {

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
    >

      <Text style={styles.titulo}>
        Nuestro menú
      </Text>

      <Text style={styles.descripcion}>
        Selecciona el café que deseas conocer.
      </Text>


      <View style={styles.tarjeta}>

        <View style={styles.info}>

          <Text style={styles.producto}>
            Espresso
          </Text>

          <Text style={styles.detalle}>
            Café intenso y tradicional
          </Text>

          <Text style={styles.precio}>
            $6.000
          </Text>

        </View>

        <Pressable
          style={styles.boton}
          onPress={() =>
            router.push({
              pathname: '/producto/[id]',
              params: {
                id: '1',
                nombre: 'Espresso',
                precio: '6000',
                descripcion: 'Café intenso y tradicional',
              },
            })
          }
        >

          <Text style={styles.botonTexto}>
            Ver
          </Text>

        </Pressable>

      </View>


      <View style={styles.tarjeta}>

        <View style={styles.info}>

          <Text style={styles.producto}>
            Cappuccino
          </Text>

          <Text style={styles.detalle}>
            Espresso, leche y espuma
          </Text>

          <Text style={styles.precio}>
            $8.500
          </Text>

        </View>

        <Pressable
          style={styles.boton}
          onPress={() =>
            router.push({
              pathname: '/producto/[id]',
              params: {
                id: '2',
                nombre: 'Cappuccino',
                precio: '8500',
                descripcion: 'Espresso, leche y espuma',
              },
            })
          }
        >

          <Text style={styles.botonTexto}>
            Ver
          </Text>

        </Pressable>

      </View>


      <View style={styles.tarjeta}>

        <View style={styles.info}>

          <Text style={styles.producto}>
            Latte
          </Text>

          <Text style={styles.detalle}>
            Café suave con leche cremosa
          </Text>

          <Text style={styles.precio}>
            $9.500
          </Text>

        </View>

        <Pressable
          style={styles.boton}
          onPress={() =>
            router.push({
              pathname: '/producto/[id]',
              params: {
                id: '3',
                nombre: 'Latte',
                precio: '9500',
                descripcion: 'Café suave con leche cremosa',
              },
            })
          }
        >

          <Text style={styles.botonTexto}>
            Ver
          </Text>

        </Pressable>

      </View>


      <Pressable
        style={styles.regresar}
        onPress={() => router.back()}
      >

        <Text style={styles.regresarTexto}>
          Regresar al inicio
        </Text>

      </Pressable>

    </ScrollView>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F3EF',
  },

  contenido: {
    padding: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3E2723',
  },

  descripcion: {
    color: '#8D6E63',
    marginTop: 5,
    marginBottom: 25,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  producto: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4E342E',
  },

  detalle: {
    fontSize: 13,
    color: '#8D6E63',
    marginTop: 5,
  },

  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginTop: 8,
  },

  boton: {
    backgroundColor: '#6D4C41',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 12,
    marginLeft: 15,
  },

  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  regresar: {
    marginTop: 20,
    alignItems: 'center',
  },

  regresarTexto: {
    color: '#6D4C41',
    fontWeight: 'bold',
  },

});
