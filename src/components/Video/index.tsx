"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Choose Tekisky Software?"
          paragraph=""
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[780px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/18] items-center justify-center">
                <div className="w-full">
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Expertise:
                    </h3>
                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                      Our team comprises seasoned professionals with years of
                      experience in their respective fields.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[77/18] items-center justify-center">
                <div className="w-full">
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Innovation:
                    </h3>
                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                      We stay ahead of the curve by constantly exploring new
                      technologies and methodologies to deliver cutting-edge
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[77/18] items-center justify-center">
                <div className="w-full">
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Client-Centric Approach:
                    </h3>
                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                      We prioritize client satisfaction and work closely with
                      you to understand your unique needs and deliver tailored
                      solutions.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[77/18] items-center justify-center">
                <div className="w-full">
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Quality Assurance:
                    </h3>
                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                      We adhere to rigorous quality standards to ensure that our
                      solutions meet the highest levels of performance,
                      reliability, and security.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
