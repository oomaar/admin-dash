import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
  border: 1px solid red;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
`;

export const Logo = styled.p`
  span {
    color: #cd5681;
  }
`;

export const CrossIcon = styled.div`
  cursor: pointer;
  color: #cd5681;
`;

export const SidebarList = styled.ul`
  padding: 0;
`;

export const SidebarLink = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0;

  span {
    margin: 0 1rem;
  }
`;

export const SidebarIcon = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  span {
    margin: 0 1rem;
  }
`;