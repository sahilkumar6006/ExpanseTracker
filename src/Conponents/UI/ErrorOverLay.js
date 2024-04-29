import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from './Button'
import { GlobalStyles } from '../../constant/GlobalColor'

const ErrorOverLay = ({message, onConfirm}) => {
  return (
    <View style={styles.container}>
   
      <Text style={[styles.text, styles.title]}>An Error occured! </Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>okay</Button>
    </View>
  )
}

export default ErrorOverLay


const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItem: 'center',
  padding:24,
  backgroundColor: GlobalStyles.colors.primary700
 },
 text: {
  textAlign: 'center',
  marginBottom:8
 },
 title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white'
 },
 message: {
  fontSize: 14
 }
})