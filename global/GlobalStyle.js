import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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
  transition: `all 300ms ease`
};

export const Shadow = `0 2rem 3rem #848bc82e`;

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
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    user-select: none;
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }

  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 0.87rem;
  }

  h4 {
    font-size: 0.8rem;
  }

  h5 {
    font-size: 0.77rem;
  }

  small {
    font-size: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.darkVariant};
  }

  b {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ProfilePhoto = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
`;