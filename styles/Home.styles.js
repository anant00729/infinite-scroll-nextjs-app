import styled from "styled-components";
import { XS, SM, MD, LG, XL } from "./global.styles";

export const MovieWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 64px;
  padding-bottom: 16px;
`;

export const MovieContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
  @media ${XS} {
    grid-template-columns: 200px 200px;
  }
  @media ${SM} {
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
