import React from 'react';
import partnerImage1 from "@/public/images/image1.jpg";
import partnerImage2 from "@/public/images/image2.jpg";
import partnerImage3 from "@/public/images/image3.jpg";
import partnerImage4 from "@/public/images/image4.jpg";

import Image from 'next/image';


const slides = [
    partnerImage1,
    partnerImage2,
    partnerImage3,
    partnerImage4,
];

const PartnerBlock: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-center">
                {slides.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 p-4"
                    >
                        <Image
                            src={partner as string}
                            alt={partner as string}
                            className="max-h-24 max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerBlock;