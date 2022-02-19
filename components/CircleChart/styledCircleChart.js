import styled from "styled-components";

export const CircleSvg = styled.svg`
  width: 7rem;
  height: 7rem;
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 14;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke: ${({ theme }) => theme.colors.primary};
`;
