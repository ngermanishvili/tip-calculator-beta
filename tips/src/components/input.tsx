import styled from "styled-components";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

interface Props {
  iconType?: "bill" | "person";
}
const icon = (props: Props) => {
  switch (props.iconType) {
    case "bill":
      return dollarIcon;
    case "person":
      return personIcon;
    default:
      return "";
  }
};

export const Input = styled.input<Props>`
  all: unset;
  height: 48px;
  background-image: url(${icon});
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
