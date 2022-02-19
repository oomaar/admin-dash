import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar, Widgets } from "../../components";
import { darkTheme, GlobalStyle, theme } from "../GlobalStyle";
import { Application } from "./styledLayout";

export const Layout = ({ children }) => {
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleDarkTheme, setToggleDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={toggleDarkTheme ? darkTheme : theme}>
      <GlobalStyle />
      <Application>
        <Sidebar toggleShow={toggleShow} setToggleShow={setToggleShow} />
        {children}
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
