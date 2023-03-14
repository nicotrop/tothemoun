import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import { AppProps } from "next/app";
import "../styles/globals.css";
import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("tothemoun");
const client = prismic.createClient(endpoint);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      client={client}
      internalLinkComponent={(props) => <Link {...props} />}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
