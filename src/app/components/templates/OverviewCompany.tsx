"use client";
import Image from "next/image";

export default function OverviewCompany() {
  return (
    <div>
      <div className="section-root relative flex items-center justify-center bg-white overflow-hidden">
        <div className="section-container flex flex-col w-full items-center p-5 py-10 gap-8 z-10 lg:flex-row lg:justify-between lg:px-0 lg:gap-[64px] lg:py-[60px] lg:max-w-[988px] xl:max-w-[1208px] 2xl:max-w-[1300px]">
          {/* Section Image */}
          <div className="section-image w-full rounded-lg shrink-0 max-w-[548px] overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/02a5b1_9edd8519c41149a3885e22ae2d01b25c~mv2.webp"
              alt="Vanatama Farm"
              width={1000}
              height={1000}
            />
          </div>

          {/* Section Content */}
          <div className="section-content flex flex-col text-center items-center gap-3 lg:text-left lg:items-start">
            <h2 className="section-title w-fit font-ui font-bold text-black text-2xl max-w-[598px] sm:text-3xl lg:text-4xl lg:max-w-full">
              We Are Trusted Partner in Premium Vannamei Shrimp
            </h2>
            <p className="section-desc text-base font-ui text-black max-w-[598px] sm:text-base lg:max-w-full lg:text-xl">
              Vanatama is a trusted supplier of premium vannamei shrimp from
              Bengkalis, Riau, Indonesia. We partner closely with local
              fishermen to ensure freshness and quality from catch to export,
              delivering excellence and reliability to customers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
