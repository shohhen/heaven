'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image, {StaticImageData} from 'next/image';
import image from '@/public/images/Pastel_Blue_Gradient_Budget_Pie_Chart_Graph-removebg.png';

const IMAGE = image as StaticImageData

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src={IMAGE}
                            alt="Supporting community"
                            className="w-16 h-auto"
                        />
                        <Link href="/" className="text-2xl font-bold text-purple-800 capitalize ml-4">
                            Sexual Violence Support Centre
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-purple-800">Home</Link>
                        <Link href="/about" className="text-gray-600 hover:text-purple-800">About Us</Link>
                        <Link href="/blog" className="text-gray-600 hover:text-purple-800">Blog</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-purple-800">Contact</Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 space-y-4">
                        <Link href="/" className="block text-gray-600 hover:text-purple-800">Home</Link>
                        <Link href="/about" className="block text-gray-600 hover:text-purple-800">About Us</Link>
                        <Link href="/blog" className="block text-gray-600 hover:text-purple-800">Blog</Link>
                        <Link href="/contact" className="block text-gray-600 hover:text-purple-800">Contact</Link>
                    </div>
                )}
            </nav>


        </header>
    );
}
