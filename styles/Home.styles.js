import styled from "styled-components";
import { XS, SM, MD, LG, XL } from "./global.styles";

export const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
  padding-bottom: 16px;
  width: 100%;
`;

export const MovieContainer = styled.div`
  margin: 0 auto;
  height: 100%;

  @media ${SM} {
    display: grid;
    column-gap: 16px;
    row-gap: 16px;
    grid-template-columns: 200px 200px;
  }

  @media ${MD} {
    grid-template-columns: 200px 200px 200px;
  }
  @media ${LG} {
    grid-template-columns: 200px 200px 200px 200px;
  }
  @media ${XL} {
    grid-template-columns: 250px 250px 250px 250px;
  }
`;
