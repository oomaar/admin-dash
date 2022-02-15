import styled from 'styled-components';
import { Shadow } from '../../global/GlobalStyle';

export const TableContainer = styled.div`
  margin-top: 2rem;

  a {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 1200px) {
    width: 94%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem 0 0 8.8rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    margin: 3rem 0 0;
    width: 100%;
    padding: 0 0.3rem;
  }
`;

export const TableTitle = styled.h2`
  margin-bottom: 0.8rem;
`;

export const TableLayout = styled.table`
  width: 100%;
  text-align: center;
  box-shadow: ${Shadow};
  padding: ${({ theme }) => theme.pad.card};
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.card};

  :hover {
    box-shadow: none;
  }

  @media screen and (max-width: 1200px) {
    width: 83vw;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const TableCell = styled.td`
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.darkVariant};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};

  &.danger {
    color: ${({ theme }) => theme.colors.danger};
  }

  &.warning {
    color: ${({ theme }) => theme.colors.warning};
  }

    &:last-child,
    &:first-child {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
`;

export const TableRow = styled.tr`
    &:last-child th,
    &:first-child th {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

  :last-child ${TableCell} {
    border: none;
  }
`;