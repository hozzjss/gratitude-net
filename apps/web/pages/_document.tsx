import { Html, Head, Main, NextScript } from "next/document";
import { AppContainer, ResponsiveAppBar } from "@gratitude-net/ui";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0 }}>
        <AppContainer>
          <Main />
        </AppContainer>
        <NextScript />
      </body>
    </Html>
  );
}
