import { UrlObject } from "url";

type NavLink = {
  name: string;
  link: string | UrlObject;
  childs?: {
    name: string;
    link: string | UrlObject;
  }[];
};

export const engNavItems: NavLink[] = [
  {
    name: "Solutions",
    link: "/solutions",
    childs: [
      {
        name: "Show + Exhibition",
        link: "/show-exhibition",
      },
      {
        name: "Theatre",
        link: "/theatre",
      },
      {
        name: "Event + Entertainment",
        link: "/event-entertainment",
      },
      {
        name: "Consulting",
        link: "/consulting",
      },
      {
        name: "Development",
        link: "/development",
      },
      {
        name: "Training",
        link: "/training",
      },
    ],
  },
  {
    name: "Products",
    link: "/products",
    childs: [
      {
        name: "Starter",
        link: "/starter",
      },
      {
        name: "Lighting",
        link: "/lighting",
      },
      {
        name: "Audio",
        link: "/audio",
      },
      {
        name: "Video",
        link: "/video",
      },
      {
        name: "Staging",
        link: "/staging",
      },
      {
        name: "Trussing",
        link: "/trussing",
      },
    ],
  },
  {
    name: "VStatics",
    link: "/vstatics",
  },
  {
    name: "Fairground",
    link: "/fairground",
  },
  {
    name: "Support",
    link: "/support",
  },
  //   {
  //     name: "News",
  //     link: "/#",
  //   },
  //   {
  //     name: "Shop",
  //     link: "/#",
  //   },
  //   {
  //     name: "Search",
  //     link: "/#",
  //   },
];

export const deNavItems: NavLink[] = [
  {
    name: "Lösungen",
    link: "/loesungen",
    childs: [
      {
        name: "Messe",
        link: "/messe",
      },
      {
        name: "Theater",
        link: "/theater",
      },
      {
        name: "Veranstaltung",
        link: "/veranstaltung",
      },
      {
        name: "Beratung",
        link: "/beratung",
      },
      {
        name: "Entwicklung",
        link: "/entwicklung",
      },
      {
        name: "Training",
        link: "/training",
      },
    ],
  },
  {
    name: "Produkte",
    link: "/produkte",
    childs: [
      {
        name: "Starter",
        link: "/starter",
      },
      {
        name: "Licht",
        link: "/licht",
      },
      {
        name: "Audio",
        link: "/audio",
      },
      {
        name: "Video",
        link: "/video",
      },
      {
        name: "Bühne",
        link: "/buehne",
      },
      {
        name: "Traversen",
        link: "/traversen",
      },
    ],
  },
  {
    name: "VStatics",
    link: "/vstatics",
  },
  {
    name: "Fairground",
    link: "/fairground",
  },
  {
    name: "Support",
    link: "/support",
  },
  // {
  //     name: 'News',
  //     link: '/#'
  // },
  // {
  //     name: 'Shop',
  //     link: '/#'
  // },
  // {
  //     name: 'Suchen',
  //     link: '/#'
  // }
];
