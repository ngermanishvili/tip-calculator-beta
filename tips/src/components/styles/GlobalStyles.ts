import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`


*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${(props) => props.theme.background};
    font-family: space-mono, monospace;
    display: flex;
    flex-direction: column; 
    align-items: center;
}
`;

export default GlobalStyles;
