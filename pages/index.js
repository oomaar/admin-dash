import styled from 'styled-components';
import { Sidebar } from '../components';
import { NextHead } from '../global/NextHead';

const Application = styled.div``;

const Home = () => {
  return (
    <Application>
      <NextHead title="Dashboard" />

      <Sidebar />
    </Application>
  );
};
export default Home;