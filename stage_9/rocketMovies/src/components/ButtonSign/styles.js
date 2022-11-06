import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 16px 0px;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 21px;

  border-radius: 8px;
  
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.GRAY_400};

  > svg {
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  }
`