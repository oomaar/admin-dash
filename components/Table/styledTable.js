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
`;

export const TableCell = styled.td`
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.darkVariant};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

export const TableRow = styled.tr`
  :last-child ${TableCell} {
    border: none;
  }
`;