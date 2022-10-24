import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 32px;

  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.BROWN_100};

  > h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
  
`