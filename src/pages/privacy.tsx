import React from 'react';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy policy for Free Pool Cost Calculator. Learn how we protect your data and respect your privacy."
        canonical="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600">
              This Privacy Policy explains how Free Pool Cost Calculator ("we," "us," or "our") collects, uses, and protects your information when you use our website (freepoolcostcalculator.com).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <div className="space-y-3 text-gray-600">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pool specifications and dimensions</li>
                <li>Location information (if provided)</li>
                <li>Contact information when you reach out to us</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <div className="space-y-3 text-gray-600">
              <p>We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate pool cost estimates</li>
                <li>Improve our calculator and services</li>
                <li>Respond to your inquiries</li>
                <li>Send relevant updates (with your consent)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Protection</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Links</h2>
            <p className="text-gray-600">
              Our website contains links to third-party websites, including Amazon product links. We are not responsible for their privacy practices or content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Updates to Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. The latest version will be posted on this page with the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:connect@freepoolcostcalculator.com" className="text-blue-600 hover:text-blue-700">
                connect@freepoolcostcalculator.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}