import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Image from "next/image";

type Props = {};

function WhyUs({ }: Props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 pt-16 md:pt-20 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-5 flex flex-col text-left w-full"
          >
            <Heading>Why Decide on Us?</Heading>

            <p className="leading-relaxed text-lg mt-3 max-w-3xl mx-auto text-center font-bold">
              Many companies require capital, but our approach is distinct
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="flex-1 text-center p-4">
            <p className="font-bold text-lg">Astute Approach</p>
            <p className="mt-2">
              We employ the most effective techniques for your requirements.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center p-4"
          >
            <Image
              src={"/whyUs.png"}
              width={300}
              height={300}
              alt="Why Us"
              className="w-[300px]"
            />
            <Image
  src={"/whyUs.png"}
  width={500}
  height={500}
  alt="Why Us"
  className="w-[300px] mx-auto mt-10 pb-10 flex md:hidden"
/> 
          </motion.div>

          <div className="flex-1 text-center p-4">
            <p className="font-bold text-lg">Fact-driven Approaches</p>
            <p className="mt-2">Our decision-making relies on numerical data.</p>
          </div>
        </div>

        <div className="text-center p-4 mt-10">
          <p className="font-bold text-lg">Whole Assistance</p>
          <p className="mt-2">
          We provide support at every stage.<br/>
As small firms and startups often find, acquiring capital can be challenging. But in light of our<br/>
professional assistance, you're never by yourself.

          </p>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
