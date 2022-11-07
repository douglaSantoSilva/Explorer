import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  > input {
    width: 100%;
    height: 56px;
    
    padding: 18px 16px;

    border: 0;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: transparent;
    }
   
  > svg {
   color: ${({theme}) => theme.COLORS.GRAY_200};
   margin-left: 18px;
  }
`

