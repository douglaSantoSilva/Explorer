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
    width: 1137px;
    margin: 0 auto;
    grid-area: content;
    overflow-y: auto;

    button {
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      width: 100%;
    }
  }
`
export const Content = styled.div`
  width: 100%;
  margin: 40px auto 156px;
`