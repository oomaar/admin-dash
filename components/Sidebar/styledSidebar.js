import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  height: 100vh;
  padding: 0.3rem;

  h2 {
    @media screen and (max-width: 1200px) {
      display: none;
    }

    @media screen and (max-width: 768px) {
      display: inline;
    }
  }

  h3 {
    @media screen and (max-width: 1200px) {
      display: none;
    }

    @media screen and (max-width: 768px) {
      display: inline;
    }
  }

  @media screen and (max-width: 768px) {
    left: 0;
    z-index: 3;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    padding: ${({ theme }) => theme.pad.card};
    transition: ${({ theme }) => theme.transition};
    background: ${({ theme }) => theme.colors.white};
    opacity: ${({ toggleShow }) => toggleShow ? "1" : "0"};
    width: ${({ toggleShow }) => toggleShow ? "18rem" : "0"};
    box-shadow: 1rem 3rem 4rem ${({ theme }) => theme.colors.white};
    visibility: ${({ toggleShow }) => toggleShow ? "visible" : "hidden"};
    transform: ${({ toggleShow }) => toggleShow ? "translateX(0)" : "translateX(-200vw)"};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.4rem;
`;

export const Logo = styled.div`
  span {
    color: ${({ theme }) => theme.colors.danger};
  }

  h2 {
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const CrossIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
  }
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;
  padding: 0;
`;

export const SidebarIcon = styled.div`
  font-size: 1.6rem;
  transition: ${({ theme }) => theme.transition};
`;

export const SidebarLink = styled.li`
  list-style: none;

  h3 {
    font-weight: 600;
  }

  a {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.infoDark};
    margin-left: 2rem;
    position: relative;
    height: 3.7rem;
    transition: ${({ theme }) => theme.transition};

    &.active {
      background: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.primary};
      margin-left: 0;

      ::before {
        content: "";
        width: 6px;
        height: 100%;
        background: ${({ theme }) => theme.colors.primary};
      }
    }

    &.active ${SidebarIcon} {
      color: ${({ theme }) => theme.colors.primary};
      margin-left: calc(1rem - 6px);
    }

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    :hover ${SidebarIcon} {
      margin-left: 1rem;
    }

    @media screen and (max-width: 1200px) {
      width: 5.6rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 3.4rem;
    }
  }

  :last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;

    @media screen and (max-width: 1200px) {
      position: relative;
      margin: 1.8rem 0 0;
    }

    @media screen and (max-width: 768px) {
      position: absolute;
      bottom: 5rem;
    }
  }
`;

export const MessageCount = styled.span`
  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 11px;
  border-radius: ${({ theme }) => theme.border.radiusOne};
  padding: 2px 10px;
`;