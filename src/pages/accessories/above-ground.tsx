import React from 'react';
import { ShoppingBag, Star, Tag, Info } from 'lucide-react';
import SEO from '../../components/SEO';

const ACCESSORIES = [
  {
    category: 'Essential Equipment',
    items: [
      {
        name: 'Intex Pool Filter Pump',
        description: 'Easy-to-install filter pump system for above ground pools',
        price: 199.99,
        rating: 4.5,
        link: 'https://www.amazon.com/Intex-Krystal-Filter-Ground-Pools/dp/B08H2GCXK9',
        features: [
          'Pump flow rate: 1,500 GPH',
          'For pools up to 15ft',
          'Easy-to-replace filter cartridge',
          'Built-in timer'
        ]
      },
      {
        name: 'Pool Maintenance Kit',
        description: 'Complete kit with essential cleaning tools',
        price: 89.99,
        rating: 4.3,
        link: 'https://www.amazon.com/U-S-Pool-Supply-Professional/dp/B073WYR3T1',
        features: [
          'Telescopic pole',
          'Wall brush',
          'Leaf skimmer',
          'Vacuum head'
        ]
      },
      {
        name: 'Safety Ladder',
        description: 'Heavy-duty A-frame ladder with safety features',
        price: 149.99,
        rating: 4.7,
        link: 'https://www.amazon.com/Confer-Heavy-Duty-A-Frame-Ladder/dp/B004VTGBSK',
        features: [
          'Adjustable height',
          'Non-slip steps',
          'Lockable safety barrier',
          'Corrosion-resistant'
        ]
      }
    ]
  },
  {
    category: 'Maintenance & Cleaning',
    items: [
      {
        name: 'Automatic Pool Cleaner',
        description: 'Above ground pool vacuum with smart navigation',
        price: 299.99,
        rating: 4.6,
        link: 'https://www.amazon.com/Dolphin-E10-Automatic-Robotic-Cleaner/dp/B08H2DK9T1',
        features: [
          'Cleans in 1.5 hours',
          'Easy-clean filter basket',
          'Tangle-free swivel',
          'Energy efficient'
        ]
      },
      {
        name: 'Chemical Testing Kit',
        description: 'Professional-grade water testing kit',
        price: 49.99,
        rating: 4.4,
        link: 'https://www.amazon.com/Taylor-Complete-FAS-DPD-Testing-Instructions/dp/B001DNXK78',
        features: [
          'Tests 7 parameters',
          'Professional accuracy',
          'Easy-to-read color charts',
          'Includes testing guide'
        ]
      }
    ]
  },
  {
    category: 'Comfort & Entertainment',
    items: [
      {
        name: 'LED Pool Light',
        description: 'Magnetic, color-changing LED light system',
        price: 79.99,
        rating: 4.2,
        link: 'https://www.amazon.com/TUDELLO-Changing-Swimming-Magnetic-Powered/dp/B07WGQD8X5',
        features: [
          '7 color modes',
          'Remote controlled',
          'Magnetic mounting',
          'Battery powered'
        ]
      },
      {
        name: 'Pool Float Set',
        description: 'Deluxe inflatable lounger set',
        price: 59.99,
        rating: 4.5,
        link: 'https://www.amazon.com/Intex-Floating-Lounge-Inflatable-Pool/dp/B085M8QHTZ',
        features: [
          'Comfortable headrest',
          'Cup holders',
          'Quick inflation',
          'Durable material'
        ]
      }
    ]
  }
];

export default function AboveGroundAccessories() {
  return (
    <>
      <SEO 
        title="Above Ground Pool Accessories - Essential Equipment Guide"
        description="Find the best accessories for your above ground pool. Comprehensive guide to essential equipment, maintenance tools, and entertainment accessories."
        canonical="/accessories/above-ground"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Above Ground Pool Accessories</h1>
        </div>

        <div className="grid gap-8">
          {ACCESSORIES.map((category) => (
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
              <h2 className="text-xl font-semibold text-gray-800">Buying Guide</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>When selecting accessories for your above ground pool, consider:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pool size and compatibility with accessories</li>
                <li>Quality of materials and durability</li>
                <li>Ease of installation and maintenance</li>
                <li>Safety features and certifications</li>
                <li>Warranty and customer support</li>
              </ul>
              <p className="text-sm text-yellow-600 mt-4">
                Note: Prices and availability may vary. Always verify compatibility with your specific pool model.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}