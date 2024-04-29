import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ExpansesOutput from '../../Conponents/ExpansesOutput/ExpansesOutput';
import {ExpensesContext} from '../../store/expanse-context';
import {getDateMinus} from '../../utils/date';
import {fetchExpenses} from '../../utils/http';
import Loading from '../../Conponents/UI/LoadingOvrelay';
import ErrorOverLay from '../../Conponents/UI/ErrorOverLay';

const RecentExpanses = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  // const [fetchExpenses, setFetchedExpenses] = useState([])
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
      //  setFetchedExpenses(expenses)
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverLay message={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <Loading />;
  }

  const RecentExpanses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7daysAgo = getDateMinus(today, 7);
    return expense.date > date7daysAgo;
  });
  return (
    <ExpansesOutput expenses={RecentExpanses} expensesPeroid="Last 7 Days" />
  );
};

export default RecentExpanses;
