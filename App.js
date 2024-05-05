import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/Routes/AppNavigator'
import { Provider } from 'react-redux'
import MyStore from './src/Redux/MyStore'




const App = () => {
  return (
    <Provider store={MyStore}>
      
      <AppNavigator/>
    </Provider>
   )
}

export default App