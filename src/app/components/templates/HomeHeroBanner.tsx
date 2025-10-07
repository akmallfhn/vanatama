"use client";
import Image from "next/image";
import AppButton from "../buttons/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function HomeHeroBanner() {
  return (
    <div className="relative gap-5 flex flex-col items-center w-full bg-black overflow-hidden">
      {/* Hero Container */}
      <div className="hero-container relative flex w-full items-center py-10 px-4 z-[70] lg:px-0 lg:py-36 lg:max-w-[988px] xl:max-w-[1208px] 2xl:max-w-[1300px]">
        {/* Content */}
        <div className="hero-content flex flex-col w-full items-center gap-[320px] lg:gap-[28px] lg:items-start">
          <div className="flex flex-col gap-3 items-center text-white lg:items-start ">
            <div className="hero-title flex flex-col items-center text-center font-ui font-bold text-2xl max-w-[380px] sm:text-3xl lg:items-start lg:text-[32px] lg:text-left lg:max-w-[472px] xl:text-[52px] xl:max-w-[720px]">
              <h1 className="w-full text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#A1A1A1]">
                Global Shrimp Excellence from the Farm to Your Plate
              </h1>
            </div>
            <p className="hero-description w-[317px] text-center font-ui font-medium lg:w-[460px] lg:text-lg lg:text-left xl:w-[518px] xl:text-xl">
              High Quality, Sustainable & Fresh
            </p>
          </div>
          <div className="flex flex-col w-[300px] items-center gap-3 lg:w-fit lg:flex-row">
            <a
              href="https://wa.me/6281215140510"
              className="w-full p-[1px]"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <div className="flex lg:hidden">
                <AppButton
                  size="defaultRounded"
                  variant="whatsapp"
                  className="w-full lg:w-fit"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <p className="text-base lg:text-lg">Konsultasi Pembelian</p>
                </AppButton>
              </div>
              <div className="hidden lg:flex">
                <AppButton
                  size="largeRounded"
                  variant="hollowWhatsapp"
                  className="w-full lg:w-fit"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <p className="text-base lg:text-lg">Konsultasi Pembelian</p>
                </AppButton>
              </div>
            </a>
          </div>
        </div>

        {/* Vaname Shrimp */}
        <Image
          className="vaname-shrimp hidden max-w-[440px] 2xl:flex"
          src="https://static.wixstatic.com/media/02a5b1_73cc40224b6949a08d2ed2f4dfdc1157~mv2.webp"
          alt="Vaname Shrimp"
          width={2440}
          height={2440}
        />
      </div>

      {/* Absolute Decoration */}
      {/* Vaname Shrimp */}
      <Image
        className="vaname-shrimp absolute flex max-w-[312px] bottom-24 left-1/2 -translate-x-1/2 z-30 lg:left-auto lg:max-w-[380px] lg:-translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-24 xl:max-w-[440px] xl:right-24 2xl:hidden"
        src="https://static.wixstatic.com/media/02a5b1_73cc40224b6949a08d2ed2f4dfdc1157~mv2.webp"
        alt="Vaname Shrimp"
        width={2440}
        height={2440}
      />

      {/* Main Background */}
      <Image
        className="main-background absolute flex inset-0 w-full h-full object-cover"
        src={
          "https://static.wixstatic.com/media/02a5b1_a9705823acdb4db889d33c876b166f49~mv2.webp"
        }
        alt="Main Background"
        width={1000}
        height={1000}
      />
    </div>
  );
}
