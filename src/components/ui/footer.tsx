import React from "react";
import Image from "next/image";
import { PiXLogoDuotone } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdLocationPin, MdAlternateEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

type Props = {};

export default function Footer({ }: Props) {
  return (
    <footer className="bg-[#292929] px-12 py-12">
      <div className="flex justify-between items-center md:flex-row flex-col px-2 md:px-0 py-4">
        <Image src="/navbarLogo.svg" width={1000} height={1000} alt="EaseMyProcess" className='w-32 mb-4 md;mb-0' />
        <p className="text-white text-center underline mb-4 md:mb-0">&copy; {new Date().getFullYear()} All rights reserved by Ease My Business</p>
        <div className='flex justify-center items-center gap-4'>
          <FaFacebookF className="text-3xl text-white" />
          <FaInstagram className="text-3xl text-white" />
          <FaLinkedinIn className="text-3xl text-white" />
          <PiXLogoDuotone className="text-3xl text-white" />
        </div>
      </div>
      <hr className="my-4 border-white" />

      <div className="flex flex-col md:flex-row justify-between text-white text-sm">
        <div className="flex flex-col justify-start items-center md:items-start gap-y-3 underline ">
          <Link href="/#about-us">
            About
          </Link>
          <Link href="/">
            Business
          </Link>
          <Link href="/#services">
            Services
          </Link>
          <Link href="/security">
            Resources
          </Link>
        </div>
        <div className='flex justify-start items-start gap-y-4 flex-col'>
          <div className='justify-center items-center gap-2 hidden md:flex'>
            <MdLocationPin className="text-3xl" />
            <Link href="https://www.google.com/maps/search/A1+Tower,+Sohna+Road+Level+9,+Spaze+i-Tech+Park,+Sector+49,+Gurugram,+Haryana+122018/@28.3825261,77.0125651,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D">
            <p className='max-w-md underline text-sm'>A1 Tower, Sohna Road Level 9, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</p>
            </Link>
          </div>
          <div className='flex justify-center items-center gap-2 md:hidden mt-4'>
            <MdLocationPin size={60} />
            <Link href="https://www.google.com/maps/search/A1+Tower,+Sohna+Road+Level+9,+Spaze+i-Tech+Park,+Sector+49,+Gurugram,+Haryana+122018/@28.3825261,77.0125651,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D">
            <p className='max-w-md underline text-sm'>A1 Tower, Sohna Road Level 9, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</p>
            </Link>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <MdAlternateEmail className=" text-3xl" />
            <p className='max-w-lg underline text-sm'>info@easemyprocess.com</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <MdPhone className=" text-3xl" />
            <div className='flex flex-col gap-1'>
              <p className='max-w-lg underline text-sm'>+91-8295233256</p>
              <p className='max-w-lg underline text-sm'>+1-425 374 4499</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
