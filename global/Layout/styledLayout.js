import styled from "styled-components";

export const Application = styled.main`
  display: grid;
  gap: 1.8rem;
  margin: 0 auto;
  width: 96%;
  grid-template-columns: 16rem auto 23rem;

  @media screen and (max-width: 1200px) {
    width: 94%;
    grid-template-columns: 7rem auto 23rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
