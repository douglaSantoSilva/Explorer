import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    //Scroll Bar Main, but Size is too large
    width: 1160px;
    overflow-y: auto;
    margin: 0 auto;
  }
`
export const Content = styled.div`
  width: 100%;
  margin: 40px auto 0;
 
  > h1 {
    font-weight: 500;
    font-size: 36px;
    margin-top: 24px;
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }
`
export const Form = styled.form`
  
  margin: 40px auto;

  > div {
    display: flex;
    gap: 40px;
  }

  > textarea {
    margin-top: 40px;
  }

  > section{
    
   > div{
    display: flex;
    padding: 16px;
    gap: 24px;
  
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   }}
`

export const NewNote = styled.div`
  > div {
    width: 100%;
    display: flex;

    gap: 40px;

    button{
      width: 100%;
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

  }
`

