"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppButton from "../buttons/AppButton";
import { AlignLeftIcon } from "lucide-react";
import HeaderNavbarItem from "./HeaderNavbarItem";
import SideMenuMobile from "./SideMenuMobile";

export default function HeaderNavbar({}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Render if component client mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <React.Fragment>
      <div className="navbar-group sticky flex flex-col top-0 left-0 z-[90] lg:flex-col-reverse">
        <div className="navbar-root flex w-full bg-primary items-center justify-center shadow-md">
          <div className="navbar-container flex items-center w-full justify-between py-4 px-5 lg:px-0 lg:py-3.5 lg:max-w-[988px] xl:max-w-[1208px] 2xl:max-w-[1300px]">
            <Link href={"/"}>
              {mounted && (
                <Image
                  className="max-w-[142px] lg:max-w-[168px]"
                  src={
                    "https://static.wixstatic.com/media/02a5b1_fac2e87ff6c54e0bbc58c5843bb6c148~mv2.webp"
                  }
                  alt="Logo Vanatama"
                  width={320}
                  height={320}
                />
              )}
            </Link>
            <nav className="menu-container hidden lg:flex">
              <ul className="menu-item-list flex items-center gap-10">
                <HeaderNavbarItem menuTitle="Home" menuUrl="/" />
                <HeaderNavbarItem menuTitle="About" menuUrl="#about" />
                <HeaderNavbarItem menuTitle="Products" menuUrl="#products" />
                <HeaderNavbarItem menuTitle="Galleries" menuUrl="/galleries" />
                <HeaderNavbarItem menuTitle="Blog" menuUrl="/blog" />
                <Link href="#contact-us">
                  <AppButton variant="outline" size="defaultRounded">
                    Contact us
                  </AppButton>
                </Link>
              </ul>
            </nav>
            <div className="flex items-center gap-4 lg:hidden">
              <AppButton
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
              >
                <AlignLeftIcon className="size-6 text-white" />
              </AppButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <SideMenuMobile
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </React.Fragment>
  );
}
