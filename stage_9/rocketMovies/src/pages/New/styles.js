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
    width: 100%;
    overflow-y: auto;
    margin: 0 auto;
  }
`
export const Content = styled.div`
  max-width: 1160px;
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
`

export const Section = styled.section`
`

