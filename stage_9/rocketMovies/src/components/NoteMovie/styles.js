import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  padding: 32px;

  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.BROWN_100};

  > svg {

    color: pink;
    fill: pink;
  }

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

export const Star = styled.div`
  display: flex;
  gap: 6px;
  margin: 8px 0 16px;

  > svg {
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > svg:first-child {
    fill: ${({theme}) => theme.COLORS.PINK};
  }
  
  .giveStar{
    fill: ${({theme}) => theme.COLORS.PINK};
  }
`