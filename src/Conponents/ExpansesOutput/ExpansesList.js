import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpanseItem from './ExpanseItem'

const renderExpenseItem =({item}) =>{
  console.log("in teh item", item)
  return(
    <ExpanseItem {...item}/>
  )
}

const ExpansesList = ({expenses}) => {
  console.log("in the expnases", expenses)
  return (
   <FlatList
   data={expenses}
   keyExtractor={(item,index) => `${index}`}
   renderItem={renderExpenseItem}
   />
  )
}

export default ExpansesList