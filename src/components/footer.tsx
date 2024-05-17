import React from "react";
import FooterNav, { NavLinkGroup, NavLink } from "./FooterNav";
import Container from "./Container";
import Logo from "./Logo";

const Footer = ({ locale }: { locale: string }) => {
  const deNavItems: NavLink[] = [
    {
      name: "Lösungen",
      link: "/loesungen",
    },
    {
      name: "Produkte",
      link: "/produkte",
    },
    {
      name: "VStatics",
      link: "/vstatics",
    },
    {
      name: "Fairground",
      link: "/fairground",
    },
  ];

  const deNavItems2: NavLink[] = [
    {
      name: "Referenzen",
      link: "/referenzen",
    },
    {
      name: "Unternehmen",
      link: "/unternehmen",
    },
    {
      name: "Kontakt",
      link: "/kontakt",
    },
  ];

  const deNavItems3: NavLink[] = [
    {
      name: "Support",
      link: "/support",
    },
    {
      name: "Tutorials",
      link: "/tutorials",
    },
    {
      name: "FAQ",
      link: "/faq",
      className: "mb-6",
    },

    {
      name: "Lizenzen",
      link: "/lizenzen",
    },
    {
      name: "Version",
      link: "/version",
    },
    {
      name: "Update",
      link: "/update",
    },
    {
      name: "Download",
      link: "/download",
    },
  ];

  const deNavItems4: NavLink[] = [
    {
      name: "Testversion bestellen",
      link: "/testversion-bestellen",
    },
    {
      name: "Newsletter bestellen",
      link: "/newsletter-bestellen",
      className: "mb-6",
    },
    {
      name: "Impressum",
      link: "/impressum",
    },
    {
      name: "Datenschultz",
      link: "/datenschultz",
      className: "mb-6",
    },

    {
      name: "Sitemap",
      link: "/sitemap-de.xml",
      className: "mb-6",
    },

    {
      name: "© AutoSTAGE GmbH 2024",
    },
  ];

  const engNavItems: NavLink[] = [
    {
      name: "Solutions",
      link: "/solutions",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "VStatics",
      link: "/vstatics",
    },
    {
      name: "Fairground",
      link: "/fairground",
    },
  ];

  const engNavItems2: NavLink[] = [
    {
      name: "References",
      link: "/references",
    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const engNavItems3: NavLink[] = [
    {
      name: "Support",
      link: "/support",
    },
    {
      name: "Tutorials",
      link: "/tutorials",
    },
    {
      name: "FAQ",
      link: "/faq",
      className: "mb-6",
    },

    {
      name: "License",
      link: "/license",
    },
    {
      name: "Version",
      link: "/version",
    },
    {
      name: "Update",
      link: "/update",
    },
    {
      name: "Download",
      link: "/download",
    },
  ];

  const engNavItems4: NavLink[] = [
    {
      name: "Get Free Trial",
      link: "/get-free-trial",
    },

    {
      name: "Get Newsletter",
      link: "/get-newsletter",
      className: "mb-6",
    },

    {
      name: "About",
      link: "/about",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
      className: "mb-6",
    },

    {
      name: "Sitemap",
      link: "/sitemap-en.xml",
      className: "mb-6",
    },

    {
      name: "© Autostage GmbH 2023",
    },
  ];

  const deNavGroups: NavLinkGroup[] = [
    {
      NavLink: [deNavItems, deNavItems2, deNavItems3, deNavItems4],
    },
  ];

  const engNavGroups: NavLinkGroup[] = [
    {
      NavLink: [engNavItems, engNavItems2, engNavItems3, engNavItems4],
    },
  ];

  let navGroups = deNavGroups;
  if (locale === "en") {
    navGroups = engNavGroups;
  }

  return (
    <Container className="bg-deepblue text-white mt-5">
      <footer className="">
        <div className="flex-wrap md:flex-nowrap py-12 flex justify-between">
          <div className="mb-5 w-full md:w-3/12 md:mb-0 logo__wrapper text-center">
            <Logo isFooter />
          </div>

          <div className="flex-wrap md:flex-nowrap py-5 w-full md:p-0 md:w-8/12 flex justify-between">
            <FooterNav navLinkGroups={navGroups} />
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
