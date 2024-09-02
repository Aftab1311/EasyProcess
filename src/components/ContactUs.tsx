import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="bg-[url('/images/hero/dotbg3.png')] bg-cover bg-center px-2 md:px-0" id="contact-us">
      <div className="h-14 bg-red-600 w-full" />
      <Image
        src="/contactbg.svg"
        width={2000}
        height={2000}
        alt="Contact Us"
        className="w-full hover:scale-125 overflow-hidden transition-all hidden md:flex"
        style={{ transition: "3s" }}
      />
      <div className="container mx-auto">
        <div className="relative h-[750px] md:h-[700px] rounded-2xl md:-translate-y-[140px] ">
          <div className="absolute inset-0 bg-[url(/contactformbg.svg)] bg-cover rounded-2xl "></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent rounded-2xl ">
            <div className="w-full md:w-1/2 flex flex-col justify-center h-full px-4 md:px-20 gap-4">
            <h1 className="text-black text-3xl md:text-5xl">Obtain A</h1>
            <h1 className="text-[#d2042d] text-3xl md:text-5xl">Free Consultation Right Now</h1>
            <div className=" mt-10 md:mt-20 flex flex-col md:flex-row gap-4 md:gap-10">
                <input type="text" placeholder="Name*" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" required />
                <input type="email" placeholder="Email*" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" required />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <input type="phone" placeholder="Phone" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]"  />
                <input type="text" placeholder="Subject" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" />
            </div>
            <div>
                <textarea placeholder="Query Description" className="w-full h-48 p-2 rounded-md border-2 border-[#d5d5d5]" />
            </div>
            <button className="w-full md:w-1/2 bg-[#d2042d] text-white py-2 px-4 rounded-md font-bold">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
