import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Social from "../components/Social";

const RegisterPage = () => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1, padding: 30 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>
        </View>

        <KeyboardAvoidingView style={{ width: '100%' }}>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Button>Sign in</Button>
          <Text style={styles.createAccount}>Already have an account</Text>
        </KeyboardAvoidingView>

        <Social />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#1F41BB',
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 6,
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