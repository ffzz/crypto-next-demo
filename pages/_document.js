import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    const meta = {
      title: "crypt playground",
      description:
        "This is a demo for signing and verifying with the asymmetric encryption algorithm prime256v1 (p-256).",
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
