import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "blog_post",
    path: "/blog/article/:uid",
  },
  {
    type: "blog_collection",
    path: "/blog/:uid",
  },
  {
    type: "blog_post",
    resolvers: {
      category: "category",
      collection: "category.collection",
    },
    path: "/blog/:collection?/:category?/:uid",
  },
  {
    type: "blog_post",
    resolvers: {
      category: "category",
    },
    path: "/que-faire-en-guadeloupe/:category?/:uid",
  },
  // {
  //   type: "blog_post",
  //   resolvers: {
  //     category: "category",
  //   },
  //   path: "/logement-guadeloupe/:category?/:uid",
  // },
  // {
  //   type: "blog_post",
  //   resolvers: {
  //     category: "category",
  //   },
  //   path: "/food-drinks/:category?/:uid",
  // },
  // {
  //   type: "blog_post",
  //   resolvers: {
  //     category: "category",
  //   },
  //   path: "/best-of-guadeloupe/:category?/:uid",
  // },
  {
    type: "page",
    path: "/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
