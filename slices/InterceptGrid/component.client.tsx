import { InterceptImprovedGrid } from "@/components/mixedGridImproved";
import { checkTag, sortArticles } from "@/utils/helpers";
import { KeyTextField } from "@prismicio/types";
import { createClient } from "prismicio";
import { useEffect, useState } from "react";
import { BlogPostDocument, CollectionDocument } from "types.generated";

export const ClientComponent = ({
  collection,
  description,
  title,
}: {
  title: string;
  collection: CollectionDocument;
  description?: KeyTextField;
}) => {
  const [collectionData, setCollectionData] = useState<{
    mainArticle: BlogPostDocument;
    otherArticles: { article: BlogPostDocument }[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const tag = collection.uid.toLowerCase();

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const client = createClient();
        let response = await client.getAllByType("blog_post");
        let filtered;

        checkTag(tag, response)
          ? (filtered = sortArticles(response, tag))
          : (filtered = null);

        setCollectionData(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCollectionData();
  }, [tag]);

  return isLoading ? (
    <span>loading...</span>
  ) : (
    collectionData && (
      <InterceptImprovedGrid
        mainArticle={collectionData?.mainArticle}
        otherArticles={collectionData?.otherArticles}
        title={title}
        description={description}
        collection={collection}
      />
    )
  );
};
