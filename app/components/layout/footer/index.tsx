import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-purple-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Sexual Violence Support Centre</h3>
                        <p className="text-gray-300">
                            Empowering survivors of sexual violence across Uzbekistan with support, healing, and hope.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                            <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <p className="text-gray-300">Email: support@svsc.uz</p>
                        <p className="text-gray-300">Emergency Hotline: Available 24/7</p>
                    </div>
                </div>
                <div className="border-t border-purple-800 mt-8 pt-8 text-center">
                    <p className="text-gray-300">&copy; {new Date().getFullYear()} SVSC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}