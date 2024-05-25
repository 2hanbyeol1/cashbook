import PropTypes from "prop-types";
import styled from "styled-components";

const TextInput = styled.input`
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 0.7rem 0.7rem;
  border-bottom: 1px solid lightgray;
  &:focus {
    background-color: #eff8f7;
  }
  &:disabled {
    background-color: #ebebeb;
  }
`;

TextInput.propTypes = {
  validate: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  msg: PropTypes.string,
};

export default TextInput;
