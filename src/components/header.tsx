import React from "react";
import HeaderNav from "./HeaderNav";
import { UrlObject } from "url";
import Container from "./Container";
import Logo from "./Logo";
import { Locale } from "@/constants/nav-menu";

type NavLink = {
  name: string;
  link: string | UrlObject;
  childs?: {
    name: string;
    link: string | UrlObject;
  }[];
};

type Props = {
  languageDomains: LanguageOption[];
  navLinks: NavLink[];
  locale: string;
};

interface LanguageOption {
  url: string;
  lang: Locale;
  name: string;
}

const enDomain = process.env.EN_LANG_DOMAIN!;
const deDomain = process.env.DE_LANG_DOMAIN!;

const languageDomains: LanguageOption[] = [
  { url: deDomain, lang: "de", name: "de" },
  { url: enDomain, lang: "en", name: "en" },
];

const Header = ({ locale }: { locale: Locale }) => {
  return (
    <Container className="bg-white">
      <div className="w-full flex items-end justify-between mx-auto py-[1rem] md:pt-8 md:pb-[22px] xl:pt-[47px]">
        <Logo />
        <HeaderNav languageOptions={languageDomains} locale={locale} />
      </div>
    </Container>
  );
};

export default Header;
