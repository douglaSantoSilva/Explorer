import styled from "styled-components";

export const Container = styled.section`

  margin: 40px 0;

 > h2 {
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.TEXT_GRAY};
 }
`