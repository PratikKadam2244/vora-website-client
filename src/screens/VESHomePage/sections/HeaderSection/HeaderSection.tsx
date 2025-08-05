import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <header className="w-full h-24 bg-white">
      <div className="container h-full flex items-center justify-end">
        <nav className="flex items-center gap-16">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-normal text-[#070700] text-base leading-6"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <Button className="flex items-center justify-center gap-1 pl-[18px] pr-2 py-2 rounded-[32px] font-medium text-base text-[#070700] tracking-[-0.32px] leading-6 shadow-[inset_0px_1px_1px_#e3eb00,inset_0px_-1px_4px_#e4ec00] bg-[linear-gradient(180deg,rgba(254,221,0,1)_0%,rgba(254,221,0,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(254,221,0,0.9)_0%,rgba(254,221,0,0.9)_100%)]">
            Message Us
            <ArrowRightCircleIcon className="w-8 h-8" />
          </Button>
        </nav>
      </div>
    </header>
  );
};
