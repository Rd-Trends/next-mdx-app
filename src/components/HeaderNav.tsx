"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AlignJustifyIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import { use100vh } from "react-div-100vh";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import {
  ChildNavMenuItems,
  Locale,
  NavItems,
  NavigationMenuItems,
} from "@/constants/nav-menu";
import { getPathForLocale } from "@/utils/getPathForLocale";

type LanguageOption = {
  url: string;
  lang: Locale;
  name: string;
};

type Props = {
  languageOptions: LanguageOption[];
  locale: "en" | "de";
};

const HeaderNav = ({ locale, languageOptions }: Props) => {
  const navItems = Object.entries(NavigationMenuItems);

  return (
    <div>
      <nav className="hidden lg:flex items-center space-x-2 ">
        <ul className=" list-none flex items-center space-x-2">
          {navItems.map(([path, menuItem], index) => {
            const navItem = menuItem[locale];
            const children = menuItem?.children;

            return (
              <NavItem
                key={path}
                name={navItem.name}
                link={navItem.link}
                childMenu={children}
                locale={locale}
              />
            );
          })}
        </ul>
        <LanguageSelector languageOptions={languageOptions} locale={locale} />
      </nav>

      <MobileMenu
        navItems={navItems}
        languageOptions={languageOptions}
        locale={locale}
      />
    </div>
  );
};

export default HeaderNav;

type NavItemProp = {
  name: string;
  link: string;
  childMenu?: ChildNavMenuItems;
  locale: Locale;
};

const NavItem = ({ name, link, childMenu, locale }: NavItemProp) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.includes(link as unknown as string);

  return (
    <li
      className={"group relative flex flex-col items-center space-x-4"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Link
        className={clsx(
          " group-hover:text-brand text-black text-lg leading-none font-medium px-1",
          {
            "text-brand": isActive,
          }
        )}
        href={link}>
        {name}
      </Link>
      {childMenu && hover && (
        <ul
          className={
            " absolute top-full -left-[1rem] z-100 " +
            " bg-white list-none p-[1rem] space-y-4 min-w-[140px] "
          }>
          {Object.entries(childMenu).map(([path, item]) => {
            const menuItem = item[locale];
            return (
              <li key={path}>
                <Link
                  className=" text-black font-medium hover:text-brand whitespace-nowrap "
                  href={menuItem.link}>
                  {menuItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

const LanguageSelector = ({
  languageOptions,
  locale,
}: {
  languageOptions: LanguageOption[];
  locale: Locale;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    router.push(target);
  };

  return (
    <ul className=" flex items-center divide-x-[2px] divide-black">
      {!!languageOptions.length &&
        languageOptions.map((option, index) => (
          <li
            key={index}
            className=" h-[14px] flex flex-col justify-center px-2">
            {option.lang === locale ? (
              <span className=" text-brand text-lg font-medium tracking-[2%]">
                {option.name}
              </span>
            ) : (
              <Link
                href={
                  getPathForLocale({
                    currentPath: pathname,
                    currentLocale: locale,
                    desiredLocale: option.lang,
                  }) ?? ""
                }
                lang={option.lang}
                className={
                  "hover:text-brand text-black text-lg tracking-[2%] font-medium py-0"
                }
                onClick={(e) =>
                  handleLocaleChange(
                    e,
                    option.lang === locale
                      ? option.url +
                          getPathForLocale({
                            currentPath: pathname,
                            currentLocale: locale,
                            desiredLocale: locale,
                          }) ?? ""
                      : option.url +
                          getPathForLocale({
                            currentPath: pathname,
                            currentLocale: locale,
                            desiredLocale: option.lang,
                          }) ?? ""
                  )
                }>
                {option.name}
              </Link>
            )}
          </li>
        ))}
    </ul>
  );
};

const MobileMenu = ({
  navItems,
  languageOptions,
  locale,
}: {
  navItems: NavItems;
  languageOptions: LanguageOption[];
  locale: Locale;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const height = use100vh() || "100vh";
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className={
          "inline-flex items-center p-2 w-10 h-10 justify-center text-sm " +
          "text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 " +
          "focus:outline-none focus:ring-2 focus:ring-gray-200"
        }
        aria-controls="navbar-dropdown"
        onClick={handleClick}
        aria-expanded="true">
        {!isOpen ? <AlignJustifyIcon /> : <XIcon />}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <div
            className={clsx(
              " fixed top-0 right-0 w-full bottom-0  z-50 transform lg:hidden"
            )}>
            {/* overlay */}
            <motion.div
              style={{ height }}
              className={clsx(
                "fixed top-0 left-0 w-full bg-black z-0 bg-opacity-50",
                " transition-opacity duration-50 "
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClick}
            />

            <motion.div
              style={{ height }}
              className={clsx(
                " py-4 md:py-6 w-[400px] max-w-[80vw] absolute right-0 bg-white overflow-y-auto",
                "transition-transform transform duration-300 space-y-4 md:space-y-6"
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}>
              <div className=" flex px-4 items-center justify-between">
                <Logo />
                <button>
                  <XIcon onClick={handleClick} />
                </button>
              </div>

              <ul className=" mx-4 px-4 space-y-2 bg-neutral-100 rounded-lg">
                {navItems.map(([key, item]) => {
                  const navItem = item[locale];
                  const children = item?.children;
                  const isActive = pathname.includes(
                    navItem.link as unknown as string
                  );
                  return (
                    <li key={key}>
                      <Link
                        href={navItem.link}
                        onClick={handleClick}
                        className={clsx("block py-2 font-medium text-black", {
                          "text-brand": isActive,
                        })}>
                        {navItem.name}
                      </Link>
                      {!!children && (
                        <ul className=" space-y-1">
                          {Object.entries(children).map(([childKey, item]) => {
                            const menuItem = item[locale];
                            const isActive = pathname.includes(
                              menuItem.link as string
                            );

                            return (
                              <li key={childKey}>
                                <Link
                                  href={menuItem.link}
                                  onClick={handleClick}
                                  className={clsx(
                                    "block py-2 ml-4 font-medium text-black",
                                    {
                                      "text-brand": isActive,
                                    }
                                  )}>
                                  {menuItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className=" bg-neutral-100 py-4 mx-4 rounded-lg">
                <LanguageSelector
                  languageOptions={languageOptions}
                  locale={locale}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
