import React from "react";
import { Poppins } from "next/font/google";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"],
})

const items = [
    <div className="item" data-value="1"><Image src='/hero/1.svg' alt='offer' width={2000} height={2000} className={`object-cover`} /></div>,
    <div className="item" data-value="2"><Image src='/hero/2.svg' alt='offer' width={2000} height={2000} className={`object-cover`} /></div>,
];

export default function Hero() {
    return (
        <div className={`${poppins.className} mt-[91px] md:mt-[120px]`}>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={4000}
                animationDuration={1000}
                infinite
                touchTracking={false}
                disableButtonsControls
            
                items={items}
                paddingLeft={2}
                paddingRight={2}
            />
        </div>

    )
}