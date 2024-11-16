import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission would be implemented here
    setStatus('success');
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Free Pool Cost Calculator. We're here to help with your pool-related questions and feedback."
        canonical="/contact"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your message. We'll respond shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
              </div>
              <p className="text-gray-600 mb-4">
                For any questions or support, email us at:
              </p>
              <a
                href="mailto:connect@freepoolcostcalculator.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                connect@freepoolcostcalculator.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">How accurate are the cost estimates?</h3>
                  <p className="text-gray-600">
                    Our estimates are based on national averages and current market data. Actual costs may vary based on your location and specific requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Do you provide installation services?</h3>
                  <p className="text-gray-600">
                    We don't provide installation services directly. We can help connect you with local professionals through our directory.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Are the product recommendations sponsored?</h3>
                  <p className="text-gray-600">
                    We participate in the Amazon Associates Program. Our recommendations are based on product quality and user reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}