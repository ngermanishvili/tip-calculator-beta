import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      cyan: {
        strong: string;
        dark: string;
        grayish: string;
        darkGrayish: string;
        lightGrayish: string;
        extraLightGrayish: string;
      };
      white: string;
    };
    background: string;
    inputBackground: string;
  }

  // Declare SVG module
  declare module '*.svg' {
    const content: any;
    export default content;
  }
}
