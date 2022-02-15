import styled from 'styled-components';
import { Dashboard, Sidebar } from '../components';
import { NextHead } from '../global/NextHead';

const Application = styled.main`
  display: grid;
  gap: 1.8rem;
  margin: 0 auto;
  width: 96%;
  grid-template-columns: 16rem auto 23rem;
`;

const Home = () => {
  return (
    <Application>
      <NextHead title="Dashboard" />

      <Sidebar />
      <Dashboard />
    </Application>
  );
};
export default Home;