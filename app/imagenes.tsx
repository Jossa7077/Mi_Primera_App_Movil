import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Imagenes() {
  const imagenes = [
    {
      id: 1,
      titulo: "Figura Spider-Man",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgXw0RoZ2kBXXP7EXmxTGIpMbER-wen38LqI_Z8zFWLrC3FPKH1eHyhIy&s=10",
    },
    {
      id: 2,
      titulo: "Camiseta Spider-Man",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTZbEkWXOlIrDCFcxebRjBCr9sseH87nNudL3Ig3yFEIpWLhF07zY973y&s=10",
    },
    {
      id: 3,
      titulo: "Accesorios Spider-Man",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9eJ9lHMK75LitDnR9yuV7WV_U4w_X3JbJH8XpbUi5uVWxjfTW6KGhquNQ&s=10",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Productos 🕷️</Text>

      <Text style={styles.subtitulo}>
        Explora nuestra colección.
      </Text>

      {imagenes.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image
            source={{ uri: item.uri }}
            style={styles.imagen}
          />

          <Text style={styles.descripcion}>
            {item.titulo}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#D71920",
  },

  subtitulo: {
    textAlign: "center",
    color: "#555555",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "#D71920",
    elevation: 3,
  },

  imagen: {
    width: "100%",
    height: 210,
  },

  descripcion: {
    padding: 14,
    color: "#174EA6",
    fontWeight: "600",
    fontSize: 16,
  },
});