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

      <div className="py-16 md:py-20 lg:py-28 overflow-hidden pb-[120px] pt-[180px] container w-full px-4 lg:w-8/12">
        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Our Story
        </h3>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Born from a shared vision of harnessing technology to drive progress,
          Tekisky Software emerged as a beacon of innovation in a sea of
          sameness. With a diverse blend of talents and experiences, our team is
          united by a common purpose: to revolutionize the digital landscape and
          shape a brighter future for businesses worldwide.
        </p>

        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Why Tekisky Software?
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Tekisky Software stands out as your premier choice for transformative
          technology solutions. Our commitment to excellence, innovation,
          collaboration, agility, and results sets us apart in the digital
          landscape.
        </p>
        <ul className="mb-10 list-inside list-disc text-body-color">
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            Excellence: At Tekisky Software, we don&apos;t just build software;
            we craft experiences.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            Innovation: Innovation is at the heart of everything we do.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            Collaboration: We believe in the power of collaboration
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            Agility: In today &apos; s fast-paced world, adaptability is key to
            success.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
            Results: Ultimately, our success is measured by your success.
          </li>
        </ul>
        <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
          <p className="text-center text-base font-medium italic text-body-color">
            &quot;Unleashing Possibilities, Transforming Realities: Discover the
            Future with Tekisky Software - Where Innovation Inspires Excellence
            and Dreams Take Flight!&quot;
          </p>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="132"
              height="109"
              viewBox="0 0 132 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                fill="url(#paint0_linear_111:606)"
              />
              <path
                opacity="0.5"
                d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                fill="url(#paint1_linear_111:606)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:606"
                  x1="94.7523"
                  y1="82.0246"
                  x2="8.40951"
                  y2="52.0609"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.06" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_111:606"
                  x1="90.3206"
                  y1="58.4236"
                  x2="1.16149"
                  y2="50.8365"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.06" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="53"
              height="30"
              viewBox="0 0 53 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.8"
                cx="37.5"
                cy="37.5"
                r="37.5"
                fill="#4A6CF7"
              />
              <mask
                id="mask0_111:596"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="75"
                height="75"
              >
                <circle
                  opacity="0.8"
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  fill="#4A6CF7"
                />
              </mask>
              <g mask="url(#mask0_111:596)">
                <circle
                  opacity="0.8"
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  fill="url(#paint0_radial_111:596)"
                />
                <g opacity="0.8" filter="url(#filter0_f_111:596)">
                  <circle cx="40.8089" cy="19.853" r="15.4412" fill="white" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_111:596"
                  x="4.36768"
                  y="-16.5881"
                  width="72.8823"
                  height="72.8823"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="10.5"
                    result="effect1_foregroundBlur_111:596"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_111:596"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                >
                  <stop stopOpacity="0.47" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
