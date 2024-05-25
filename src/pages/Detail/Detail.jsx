import Button from "@/components/Button";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ExpenseForm from "../../features/ExpenseForm/ExpenseForm";
import ExpenseManageButtonGroup from "../../features/ExpenseManageButtonGroup/ExpenseManageButtonGroup";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

const NoData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Detail({ expenses, updateExpense, deleteExpense }) {
  const { expenseId } = useParams();
  const expense = expenses.find((expense) => expense.id === expenseId);

  const handleSubmit = ({ newExpense }) => {
    updateExpense({ newExpense: { ...newExpense, id: expenseId } });
    goHome();
  };
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <Wrapper>
      {expense ? (
        <ExpenseForm handleSubmit={handleSubmit} initialValue={expense}>
          <ExpenseManageButtonGroup
            deleteExpense={deleteExpense}
            goHome={goHome}
          />
        </ExpenseForm>
      ) : (
        <NoData>
          <div>아이디에 해당하는 데이터가 존재하지 않습니다 🥺</div>
          <Button onClick={goHome}>홈 화면으로 이동</Button>
        </NoData>
      )}
    </Wrapper>
  );
}

Detail.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default Detail;
