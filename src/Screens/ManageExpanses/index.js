// ManageExpanses.js
import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import IconButton from '../../Conponents/UI/IconButton';
import Images from '../../Images';
import { GlobalStyles } from '../../constant/GlobalColor';
import Button from '../../Conponents/UI/Button';
import { ExpensesContext } from '../../store/expanse-context';
import ExpenseForm from '../../Conponents/ManageExpense/ExpenseForm';

const ManageExpanses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const confirmhandler = (expenseData) => {
    console.log
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(
        expenseData
      );
    }
    navigation.goBack();
  };

  const taponCancel = () => {
    navigation.goBack();
  };


    const selectedExpense = expensesCtx.expenses.find(
      (expense) => expense.id === editedExpenseId
    )
  return (
    <View style={styles.container}> 
      <ExpenseForm onCancel={taponCancel} submitLabel={isEditing? 'Update' : 'Add'}
      onSubmit={confirmhandler}
      defaultValues = {selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon={Images.ic_trash} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
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
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    margin: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
 
});
