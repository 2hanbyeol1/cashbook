import ListItem from "@/components/ListItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const Content = styled.span`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #42b4aa;
`;
const Item = styled.span`
  background-color: #c0e4e1;
  color: black;
  padding: 0 0.2rem;
`;
const Description = styled.span``;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Amount = styled.span`
  font-size: 0.9rem;
`;
const Date = styled.span`
  font-size: 0.7rem;
  color: #545454;
`;

function ExpenseItem({ expense }) {
  return (
    <Link to={`/detail/${expense.id}`}>
      <StyledListItem>
        <Content>
          <Item>#{expense.item}</Item>{" "}
          <Description>{expense.description}</Description>
        </Content>
        <Info>
          <Amount>{expense.amount.toLocaleString()}원</Amount>
          <Date>{expense.date}</Date>
        </Info>
      </StyledListItem>
    </Link>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExpenseItem;
