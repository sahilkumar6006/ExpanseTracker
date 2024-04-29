// ManageExpanses.js
import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import IconButton from '../../Conponents/UI/IconButton';
import Images from '../../Images';
import {GlobalStyles} from '../../constant/GlobalColor';
import Button from '../../Conponents/UI/Button';
import {ExpensesContext} from '../../store/expanse-context';
import ExpenseForm from '../../Conponents/ManageExpense/ExpenseForm';
import {deleteExpense, storeExpense, updateExpense} from '../../utils/http';
import Loading from '../../Conponents/UI/LoadingOvrelay';
import ErrorOverLay from '../../Conponents/UI/ErrorOverLay';

const ManageExpanses = ({route, navigation}) => {
const [isSubmitting, setIsSubmiting] = useState(false);
const [error, setError] = useState();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  

  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsSubmiting(true);
    try {
      await deleteExpense(editedExpenseId)
       expensesCtx.deleteExpense(editedExpenseId);
      setIsSubmiting(false);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again later!');
    }
  };

  const confirmhandler = async expenseData => {
    setIsSubmiting(true)
    console.log;
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({...expenseData, id: id});
    }
    navigation.goBack();
  };

  const taponCancel = () => {
    navigation.goBack();
  };

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

  function errorHandler () {
    setError(null)
  }

  if(error && !isSubmitting) {
    return <ErrorOverLay  message={error}  onConfirm={errorHandler}/>
  }

  if(isSubmitting) {
    return< Loading/>
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={taponCancel}
        submitLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmhandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={Images.ic_trash}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpanses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    margin: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
