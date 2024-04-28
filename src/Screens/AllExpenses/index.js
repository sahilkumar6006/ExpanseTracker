import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpansesOutput from '../../Conponents/ExpansesOutput/ExpansesOutput'
import { ExpensesContext } from '../../store/expanse-context'

const AllExpenses = () => {
  const expansesctx = useContext(ExpensesContext)
  return (
    <ExpansesOutput expenses={expansesctx.expenses} expensesPeroid="Total"/>
  )
}

export default AllExpenses