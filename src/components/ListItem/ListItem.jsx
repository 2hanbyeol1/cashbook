import PropTypes from "prop-types";
import styled from "styled-components";

const ListItem = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  background-color: #f9f9f9;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 #d6d6d6;

  &:hover {
    background-color: #f2f2f2;
  }
`;

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
