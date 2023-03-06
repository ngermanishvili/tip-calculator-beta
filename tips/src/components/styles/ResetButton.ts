import styled from "styled-components";

const ResetBtn = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.colors.cyan.strong};
  width: 100%;
  height: 48px;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cyan.dark};
  margin-top: 35px;
  cursor: pointer;
`;

export default ResetBtn;