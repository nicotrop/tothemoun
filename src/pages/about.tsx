import { createClient } from "@prismicio/client";
import sm from "../../sm.json";

export default function About({ navigation }: { navigation: any }) {
  return <div>hi</div>;
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
