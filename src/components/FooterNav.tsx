"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

export type NavLinkGroup = {
  NavLink: NavLink[][];
};

export type NavLink = {
  name: string;
  link?: string | UrlObject;
  className?: string;
  childs?: {
    name: string;
    link: string | UrlObject;
  }[];
};

export type navLinkGroups = {
  navLinkGroups: NavLinkGroup[];
};

const FooterNav = ({ navLinkGroups }: navLinkGroups) => {
  const pathname = usePathname();

  return (
    <>
      {navLinkGroups.map((navLinkGroup, indexLinkGroup) =>
        navLinkGroup.NavLink.map((navLink, indexNav) => (
          <ul key={indexNav} className="w-1/2 flex flex-col">
            {navLink.map((navLinkEl, indexLinkEl) => (
              <li key={indexLinkEl} className={navLinkEl.className}>
                {navLinkEl.link && (
                  <Link
                    href={navLinkEl.link}
                    className={" text-lg font-bold hover:text-brand"}>
                    {navLinkEl.name}
                  </Link>
                )}
                {!navLinkEl.link && (
                  <span className={" text-lg font-bold"}>{navLinkEl.name}</span>
                )}
              </li>
            ))}
          </ul>
        ))
      )}
    </>
  );
};

export default FooterNav;
