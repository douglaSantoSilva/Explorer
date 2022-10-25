import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 40px;

  color: ${({theme}) => theme.COLORS.WHITE_100};

  > div:nth-child(1) {

    display: flex;
    align-items: center;
    margin: 24px 0;

    h1 {
      font-weight: 500;
      font-size: 36px;
      color: ${({theme}) => theme.COLORS.WHITE_100};

      margin-right: 19px;
    }

    svg {
      font-size: 18px;
      margin-right: 10px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    .giveStar {
      fill: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > div:nth-child(3) {

    > span {
      color: ${({theme}) => theme.COLORS.WHITE_100};
      background-color: ${({theme}) => theme.COLORS.BROWN};
    }
  }

`

export const Profile = styled.div`
  
  display: flex;
  align-items: center;
  gap: 8px;
  
  > img {
    width: 16px;
    height: 16px;

    border: 1px solid  ${({theme}) => theme.COLORS.GRAY_300};
    border-radius: 50%;
  }

  > svg {
    color: ${({theme}) => theme.COLORS.PINK};
  }
`