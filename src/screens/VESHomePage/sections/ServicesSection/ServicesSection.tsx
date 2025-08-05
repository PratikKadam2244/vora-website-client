import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    [
      { title: "Electrical Installation", hasImage: false },
      {
        title: "Commercial & Industrial Services",
        hasImage: true,
        imageSrc: "/image-2.png",
      },
    ],
    [
      { title: "Power Distribution", hasImage: false },
      { title: "Lighting & Low Voltage Systems", hasImage: false },
    ],
    [
      { title: "Project Services", hasImage: false },
      { title: "Energy Efficiency & Green Sol.", hasImage: false },
    ],
  ];

  return (
    <section className="w-full py-24 bg-[#f4f4f6]">
      <div className="container mx-auto max-w-[1280px] flex flex-col items-center gap-16 relative">
        {/* Decorative element */}
        <img
          className="absolute w-[122px] h-[115px] top-[-50px] left-[492px] object-cover"
          alt="Element vora hp"
          src="/2676-080625-vora-hp-png-02-2.png"
        />

        {/* Section header */}
        <div className="flex flex-col w-full max-w-[626px] items-center justify-center gap-6">
          <div className="inline-flex items-center gap-2">
            <div className="font-bold text-[#070700] [font-family:'Inter',Helvetica] text-base tracking-[1.28px] leading-[19.2px]">
              OUR SERVICES
            </div>
          </div>

          <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#070700] text-5xl text-center tracking-[-1.44px] leading-[57.6px]">
            Expert Electrical Solutions For Every Need
          </h2>
        </div>

        {/* Service rows */}
        {services.map((row, rowIndex) => (
          <Card
            key={`row-${rowIndex}`}
            className="flex h-44 items-center gap-6 p-6 w-full bg-white rounded-2xl shadow-none"
          >
            {row.map((service, serviceIndex) => (
              <CardContent
                key={`service-${rowIndex}-${serviceIndex}`}
                className="flex items-center gap-4 p-6 flex-1 bg-white rounded-lg border border-solid border-[#0707001a]"
              >
                {service.hasImage ? (
                  <div className="flex w-12 h-12 items-center justify-center gap-2.5 p-2.5 rounded-[100px] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)]">
                    <img
                      className="w-[34px] h-[34px] mt-[-3.00px] mb-[-3.00px] ml-[-3.00px] mr-[-3.00px] object-cover"
                      alt="Service icon"
                      src={service.imageSrc}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-[100px] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)]" />
                )}
                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#070700] text-[32px] tracking-[-0.96px] leading-[38.4px] whitespace-nowrap">
                  {service.title}
                </div>
              </CardContent>
            ))}
          </Card>
        ))}

        {/* Bottom decorative element */}
        <img
          className="w-[33px] h-[39px] mt-4 object-cover"
          alt="Decorative element"
          src="/image-6.png"
        />
      </div>
    </section>
  );
};
