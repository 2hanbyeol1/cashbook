import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import GlobalStyle from "./GlobalStyle";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = ({ date, item, description, amount }) => {
    setExpenses([...expenses, { id: uuid(), date, item, description, amount }]);
  };

  const updateExpense = ({ newExpense }) => {
    const newExpenses = expenses.map((expense) =>
      newExpense.id === expense.id
        ? { ...newExpense, amount: parseInt(newExpense.amount) }
        : expense
    );
    setExpenses(newExpenses);
  };

  const deleteExpense = ({ expenseId }) => {
    const newExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(newExpenses);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Home expenses={expenses} addExpense={addExpense} />}
        />
        <Route
          path="/detail/:expenseId"
          element={
            <Detail
              expenses={expenses}
              updateExpense={updateExpense}
              deleteExpense={deleteExpense}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
