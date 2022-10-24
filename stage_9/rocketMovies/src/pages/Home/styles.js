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
  }
`

export const Content = styled.div`
  display: grid;
  gap: 15px;
  max-width: 1130px;
  margin: 0 auto 40px;

  > button {
    margin-top: 40px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 47px 0;

    h1 {
      font-weight: 500;
      font-size: 36px;
    }

    button {
      width: 207px;
    }

  }
`
export const Section = styled.section`
  max-height: 620px;
  overflow-y: scroll;


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

  > button {
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    transition: filter 0.1s;
    

     p {
      width: 100%;
      height: 40px;
      font-size: 16px;
      
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis !important;
      
      color: ${({theme}) => theme.COLORS.TEXT_GRAY};
    }
  }
`
