import { View, Text, Pressable, StyleSheet, TextBase } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constant/GlobalColor'
import { getFormattedDate } from '../../utils/date'
import { useNavigation } from '@react-navigation/native'

const ExpanseItem = ({description, amount, date, id }) => {
  const navigation = useNavigation();

  const tapOnExpnseHandle = () => {
    navigation.navigate("ManageExpanses", {
      expenseId: id
    })
  }
  return (
    <Pressable onPress={tapOnExpnseHandle} style ={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View style={styles.TextBase}>
        <Text style={[styles.TextBase, styles.description]}>{description}</Text>
        <Text style={styles.TextBase}>{getFormattedDate(date)}</Text>
        </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
      </View>
      </View>
    </Pressable>
  )
}

export default ExpanseItem

const styles = StyleSheet.create({

    pressed : {
      opacity:0.75
    },

    expenseItem: {
    padding:12,
    marginVertical:8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:6,
    elevation:3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {
      width:1, 
      height:1
    },
    shadowOpacity:0.4
  },

  TextBase: {
    color: GlobalStyles.colors.primary50
  },
  description: {
    fontSize:16,
    marginBottom:4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal:12,
    paddingVertical:4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold'
  }
})