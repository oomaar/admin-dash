import Head from "next/head";

export const NextHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>

            {/* Google Font: Poppins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Favicon */}
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        </Head>
    );
};