import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`
export const Form = styled.form`
  
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
      font-weight: 700;
      font-size: 48px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE_100};

    align-self: flex-start;
    margin-bottom: 48px;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_050};

    margin-bottom: 48px;
  }

  > div {
    width: 100%;
    display: grid;
    gap: 8px;
    
    div{input{outline: none;}}

    button:nth-child(4) {
      font-weight: 500;
      font-size: 16px;
      margin-top: 8px;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    button:nth-child(5) {
      margin: 42px auto;
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;

  background-size: cover;
  filter: brightness(1);
`