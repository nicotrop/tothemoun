import { createClient } from "@prismicio/client";
import sm from "../../sm.json";
import { Layout } from "@/components/layout";

export default function About({ navigation }: { navigation: any }) {
  return (
    <Layout navigation={navigation}>
      <section>Hello</section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = createClient(sm.apiEndpoint);
  const navigation = await client.getSingle("navigation");

  return {
    props: {
      navigation,
    },
  };
};
