import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ light, children }) => {
  return (
    <Pressable style={({ pressed }) => {
        return [
            styles.button,
            pressed && { backgroundColor: "red" },
            light && { backgroundColor: "#fff" },
            light && pressed && { backgroundColor: "green" },
        ]
    }}>
        <Text style={[styles.buttonText, light && { color: "#000" }]}>{children}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1F41BB",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        flex: 1
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "Poppins_600SemiBold",
    }
})