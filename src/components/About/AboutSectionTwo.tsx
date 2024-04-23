import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Good team-bro.svg"
                alt="about image"
                fill
                className="drop-shadow-three  dark:drop-shadow-none"
              />
              {/* <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title="Our Values" paragraph="" mb="44px" />
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovation & Collaboration:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We believe in pushing boundaries and exploring new frontiers
                  in technology. Collaborating closely with our clients, we
                  co-create innovative solutions that drive real-world impact.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quality & Client Satisfaction
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our commitment to excellence is unwavering. We adhere to the
                  highest standards of quality, reliability, and performance in
                  all our solutions. Your satisfaction is our priority, and we
                  strive to build lasting relationships by delivering
                  exceptional service and value.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Continuous Learning & Integrity
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Embracing a culture of continuous learning, we stay ahead of
                  the curve by leveraging the latest advancements in technology.
                  We conduct business with honesty, integrity, and transparency,
                  fostering trust and credibility with our clients, partners,
                  and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
