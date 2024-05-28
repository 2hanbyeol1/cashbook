import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ExpenseForm from "../../features/ExpenseForm/ExpenseForm";
import ExpenseManageButtonGroup from "../../features/ExpenseManageButtonGroup/ExpenseManageButtonGroup";
import { updateExpense } from "../../redux/slices/expenses.slice";

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
  const dispatch = useDispatch();
  const { expenseId } = useParams();
  const expenses = useSelector((state) => state.expenses);
  const expense = expenses.find((expense) => expense.id === expenseId);

  const handleSubmit = ({ newExpense }) => {
    dispatch(updateExpense({ ...newExpense, id: expenseId }));
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
