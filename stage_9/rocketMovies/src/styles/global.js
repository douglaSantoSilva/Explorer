import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  body, button, textarea, input {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
  }


  button:hover, a:hover {
    filter: brightness(0.9);
  }

  input{
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
  }

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track{
    //estava 20px tentar ajustar de outra forma depois
    margin-bottom: 500px;
  }

  &::-webkit-scrollbar-thumb{
    border: 5px solid transparent;
    
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK};
  }
`