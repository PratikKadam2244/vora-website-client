import { HardHatIcon, HeadphonesIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Feature items data for mapping
  const featureItems = [
    {
      icon: <HardHatIcon className="w-6 h-6" />,
      text: "Turnkey Solutions",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      text: "Emergency Support",
    },
    {
      icon: <WalletIcon className="w-6 h-6" />,
      text: "Reduced Energy Cost",
    },
  ];

  return (
    <section className="relative w-full h-[800px] bg-[linear-gradient(89deg,rgba(133,139,146,0.8)_0%,rgba(8,8,0,0.8)_49%,rgba(2,8,24,0.56)_61%,rgba(8,8,0,0.8)_70%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)]">
      <div className="relative w-full h-full bg-[url(/a-male-electrician-works-in-a-switchboard-with-an-2025-03-15-11-.png)] bg-cover bg-center">
        <div className="container flex flex-col items-start gap-16 pt-[206px] max-w-[743px] ml-auto">
          <div className="flex flex-col items-start gap-[42px] w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              <h1 className="font-['Inter',Helvetica] font-semibold text-white text-[64px] tracking-[-1.92px] leading-[76.8px]">
                Where Integrity, Innovation and Legacy, <br />
                Power Future-Ready Solutions.
              </h1>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center gap-1 pl-2 pr-4 py-2 rounded-[32px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors"
            >
              <span className="font-['Inter',Helvetica] font-medium text-base tracking-[-0.32px] leading-6">
                Contact Us
              </span>
              <img
                className="w-8 h-8"
                alt="Arrow circle right"
                src="/arrowcircleright-2.svg"
              />
            </Button>
          </div>

          <div className="flex items-start gap-12 w-full">
            {featureItems.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-2">
                {item.icon}
                <span className="font-['Inter',Helvetica] font-normal text-white text-base leading-6">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
