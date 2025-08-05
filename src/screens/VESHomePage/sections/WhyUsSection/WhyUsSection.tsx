import { ZapIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyUsSection = (): JSX.Element => {
  const features = [
    {
      title: "6 Decades of Experience",
      description:
        "Years of hands-on expertise in handling diverse electrical projects with precision and reliability.",
    },
    {
      title: "Advanced Technology",
      description:
        "We use the latest tools and techniques to deliver modern, energy-efficient electrical solutions good.",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get high-quality electrical services at competitive rates without compromising on safety or efficiency.",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We prioritize customer satisfaction with timely service, attention to detail, and long-lasting solutions.",
    },
  ];

  return (
    <section className="w-full py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <Card className="overflow-hidden rounded-2xl border-0">
              <CardContent className="p-0">
                <img
                  className="w-full h-auto object-cover aspect-square"
                  alt="Electrical services professional"
                  src="/gemini-generated-image-q23hdqq23hdqq23h-1.png"
                />
              </CardContent>
            </Card>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-14">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <ZapIcon className="w-5 h-5" />
                <span className="font-medium text-base tracking-[1.28px] leading-[19.2px]">
                  WHY CHOOSE US
                </span>
              </div>

              <h2 className="font-semibold text-5xl tracking-[-1.44px] leading-[57.6px]">
                Trusted Electrical Services For Every Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8" alt="Number" src="/number.svg" />
                    <h3 className="font-semibold text-[21px] tracking-[-0.63px] leading-[25.2px]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#07070099] leading-[21px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
