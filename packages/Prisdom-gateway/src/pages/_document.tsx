import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Prisdom gateway">
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Prisdom team" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
