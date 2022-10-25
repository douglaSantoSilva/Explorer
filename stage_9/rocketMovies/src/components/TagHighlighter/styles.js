import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  padding-right: 16px;
  
  color: ${({theme}) => theme.COLORS.GRAY_300};
  border: ${({theme, isNew}) => !isNew ? "none" : `2px dashed ${theme.COLORS.GRAY_200}`};
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  
  > button {
    border: none;
    background: none;

    font-size: 22px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > input {
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({theme, isNew}) => !isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
    }
  }


`