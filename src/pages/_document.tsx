import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=tothemoun">
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
