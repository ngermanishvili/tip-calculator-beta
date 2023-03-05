import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  height: 48px;
  background: url(${dollarIcon});
  background-color: ${(props) => props.theme.inputBackground};
  background-repeat: no-repeat;
  background-position: left 19px center;
  padding-right: 17px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.cyan.dark};
  color: ${({ theme }) => theme.colors.cyan.dark};
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: right;
  font-size: 24px;
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.cyan.dark};
    opacity: 0.35;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.cyan.strong};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
