"use client";

import { useEffect, useState } from "react";
import { CollectionDocument } from "types.generated";
import { Articles } from ".";
import { createClient } from "prismicio";
import { checkTag } from "@/utils/helpers";
import { SquareCardCarouselComp } from "slices/SquareCardCarousel/squareCardsCarousel";

export const ClientCollection = ({
  collection,
}: {
  collection: CollectionDocument;
}) => {
  const [data, setData] = useState<Articles | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const tag = collection.uid.toLowerCase();

  useEffect(() => {
    const clientFetch = async () => {
      try {
        const client = createClient();
        let response = await client.getAllByType("blog_post");
        let formatted;

        checkTag(tag, response)
          ? (formatted = response
              .filter((item) => {
                return item.tags.includes(tag);
              })
              .map((item) => {
                return { article: item };
              }))
          : (formatted = null);

        setData(formatted);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    clientFetch();
  }, [tag]);

  isLoading && <span>loading...</span>;

  return (
    <SquareCardCarouselComp articles={data} title={collection.data.title} />
  );
};
