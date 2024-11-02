// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for reaching out. We will contact you soon.'
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                preferredContact: 'email'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="py-20">
            <div className="container mx-auto px-4">
                {/* Emergency Contact Banner */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
                    <div className="flex items-center">
                        <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                        <div>
                            <h2 className="text-lg font-semibold text-red-800">Need Immediate Help?</h2>
                            <p className="text-red-700">
                                Call our 24/7 Emergency Hotline: <span className="font-bold">+998 93 651 18 00</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-purple-50 p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-purple-800 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-gray-600">+998 93 651 18 00</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-purple-800 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-gray-600">support@svsc.uz</p>
                                            <p className="text-gray-600">info@svsc.uz</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-purple-800 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Location</h3>
                                            <p className="text-gray-600">Tashkent, Uzbekistan</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="h-6 w-6 text-purple-800 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Working Hours</h3>
                                            <p className="text-gray-600">Emergency Support: 24/7</p>
                                            <p className="text-gray-600">Office: Mon-Fri, 9:00-18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Contact Method
                                        </label>
                                        <select
                                            id="preferredContact"
                                            name="preferredContact"
                                            value={formData.preferredContact}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="email">Email</option>
                                            <option value="phone">Phone</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                {submitStatus.type && (
                                    <div
                                        className={`p-4 rounded-lg ${
                                            submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                                        }`}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-purple-800 text-white py-3 px-6 rounded-lg font-medium
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}
                    transition duration-200`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}