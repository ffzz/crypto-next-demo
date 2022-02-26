import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    const meta = {
      title: "crypt playground",
      description: "Clone and deploy your own Next.js portfolio in minutes.",
    };

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
