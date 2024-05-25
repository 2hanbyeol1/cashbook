import PropTypes from "prop-types";
import styled from "styled-components";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 0.3rem;
`;

const Month = styled.button`
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#c0e4e1" : "#f6f7fa"};
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  border-radius: 0.3rem;
  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#a3c5c3" : "#e4e5e9"};
  }
`;

function MonthSelector({ selectedMonth, handleMonthClicked }) {
  return (
    <section>
      <Wrapper>
        {months.map((month) => (
          <Month
            key={month}
            onClick={() => handleMonthClicked(month)}
            $isSelected={selectedMonth === month}
          >
            {month}월
          </Month>
        ))}
      </Wrapper>
    </section>
  );
}

MonthSelector.propTypes = {
  selectedMonth: PropTypes.number.isRequired,
  handleMonthClicked: PropTypes.func.isRequired,
};

export default MonthSelector;
