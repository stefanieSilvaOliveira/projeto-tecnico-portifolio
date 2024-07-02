import { createGlobalStyle } from "styled-components";
import FontEspecial from '../Font/LTSaeada-Bold.otf';
import FontTitle from '../Font/Happy Memories.otf';
const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

    @font-face {
    font-family: 'Personalizada';
    src: url(${FontEspecial}) format('truetype');
    
  }

  @font-face {
    font-family: 'Title';
    src: url(${FontTitle}) format('truetype');   
  }
    
}

`

export default GlobalStyle;