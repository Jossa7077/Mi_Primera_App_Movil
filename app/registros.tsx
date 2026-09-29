import { useEffect, useState } from "react";

import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { supabase } from "../lib/supabase";

export default function Registros() {
  const [registros, setRegistros] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    setCargando(true);

    const { data, error } = await supabase
      .from("clientes_spider_store")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log("ERROR SUPABASE:", error);
      alert("Error al consultar los registros: " + error.message);
      setCargando(false);
      return;
    }

    setRegistros(data || []);
    setCargando(false);
  };

  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator
          size="large"
          color="#D71920"
        />

        <Text style={styles.textoCarga}>
          Consultando Spider Store...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Clientes Spider Store 🕷️
      </Text>

      <Text style={styles.subtitulo}>
        Personas registradas en nuestra tienda
      </Text>

      {registros.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.vacioIcono}>
            🕸️
          </Text>

          <Text style={styles.vacioTitulo}>
            No hay registros
          </Text>

          <Text style={styles.vacioTexto}>
            Todavía no hay clientes registrados en Spider Store.
          </Text>
        </View>
      ) : (
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.encabezadoCard}>
                <Text style={styles.icono}>
                  🕷️
                </Text>

                <Text style={styles.nombre}>
                  {item.nombre}
                </Text>
              </View>

              <Text style={styles.dato}>
                📧 {item.correo}
              </Text>

              <Text style={styles.dato}>
                📱 {item.telefono}
              </Text>

              <Text style={styles.dato}>
                📍 {item.ciudad}
              </Text>

              <View style={styles.productoBox}>
                <Text style={styles.productoLabel}>
                  Producto favorito
                </Text>

                <Text style={styles.producto}>
                  🕸️ {item.producto_favorito}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 18,
  },

  centro: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  textoCarga: {
    marginTop: 10,
    color: "#555555",
    fontSize: 15,
  },

  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D71920",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitulo: {
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    elevation: 3,
  },

  encabezadoCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  icono: {
    fontSize: 27,
    marginRight: 10,
  },

  nombre: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#D71920",
    flex: 1,
  },

  dato: {
    color: "#333333",
    fontSize: 14,
    marginBottom: 7,
  },

  productoBox: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },

  productoLabel: {
    color: "#174EA6",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },

  producto: {
    color: "#222222",
    fontSize: 15,
    fontWeight: "600",
  },

  vacio: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  vacioIcono: {
    fontSize: 45,
    marginBottom: 10,
  },

  vacioTitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#D71920",
    marginBottom: 6,
  },

  vacioTexto: {
    textAlign: "center",
    color: "#666666",
    fontSize: 14,
  },
});

