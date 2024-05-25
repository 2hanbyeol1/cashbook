import Button from "@/components/Button";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.3rem;
`;

function ExpenseManageButtonGroup({ deleteExpense, goHome }) {
  const { expenseId } = useParams();

  const handleDeleteButtonClicked = () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    deleteExpense({ expenseId });
    goHome();
  };

  return (
    <ButtonGroup>
      <Button type="submit">수정</Button>
      <Button type="button" onClick={handleDeleteButtonClicked}>
        삭제
      </Button>
      <Button type="button" onClick={goHome}>
        홈 화면으로 이동
      </Button>
    </ButtonGroup>
  );
}

ExpenseManageButtonGroup.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
};

export default ExpenseManageButtonGroup;
