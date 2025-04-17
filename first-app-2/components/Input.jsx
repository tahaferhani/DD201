import { StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({ placeholder, password, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={[styles.input, isFocused && {
                borderColor: "#1F41BB"
            }]}
            placeholder={placeholder}
            placeholderTextColor="#626262"
            secureTextEntry={password}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
        marginBottom: 30,
        borderWidth: 2,
        borderColor: "transparent"
    }
})