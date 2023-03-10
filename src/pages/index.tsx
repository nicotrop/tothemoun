import { createClient } from "@prismicio/client";
import sm from "../../sm.json";
import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const arrayArticles = [
  {
    title: "Lorem ipsum dolor sit amet",
    date: "4 Décembre 2022",
    imageURL:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "4 Décembre 2022",
    imageURL:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "4 Décembre 2022",
    imageURL:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "4 Décembre 2022",
    imageURL:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    link: "#",
  },
];

type Article = {
  title: string;
  date: string;
  imageURL: string;
  content: string;
  link: string;
};

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Layout navigation={navigation}>
      <section className="flex flex-col gap-3 my-6 box-content">
        <h2 className="text-2xl font-bold">Derniers articles</h2>
        <div className="flex justify-between">
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
          <Link
            href={"#"}
            className="hover:underline w-[fit-content] text-right min-w-[100px] break-keep-all"
          >
            Voir tout
          </Link>
        </div>
        <div className="xl:grid xl:grid-cols-4 xl:w-full flex overflow-x-scroll xl:overflow-hidden gap-4 scrollbar-hide mt-1">
          {arrayArticles.map((article, i) => {
            return <BlogCard article={article} key={i} />;
          })}
        </div>
      </section>
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

export const BlogCard = ({ article }: { article: Article }) => {
  return (
    <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 min-w-[300px] md:min-w-[335px] xl:min-w-0">
      <Image
        src={article.imageURL}
        alt="card-image"
        height={350}
        width={350}
        className="object-cover w-full aspect-video"
      />
      <div className="flex flex-col gap-1 items-start px-4 pb-4">
        <h5 className="font-bold md:text-lg text-base">{article.title}</h5>
        <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
          {article.date}
        </span>
        <p className="text-sm md:text:base">{article.content}</p>
        <button className="uppercase font-bold tracking-tight">
          <a href={article.link}>{"Lire la suite"}</a>
        </button>
      </div>
    </figure>
  );
};
