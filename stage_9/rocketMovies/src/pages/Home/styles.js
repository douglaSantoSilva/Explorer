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
    overflow-y: auto;
    grid-area: content;
  }
`
export const Content = styled.div`
  display: grid;
  margin: 0 auto 40px;

  max-width: 1130px;
  height: 630px;

  gap: 15px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 47px 0;

    h1 {
      font-weight: 500;
      font-size: 36px;
    }

    a {
      font-weight: 400;
      padding: 16px 32px;

      border-radius: 8px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      background-color:  ${({theme}) => theme.COLORS.PINK};
    }
  }
`
export const Section = styled.section`
  max-height: 620px;
  overflow-y: scroll;
  

  &::-webkit-scrollbar-track{
    margin-bottom: 20px;
  }

  > div {
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    transition: filter 0.1s;
    cursor: pointer;

     p {
      width: 100%;
      height: 40px;
      font-size: 16px;
      
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis !important;
      
      color: ${({theme}) => theme.COLORS.TEXT_GRAY};
    }}
`
