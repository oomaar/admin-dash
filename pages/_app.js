import { ThemeProvider } from "styled-components";
import { theme } from "../global/GlobalStyle";
import { Layout } from "../global/Layout/Layout";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
};

export default App;