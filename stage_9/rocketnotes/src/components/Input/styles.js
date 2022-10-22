import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;  
  }
`