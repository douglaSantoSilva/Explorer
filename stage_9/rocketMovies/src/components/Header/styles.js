import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 64px;
  padding: 0 123px;

  width: 100%;
  height: 116px;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }

`
export const Search = styled.input`
  width: 100%;
  height: 56px;
    
  padding: 18px 16px;

  border: 0;
  border-radius: 10px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  &::placeholder {
  color: ${({theme}) => theme.COLORS.GRAY_200};
  }
  
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  
  }

  > div {
    display: flex;
    flex-direction: column;

    strong {
      white-space: nowrap;
    }
  }
`

export const Logout = styled.button`
  background: transparent;
  border: none;
 
  align-self: end;

  font-size: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`