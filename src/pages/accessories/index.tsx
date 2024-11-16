import React from 'react';
import { Wrench, Info } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    title: 'Essential Maintenance',
    description: 'Professional-grade maintenance equipment and supplies',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    link: '/accessories/maintenance',
  }
];

export default function Accessories() {
  return (
    <>
      <SEO 
        title="Pool Accessories & Equipment - Complete Buyer's Guide 2024"
        description="Comprehensive guide to essential pool accessories and equipment. Find the best pool maintenance tools, cleaning supplies, and safety equipment with expert recommendations."
        canonical="/accessories"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Pool Accessories Guide</h1>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
            >
              <div className="mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Buying Guide</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              When selecting pool accessories and equipment, consider:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Compatibility with your pool type and size</li>
              <li>Quality and durability of materials</li>
              <li>Energy efficiency ratings</li>
              <li>Warranty coverage</li>
              <li>Installation requirements</li>
              <li>Maintenance needs</li>
            </ul>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Pro Tip:</strong> Always verify that equipment meets local safety standards and
                building codes before purchase. Consider professional installation for complex equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}