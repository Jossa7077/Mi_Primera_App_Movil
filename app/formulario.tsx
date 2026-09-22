import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { supabase } from "../lib/supabase";

export default function Formulario() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Estado para controlar el proceso de guardado
  const [guardando, setGuardando] = useState(false);

  // Función para validar el correo electrónico
  const validarCorreo = (email: string) => {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
  };

  // Función para guardar los datos en Supabase
  const guardar = async () => {
    // Validar campos vacíos
    if (
      !nombre.trim() ||
      !correo.trim() ||
      !telefono.trim() ||
      !ciudad.trim()
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validar correo
    if (!validarCorreo(correo)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    // Validar teléfono
    if (isNaN(Number(telefono))) {
      alert("El teléfono debe contener solamente números");
      return;
    }

    // Validar longitud mínima del teléfono
    if (telefono.length < 7) {
      alert("Ingrese un número de teléfono válido");
      return;
    }

    try {
      // Activar indicador de carga
      setGuardando(true);

      // Guardar registro en Supabase
      const { data, error } = await supabase
        .from("clientes_spider_store")
        .insert([
          {
            nombre: nombre.trim(),
            correo: correo.trim(),
            telefono: telefono.trim(),
            ciudad: ciudad.trim(),
          },
        ])
        .select();

      // Comprobar si Supabase devolvió un error
      if (error) {
        console.log("ERROR SUPABASE:", error);

        alert("Error al guardar: " + error.message);
        return;
      }

      // Obtener el registro que acaba de crear Supabase
      const registro = data?.[0];

      if (!registro) {
        alert("No fue posible recuperar el registro guardado");
        return;
      }

      console.log("REGISTRO GUARDADO:", registro);

      // Mostrar mensaje de éxito
      alert("Registro guardado correctamente");

      // Limpiar los campos
      setNombre("");
      setCorreo("");
      setTelefono("");
      setCiudad("");

      // Ir a la pantalla de resultado
      router.push({
        pathname: "/resultado",
        params: {
          nombre: registro.nombre,
          correo: registro.correo,
          telefono: registro.telefono,
          ciudad: registro.ciudad,
        },
      });
    } catch (error) {
      console.log("ERROR:", error);

      alert("Ocurrió un error inesperado al guardar los datos");
    } finally {
      // Desactivar indicador de carga
      setGuardando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro Spider Store 🕷️</Text>

      <Text style={styles.subtitulo}>
        Registra tus datos para continuar.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Correo</Text>

        <TextInput
          style={styles.input}
          placeholder="correo@dominio.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={setCorreo}
        />

        <Text style={styles.label}>Teléfono</Text>

        <TextInput
          style={styles.input}
          placeholder="3001234567"
          keyboardType="numeric"
          value={telefono}
          onChangeText={setTelefono}
        />

        <Text style={styles.label}>Ciudad</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: Pasto"
          value={ciudad}
          onChangeText={setCiudad}
        />

        <Pressable
          style={[
            styles.boton,
            guardando && styles.botonDeshabilitado,
          ]}
          onPress={guardar}
          disabled={guardando}
        >
          <Text style={styles.botonTexto}>
            {guardando ? "Guardando..." : "Registrarme"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D71920",
    textAlign: "center",
  },

  subtitulo: {
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#D71920",
    elevation: 3,
  },

  label: {
    color: "#174EA6",
    fontWeight: "600",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 13,
    padding: 12,
    marginBottom: 14,
  },

  boton: {
    backgroundColor: "#D71920",
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: "center",
    marginTop: 4,
  },

  botonDeshabilitado: {
    opacity: 0.6,
  },

  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
});