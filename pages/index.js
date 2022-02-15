import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Dashboard, Sidebar, Table, Widgets } from '../components';
import { darkTheme, GlobalStyle, theme } from '../global/GlobalStyle';
import { NextHead } from '../global/NextHead';

const Application = styled.main`
  display: grid;
  gap: 1.8rem;
  margin: 0 auto;
  width: 96%;
  grid-template-columns: 16rem auto 23rem;

  @media screen and (max-width: 1200px) {
    width: 94%;
    grid-template-columns: 7rem auto 23rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleDarkTheme, setToggleDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={toggleDarkTheme ? darkTheme : theme}>
      <Application>
        <GlobalStyle />
        <NextHead title="Dashboard" />

        <Sidebar toggleShow={toggleShow} setToggleShow={setToggleShow} />
        <div>
          <Dashboard />
          <Table />
        </div>
        <div>
          <Widgets
            toggleDarkTheme={toggleDarkTheme}
            setToggleDarkTheme={setToggleDarkTheme}
            setToggleShow={setToggleShow}
          />
        </div>
      </Application>
    </ThemeProvider>
  );
};

export default Home;