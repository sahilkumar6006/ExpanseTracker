import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpansesSummary from './ExpansesSummary'
import ExpansesList from './ExpansesList'
import { GlobalStyles } from '../../constant/GlobalColor'

// const DUMMY_EXPANSES = [
//   {
//     id: 'e1',
//     description: 'A pair of Shoes',
//     amount: 59.99,
//     date: new Date('2024-12-19')
//   },
//   {
//     id: 'e2',
//     description: 'A pair of Shoes',
//     amount: 89.99,
//     date: new Date('2024-4-19')
//   },
//   {
//     id: 'e3',
//     description: 'Some Bananas',
//     amount: 89.99,
//     date: new Date('2021-4-19')
//   },
//   {
//     id: 'e4',
//     description: 'Book',
//     amount: 14.99,
//     date: new Date('2021-4-19')
//   },
//   {
//     id: 'e5',
//     description: 'Another Bananas',
//     amount: 6.99,
//     date: new Date('2021-4-19')
//   },

// ]
const ExpansesOutput = ( { expenses,expensesPeroid}) => {
  return (
   <View style={styles.container} >
   <ExpansesSummary expenses={expenses} peroidName={expensesPeroid}/>
   <ExpansesList expenses={expenses} />
   </View>
  )
}

export default ExpansesOutput

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})