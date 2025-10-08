"use client";
import Image from "next/image";

export default function GlobalSupplyCompany() {
  return (
    <div>
      <div className="section-root relative flex items-center justify-center bg-white overflow-hidden">
        <div className="section-container flex flex-col w-full items-center p-5 py-10 gap-8 z-10 lg:flex-row lg:justify-between lg:px-0 lg:gap-[132px] lg:py-[60px] lg:max-w-[988px] xl:max-w-[1208px] 2xl:max-w-[1300px]">
          {/* Section Image */}
          <div className="section-image w-full rounded-lg shrink-0 max-w-[488px] overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/02a5b1_f927480869a8434fa945e0775d093c35~mv2.webp"
              alt="Vanatama Global Supply Company"
              width={1000}
              height={1000}
            />
          </div>

          {/* Section Content */}
          <div className="section-content flex flex-col text-center items-center gap-3 lg:text-left lg:items-start">
            <h2 className="section-title w-fit font-ui font-bold text-black text-2xl max-w-[598px] sm:text-3xl lg:text-4xl lg:max-w-full">
              Global Supply Commitment
            </h2>
            <p className="section-desc text-base font-ui text-black max-w-[598px] sm:text-base lg:max-w-full lg:text-xl">
              Vanatama is a trusted global supplier of premium vannamei shrimp,
              dedicated to meeting international demand with consistency and
              care. Our products are trusted in{" "}
              <b>Malaysia, Singapore, Medan,</b> and <b>Jakarta</b>, and we
              remain committed to delivering reliable, high-quality shrimp to
              partners and clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
