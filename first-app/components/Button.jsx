import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ light, onPress, children }) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, light && { backgroundColor: '#fff' }]}>
            <Text style={[styles.buttonText, light && { color: '#000' }]}>{children}</Text>
        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        backgroundColor: '#1F41BB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold'
    }
})