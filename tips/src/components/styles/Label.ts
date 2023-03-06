import styled from "styled-components";

const Text = styled.p`
  all: unset;
  color: ${({ theme }) => theme.colors.cyan.dark};
  font-size: 16px;
  margin-bottom: 6px;
`;

export default Text;