import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTheme";
import { Input } from "./components/Input";
import Logo from "../src/assets/images/logo.svg";
import Text from "./components/styles/Label";
import ResetBtn from "./components/styles/ResetButton";
import Bill, { BillName, PerName } from "./components/styles/Bill";
import Tip from "./components/Tip";

export default function Calculator() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [peopleError, setPeopleError] = useState(false);

  const alright =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright && ((bill * tip) / people).toFixed(2);
  const totalPerPerson = alright && ((bill * (1 + tip)) / people).toFixed(2);
  const showTip = alright && !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal =
    alright && !(totalPerPerson === "NaN" || totalPerPerson === "Infinity");

  const MAX_PERSONS = 9;

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Image src={Logo} alt="Logo" />

        <CalculatorContainer>
          <InputsContainer>
            <Bill>Bill</Bill>
            <InputMargin
              iconType="bill"
              placeholder="0"
              type="number"
              min={0}
              value={bill}
              onChange={(e) => {
                if (e.target.value.length < 9) {
                  setBill(e.target.valueAsNumber);
                }
              }}
              dir="rtl"
            />
        

            <Tip setTip={setTip} tip={tip} />

            <Bill>People</Bill>

            <InputMargin
              iconType="person"
              placeholder="0"
              type="number"
              value={people}
              min={0}
              onKeyDown={(e) => {
                if (e.key === ".") {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                if (e.target.value.length < MAX_PERSONS) {
                  setPeople(e.target.valueAsNumber);
                }
              }}
            />
          </InputsContainer>
          {/* <div style={{ color: "red" }}>
            {peopleError ? `Can't Be Zero` : null}
          </div> */}
          <ResultContainer>
            <BillContainer>
              <div>
                <BillName> Tip amount </BillName>
                <PerName>/ person:</PerName>
              </div>
              <Bill>{showTip ? tipAmount : "$0.00"}</Bill>
            </BillContainer>

            <BillContainer>
              <div>
                <BillName> Total </BillName>
                <PerName>/ person:</PerName>
              </div>
              <Bill>{showTotal ? totalPerPerson : "$0.00"}</Bill>
            </BillContainer>
            <ResetBtn>RESET</ResetBtn>
          </ResultContainer>
        </CalculatorContainer>
      </Container>
    </ThemeProvider>
  );
}

const InputsContainer = styled.div`
  padding: 0 8px;
`;

const BillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan.dark};
  border-radius: 15px;
  width: 100%;
  padding: 39px 22px 24px 24px;
`;

const Image = styled.img`
  padding: 50px 0 40px 0;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0px 0px;
  overflow: hidden;
  padding: 24px;
  width: 100%;
`;

const InputMargin = styled(Input)`
  margin-bottom: 32px; ;
`;
