import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Notes = () => {
  const [title,setTilte] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  return (
    <View style={{flex:1}}>
    <TextInput placeholder='Enter Note Title' style={{width:'90%' , height:50, borderWidth:1, alignSelf: 'center', marginTop:20, paddingLeft:20}}/>
    </View>
  )
}

export default Notes