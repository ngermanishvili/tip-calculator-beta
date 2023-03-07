import styled from "styled-components";

const ResetButton = styled.button`
  all: unset;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.cyan.strong};
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.cyan.dark};
  text-transform: uppercase;
  margin-top: 35px;
`;

export default ResetButton;
