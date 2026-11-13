import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>:D</Text>
      <StatusBar style="auto" />
      <View style={styles.tarjeta}>

        <Image
          source={{
            uri: "https://misanimales.com/wp-content/uploads/2018/01/ciervo-comun-comportamiento.jpg?auto=format%2Ccompress&quality=75&width=3840&height=2160&fit=cover&gravity=center&sharp=true&progressive=true"
          }}
          style={styles.foto}
        />

        <Text style={styles.nombre}>
          Juan Figueroa
        </Text>

        <Text style={styles.profesion}>
          Estudiante de Programacion
        </Text>

        <Text style={styles.descripcion}>
          Me gusta la tecnología, la programación
          y dibujra 
        </Text>

      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3835',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta: {
    backgroundColor: "#E68B38",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#183153",
  },

  profesion: {
    fontSize: 15,
    color: "#3478B9",
    marginTop: 8,
  },

  descripcion: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    color: "#FFF197",
  },
});

