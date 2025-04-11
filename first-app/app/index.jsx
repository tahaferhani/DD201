import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { router } from 'expo-router';

const HomePage = () => {
  useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold
  })

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1, padding: 30 }}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('../assets/illustration.png')} />
        <View>
          <Text style={styles.title}>Discover Your Dream Job here</Text>
          <Text style={styles.desc}>Explore all the existing job roles based on your interest and study major</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => router.push('/login')}>Login</Button>
          <Button onPress={() => router.push('/register')} light>Register</Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30
  },
  image: {
    width: '100%',
    height: null,
    aspectRatio: 1.11 / 1,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 35,
    lineHeight: 40,
    textAlign: 'center',
    color: '#1F41BB',
  },
  desc: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 30
  }
});