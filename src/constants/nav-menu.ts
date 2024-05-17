export const NavigationMenuItems: NavMenuItems = {
  Produkte: {
    de: { name: "Produkte", link: "/produkte" },
    en: { name: "Product", link: "/product" },

    children: {
      Starter: {
        de: { name: "Starter", link: "/starter" },
        en: { name: "Starter", link: "/starter" },
      },
      Licht: {
        de: { name: "Licht", link: "/licht" },
        en: { name: "Lighting", link: "/lighting" },
      },
      Audio: {
        de: { name: "Audio", link: "/audio" },
        en: { name: "Audio", link: "/audio" },
      },
      Video: {
        de: { name: "Video", link: "/video" },
        en: { name: "Video", link: "/video" },
      },
      Bühne: {
        de: { name: "Bühne", link: "/buehne" },
        en: { name: "Staging", link: "/staging" },
      },
      Traversen: {
        de: { name: "Traversen", link: "/traversen" },
        en: { name: "Trussing", link: "/trussing" },
      },
    },
  },

  Lösungen: {
    de: { name: "Lösungen", link: "/loesungen" },
    en: { name: "Solutions", link: "/solutions" },

    children: {
      Messe: {
        de: { name: "Messe", link: "/messe" },
        en: { name: "Show + Exhibition", link: "/show-exhibition" },
      },
      Theater: {
        de: { name: "Theater", link: "/theater" },
        en: { name: "Theatre", link: "/theatre" },
      },
      Veranstaltung: {
        de: { name: "Veranstaltung", link: "/veranstaltung" },
        en: { name: "Event + Entertainment", link: "/event-entertainment" },
      },
      Beratung: {
        de: { name: "Beratung", link: "/beratung" },
        en: { name: "Consulting", link: "/consulting" },
      },
      Entwicklung: {
        de: { name: "Entwicklung", link: "/entwicklung" },
        en: { name: "Development", link: "/development" },
      },
      Training: {
        de: { name: "Training", link: "/training" },
        en: { name: "Training", link: "/training" },
      },
    },
  },

  VStatics: {
    de: { name: "VStatics", link: "/vstatics" },
    en: { name: "VStatics", link: "/vstatics" },
  },
  Fairground: {
    de: { name: "Fairground", link: "/fairground" },
    en: { name: "Fairground", link: "/fairground" },
  },
  Support: {
    de: { name: "Support", link: "/support" },
    en: { name: "Support", link: "/support" },
  },
  //   News: {
  //     de: { name: "News", link: "/#" },
  //     en: { name: "News", link: "/#" },
  //   },
  //   Shop: {
  //     de: { name: "Shop", link: "/#" },
  //     en: { name: "Shop", link: "/#" },
  //   },
  //   Suchen: {
  //     de: { name: "Suchen", link: "/#" },
  //     en: { name: "Search", link: "/#" },
  //   },
};

export type NavMenuItems = Record<
  string,
  {
    en: NavItem;
    de: NavItem;
    children?: Record<
      string,
      {
        en: NavItem;
        de: NavItem;
      }
    >;
  }
>;

export type ChildNavMenuItems = Record<
  string,
  { en: NavItem; de: NavItem; children?: ChildNavMenuItems }
>;

export type NavItem = {
  name: string;
  link: string;
};

export type NavItems = [
  string,
  {
    en: NavItem;
    de: NavItem;
    children?:
      | Record<
          string,
          {
            en: NavItem;
            de: NavItem;
          }
        >
      | undefined;
  }
][];

export type Locale = "en" | "de";
