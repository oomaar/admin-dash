import styled from 'styled-components';
import { Shadow } from '../../global/GlobalStyle';

export const DashboardContainer = styled.div`
  margin-top: 1.4rem;
`;

export const DashboardDate = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.border.radiusOne};
  margin-top: 1rem;
  padding: 0.5rem 1.6rem;

`;

export const Input = styled.input.attrs({ type: "date" })`
    background: transparent;
    color: ${({ theme }) => theme.colors.dark};
    outline: 0;
    border: 0;
    cursor: pointer;
`;

export const DashboardInsights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
`;

export const InsightsItem = styled.div`
  margin-top: 1rem;
  padding: ${({ theme }) => theme.pad.card};
  box-shadow: ${Shadow};
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.card};

  :hover {
    box-shadow: none;
  }
`;

export const InsightsIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};

  &.danger {
    background: ${({ theme }) => theme.colors.danger};
  }

  &.success {
    background: ${({ theme }) => theme.colors.success};
  }
`;

export const InsightsMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InsightsLeft = styled.div`
  h3 {
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
  }
`;

export const InsightsRight = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;

  svg {
    width: 7rem;
    height: 7rem;
  }

  circle {
    fill: none;
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

export const InsightsProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeStamp = styled.small`
  margin-top: 1.6rem;
  display: block;
`;