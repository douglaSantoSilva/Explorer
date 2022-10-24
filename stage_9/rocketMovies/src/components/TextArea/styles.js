import styled from "styled-components";

export const Container = styled.textarea`
  
  width: 100%;
  height: 274px;

  border: none;
  resize: none;
  padding: 16px;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY_200};

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  overflow-y: auto;
  
`