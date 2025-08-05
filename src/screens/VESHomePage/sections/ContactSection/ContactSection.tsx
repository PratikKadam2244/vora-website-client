import { ChevronDownIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: "/circle.svg",
      title: "Call Us",
      value: "(+91) 8912 3456 7890",
    },
    {
      icon: "/circle-1.svg",
      title: "Email Us",
      value: "hello@elektrix.com",
    },
  ];

  // Form fields data
  const formFields = [
    { label: "First Name", placeholder: "e.g. Sahaari", hasBorder: true },
    { label: "Last Name", placeholder: "e.g. Manehteh", hasBorder: false },
    {
      label: "Email",
      placeholder: "e.g. hello@elektrix.com",
      hasBorder: false,
    },
    {
      label: "Phone",
      placeholder: "e.g. (+91) 8912 3456 7890",
      hasBorder: false,
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-[150px]">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="flex flex-wrap gap-[77px]">
          {/* Left Column - Image and Contact Info */}
          <div className="flex flex-col w-full md:w-[574px] gap-8">
            <div className="relative w-full h-[697px] bg-[#c4c4c4] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Electrician working"
                src="/pexels-yankrukov-8867419-1.png"
              />
            </div>

            <Card className="bg-[#070700] rounded-2xl border-none">
              <CardContent className="flex flex-col items-start gap-8 p-8">
                <h3 className="w-fit mt-[-1.00px] font-semibold text-white text-[21px] tracking-[-0.63px] leading-[25.2px]">
                  Contact Us!
                </h3>

                <div className="flex items-center gap-8 w-full flex-wrap">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <img
                        className="w-10 h-10"
                        alt={item.title}
                        src={item.icon}
                      />

                      <div className="flex flex-col items-start gap-2">
                        <div className="self-stretch mt-[-1.00px] font-normal text-white text-sm leading-[14px]">
                          {item.title}
                        </div>

                        <div className="self-stretch font-normal text-[#ffffff99] text-sm leading-[14px]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <ZapIcon className="w-5 h-5" />
                <span className="mt-[-0.50px] font-medium text-[#070700] text-base tracking-[1.28px] leading-[19.2px]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="self-stretch font-semibold text-[#070700] text-5xl tracking-[-1.44px] leading-[57.6px]">
                Reach Out For Expert Let&apos;s Contact Assistance
              </h2>

              <p className="w-full max-w-[626px] font-normal text-[#07070099] text-base leading-6">
                Need electrical services? Contact our expert team for reliable
                solutions, professional advice, and quick assistance. We&apos;re
                ready to power your needs!
              </p>
            </div>

            <form className="w-full flex flex-col gap-8">
              {/* First row - First Name and Last Name */}
              <div className="flex items-center gap-8 w-full flex-wrap md:flex-nowrap">
                {formFields.slice(0, 2).map((field, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 flex-1 w-full"
                  >
                    <label className="font-medium text-[#070700] text-sm leading-[21px]">
                      {field.label}
                    </label>
                    <Input
                      className={`h-[45px] bg-[#f4f5f6] rounded-[32px] px-4 py-3 text-sm ${
                        field.hasBorder
                          ? "border border-solid border-[#070700]"
                          : "border border-solid border-[#0707001a]"
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Second row - Email and Phone */}
              <div className="flex items-center gap-8 w-full flex-wrap md:flex-nowrap">
                {formFields.slice(2, 4).map((field, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 flex-1 w-full"
                  >
                    <label className="font-medium text-[#070700] text-sm leading-[21px]">
                      {field.label}
                    </label>
                    <Input
                      className="h-[45px] bg-[#f4f5f6] rounded-[32px] px-4 py-3 text-sm border border-solid border-[#0707001a]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Choose Services dropdown */}
              <div className="flex flex-col gap-3 w-full">
                <label className="font-medium text-[#070700] text-sm leading-[21px]">
                  Choose Services
                </label>
                <Select>
                  <SelectTrigger className="h-[45px] bg-[#f4f5f6] rounded-[32px] px-4 py-3 border border-solid border-[#0707001a] flex justify-between">
                    <SelectValue placeholder="Wiring & Installation" />
                    <ChevronDownIcon className="w-5 h-5" />
                  </SelectTrigger>
                </Select>
              </div>

              {/* Message textarea */}
              <div className="flex flex-col gap-3 w-full">
                <label className="font-medium text-[#070700] text-sm leading-[21px]">
                  Message
                </label>
                <Textarea
                  className="h-[180px] bg-[#f4f5f6] rounded-2xl px-4 py-3 border border-solid border-[#0707001a] text-sm"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit button */}
              <Button className="inline-flex items-center justify-center gap-1 pl-[18px] pr-2 py-2 w-fit rounded-[32px] shadow-[inset_0px_1px_1px_#e3eb00,inset_0px_-1px_4px_#e4ec00] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)]">
                <span className="font-medium text-[#070700] text-base tracking-[-0.32px] leading-6">
                  Read More
                </span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    className="w-8 h-8"
                    alt="Arrow circle right"
                    src="/arrowcircleright-1.svg"
                  />
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
