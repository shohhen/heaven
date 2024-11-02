// src/app/page.tsx
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import image from '@/app/assets/hero.jpg'
import React from "react";
import PartnerBlock from "@/app/components/home/partners";

const services = [
  {
    title: "Psychological Support",
    description: "Professional counseling and mental health services for survivors.",
    icon: "🫂"
  },
  {
    title: "Legal Assistance",
    description: "Expert legal guidance and advocacy for justice.",
    icon: "⚖️"
  },
  {
    title: "Healing Programs",
    description: "Yoga, pilates, and dance classes for physical and emotional well-being.",
    icon: "🧘‍♀️"
  }
]



export default function HomePage() {
  const imageUrl: StaticImageData  = image as StaticImageData;

  return (
      <main>
        {/* Hero Section */}
        <section className="bg-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">
                  Supporting Survivors, Building Hope
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  We provide comprehensive support services focused on healing, justice, and personal growth for survivors of sexual violence across Uzbekistan.
                </p>
                <div className="flex gap-4">
                  <Link
                      href="/contact"
                      className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                  >
                    Get Help Now
                  </Link>
                  <Link
                      href="/about"
                      className="border-2 border-purple-800 text-purple-800 px-6 py-3 rounded-lg hover:bg-purple-50 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                      src={imageUrl.src}
                      alt="Supporting community"
                      fill
                      className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are committed to creating a safe, inclusive, and compassionate environment
              where survivors can reclaim their rights, rebuild their lives, and thrive.
              We believe that everyone in Uzbekistan deserves safety, dignity, and the
              opportunity to lead a life free from violence.
            </p>
          </div>
        </section>
        <section className='py-20'>
          <div className='container mx-auto px-4 text-center relative'>
            <h2 className='text-3xl font-bold mb-8'>Our Partners</h2>
              <PartnerBlock />
          </div>
        </section>
      </main>
  );
}