import React from "react";
import { Card } from "../../../../components/ui/card";

export const ProcessSection = (): JSX.Element => {
  // Process steps data for mapping
  const processSteps = [
    {
      number: "01.",
      title: "Consultation & Assessment",
    },
    {
      number: "02.",
      title: "Planning & Installation",
    },
    {
      number: "03.",
      title: "Testing & Maintenance",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f4f5f6] relative">
      <div className="container mx-auto px-4 relative">
        {/* Yellow blur effect */}
        <div className="absolute w-[248px] h-[348px] top-0 right-0 bg-[#ffc700] rounded-[124px/174px] blur-[150px]" />

        <div className="flex flex-col items-center gap-16 relative z-10">
          {/* Section header */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" alt="Lightning" src="/lightning.svg" />
              <div className="font-medium text-[#070700] font-['Inter',Helvetica] text-base tracking-[1.28px] leading-[19.2px]">
                OUR PROCESS
              </div>
            </div>

            <h2 className="max-w-[844px] font-['Inter',Helvetica] font-semibold text-[#070700] text-5xl text-center tracking-[-1.44px] leading-[57.6px]">
              Our Efficient Steps For Quality Service
            </h2>
          </div>

          {/* Image and process steps */}
          <div className="relative w-full">
            <div className="w-full h-[600px] bg-[#c4c4c4] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Service process illustration"
                src="/pexels-silverkblack-23496705-1.png"
              />
            </div>

            {/* Process steps cards */}
            <div className="flex items-center gap-6 p-6 absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl w-[calc(100%-80px)] max-w-[1200px]">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-4 p-6 flex-1 rounded-lg border border-solid border-[#0707001a]"
                >
                  <div className="flex w-12 h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)]">
                    <div className="font-['Inter',Helvetica] font-semibold text-[#080800] text-lg tracking-[-0.54px] leading-[21.6px]">
                      {step.number}
                    </div>
                  </div>
                  <div className="font-['Inter',Helvetica] font-semibold text-[#070700] text-[21px] tracking-[-0.63px] leading-[25.2px]">
                    {step.title}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
