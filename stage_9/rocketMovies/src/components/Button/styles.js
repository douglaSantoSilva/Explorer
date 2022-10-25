import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 13px 32px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 21px;
  
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  > svg {
    color: ${({theme}) => theme.COLORS.BLACK};
  }
`