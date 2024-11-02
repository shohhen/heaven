// src/app/about/page.tsx
import Image, {StaticImageData} from 'next/image';
import image from '@/app/assets/about.jpg'
import about1 from '@/app/assets/about1.jpg'
import about2 from '@/app/assets/about2.jpg'
import about3 from '@/app/assets/about3.jpg'
import about4 from '@/app/assets/about4.jpg'
import about5 from '@/app/assets/about5.jpg'

const HERO = image as StaticImageData
const ABOUT1 = about1 as StaticImageData
const ABOUT2 = about2 as StaticImageData
const ABOUT3 = about3 as StaticImageData
const ABOUT4 = about4 as StaticImageData
const ABOUT5 = about5 as StaticImageData

const galleryImages = [
    {
        src: ABOUT1,
        alt: "Support group session",
        caption: "Weekly support group meetings"
    },
    {
        src: ABOUT2,
        alt: "Yoga class",
        caption: "Healing through movement"
    },
    {
        src: ABOUT3,
        alt: "Art therapy session",
        caption: "Express and heal through art"
    },
    {
        src: ABOUT4,
        alt: "Community event",
        caption: "Building stronger together"
    },
    {
        src: ABOUT5,
        alt: "Counseling session",
        caption: "Professional support"
    },
];

export default function AboutPage() {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4">
                {/* Mission Section */}
                <section className="mb-20">
                    <h1 className="text-4xl font-bold text-center mb-12">About SVSC</h1>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                                <Image
                                    src={HERO.src}
                                    alt="Our mission"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-700 mb-6">
                                Our mission is to empower survivors of sexual violence across Uzbekistan
                                by offering a comprehensive range of support services focused on healing,
                                justice, and personal growth.
                            </p>
                            <p className="text-gray-700">
                                We provide psychological training, mental health support, legal assistance,
                                and restorative classes like yoga, pilates, and dance to promote well-being
                                and resilience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Compassion",
                                description: "We approach every individual with understanding and empathy."
                            },
                            {
                                title: "Safety",
                                description: "We create secure spaces for healing and growth."
                            },
                            {
                                title: "Empowerment",
                                description: "We support survivors in reclaiming their strength and autonomy."
                            },
                            {
                                title: "Inclusivity",
                                description: "We welcome and support all survivors without discrimination."
                            },
                            {
                                title: "Dignity",
                                description: "We uphold the inherent worth and dignity of every person."
                            },
                            {
                                title: "Hope",
                                description: "We believe in the possibility of healing and transformation."
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-purple-50 p-8 rounded-xl"
                            >
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                {/*<section className='mb-20'>*/}
                {/*    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                {/*        {[*/}
                {/*            {*/}
                {/*                name: "Dr. Sarah Johnson",*/}
                {/*                role: "Clinical Director",*/}
                {/*                image: "/api/placeholder/400/400"*/}
                {/*            },*/}
                {/*            {*/}
                {/*                name: "Aisha Karimova",*/}
                {/*                role: "Legal Advocate",*/}
                {/*                image: "/api/placeholder/400/400"*/}
                {/*            },*/}
                {/*            {*/}
                {/*                name: "Maria Lee",*/}
                {/*                role: "Wellness Coordinator",*/}
                {/*                image: "/api/placeholder/400/400"*/}
                {/*            }*/}
                {/*        ].map((member, index) => (*/}
                {/*            <div*/}
                {/*                key={index}*/}
                {/*                className="text-center"*/}
                {/*            >*/}
                {/*                <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">*/}
                {/*                    <Image*/}
                {/*                        src={member.image}*/}
                {/*                        alt={member.name}*/}
                {/*                        fill*/}
                {/*                        className="object-cover"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>*/}
                {/*                <p className="text-gray-600">{member.role}</p>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white p-4 text-lg font-medium">
                                            {image.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}