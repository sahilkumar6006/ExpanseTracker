import axios from 'axios';
import {useId} from 'react';

const BACKEND_URL = 'https://expanse-tracker-fcb65-default-rtdb.firebaseio.com';

export async function storeExpense(expanseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expanseData,
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = axios.get(BACKEND_URL + '/expenses.json');

  const expanses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expanses.push(expenseObj);
  }

  return expanses;
}


export  function updateExpense(id, expanseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json` , expanseData)
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}