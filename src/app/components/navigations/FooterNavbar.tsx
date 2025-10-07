"use client";
import { Mail, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterNavbar() {
  return (
    <footer className="root-bottom-footer flex flex-col bg-[#171616] w-full items-center justify-center">
      <div className="container-bottom-footer flex flex-col w-full p-8 gap-5 lg:px-0 lg:py-10 lg:gap-8 lg:max-w-[988px] xl:max-w-[1208px] 2xl:max-w-[1300px]">
        <div className="company flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-0">
          <div className="company-part flex flex-col gap-5 max-w-[442px]">
            {/* Company Info */}
            <div className="company-info flex flex-col gap-1 text-white">
              <Image
                className="flex max-w-52 lg:max-w-60"
                src={
                  "https://static.wixstatic.com/media/02a5b1_fac2e87ff6c54e0bbc58c5843bb6c148~mv2.webp"
                }
                alt="Logo Vanatama"
                width={500}
                height={500}
              />
              <p className="font-ui font-semibold text-sm text-white/70 lg:text-base">
                Vanatama is a trusted global supplier of premium Vannamei
                shrimp, committed to delivering high-quality, sustainably farmed
                seafood to markets worldwide.
              </p>
            </div>
            {/* Company Legal */}
            <div className="company-legal flex flex-col font-ui text-white gap-1">
              <h4 className="text-lg  font-bold lg:text-xl">
                PT Vanatama Karang Indonesia
              </h4>

              <p className="font-semibold text-sm lg:text-base">Head Office</p>
              <p className="font-medium text-white/70">
                Jakarta Jl. Mampang Prapatan Raya No. 151, Duren Tiga, Kec.
                Pancoran, Jakarta Selatan, DKI Jakarta
              </p>
              <p className="font-semibold text-sm lg:text-base">Farm</p>
              <p className="font-medium text-white/70">
                Karang Hitam Jangkang, Kec.Bantan, Kab. Bengkalis, Riau
              </p>
            </div>
          </div>
          {/* Company Contact*/}
          <div className="contact-part flex flex-col gap-5 lg:flex-row">
            <ul className="menu flex flex-col gap-1.5 text-white/90 font-ui font-medium lg:w-[220px]">
              <h4 className="text-lg font-ui font-bold text-white lg:text-xl">
                Company
              </h4>
              <Link href={"#about"}>
                <li className="hover:cursor-pointer hover:underline hover:text-secondary">
                  About
                </li>
              </Link>
              <Link href={"#products"}>
                <li className="hover:cursor-pointer hover:underline hover:text-secondary">
                  Products
                </li>
              </Link>
              <Link href={"#supply"}>
                <li className="hover:cursor-pointer hover:underline hover:text-secondary">
                  Global Supply
                </li>
              </Link>
              <Link href={"#contact-us"}>
                <li className="hover:cursor-pointer hover:underline hover:text-secondary">
                  Contact us
                </li>
              </Link>
            </ul>
            <ul className="menu flex flex-col gap-1.5 text-white/90 font-ui font-medium lg:w-[220px]">
              <h4 className="text-lg font-ui font-bold text-white lg:text-xl">
                Contact
              </h4>
              <li className="flex flex-row items-center gap-2">
                <PhoneCallIcon className="size-5" />
                (021) 3881-5044
              </li>
              <li className="flex flex-row items-center gap-2">
                <Mail className="size-5" />
                vanatama.id@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright flex w-full justify-center bg-black py-6 text-[#949191] font-ui text-xs lg:text-sm">
        Copyright © 2024 Vanatama. All rights reserved.
      </p>
    </footer>
  );
}
