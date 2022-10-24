import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  padding: 16px;
  border-radius: 10px;
  
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
  }
`