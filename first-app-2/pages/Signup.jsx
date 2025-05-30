import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const navigation = useNavigation();

    const onSocialClick = async (url) => {
        await WebBrowser.openBrowserAsync(url);
    }

    return (
        <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="#1F41BB" />
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>
                </View>

                <View>
                    <Input
                        placeholder="Email" />

                    <Input
                        placeholder="Password"
                        password />

                    <Input
                        placeholder="Condirm password"
                        password />

                    <Button>Sign up</Button>

                    <Text style={styles.newAccount}>Already have an account</Text>
                </View>

                <View>
                    <Text style={styles.socialTitle}>Or continue with</Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity
                            style={styles.socialIcon}
                            onPress={() => onSocialClick("https://www.google.com")}>
                            <MaterialCommunityIcons name="google" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.socialIcon}
                            onPress={() => onSocialClick("https://www.facebook.com")}>
                            <MaterialCommunityIcons name="facebook" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.socialIcon}
                            onPress={() => onSocialClick("https://www.apple.com")}>
                            <MaterialCommunityIcons name="apple" size={24} />
                        </TouchableOpacity>
                    </View>
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
    title: {
        fontSize: 30,
        fontFamily: "Poppins_700Bold",
        color: "#1F41BB",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        lineHeight: 26,
        fontFamily: "Poppins_500Medium",
        textAlign: "center",
        marginTop: 20
    },
    forgot: {
        fontSize: 15,
        fontFamily: "Poppins_600SemiBold",
        color: "#1F41BB",
        textAlign: "right",
        marginBottom: 30
    },
    newAccount: {
        fontSize: 15,
        fontFamily: "Poppins_600SemiBold",
        color: "#494949",
        textAlign: "center",
        marginTop: 30
    },
    socialTitle: {
        fontSize: 15,
        fontFamily: "Poppins_600SemiBold",
        color: "#1F41BB",
        textAlign: "center",
    },
    socialIcons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 20
    },
    socialIcon: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#ECECEC",
        borderRadius: 10
    }
});
