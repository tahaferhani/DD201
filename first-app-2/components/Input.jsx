import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({ placeholder, password, ...props }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#626262"
            secureTextEntry={password}
            {...props} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F1F4FF",
        padding: 20,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
        marginBottom: 30
    }
})