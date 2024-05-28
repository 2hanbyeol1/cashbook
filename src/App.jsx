import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  const expenses = useSelector((state) => state.expenses);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:expenseId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
