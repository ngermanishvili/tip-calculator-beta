import 'styled-components';
import {Theme} from '../themes/defaultTheme'
declare module 'styled-components' {


  // Declare SVG module
  declare module '*.svg' {
    const content: any;
    export default content;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}