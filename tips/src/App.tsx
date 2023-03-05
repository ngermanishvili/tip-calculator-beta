import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import dollarIcon from '../src/assets/images/icon-dollar.svg';


const defaultTheme = {
  colors: {
    cyan: {
      strong: "hsl(172, 67%, 45%)",
      dark: "hsl(183, 100%, 15%)",
      grayish: "hsl(184, 14%, 56%)",
      darkGrayish: "hsl(184, 14%, 56%)",
      lightGrayish: "hsl(185, 41%, 84%)",
      extraLightGrayish: "hsl(189, 41%, 97%)",
    },
    white: "hsl(0, 0%, 100%)",
  },
  background: "#C5E4E7",
  inputBackground: "#F3F9FA;",
};

export default function Calculator() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);

  const [peopleError, setPeopleError] = useState(false);

  const alright =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright && ((bill * tip) / people).toFixed(2);
  const totalPerPerson = alright && ((bill * (1 + tip)) / people).toFixed(2);
  const showTip = !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal = !(
    totalPerPerson === "NaN" || totalPerPerson === "Infinity"
  );

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
      <div className="App">
        Bill:
        <Input
          placeholder="bill"
          type="number"
          min={0}
          value={bill}
          onChange={(e) => {
            setBill(e.target.valueAsNumber);
          }}
          dir='rtl'
        />
        <div>
          <button
            onClick={() => {
              setTip(0.05);
            }}
          >
            5%
          </button>
          <button
            onClick={() => {
              setTip(0.1);
            }}
          >
            10%
          </button>
          <button
            onClick={() => {
              setTip(0.15);
            }}
          >
            15%
          </button>
          <button
            onClick={() => {
              setTip(0.25);
            }}
          >
            25%
          </button>
          <button
            onClick={() => {
              setTip(0.5);
            }}
          >
            50%
          </button>
          <input
            placeholder="custom"
            type="number"
            min={0}
            max={100}
            value={tip && tip * 100}
            onChange={(e) => {
              setTip(e.target.valueAsNumber / 100);
            }}
          />
        </div>
        People:
        <input
          placeholder="number of people"
          type="number"
          value={people}
          min={0}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setPeople(e.target.valueAsNumber);
          }}
        />
        <div style={{ color: "red" }}>
          {peopleError ? `Can't Be Zero` : null}
        </div>
        <div>
          tip amount / person:
          {showTip ? tipAmount : "0.00"}
        </div>
        <div>
          total / person:
          {showTotal ? totalPerPerson : "0.00"}
        </div>
      </div>
    </ThemeProvider>
  );
}

const Input = styled.input`
  background: url(${dollarIcon});
  background-color: ${(props) => props.theme.inputBackground};
  background-repeat: no-repeat;
text-align: right;


`;
