import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constant/GlobalColor'

const ExpansesSummary = ({ expenses, peroidName}) => {
  const expansessum = expenses.reduce((sum, expence) => {
    return sum + expence.amount
  }, 0)
  return (
    <View style={styles.container}>
    <Text style={styles.period}>{peroidName}</Text>
    <Text style={styles.sum}>${expansessum.toFixed(2)}
    </Text>
  </View>
  )
}

export default ExpansesSummary

const styles = StyleSheet.create({
  container: {
    padding:8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius:6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize:12,
    color: GlobalStyles.colors.primary400
  },

  sum : {
    fontSize:16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})