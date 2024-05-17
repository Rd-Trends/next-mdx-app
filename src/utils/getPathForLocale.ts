import { Locale, NavigationMenuItems } from "@/constants/nav-menu";

export const getPathForLocale = (params: {
  currentPath: string;
  currentLocale: Locale;
  desiredLocale: Locale;
}) => {
  const { currentLocale, currentPath, desiredLocale } = params;

  // handle index route
  if (currentPath === "/") return "/";

  for (const [key, item] of Object.entries(NavigationMenuItems)) {
    const pathInCurrentLocale = item[currentLocale].link;
    const children = item?.children;

    if (pathInCurrentLocale === currentPath) {
      return item[desiredLocale].link;
    }

    if (children) {
      for (const [childKey, childItem] of Object.entries(children)) {
        const childPathName = childItem[currentLocale].link;

        if (childPathName === currentPath) {
          return childItem[desiredLocale].link;
        }
      }
    }
  }
};
