import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  return (
    <ImageBackground source={require("./assets/background.jpg")} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("./assets/illustration.png")} />
        <View>
          <Text style={styles.title}>Discover Your Dream Job here</Text>
          <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study major</Text>
        </View>

        <View style={styles.buttons}>
          <Button>Login</Button>
          <Button light>Register</Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 30
  },
  image: {
    width: "100%",
    height: null,
    aspectRatio: 1 / 0.9
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 35,
    lineHeight: 42,
    color: "#1F41BB",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 20
  },
  buttons: {
    flexDirection: "row",
    gap: 20
  }
});
