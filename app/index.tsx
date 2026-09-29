import { useRouter } from "expo-router";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type OpcionMenuProps = {
  icono: string;
  titulo: string;
  descripcion: string;
  onPress: () => void;
};

function OpcionMenu({
  icono,
  titulo,
  descripcion,
  onPress,
}: OpcionMenuProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.opcion,
        pressed && styles.opcionPresionada,
      ]}
      onPress={onPress}
    >
      <Text style={styles.opcionIcono}>{icono}</Text>

      <View style={styles.opcionContenido}>
        <Text style={styles.opcionTitulo}>{titulo}</Text>

        <Text style={styles.opcionDescripcion}>
          {descripcion}
        </Text>
      </View>

      <Text style={styles.flecha}>›</Text>
    </Pressable>
  );
}

export default function Inicio() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      {/* Imagen principal */}
      <Image
        source={{
          uri: "https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/16:9/w_1920,h_1080,c_limit/mejor%20spider-man%20pelicula%20sony%20marvel.jpg",
        }}
        style={styles.imagenPrincipal}
      />

      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.marca}>
          SPIDER STORE
        </Text>

        <Text style={styles.titulo}>
          Spider-Man
        </Text>

        <Text style={styles.subtitulo}>
          Encuentra productos, accesorios y artículos
          inspirados en el héroe arácnido.
        </Text>
      </View>

      {/* Saludo */}
      <View style={styles.saludoBox}>
        <Text style={styles.saludo}>
          ¡Hola, héroe! 🕷️
        </Text>

        <Text style={styles.saludoTexto}>
          Explora nuestra tienda y descubre todo lo
          relacionado con Spider-Man.
        </Text>
      </View>

      {/* Resumen */}
      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>
            4
          </Text>

          <Text style={styles.resumenTexto}>
            Secciones
          </Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>
            🕷️
          </Text>

          <Text style={styles.resumenTexto}>
            Héroe
          </Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>
            📱
          </Text>

          <Text style={styles.resumenTexto}>
            Expo Router
          </Text>
        </View>
      </View>

      {/* Título de opciones */}
      <Text style={styles.tituloSeccion}>
        Explorar Spider Store
      </Text>

      {/* Registro */}
      <OpcionMenu
        icono="📝"
        titulo="Registrarme"
        descripcion="Registra tus datos y tu producto favorito."
        onPress={() => router.push("/formulario")}
      />

      {/* Botones horizontales */}
      <View style={styles.botonesHorizontales}>
        <Pressable
          style={({ pressed }) => [
            styles.botonPequeno,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => router.push("/imagenes")}
        >
          <Text style={styles.botonIcono}>
            🛍️
          </Text>

          <Text style={styles.botonTexto}>
            Productos
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonPequeno,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => router.push("/contacto")}
        >
          <Text style={styles.botonIcono}>
            📞
          </Text>

          <Text style={styles.botonTexto}>
            Contacto
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonPequeno,
            pressed && styles.botonPresionado,
          ]}
        >
          <Text style={styles.botonIcono}>
            🕸️
          </Text>

          <Text style={styles.botonTexto}>
            Destacado
          </Text>
        </Pressable>
      </View>

      {/* NUEVA OPCIÓN: REGISTROS */}
      <OpcionMenu
        icono="👥"
        titulo="SpiderLovers de Corazón"
        descripcion="Consulta los clientes registrados y sus productos favoritos."
        onPress={() => router.push("/registros")}
      />

      {/* Pie de página */}
      <Text style={styles.footer}>
        Spider Store · Desarrollo Móvil
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  contenido: {
    paddingBottom: 30,
  },

  imagenPrincipal: {
    width: "100%",
    height: 210,
  },

  encabezado: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  marca: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#174EA6",
    letterSpacing: 2,
    marginBottom: 5,
  },

  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#D71920",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    lineHeight: 23,
    color: "#555555",
  },

  saludoBox: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  saludo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#174EA6",
    marginBottom: 6,
  },

  saludoTexto: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
  },

  resumen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 18,
    paddingVertical: 15,
    backgroundColor: "#D71920",
    borderRadius: 18,
  },

  resumenItem: {
    alignItems: "center",
    flex: 1,
  },

  resumenNumero: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 3,
  },

  resumenTexto: {
    fontSize: 12,
    color: "#FFFFFF",
  },

  separador: {
    width: 1,
    height: 35,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
  },

  tituloSeccion: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  opcion: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    elevation: 2,
  },

  opcionPresionada: {
    opacity: 0.7,
  },

  opcionIcono: {
    fontSize: 30,
    marginRight: 14,
  },

  opcionContenido: {
    flex: 1,
  },

  opcionTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#D71920",
    marginBottom: 4,
  },

  opcionDescripcion: {
    fontSize: 13,
    color: "#666666",
    lineHeight: 18,
  },

  flecha: {
    fontSize: 30,
    color: "#174EA6",
    marginLeft: 8,
  },

  botonesHorizontales: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 5,
  },

  botonPequeno: {
    backgroundColor: "#FFFFFF",
    width: "31%",
    minHeight: 85,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    elevation: 2,
  },

  botonPresionado: {
    opacity: 0.7,
  },

  botonIcono: {
    fontSize: 25,
    marginBottom: 5,
  },

  botonTexto: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#174EA6",
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    color: "#777777",
    fontSize: 12,
    marginTop: 20,
  },
});
