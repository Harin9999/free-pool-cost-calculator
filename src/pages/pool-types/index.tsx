import React from 'react';
import { Droplets } from 'lucide-react';
import SEO from '../../components/SEO';

const POOL_TYPES = [
  {
    title: 'Concrete Pools',
    description: 'Custom-shaped pools with unlimited design possibilities',
    pros: [
      'Completely customizable design',
      'Extremely durable',
      'Can be renovated multiple times',
      'Increases property value'
    ],
    cons: [
      'Higher initial cost',
      'Longer installation time',
      'More chemicals required',
      'Higher maintenance costs'
    ],
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1200&auto=format&fit=crop&q=80'
  },
  {
    title: 'Fiberglass Pools',
    description: 'Pre-manufactured pools with quick installation',
    pros: [
      'Quick installation',
      'Low maintenance',
      'Smooth, non-porous surface',
      'Built-in features available'
    ],
    cons: [
      'Limited size and shape options',
      'Higher upfront cost than vinyl',
      'Difficult to transport',
      'Cannot be customized after manufacturing'
    ],
    image: 'https://images.unsplash.com/photo-1562844275-857f6e7c4865?w=1200&auto=format&fit=crop&q=80'
  },
  {
    title: 'Vinyl Liner Pools',
    description: 'Affordable pools with replaceable liners',
    pros: [
      'Lower initial cost',
      'Smooth surface',
      'Quick installation',
      'Various liner patterns available'
    ],
    cons: [
      'Liner needs replacement every 5-9 years',
      'Can be damaged by sharp objects',
      'Lower resale value',
      'Limited depth options'
    ],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&auto=format&fit=crop&q=80'
  }
];

export default function PoolTypes() {
  return (
    <>
      <SEO 
        title="Pool Types Guide - Compare Different Pool Options"
        description="Compare different types of swimming pools including concrete, fiberglass, and vinyl liner pools. Learn about pros, cons, and costs of each option."
        canonical="/pool-types"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Droplets className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Pool Types Guide</h1>
        </div>

        <div className="space-y-8">
          {POOL_TYPES.map((type) => (
            <section key={type.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{type.title}</h2>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-green-600 mb-2">Advantages</h3>
                      <ul className="space-y-2">
                        {type.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-green-500 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-red-600 mb-2">Disadvantages</h3>
                      <ul className="space-y-2">
                        {type.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-red-500 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-4">
            Consider these factors when selecting your pool type:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Budget (initial and long-term costs)</li>
            <li>Available space and desired shape</li>
            <li>Local climate conditions</li>
            <li>Maintenance requirements</li>
            <li>Installation timeline</li>
          </ul>
        </div>
      </div>
    </>
  );
}