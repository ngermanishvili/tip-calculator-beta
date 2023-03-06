import styled from "styled-components";

export const BillName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

 export const PerName = styled.p`
  color: hsla(183, 15%, 56%, 1);
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
`;

const Bill = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 24px;
  color: ${({ theme }) => theme.colors.cyan.dark};

`;

export default Bill;