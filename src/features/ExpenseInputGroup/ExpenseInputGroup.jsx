import TextInput from "@/components/TextInput";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputSpan = styled.span``;

function ExpenseInputGroup({ dateRef, itemRef, amountRef, descriptionRef }) {
  return (
    <>
      <InputWrapper>
        <InputSpan>📅</InputSpan>
        <TextInput type="date" ref={dateRef} name="date" />
      </InputWrapper>
      <InputWrapper>
        <InputSpan>📎</InputSpan>
        <TextInput
          ref={itemRef}
          name="item"
          placeholder="지출 항목을 입력해주세요"
        />
      </InputWrapper>
      <InputWrapper>
        <InputSpan>💸</InputSpan>
        <TextInput
          ref={amountRef}
          name="amount"
          placeholder="지출 금액을 입력해주세요"
        />
      </InputWrapper>
      <InputWrapper>
        <InputSpan>✏️</InputSpan>
        <TextInput
          ref={descriptionRef}
          name="description"
          placeholder="지출 내용을 입력해주세요"
        />
      </InputWrapper>
    </>
  );
}

ExpenseInputGroup.propTypes = {
  dateRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  itemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  amountRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  descriptionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default ExpenseInputGroup;
