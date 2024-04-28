import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpansesOutput from '../../Conponents/ExpansesOutput/ExpansesOutput'
import { ExpensesContext } from '../../store/expanse-context'
import { getDateMinus } from '../../utils/date'

const RecentExpanses = () => {
  const expensesCtx = useContext(ExpensesContext)

  const RecentExpanses = expensesCtx.expenses.filter((expense) =>{
    const today = new Date();
    const date7daysAgo = getDateMinus(today, 7)
    return expense.date > date7daysAgo
  })
  return (
    <ExpansesOutput  expenses = { RecentExpanses} expensesPeroid="Last 7 Days"/>
  )
}

export default RecentExpanses