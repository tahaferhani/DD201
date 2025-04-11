import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Social from "../components/Social";
import { router } from "expo-router";

const LoginPage = () => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1, padding: 30 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
        </View>

        <KeyboardAvoidingView style={{ width: '100%' }}>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Text style={styles.forgot}>Forgot your password?</Text>
          <Button onPress={() => router.replace('/register')}>Sign in</Button>
          <Text style={styles.createAccount}>Create new account</Text>
        </KeyboardAvoidingView>

        <Social />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30
  },
  titleContainer: {
    maxWidth: 225,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#1F41BB',
  },
  subtitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  forgot: {
    alignSelf: 'flex-end',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    color: '#1F41BB',
    marginBottom: 25
  },
  createAccount: {
    alignSelf: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    color: '#494949',
    marginTop: 40
  }
});