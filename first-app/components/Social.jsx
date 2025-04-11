import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Social = () => {
  return (
    <View>
      <Text style={styles.title}>Or continue with</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button}>
            <Icon name="google" size={24} />
        </Pressable>
        <Pressable style={styles.button}>
            <Icon name="facebook" size={24} />
        </Pressable>
        <Pressable style={styles.button}>
            <Icon name="apple" size={24} />
        </Pressable>
      </View>
    </View>
  )
}

export default Social

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
        textAlign: 'center',
        color: '#1F41BB',
        marginBottom: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    button: {
        backgroundColor: '#ECECEC',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 10,
    }
})