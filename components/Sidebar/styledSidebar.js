import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  height: 100vh;
  padding: 0.3rem;
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
`;

export const CrossIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  display: none;
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
  }

  :last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }
`;

export const MessageCount = styled.span`
  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  border-radius: ${({ theme }) => theme.border.radiusOne};
  padding: 2px 10px;
`;