import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        primary: "#7380ec",
        danger: "#ff7782",
        success: "#41f1b6",
        warning: "#ffbb55",
        white: "#fff",
        infoDark: "#7d8da1",
        infoLight: "#dce1eb",
        dark: "#363949",
        light: "#848bc82e",
        primaryVariant: "#111e88",
        darkVariant: "#677483",
        bodyColor: "#f6f6f9"
    },
    border: {
        card: "2rem",
        radiusOne: "0.4rem",
        radiusTwo: "0.8rem",
        radiusThree: "1.2rem"
    },
    pad: {
        card: "1.8rem",
        paddOne: "1.2rem"
    },
    shadow: `0 2rem 3rem ${({ theme }) => theme.colors.light}`
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;