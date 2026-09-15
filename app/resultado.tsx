import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Resultado() {
  const router = useRouter();

  const { nombre, correo, telefono, ciudad } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ¡Registro completado! 🕷️
      </Text>

      <Text style={styles.subtitulo}>
        Estos son los datos registrados.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.valor}>{correo}</Text>

        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.valor}>{telefono}</Text>

        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.valor}>{ciudad}</Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.botonTexto}>
          Volver a Spider Store
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D71920",
    textAlign: "center",
  },

  subtitulo: {
    color: "#555555",
    textAlign: "center",
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#D71920",
    marginBottom: 18,
    elevation: 3,
  },

  label: {
    color: "#174EA6",
    fontSize: 13,
    marginTop: 8,
    fontWeight: "bold",
  },

  valor: {
    color: "#222222",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },

  boton: {
    backgroundColor: "#D71920",
    padding: 14,
    borderRadius: 13,
    alignItems: "center",
  },

  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
});