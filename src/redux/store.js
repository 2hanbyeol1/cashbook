import { configureStore } from "@reduxjs/toolkit";
import { expensesReducer } from "./slices/expenses.slice";

const store = configureStore({ reducer: { expenses: expensesReducer } });

export default store;
