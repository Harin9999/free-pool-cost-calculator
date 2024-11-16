import React from 'react';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Terms of service for Free Pool Cost Calculator. Understand our terms of use and conditions."
        canonical="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Terms of Service</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing freepoolcostcalculator.com, you agree to these Terms of Service. If you disagree with any part, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Use of Service</h2>
            <div className="space-y-3 text-gray-600">
              <p>Our service provides:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pool cost estimation tools</li>
                <li>Product recommendations</li>
                <li>Maintenance guides</li>
                <li>Educational resources</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
            <div className="space-y-3 text-gray-600">
              <p>Please note:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Cost estimates are approximations and may vary</li>
                <li>Product recommendations are suggestions only</li>
                <li>We are not responsible for third-party products or services</li>
                <li>Consult professionals for specific advice</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Affiliate Links</h2>
            <p className="text-gray-600">
              We participate in the Amazon Associates Program. We earn from qualifying purchases through affiliate links at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All content on this website is our property and protected by copyright laws. You may not reproduce or distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              We are not liable for any damages arising from your use of our service. Our liability is limited to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of our service constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              For questions about these Terms, contact us at{' '}
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