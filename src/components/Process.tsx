import Image from 'next/image';
import Heading from './ui/Heading';


export default function Process() {
    return (
        <section className="py-12 bg-white">
            <Heading>
                Process
            </Heading>
            <Image src= "/main.gif" width={2000} height={2000} alt="Process" className=" w-full h-full py-12  md:px-12 md:flex hidden bg-white" />
            <Image src= "/main.gif" width={2000} height={2000} alt="Process" className=" w-full h-full py-12  px-4 md:hidden bg-white" />
        </section>
    )
}