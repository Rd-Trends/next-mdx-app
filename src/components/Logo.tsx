import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.png";
import footerLogo from "../../public/images/footer-logo.png";

const Logo = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <Link
      href="/"
      key="home"
      className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        className=" w-[211px] md:w-[311px] h-auto"
        loading="eager"
        src={isFooter ? footerLogo : logo}
        alt="Aust Web"
        width={311}
        height={48}
      />
    </Link>
  );
};

export default Logo;
