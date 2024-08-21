import Image from 'next/image';
import Heading from './ui/Heading';

export default function Process() {
    return (
        <section className="py-12">
            <Heading>
                Process
            </Heading>
            <Image src="/process.svg" width={2000} height={2000} alt="Process" className="w-full py-12 md:px-12 md:flex hidden" />
            <Image src="/processmobile.svg" width={2000} height={2000} alt="Process" className="w-full py-12 px-4 md:hidden" />
        </section>
    )
}