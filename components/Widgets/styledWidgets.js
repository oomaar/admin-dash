import styled from 'styled-components';
import { Shadow } from '../../global/GlobalStyle';

export const RightContainer = styled.div`
  margin-top: 1.4rem;
  
  h2 {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: 768px) {
    width: 94%;
    margin: 0 auto 4rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    padding: 0 0.8rem;
    height: 4.6rem;
    width: 100%;
    z-index: 2;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1rem 1rem ${({ theme }) => theme.colors.light};
  }
`;

export const MenuButton = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
    background: transparent;
    cursor: pointer;
    position: absolute;
    left: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ThemeToggler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  width: 4.2rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.titleColor};
  border-radius: ${({ theme }) => theme.border.radiusOne};

  span {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.border.radiusOne};
    }
  }

  @media screen and (max-width: 768px) {
    width: 4.4rem;
    position: absolute;
    left: 66%;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 2rem;
  text-align: right;
  align-items: center;
`;

export const Info = styled.div`
  small {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  h3 {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfilePhoto = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const RecentUpdates = styled.div`
  margin-top: 1rem;

  h2 {
    margin-bottom: 0.8rem;
  }
`;

export const Updates = styled.div`
  box-shadow: ${Shadow};
  padding: ${({ theme }) => theme.pad.card};
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.card};

  :hover {
    box-shadow: none;
  }
`;

export const Update = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 2.6rem auto;
  margin-bottom: 1rem;
  place-items: center;

  small {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: 768px) {
    place-items: unset;
  }
`;

export const SalesAnalytics = styled.div`
  margin-top: 2rem;

  h2 {
    margin-bottom: 0.8rem;
  }
`;

export const ItemOutline = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.7rem;
  box-shadow: ${Shadow};
  padding: 1rem ${({ theme }) => theme.pad.card};
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radiusThree};

  :hover {
    box-shadow: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  padding: 0.6rem;
  border-radius: 50%;
  font-size: 1.6rem;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};

  &.danger {
    background: ${({ theme }) => theme.colors.danger};
  }

  &.success {
    background: ${({ theme }) => theme.colors.success};
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;

  h5 {
    &.success {
        color: ${({ theme }) => theme.colors.success};
    }

    &.danger {
        color: ${({ theme }) => theme.colors.danger};
    }
  }
  
  h3 {
        color: ${({ theme }) => theme.colors.titleColor};
    }
`;

export const AddProduct = styled.div`
  background: transparent;
  border: 2px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radiusThree};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;

  h3 {
    font-weight: 600;
  }
`;
