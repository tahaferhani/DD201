import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInput
      style={[styles.input, isFocused && styles.isFocusedStyle]}
      placeholder={placeholder}
      placeholderTextColor="#626262" 
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}/>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    height: 64,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  isFocusedStyle: {
    borderColor: '#1F41BB',
  }
})