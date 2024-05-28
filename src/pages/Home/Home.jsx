import Button from "@/components/Button";
import MonthSelector from "@/components/MonthSelector";
import ExpenseForm from "@/features/ExpenseForm";
import ExpenseList from "@/features/ExpenseList";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ExpenseContext from "../../context/expense.context";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  height: 100%;
  margin: 0 1rem;
  > section {
    width: 100%;
  }
`;

const SubmitButton = styled(Button)`
  grid-column: span 4;
`;

function Home() {
  const [selectedMonth, setSelectedMonth] = useState(
    parseInt(localStorage.getItem("month")) || 1
  );

  const { expenses, addExpense } = useContext(ExpenseContext);

  useEffect(() => {
    localStorage.setItem("month", selectedMonth);
  }, [selectedMonth]);

  const handleSubmit = ({ newExpense }) => {
    addExpense(newExpense);
    const month = parseInt(newExpense.date.split("-")[1]);
    setSelectedMonth(month);
  };

  const handleMonthClicked = (newMonth) => {
    setSelectedMonth(newMonth);
  };

  return (
    <Wrapper>
      <MonthSelector
        selectedMonth={selectedMonth}
        handleMonthClicked={handleMonthClicked}
      />
      <ExpenseForm handleSubmit={handleSubmit}>
        <SubmitButton type="submit">등록</SubmitButton>
      </ExpenseForm>
      <ExpenseList selectedMonth={selectedMonth} expenses={expenses} />
    </Wrapper>
  );
}

export default Home;
