import React from "react";
import styled from "styled-components";
import { Input } from "./Input";
import Text from "./styles/Label";

interface Props {
  tip: number | undefined;
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Tip = (props: Props) => {
  const { tip, setTip } = props;
  return (
    <>
      <Text>Select Tip %</Text>
      <TipContainer>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <TipButton
            isActive={tip === percentage / 100}
            onClick={() => {
              setTip(percentage / 100);
            }}
          >
            {percentage}%
          </TipButton>
        ))}

        <Input
          style={{ width: "calc(50% - 25px)" }}
          iconType="person"
          placeholder="Custom"
          type="number"
          min={0}
          value={tip && tip * 100}
          onChange={(e) => {
            if (e.target.value.length < 4) {
              setTip(e.target.valueAsNumber / 100);
            }
          }}
        />
      </TipContainer>
    </>
  );
};

interface TipButtonProps {
  isActive?: boolean;
}

const TipButton = styled.button<TipButtonProps>`
  all: unset;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  height: 48px;
  width: calc(50% - 8px);
  border-radius: 5px;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cyan.dark : theme.colors.white};
  font-size: 24px;
`;

const TipContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default Tip;