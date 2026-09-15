import { useRouter } from "expo-router"; // Se usa para navegar entre pantallas
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

function OpcionMenu({
  icono,
  titulo,
  descripcion,
  onPress,
}: {
  icono: string;
  titulo: string;
  descripcion: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconoCaja}>
        <Text style={styles.icono}>{icono}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{titulo}</Text>

        <Text style={styles.cardDescripcion}>
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
    <ScrollView contentContainerStyle={styles.container}>

      {/* PORTADA PRINCIPAL */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/16:9/w_1920,h_1080,c_limit/mejor%20spider-man%20pelicula%20sony%20marvel.jpg",
          }}
          style={styles.imagenHero}
        />

        <View style={styles.overlay}>
          <Text style={styles.etiqueta}>
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
      </View>

      {/* BIENVENIDA */}
      <View style={styles.saludoBox}>
        <View>
          <Text style={styles.saludoTitulo}>
            ¡Hola, héroe! 🕷️
          </Text>

          <Text style={styles.saludoTexto}>
            ¿Qué deseas explorar hoy?
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            🕷️
          </Text>
        </View>
      </View>

      {/* RESUMEN */}
      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>3</Text>

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
            Expo
          </Text>

          <Text style={styles.resumenTexto}>
            Router
          </Text>
        </View>
      </View>

      <Text style={styles.seccionTitulo}>
        Explorar Spider Store
      </Text>

      <OpcionMenu
        icono="📝"
        titulo="Registrarme"
        descripcion="Registra tus datos para conocer nuestra tienda."
        onPress={() => router.push("/formulario")}
      />

      <OpcionMenu
        icono="🕷️"
        titulo="Productos"
        descripcion="Explora nuestra colección de productos."
        onPress={() => router.push("/imagenes")}
      />

      <OpcionMenu
        icono="📍"
        titulo="Contacto"
        descripcion="Consulta la información de Spider Store."
        onPress={() => router.push("/contacto")}
      />

      {/* RECOMENDACIÓN */}
      <View style={styles.destacado}>
        <View style={styles.destacadoIcono}>
          <Text style={styles.destacadoEmoji}>
            🕸️
          </Text>
        </View>

        <View style={styles.destacadoInfo}>
          <Text style={styles.destacadoTitulo}>
            Producto destacado
          </Text>

          <Text style={styles.destacadoTexto}>
            Descubre nuestra colección de artículos
            inspirados en Spider-Man.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Spider Store · Desarrollo Móvil
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 18,
  },

  hero: {
    height: 280,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 6,
  },

  imagenHero: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    backgroundColor: "rgba(0, 0, 0, 0.78)",
  },

  etiqueta: {
    color: "#FFCDD2",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.8,
    marginBottom: 6,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
  },

  saludoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  saludoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D71920",
  },

  saludoTexto: {
    marginTop: 3,
    color: "#555555",
    fontSize: 14,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D71920",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarTexto: {
    fontSize: 24,
  },

  resumen: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  resumenItem: {
    flex: 1,
    alignItems: "center",
  },

  resumenNumero: {
    color: "#D71920",
    fontSize: 18,
    fontWeight: "bold",
  },

  resumenTexto: {
    color: "#555555",
    fontSize: 12,
    marginTop: 3,
  },

  separador: {
    width: 1,
    height: 35,
    backgroundColor: "#CCCCCC",
  },

  seccionTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    elevation: 2,
  },

  iconoCaja: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#D71920",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icono: {
    fontSize: 25,
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 4,
  },

  cardDescripcion: {
    color: "#666666",
    fontSize: 13,
    lineHeight: 18,
  },

  flecha: {
    fontSize: 30,
    color: "#D71920",
    marginLeft: 8,
  },

  destacado: {
    backgroundColor: "#E3F2FD",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  destacadoIcono: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#D71920",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  destacadoEmoji: {
    fontSize: 25,
  },

  destacadoInfo: {
    flex: 1,
  },

  destacadoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#174EA6",
    marginBottom: 4,
  },

  destacadoTexto: {
    color: "#555555",
    fontSize: 13,
    lineHeight: 19,
  },

  footer: {
    textAlign: "center",
    color: "#777777",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
});