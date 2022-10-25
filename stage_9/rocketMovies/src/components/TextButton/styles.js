import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`

  display: flex;
  align-items: center;
  
  background-color: transparent;
  color: ${({theme}) => theme.COLORS.PINK};
  
  font-size: 16px;
  font-weight: 400;
  border: none;
  
  > svg {
    margin-right: 8px;
  }
  ;
`