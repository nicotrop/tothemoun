export type Author = {
  author_avatar: AuthorAvatar;
  author_first_name: string;
  author_last_name: string;
  uid: string;
};

export type AuthorAvatar = {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
};

export type Article = {
  article_title: string;
  article_cover: any;
  article_content: any;
  preview: string;
  uid: string;
  date: string;
  article_author: Author;
};

export const mockAuthor: Author = {
  author_first_name: "Clemence",
  author_last_name: "Troplent",
  uid: "ClemTrop",
  author_avatar: {
    alt: "Author avatar",
    url: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    copyright: "",
    dimensions: {
      width: 350,
      height: 500,
    },
  },
};

export const arrayArticles: Article[] = [
  {
    article_title:
      "Democrats are reluctant about Biden 2024, but they see no other choice",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title:
      "Susan Rice to leave role as White House domestic policy chief",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title:
      "Biden to welcome ‘Tennessee Three’ to White House to discuss gun control",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title:
      "Hunter Biden lawyer seeks ethics probe of Greene for ‘verbal abuses’",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title:
      "Wyden asks Texas billionaire for detailed accounting of gifts to Clarence Thomas",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title:
      "Disney parks ban costumes for adults. These fans have a way around it.",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
  {
    article_title: "Why you should avoid social isolation as you age",
    date: "4 Décembre 2022",
    article_cover:
      "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    article_content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas sint, voluptatum sunt dolor commodi dolorum odit? Accusamus autem quae voluptates dolores esse, quam minima distinctio odit nam! Quisquam, illum.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore!",
    uid: "00001",
    article_author: mockAuthor,
  },
];

export const mockBestOfSectionData = {
  title: "Best of",
  subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  link: "#",
  articles: arrayArticles,
};

export const mockArticleSectionData = {
  title: "Derniers articles",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  link: "#",
  articles: arrayArticles,
};

export const mockCollectionData: {
  name: string;
  imageURL: string;
  link: string;
}[] = [
  {
    name: "Collection 1",
    imageURL:
      "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    link: "#",
  },
  {
    name: "Collection 2",
    imageURL:
      "https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80",
    link: "#",
  },
  {
    name: "Collection 3",
    imageURL:
      "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    link: "#",
  },
];

export const mockPromoSectionData: {
  mobileImageURL: string;
  desktopImageURL: string;
  promoLink: string;
} = {
  mobileImageURL:
    "https://images.unsplash.com/photo-1570170615381-62c299188814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  desktopImageURL:
    "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  promoLink: "#",
};

export const mockCollectionSectionData: {
  title: string;
  subtitle: string;
  collections: {
    name: string;
    imageURL: string;
    link: string;
  }[];
} = {
  title: "Collections",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  collections: mockCollectionData,
};

export type navigationItemType = {
  item_icon: {
    alt: string;
    dimensions: {
      height: number;
      width: number;
    };
    url: string;
  };
  item_link: {
    first_publication_date: string;
    id: string;
    isBroken: boolean;
    lang: string;
    last_publication_date: string;
    link_type: string;
    slug: string;
    tags: string[];
    type: string;
    uid: string;
  };
  item_name: string;
};

export type navigationType = {
  data: {
    navigation_item: navigationItemType[];
  };
};

export const mockNavigation: navigationType = {
  data: {
    navigation_item: [
      {
        item_icon: {
          alt: "bicycle icon",
          dimensions: {
            height: 150,
            width: 188,
          },
          url: "https://tothemoun.cdn.prismic.io/tothemoun/04b190f8-6b58-4c7f-9901-5e63c8bef624_person-biking-solid+%281%29.svg",
        },
        item_link: {
          first_publication_date: "2023-03-14T13:23:48+0000",
          id: "ZBB1VRAAABWUZR24",
          isBroken: false,
          lang: "en-us",
          last_publication_date: "2023-03-14T13:23:48+0000",
          link_type: "Web",
          slug: "que-faire-en-guadeloupe",
          tags: [],
          type: "que-faire-en-guadeloupe",
          uid: "blog",
        },
        item_name: "Que faire en Guadeloupe?",
      },
      {
        item_icon: {
          alt: "utensils icon",
          dimensions: {
            height: 150,
            width: 131,
          },
          url: "https://tothemoun.cdn.prismic.io/tothemoun/8eed07a4-68b1-49eb-8fc2-eb39da413729_utensils-solid.svg",
        },
        item_link: {
          first_publication_date: "2023-03-14T13:23:48+0000",
          id: "ZBB1VRAAABWUZR24",
          isBroken: false,
          lang: "en-us",
          last_publication_date: "2023-03-14T13:23:48+0000",
          link_type: "Web",
          slug: "food-drinks",
          tags: [],
          type: "food-drinks",
          uid: "blog",
        },
        item_name: "Food & Drinks",
      },
      {
        item_icon: {
          alt: "house icon",
          dimensions: {
            height: 150,
            width: 169,
          },
          url: "https://tothemoun.cdn.prismic.io/tothemoun/51dca54c-0783-46e0-8e52-1ac41ad113ef_house-solid.svg",
        },
        item_link: {
          first_publication_date: "2023-03-14T13:23:48+0000",
          id: "ZBB1VRAAABWUZR24",
          isBroken: false,
          lang: "en-us",
          last_publication_date: "2023-03-14T13:23:48+0000",
          link_type: "Web",
          slug: "ou-loger",
          tags: [],
          type: "ou-loger",
          uid: "blog",
        },
        item_name: "Où loger?",
      },
    ],
  },
};
