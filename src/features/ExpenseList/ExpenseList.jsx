import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import ExpenseContext from "../../context/expense.context";
import ExpenseItem from "../ExpenseItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.3rem;
  max-height: 10rem;
  overflow-y: scroll;
`;

const NullData = styled.div`
  text-align: center;
`;

function ExpenseList({ selectedMonth }) {
  const { expenses } = useContext(ExpenseContext);

  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === selectedMonth
  );

  return (
    <section>
      <Wrapper>
        {filteredExpenses.length === 0 ? (
          <NullData>{selectedMonth}월 지출 내역이 없습니다 🤷</NullData>
        ) : (
          filteredExpenses
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))
        )}
      </Wrapper>
    </section>
  );
}

ExpenseList.propTypes = {
  selectedMonth: PropTypes.number.isRequired,
};

export default ExpenseList;
