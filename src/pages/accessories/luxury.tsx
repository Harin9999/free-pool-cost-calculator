import React from 'react';
import { Sparkles, Star, Tag, Info } from 'lucide-react';
import SEO from '../../components/SEO';

const LUXURY_FEATURES = [
  {
    category: 'Smart Pool Technology',
    items: [
      {
        name: 'Smart Pool Monitor',
        description: 'WiFi-enabled pool chemistry monitor with smartphone app',
        price: 349.99,
        rating: 4.8,
        link: 'https://www.amazon.com/pHin-Smart-Water-Monitor-Pools/dp/B01N7QJRVI',
        features: [
          '24/7 water monitoring',
          'Mobile app notifications',
          'Chemical dosing recommendations',
          'Weather-based maintenance tips'
        ]
      },
      {
        name: 'Automated Pool Controller',
        description: 'Complete pool automation system with voice control',
        price: 699.99,
        rating: 4.7,
        link: 'https://www.amazon.com/Hayward-W3HLBASE-Smart-Pool-Control/dp/B08CZBJQ3G',
        features: [
          'Smart device integration',
          'Voice assistant compatible',
          'Remote pump control',
          'Scheduling capabilities'
        ]
      }
    ]
  },
  {
    category: 'Premium Lighting',
    items: [
      {
        name: 'Color-Changing LED System',
        description: 'Professional LED lighting system with dynamic effects',
        price: 499.99,
        rating: 4.9,
        link: 'https://www.amazon.com/Pentair-601000-IntelliBrite-Underwater-Light/dp/B002HHLZ0Q',
        features: [
          'Multiple color themes',
          'Synchronized light shows',
          'Energy efficient LEDs',
          'Long-life durability'
        ]
      },
      {
        name: 'Floating Light Show',
        description: 'Floating LED orbs with synchronized patterns',
        price: 299.99,
        rating: 4.6,
        link: 'https://www.amazon.com/GAME-Waterproof-Floating-Pool-Light/dp/B073WYR3T1',
        features: [
          'Wireless synchronization',
          'Rechargeable battery',
          'Multiple display modes',
          'Remote controlled'
        ]
      }
    ]
  },
  {
    category: 'Entertainment Systems',
    items: [
      {
        name: 'Underwater Sound System',
        description: 'High-fidelity underwater speakers with Bluetooth',
        price: 799.99,
        rating: 4.7,
        link: 'https://www.amazon.com/GAME-Waterproof-Wireless-Floating-Speaker/dp/B08H2GCXK9',
        features: [
          'Bluetooth connectivity',
          'Multiple speaker support',
          'Crystal clear sound',
          'Weather-resistant design'
        ]
      },
      {
        name: 'Poolside Theater System',
        description: 'Complete outdoor entertainment system',
        price: 1299.99,
        rating: 4.8,
        link: 'https://www.amazon.com/Elite-Screens-Yard-Master-Plus/dp/B001DNXK78',
        features: [
          'HD projector',
          'Weather-resistant screen',
          'Surround sound system',
          'Easy setup and storage'
        ]
      }
    ]
  },
  {
    category: 'Comfort Features',
    items: [
      {
        name: 'Premium Pool Lounger Set',
        description: 'Luxury in-pool furniture with premium cushions',
        price: 599.99,
        rating: 4.5,
        link: 'https://www.amazon.com/Ledge-Lounger-In-Pool-Furniture/dp/B004VTGBSK',
        features: [
          'In-pool design',
          'UV-resistant material',
          'Ergonomic comfort',
          'Multiple positions'
        ]
      },
      {
        name: 'Poolside Misting System',
        description: 'High-pressure cooling mist system',
        price: 399.99,
        rating: 4.6,
        link: 'https://www.amazon.com/MistyMate-Cool-Patio-Misting-System/dp/B07H2DK9T1',
        features: [
          'Stainless steel nozzles',
          'Programmable timer',
          'Easy installation',
          'Coverage up to 500 sq ft'
        ]
      }
    ]
  }
];

export default function LuxuryFeatures() {
  return (
    <>
      <SEO 
        title="Luxury Pool Features & Accessories - Premium Pool Upgrades"
        description="Discover premium pool features and luxury accessories. Smart technology, LED lighting systems, entertainment solutions, and high-end comfort features."
        canonical="/accessories/luxury"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Luxury Pool Features</h1>
        </div>

        <div className="grid gap-8">
          {LUXURY_FEATURES.map((category) => (
            <section key={category.category} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.category}</h2>
              
              <div className="grid gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                          <Tag className="w-5 h-5 text-blue-600" />
                          ${item.price}
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View on Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Investment Guide</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>When investing in luxury pool features, consider:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Integration with existing pool systems</li>
                <li>Professional installation requirements</li>
                <li>Long-term maintenance costs</li>
                <li>Weather resistance and durability</li>
                <li>Warranty coverage and support</li>
              </ul>
              <p className="text-sm text-yellow-600 mt-4">
                Note: Some features may require professional installation. Always verify compatibility with your pool system.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}