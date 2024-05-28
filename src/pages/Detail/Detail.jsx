import Button from "@/components/Button";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ExpenseContext from "../../context/expense.context";
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

function Detail() {
  const { expenseId } = useParams();
  const { expenses, updateExpense } = useContext(ExpenseContext);
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
          <ExpenseManageButtonGroup goHome={goHome} />
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

export default Detail;
