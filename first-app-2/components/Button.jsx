import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Button = ({ light, children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => {
        return [
            styles.button,
            light && {backgroundColor: "#fff"},
            pressed && {backgroundColor: "#000"},
            pressed && light && {backgroundColor: "green"}
        ]
    }}>
        <Text style={[styles.buttonText, light && {color: "#000"}]}>{children}</Text>
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
        flexGrow: 1
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "Poppins_600SemiBold",
    }
})