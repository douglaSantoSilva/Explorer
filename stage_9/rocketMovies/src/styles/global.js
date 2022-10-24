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
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track{
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-thumb{
    border: 5px solid transparent;
    
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK};
  }
`