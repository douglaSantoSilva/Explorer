import styled from "styled-components";
export const Container = styled.div`

  > header {
    display: flex;
    background-color: ${({theme}) => theme.COLORS.BROWN_100};
    height: 144px;

    align-items: center;
    
    a {
      margin-left: 144px;
    }
  }
`
export const Avatar = styled.div`

  position: relative;
  width: 186px;
  height: 186px;

  margin: -90px auto 64px;
  
  > img {
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.PINK};
    }}
`
export const Form = styled.form`
  margin: 0 auto;
  max-width: 340px;

  > button {
    width: 100%;
    margin-top: 24px;
  }
`
export const InputBox = styled.div`
  display: grid;
  gap: 8px;

  > div:nth-child(1) { 
    input{
    ::placeholder{
      color: ${({theme}) => theme.COLORS.WHITE_100};
    }} 
  } 

  > div:nth-child(2) { 
    input{
    ::placeholder{
      color: ${({theme}) => theme.COLORS.WHITE_100};
    }} 
  } 

  > div:nth-child(3) { 
      margin-top: 16px;
  }
`