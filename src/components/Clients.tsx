import Marquee from "react-fast-marquee"
import Heading from "./ui/Heading"
import Image from "next/image"

const clients = [
    { logo: "/images/logo/aditya.png" },
    { logo: "/images/logo/airtel.png" },
    { logo: "/images/logo/blp.png" },
    { logo: "/images/logo/centuryply.png" },
    { logo: "/images/logo/cinepolis.png" },
    { logo: "/images/logo/ds.png" },
    { logo: "/images/logo/gulf.png" },
    { logo: "/images/logo/keepharma.png" },
    { logo: "/images/logo/occl.png" },
    { logo: "/images/logo/payrup.png" },
    { logo: "/images/logo/revivo.png" },
    { logo: "/images/logo/sterlite.png" },
    { logo: "/images/logo/wrigleys.png" },
]

export default function Clients() {
    return (
        <div className="w-full container mx-auto py-20 flex flex-col justify-center items-center gap-4">
            <h1 className="text-[#a60424] underline text-6xl">Clients served</h1>
            <h3 className="text-black underline text-2xl">by our Core Team Members</h3>
            <Marquee gradient={false} speed={50} className="my-10 py-2">
                {clients.map((client, idx) => (
                    <Image
                        key={idx}
                        src={client.logo}
                        alt="client logo"
                        className="h-12 md:h-24 mx-8 px-4 object-contain shadow-lg rounded-lg"
                        width={200}
                        height={400}
                    />
                ))}
            </Marquee>
        </div>
    )
}