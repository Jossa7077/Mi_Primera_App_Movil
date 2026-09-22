import { createClient } from "@supabase/supabase-js"; // Esta es una función que crea el cliente de conexión a Supabase, que nos permite interactuar con la base de datos y la autenticación de usuarios
import "react-native-url-polyfill/auto"; // Agrega a React Native funciones para procesar direcciones URL, necesarias para Supabase

const supabaseUrl = "https://ktxincsykeuzkecalrcz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0eGluY3N5a2V1emtlY2FscmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMjA2NDIsImV4cCI6MjEwNTU5NjY0Mn0.cH2kidqsfCH78Mx8whGEm5wXmId4uimyRloXTSNaous";


export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);
