import { GlobalStyle } from "../GlobalStyle"
import { Main } from "./styledLayout";

export const Layout = ({ children }) => {
    return (
        <Main>
            <GlobalStyle />
            {children}
        </Main>
    );
};