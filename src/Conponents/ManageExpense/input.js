import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constant/GlobalColor'

const Input = ({label , TextInputConfig, style}) => {
 const inputStyles =[styles.input];


 if(TextInputConfig && TextInputConfig.multiline) {
  inputStyles.push(styles.inputMulitline)
 }
 
  return (
    <View style={[styles.inputContainer, style]}>
      <Text  style={styles.label}>{label}</Text>
      <TextInput
      style={inputStyles }
    {...TextInputConfig}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
inputContainer: {
marginHorizontal:4,
marginVertical:8
},
label: {
  fontSize:12,
  color:GlobalStyles.colors.primary100,
  marginBottom:4
},
input: {
backgroundColor:GlobalStyles.colors.primary100,
padding:6,
borderRadius:6,
fontSize:18,
color: GlobalStyles.colors.primary700
},
inputMulitline: {
  minHeight:100,
  textAlignVertical: 'top'
}
});
