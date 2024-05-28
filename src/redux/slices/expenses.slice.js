import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = JSON.parse(localStorage.getItem("expenses")) || [];

const expensesSlice = createSlice({
  initialState,
  name: "expenses",
  reducers: {
    addExpense: (prevState, action) => {
      const { date, item, description, amount } = action.payload;
      prevState.push({ id: uuid(), date, item, description, amount });
    },
    updateExpense: (prevState, action) => {
      const newExpense = action.payload;
      const idx = prevState.find((expense) => newExpense.id === expense.id);
      prevState[idx] = { ...newExpense, amount: parseInt(newExpense.amount) };
    },
    deleteExpense: (prevState, action) => {
      const expenseId = action.payload;
      prevState.splice(
        prevState.findIndex((expense) => expense.id === expenseId),
        1
      );
    },
  },
});

export const expensesReducer = expensesSlice.reducer;
export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;
