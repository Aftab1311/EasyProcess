import Image from "next/image";

export default function MainContact() {
  return (
    <div className="bg-[url('/images/hero/dotbg2.png')] bg-cover bg-center px-2 md:px-0">
      <Image
        src="/images/hero/smilemp.png"
        width={2000}
        height={2000}
        alt="Contact Us"
        className="w-full hover:scale-125 overflow-hidden transition-all hidden md:flex"
        style={{ transition: "3s" }}
      />
      <div className="container mx-auto">
        <div className="relative h-[700px] rounded-2xl md:-translate-y-[140px]">
          <div className="absolute inset-0 bg-[url(/images/hero/youngbusi.png)] bg-cover rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent rounded-2xl">
            <div className="w-1/2 flex flex-col justify-center h-full px-20 gap-4">
            <h1 className="text-black text-5xl">Schedule a</h1>
            <h1 className="text-[#d2042d] text-5xl">Free Consulting Now</h1>
            <div className="mt-20 flex gap-10">
                <input type="text" placeholder="Name*" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" required />
                <input type="email" placeholder="Email*" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" required />
            </div>
            <div className="flex gap-10">
                <input type="phone" placeholder="Phone" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]"  />
                <input type="text" placeholder="Subject" className="w-full p-2 rounded-md border-2 border-[#d5d5d5]" />
            </div>
            <div>
                <textarea placeholder="Query Description" className="w-full h-48 p-2 rounded-md border-2 border-[#d5d5d5]" />
            </div>
            <button className="w-1/2 bg-[#d2042d] text-white py-2 px-4 rounded-md font-bold">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
