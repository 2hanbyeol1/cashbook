import ExpenseInputGroup from "@/features/ExpenseInputGroup";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  padding: 1rem;
  background-color: white;
  border-radius: 0.3rem;
`;

function ExpenseForm({ handleSubmit, initialValue, children }) {
  useEffect(() => {
    dateRef.current.focus();

    if (initialValue) {
      dateRef.current.value = initialValue.date;
      itemRef.current.value = initialValue.item;
      amountRef.current.value = initialValue.amount;
      descriptionRef.current.value = initialValue.description;
    }
  }, []);

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleExpenseFormSubmit = (e) => {
    e.preventDefault();
    const date = dateRef.current.value;
    const item = itemRef.current.value;
    const amount = amountRef.current.value;
    const description = descriptionRef.current.value;

    if (!date || !item || !amount || !description)
      return alert("입력하지 않은 값이 있습니다.");
    if (!isNumeric(amount)) return alert("금액은 숫자로 작성해주세요");

    const newExpense = {
      date,
      item,
      amount: parseInt(amount),
      description,
    };
    handleSubmit({ newExpense });

    dateRef.current.value = "";
    itemRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const isNumeric = (str) => {
    return /^[0-9]+$/.test(str);
  };

  return (
    <section>
      <StyledForm onSubmit={handleExpenseFormSubmit}>
        <ExpenseInputGroup
          dateRef={dateRef}
          itemRef={itemRef}
          amountRef={amountRef}
          descriptionRef={descriptionRef}
        />
        {children}
      </StyledForm>
    </section>
  );
}

ExpenseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default ExpenseForm;
