import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { CaseStudySection } from "./sections/CaseStudySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { WhyUsSection } from "./sections/WhyUsSection";

export const VESHomePage = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white">
      {/* Hero and Header Section */}
      <div className="relative w-full">
        <HeaderSection />
        <HeroSection />
        <img
          className="absolute w-48 h-48 top-0 left-[15px] object-cover"
          alt="Element vora hp"
          src="/2676-080625-vora-hp-png-01-1.png"
        />
      </div>

      {/* Services Section */}
      <div className="relative w-full">
        <ServicesSection />
        <img
          className="absolute w-[46px] h-[46px] top-[679px] left-[50%] translate-x-[-50%] object-cover"
          alt="Image"
          src="/image-4.png"
        />
      </div>

      {/* Why Us Section with Image */}
      <div className="relative w-full">
        <WhyUsSection />
        <img
          className="relative w-[471px] h-[310px] mx-auto -mt-[359px] ml-[193px]"
          alt="Modern luxury house"
          src="/modern-luxury-house-and-garden-2025-01-08-14-29-29-utc-2.png"
        />
        <div className="flex justify-end mr-[220px] mt-4">
          <Button
            variant="outline"
            className="flex items-center gap-1 pl-2 pr-4 py-2 rounded-[32px] border border-solid border-black"
          >
            <span className="font-medium text-black text-base tracking-[-0.32px] leading-6">
              Know More
            </span>
            <ArrowRightCircleIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative w-full">
        <ProcessSection />
      </div>

      {/* Case Study Section */}
      <div className="relative w-full">
        <CaseStudySection />
      </div>

      {/* Testimonial Section */}
      <div className="relative w-full">
        <TestimonialSection />
      </div>

      {/* Contact and Footer Section */}
      <div className="relative w-full">
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
