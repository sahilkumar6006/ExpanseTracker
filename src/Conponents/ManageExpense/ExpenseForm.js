import {View, Text, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';
import Input from './input';
import { GlobalStyles } from '../../constant/GlobalColor';
import Button from '../UI/Button';
import { getFormattedDate } from '../../utils/date';

const ExpenseForm = ({onCancel, onSubmit, submitLabel, defaultValues}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues? defaultValues.amount.toString(): '',
    date: defaultValues? getFormattedDate(defaultValues.date) : '',
    description: defaultValues? defaultValues.description: ''
  });


  function inputChangedHandler(inputIdentifier, enteredValue) {
   setInputValues((prevValue) => {
    return{
      ...prevValue,
      [inputIdentifier]: enteredValue
    }
   })
  }

  const SubmitHandler = () => {
      const expanseData ={
        amount: +inputValues.amount,
        date: new Date(inputValues.date),
        description: inputValues.description
      };

      const amountIsValid = !isNaN(expanseData.amount) && expanseData.amount > 0;
      const dateisValid = expanseData.date.toString() !== 'Invalid Date';
      const descriptionIsValid = expanseData.description.trim().length > 0;

      if(! amountIsValid || !dateisValid || !descriptionIsValid) {
        Alert.alert('Invalid input', 'plase check input')
        return;
      }
      
      onSubmit(expanseData)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.Title}>Your Expense</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          TextInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: value => inputChangedHandler('amount', value),
            value: inputValues.amount
          }}
        />

        <Input
          label="Date"
          style={styles.rowInput}
          TextInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: value => inputChangedHandler('date', value),
            value: inputValues.date
          }}
        />
      </View>

      <Input
        label="Description"
        TextInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autCorrect: false // default is true
          onChangeText:  value => inputChangedHandler('description', value),
          value: inputValues.description
        }}
      />

<View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={SubmitHandler}>{submitLabel}</Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex:1
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  Title: {
    marginVertical:24,
    fontSize:28,
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold'
  },  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
});
