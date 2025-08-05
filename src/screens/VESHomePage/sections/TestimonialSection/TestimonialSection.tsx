import { ZapIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        '"Amazing service! The team was punctual, knowledgeable, and fixed. Great customer support and top-notch expertise."',
      name: "Bromi Guden",
      position: "CEO, Payscale",
      vectorSrc: "/vector.svg",
      vectorWidth: "w-[58px]",
    },
    {
      quote:
        '"Amazing service! The team was punctual, knowledgeable, and fixed. Great customer support and top-notch expertise."',
      name: "Sophia Martinez",
      position: "CEO, Arktico",
      vectorSrc: "/vector-1.svg",
      vectorWidth: "w-[74px]",
    },
    {
      quote:
        '"Amazing service! The team was punctual, knowledgeable, and fixed. Great customer support and top-notch expertise."',
      name: "Serene Logia",
      position: "CEO, Getdonelist",
      vectorSrc: "/vector-2.svg",
      vectorWidth: "w-[65px]",
    },
    {
      quote:
        '"Amazing service! The team was punctual, knowledgeable, and fixed. Great customer support and top-notch expertise."',
      name: "Brandon Suelu",
      position: "CEO, Teamtalk",
      vectorSrc: "/vector-4.svg",
      vectorWidth: "w-[77px]",
    },
  ];

  return (
    <section className="relative w-full py-36 bg-[#f4f5f6]">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-16">
        {/* Section Header */}
        <div className="flex flex-col w-full max-w-[626px] items-center justify-center gap-6">
          <div className="inline-flex items-center gap-2">
            <ZapIcon className="w-5 h-5" />
            <div className="font-medium text-black text-base tracking-[1.28px] leading-[19.2px] whitespace-nowrap">
              CLIENT FEEDBACK
            </div>
          </div>

          <h2 className="font-semibold text-black text-5xl text-center tracking-[-1.44px] leading-[57.6px]">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Left side - 2x2 grid of testimonials */}
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <Card
                  key={`testimonial-top-${index}`}
                  className="relative border-none rounded-2xl before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="p-8 flex flex-col gap-6">
                    <img
                      className="flex-none"
                      alt="Star icon"
                      src="/star-icon.svg"
                    />
                    <p className="w-full max-w-[336px] font-normal text-black text-base leading-6">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0 flex items-end justify-between w-full">
                    <div className="flex flex-col items-start gap-1">
                      <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap">
                        {testimonial.name}
                      </div>
                      <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                        {testimonial.position}
                      </div>
                    </div>
                    <img
                      className={`h-3 ${testimonial.vectorWidth}`}
                      alt="Vector"
                      src={testimonial.vectorSrc}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(2, 4).map((testimonial, index) => (
                <Card
                  key={`testimonial-bottom-${index}`}
                  className="relative border-none rounded-2xl before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="p-8 flex flex-col gap-6">
                    <img
                      className="flex-none"
                      alt="Star icon"
                      src="/star-icon.svg"
                    />
                    <p className="w-full max-w-[336px] font-normal text-black text-base leading-6">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0 flex items-end justify-between w-full">
                    <div className="flex flex-col items-start gap-1">
                      <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap">
                        {testimonial.name}
                      </div>
                      <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                        {testimonial.position}
                      </div>
                    </div>
                    <img
                      className={`h-3 ${testimonial.vectorWidth}`}
                      alt="Vector"
                      src={testimonial.vectorSrc}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Featured testimonial */}
          <div className="relative flex-1 h-full rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(189,189,189,1)_0%,rgba(189,189,189,1)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)]">
            <div className="relative w-full h-[438px]">
              <img
                className="absolute w-[98px] h-5 top-8 left-[30px] z-10"
                alt="Vector"
                src="/vector-3.svg"
              />
              <img
                className="absolute w-full h-full object-cover"
                alt="Bearded south asian"
                src="/bearded-south-asian-man-wearing-turban-smiling-and-2025-02-14-06.png"
              />
            </div>
            <div className="p-8 pt-5 flex flex-col gap-1">
              <div className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] whitespace-nowrap">
                David Wilson
              </div>
              <div className="font-normal text-[#000000b2] text-sm leading-[21px] whitespace-nowrap">
                CEO, Selfast
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 md:right-[calc(50%-640px+80px)]">
        <img
          className="w-[188px] h-8"
          alt="Arrow slide"
          src="/arow-slide.svg"
        />
      </div>
    </section>
  );
};
