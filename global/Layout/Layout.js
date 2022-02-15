import { GlobalStyle } from "../GlobalStyle"

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};