import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import MainServices from "./MainServices";
import MainContact from "./MainContact";
import Clients from "./Clients";
import { GoArrowRight } from "react-icons/go";

export default function MainHero() {
  return (
    <div className="w-full mt-8 md:mt-20">
      {/* section-1 */}

      <div className="bg-[url('/images/hero/mainbg.png')] bg-cover bg-center min-h-[800px] w-full mt-14 flex items-center justify-center">
        <div className="container mx-auto w-full flex flex-col md:flex-row gap-10 items-center md:justify-between justify-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold underline">
              Ease My Process.
            </h1>
            <h3 className="text-xl md:text-4xl font-semibold underline">
              Your Partner for Strategic Growth & Seamless Operations.
            </h3>
            <button className="max-w-[150px] bg-white py-2 px-2 text-red-500 underline rounded-md">
              Contact Us
            </button>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-tl-[60px] md:rounded-tl-[120px] rounded-b-[60px] md:rounded-b-[85px] overflow-hidden w-[200px] md:w-[400px]">
                <Image
                  className="relative z-10  hover:scale-125 transition duration-1000 w-full h-full"
                  src="/images/hero/man.jpg"
                  alt="hero"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <Image
                className="absolute inset-12 h-[200px] md:inset-24 z-0 w-full max-w-[175px] md:max-w-[350px] md:h-[400px]"
                src="/images/hero/rectborder.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="absolute top-48 md:top-[400px] inset-24 md:inset-80 z-0 ml-24 max-w-[50px] md:max-w-[80px] w-full"
                src="/images/hero/Eclipse.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section-2 & 3 */}
      <div className="relative h-[1250px]">
        <div className="container mx-auto flex justify-center flex-col absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                className="flex justify-center items-center w-full max-w-[150px] md:max-w-[350px]"
                src="/images/hero/lady.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-[#d2042d] text-3xl md:text-6xl font-bold underline mb-4">
                Need Funding?
              </h1>
              <h2 className="text-black text-lg md:text-5xl underline">
                Want Financial Control?
              </h2>
              <h3 className="w-[85%] text-base md:text-2xl underline">
                Did you know 82% Of start-ups fail due to poor financial
                management? Let our team help you in achieve financial success.
              </h3>
            </div>
          </div>
          <div>
            <div className="border-[20px] border-black h-[700px] rounded-[80px] w-full flex overflow-hidden left-1/2 -translate-x-1/2  relative z-50 bg-white">
              <div className="overflow-hidden w-1/5 relative">
                <div className="bg-[url('/images/hero/img1.jpg')] bg-cover bg-center h-full rounded-l-[80px] opacity-60 hover:scale-125 transition duration-1000"></div>
                <div className="flex flex-col justify-center gap-6  absolute top-80 pl-8">
                  <h2 className="text-4xl text-red-600 underline">
                    Quality Assurance
                  </h2>
                  <div>
                    <h3 className="text-base text-black underline">
                      Trusted by
                    </h3>
                    <h2 className="text-3xl text-black underline">Top firms</h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden w-1/5 relative">
                <div className="bg-[url('/images/hero/img2.jpg')] bg-cover bg-center h-full opacity-30 hover:scale-125 transition duration-1000 "></div>
                <div className="flex flex-col justify-center gap-6  absolute top-10 pl-8">
                  <h2 className="text-4xl text-red-600 underline">
                    Client Satisfaction
                  </h2>
                  <div>
                    <h3 className="text-base text-black underline">98%</h3>
                    <h2 className="text-3xl text-black underline">
                      Approval rate
                    </h2>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden w-1/5 relative">
                <div className="bg-[url('/images/hero/img3.jpg')] bg-cover bg-center h-full opacity-30 hover:scale-125 transition duration-1000  "></div>
                <div className="flex flex-col justify-center gap-6  absolute top-80 pl-8">
                  <h2 className="text-4xl text-red-600 underline">
                    75% increase in deal closures
                  </h2>
                  <div>
                    <h3 className="text-base text-black underline">
                      with our investor ready
                    </h3>
                    <h2 className="text-3xl text-black underline">
                      pitch-deck and financial models
                    </h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden w-1/5 relative">
                <div className="bg-[url('/images/hero/img4.jpg')] bg-cover bg-center h-full opacity-30  hover:scale-125 transition duration-1000 "></div>
                <div className="flex flex-col justify-center gap-6  absolute top-10 pl-8">
                  <h2 className="text-4xl text-red-600 underline">
                    Process efficiency
                  </h2>
                  <div>
                    <h3 className="text-base text-black underline">
                      save upto
                    </h3>
                    <h2 className="text-3xl text-black underline">60%</h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden w-1/5 relative">
                <div className="bg-[url('/images/hero/img5.jpg')] bg-cover bg-center h-full rounded-r-[60px] opacity-30 hover:scale-125  transition duration-1000"></div>
                <div className="flex flex-col justify-center gap-6  absolute bottom-20 pr-4 pl-4">
                  <h2 className="text-4xl text-red-600 underline">
                    Expert Team
                  </h2>
                  <div>
                    <h3 className="text-base text-black underline">Led by</h3>
                    <h2 className="text-3xl text-black underline">
                      Experienced platforms
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 */}

      <MainServices />

      {/* section-5 */}

      <MainContact />

      {/* section-6 */}

      <Clients />

      {/* section-7 */}

      <div className="bg-[#f1f1f1]">
        <div className="container mx-auto py-20 flex justify-evenly gap-10">
          <div className="w-1/2 ml-20 flex flex-col justify-center gap-8">
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center">
              <Image
                src="/images/hero/comma.png"
                alt="quote"
                width={40}
                height={50}
                className="hover:scale-110"
              />
            </div>
            <h1 className="text-4xl underline">
              We are strong team who brings innovative ideas into production.
            </h1>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-center items-center gap-2 relative group ">
              <div className="overflow-hidden ">
                <Image
                  src="/images/hero/anchal.png"
                  alt="quote"
                  width={450}
                  height={300}
                  className="hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-40 left-1/2  -translate-x-1/2 w-[60px] h-[60px] rounded-full bg-black group-hover:bg-[#007ab9] transition duration-700 cursor-pointer  bg-opacity-35 flex items-center justify-center">
                  <Image
                    src="/images/hero/linkedin.png"
                    alt="LinkedIn Icon"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] "
                  />
                </div>
              </div>

              <h1 className="text-xl underline text-center text-[#d2042d] font-bold">
                Anchal Singhal
              </h1>
              <h2 className="text-[#838080] font-bold underline">Co-founder</h2>
              <button className="text-white bg-gradient-to-r from-red-600 to-red-900 flex items-center gap-2 px-4 py-1 rounded-3xl font-bold underline">
                Read more <GoArrowRight size={30} />
              </button>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 relative group">
              <div className="overflow-hidden">
                <Image
                  src="/images/hero/anchal2.png"
                  alt="quote"
                  width={450}
                  height={300}
                  className="hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-40 left-1/2  -translate-x-1/2 w-[60px] h-[60px] rounded-full bg-black group-hover:bg-[#007ab9] transition duration-700 cursor-pointer bg-opacity-35 flex items-center justify-center">
                  <Image
                    src="/images/hero/linkedin.png"
                    alt="LinkedIn Icon"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] "
                  />
                </div>
              </div>
              <h1 className="text-xl underline text-center text-[#d2042d] font-bold">
                Anant Gujrani
              </h1>
              <h2 className="text-[#838080] font-bold underline">Co-founder</h2>
              <button className="text-white bg-gradient-to-r from-red-600 to-red-900 flex items-center gap-2 px-4 py-1 rounded-3xl font-bold underline">
                Read more <GoArrowRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
