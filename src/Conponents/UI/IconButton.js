import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Image source={icon} style={{ height: size, width: size, tintColor: color }} />
      </View>
    </Pressable>
  )
}

export default IconButton;


const styles = StyleSheet.create({

  buttonContainer: {
    borderRadius:24,
    padding:6,
    margin:8
  },
  pressed:{
    opacity:0.75
  }
})