import React from "react";
import { Highlight } from "./hero-highlight";
import { MdRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Image from "next/image";

type Props = {};

function WhyUs({ }: Props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 pt-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-5 flex flex-col text-left w-full"
          >
            <Heading>Why Us?</Heading>

            <p className="leading-relaxed text-lg mt-3 max-w-3xl mx-auto text-center font-bold">
            75% Increase in chances of closing a deal, with Wall Street-level Pitch Decks, Business Plans, and Teasers and Advanced Financial Models
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto">
            <Image src={"/whyus.svg"} width={1000} height={1000} alt="Why Us" className="w-2/3 mx-auto mt-10 pb-10 hidden md:flex"/> 
            <Image src={"/whyusMobile.svg"} width={1000} height={1000} alt="Why Us" className="w-full mx-auto mt-10 pb-10 flex md:hidden"/> 
        </motion.div>
      </section>
    </div>
  );
}

export default WhyUs;
