import { ArrowUpIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { title: "About Us" },
    { title: "Services" },
    { title: "Case Studies" },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      text: "(+91) 8912 3456 7890",
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      text: "hello@consultix.com",
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      text: "123 Business Avenue, Suite",
    },
  ];

  return (
    <footer className="w-full bg-[#f3f3f3]">
      <div className="flex flex-col w-full items-start gap-2.5 px-20 py-px">
        <div className="relative w-[94px] h-[94px]" />

        <img
          className="relative w-[159px] h-[110px]"
          alt="Element vora hp"
          src="/2676-080625-vora-hp-png-01-2.png"
        />

        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          {/* Company Description and Social Icons */}
          <div className="flex flex-col w-[339px] items-start gap-8 relative">
            <div className="flex flex-col items-start gap-6 w-full flex-[0_0_auto] relative self-stretch">
              <p className="font-normal text-[#00000099] text-base leading-6">
                We provide professional electrical solutions with safety,
                efficiency, ensure seamless energy flow for homes and
                businesses.
              </p>
            </div>

            <img
              className="relative flex-[0_0_auto]"
              alt="Social icons"
              src="/social-icons.svg"
            />
          </div>

          {/* Footer Columns */}
          <div className="inline-flex h-44 items-start gap-20 relative flex-[0_0_auto]">
            {/* Quick Links Column */}
            <div className="flex flex-col w-28 items-start gap-6 relative">
              <h3 className="font-semibold text-black text-[21px] tracking-[-0.42px] leading-[23.1px] whitespace-nowrap">
                Quick Links
              </h3>

              <div className="flex flex-col w-[98px] items-start gap-3 relative flex-[0_0_auto]">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-normal text-[#000000b2] text-sm leading-[21px] relative self-stretch"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="flex flex-col w-[196px] items-start gap-6 relative">
              <h3 className="font-semibold text-black text-[21px] tracking-[-0.42px] leading-[23.1px] whitespace-nowrap">
                Contact Us
              </h3>

              <div className="flex flex-col items-start justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
                  >
                    {item.icon}
                    <span className="font-normal text-[#000000b2] text-sm leading-[14px] whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="flex flex-col w-72 items-start gap-6 relative">
              <h3 className="font-semibold text-black text-[21px] tracking-[-0.42px] leading-[23.1px] whitespace-nowrap">
                Subscribe Our Newsletter
              </h3>

              <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Input
                  className="h-12 px-4 py-3 bg-[#bfbfbf] rounded-[32px] border border-solid border-[#ffffff1a] text-[#020202b2] text-sm"
                  placeholder="Your Email"
                />

                <Button className="inline-flex items-center justify-center gap-1 pl-[18px] pr-2 py-2 rounded-[32px] shadow-[inset_0px_1px_1px_#e3eb00,inset_0px_-1px_4px_#e4ec00] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)]">
                  <span className="font-medium text-black text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    Submit
                  </span>
                  <img
                    className="w-8 h-8"
                    alt="Arrow circle right"
                    src="/arrowcircleright-1.svg"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col w-full items-start px-20 py-0 bg-[#f3f3f3]">
        <div className="flex items-center justify-between px-0 py-8 relative self-stretch w-full flex-[0_0_auto] border-t border-[#2d2d2d]">
          <Button
            variant="ghost"
            className="gap-2 inline-flex items-center justify-center relative flex-[0_0_auto] p-0 hover:bg-transparent"
          >
            <span className="font-medium text-black text-sm leading-[14px]">
              Back To Top
            </span>
            <ArrowUpIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
