import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CaseStudySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[150px] bg-white">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex flex-col items-start gap-16">
          {/* Section Header */}
          <div className="flex items-center justify-center w-full">
            <Badge className="mb-6 flex items-center gap-2 bg-transparent text-black hover:bg-transparent">
              <img className="w-5 h-5" alt="Lightning" src="/lightning-1.svg" />
              <span className="font-medium text-base tracking-[1.28px] leading-[19.2px]">
                OUR PROJECTS
              </span>
            </Badge>
          </div>

          {/* Section Title */}
          <div className="flex items-end justify-around gap-[214px] w-full">
            <div className="flex flex-col w-[626px] items-start gap-6">
              <h2 className="font-semibold text-black text-5xl text-center tracking-[-1.44px] leading-[57.6px] font-['Inter',Helvetica]">
                Successful Electrical Work Completed Efficiently
              </h2>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="flex flex-col items-center gap-12 w-full">
            <Card className="flex items-center p-12 w-full bg-[#c7c7cd99] rounded-2xl overflow-hidden border border-solid border-[#0707001a]">
              <CardContent className="p-0 flex items-center w-full">
                <div className="relative w-[540px] h-[400px]">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt="Modern luxury house"
                    src="/modern-luxury-house-and-garden-2025-01-08-14-29-29-utc-1.png"
                  />
                </div>

                <div className="flex flex-col justify-between px-16 py-0 flex-1 h-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="font-semibold text-black text-[32px] tracking-[-0.96px] leading-[38.4px] font-['Inter',Helvetica]">
                      GreenTech Solar Installation
                    </h3>

                    <p className="font-semibold text-[#00000099] text-base tracking-[0] leading-6 font-['Inter',Helvetica]">
                      Installed a high-efficiency solar power system for an
                      eco-friendly office, optimizing energy usage and reducing
                      significantly.
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-full mt-auto">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src="/ellipse-2.png"
                          alt="Rachel Thompson"
                        />
                        <AvatarFallback>RT</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-semibold text-black text-base tracking-[-0.32px] leading-[17.6px] font-['Inter',Helvetica]">
                          Rachel Thompson
                        </span>
                        <span className="font-normal text-[#00000099] text-sm tracking-[0] leading-[21px] font-['Inter',Helvetica]">
                          CEO, TeamTalk
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="h-12 px-[18px] py-2 rounded-[32px] border border-solid border-[#575757] font-medium text-black text-base tracking-[-0.32px]"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <div className="flex justify-center w-full">
              <img
                className="flex-[0_0_auto]"
                alt="Arrow slide"
                src="/arow-slide.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
