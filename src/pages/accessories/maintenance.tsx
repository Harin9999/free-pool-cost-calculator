import React from 'react';
import { Wrench, Star, Tag, Info } from 'lucide-react';
import SEO from '../../components/SEO';

const MAINTENANCE_CATEGORIES = [
  {
    title: 'Essential Maintenance Equipment',
    items: [
      {
        name: 'Intex Pool Accessory Kit',
        description: 'Complete maintenance kit with professional-grade tools',
        price: 149.99,
        rating: 4.7,
        link: 'https://www.amazon.com/Intex-Pool-Accessory/s?k=Intex+Pool+Accessory&linkCode=ll2&tag=mysavingtod0b-20&linkId=5efad414b0a154b2872866ff462b2e10&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Complete maintenance kit',
          'Professional-grade tools',
          'Durable construction',
          'Essential accessories included'
        ]
      },
      {
        name: 'Premium Pool Vacuum Set',
        description: 'Professional vacuum with telescoping pole and wall brush',
        price: 199.99,
        rating: 4.6,
        link: 'https://www.amazon.com/pool-accessories/s?k=pool+accessories&linkCode=ll2&tag=mysavingtod0b-20&linkId=acf4b994ae03ebb2c3fb9bc2e02de6d9&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Adjustable telescoping pole',
          'Heavy-duty wall brush',
          'Efficient vacuum head',
          'Easy assembly'
        ]
      },
      {
        name: 'Professional Skimmer Net',
        description: 'Heavy-duty skimmer with telescopic aluminum pole',
        price: 79.99,
        rating: 4.5,
        link: 'https://www.amazon.com/pool-accessories/s?k=pool+accessories&linkCode=ll2&tag=mysavingtod0b-20&linkId=f693de0069b346de02b7d9d271ebe6c5&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Durable aluminum construction',
          'Deep mesh net',
          'Extended reach',
          'Professional grade'
        ]
      }
    ]
  },
  {
    title: 'Safety & Protection',
    items: [
      {
        name: 'Winter Block Pool Cover',
        description: 'Premium winter cover with 8-year warranty',
        price: 299.99,
        rating: 4.8,
        link: 'https://www.amazon.com/Best-Sellers-Pool-Spa-Parts-Accessories/zgbs/lawn-garden/4623183011?&linkCode=ll2&tag=mysavingtod0b-20&linkId=a8dbb0a5e119c0a27fbd4b224c4e738e&language=en_US&ref_=as_li_ss_tl',
        features: [
          '8-year warranty',
          'Heavy-duty material',
          'UV-resistant',
          'Superior protection'
        ]
      },
      {
        name: 'Safety Cover System',
        description: 'Professional safety cover with drain holes',
        price: 399.99,
        rating: 4.7,
        link: 'https://www.amazon.com/Best-Sellers-Pool-Safety-Covers/zgbs/lawn-garden/1272994011?&linkCode=ll2&tag=mysavingtod0b-20&linkId=a4b55ff21c8860361b8f4e1050e268da&language=en_US&ref_=as_li_ss_tl',
        features: [
          'ASTM certified',
          'Effective drainage system',
          'Easy installation',
          'All-season protection'
        ]
      },
      {
        name: 'Cover Anchor Kit',
        description: 'Complete pool cover weights and straps kit',
        price: 89.99,
        rating: 4.6,
        link: 'https://www.amazon.com/SunnyRoyal-Inground-Swimming-Accessories-Adjustable/dp/B0CF5FBKZ6?th=1&linkCode=ll1&tag=mysavingtod0b-20&linkId=c146a7ed688130e68d276d459b4ad351&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Adjustable straps',
          'Heavy-duty weights',
          'Weather-resistant',
          'Universal compatibility'
        ]
      }
    ]
  },
  {
    title: 'Filtration & Cleaning',
    items: [
      {
        name: 'Professional Sand Filter',
        description: 'High-performance sand filter pump system',
        price: 499.99,
        rating: 4.8,
        link: 'https://www.amazon.com/s?k=sand+filter+pump+for+above+ground+pool&i=lawngarden&crid=KDSRZNIXTI7J&sprefix=sand+filter%2Clawngarden%2C373&linkCode=ll2&tag=mysavingtod0b-20&linkId=a9d1b3cc1cf2ac6e633b97833b60faab&language=en_US&ref_=as_li_ss_tl',
        features: [
          'High flow rate',
          'Multi-port valve',
          'Energy efficient',
          'Easy maintenance'
        ]
      },
      {
        name: 'Complete Maintenance Kit',
        description: 'Professional pool cleaning and maintenance kit',
        price: 199.99,
        rating: 4.6,
        link: 'https://www.amazon.com/pool-accessories/s?k=pool+accessories&linkCode=ll2&tag=mysavingtod0b-20&linkId=0b7c3ec0f4f36d4a535b14bcad20825a&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Complete tool set',
          'Professional grade',
          'Storage case included',
          'Comprehensive cleaning'
        ]
      },
      {
        name: 'Water Treatment System',
        description: 'Advanced pool water treatment unit',
        price: 299.99,
        rating: 4.7,
        link: 'https://www.amazon.com/s?k=pool+water+treatment+unit&crid=32ZFO3YFAN4QE&sprefix=pool+water+treatment+unit%2Caps%2C296&linkCode=ll2&tag=mysavingtod0b-20&linkId=aa76c451f1bd06d68206cee606f589de&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Advanced filtration',
          'Chemical reduction',
          'Easy installation',
          'Long-lasting treatment'
        ]
      }
    ]
  },
  {
    title: 'Lighting & Organization',
    items: [
      {
        name: 'Pool Organizer System',
        description: 'Premium pool towel and accessory organizer',
        price: 129.99,
        rating: 4.5,
        link: 'https://www.amazon.com/pool-accessories/s?k=pool+accessories&rh=n%3A1063238&dc=&ds=v1%3AUEuOXeDWgVKp7FQIkTUpnVIoS04GbswoQFRIyUtt5Hw&qid=1731595013&rnid=2941120011&linkCode=ll2&tag=mysavingtod0b-20&linkId=324372ee8b6599eb04579683949767c1&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Weather-resistant',
          'Multiple compartments',
          'Towel hooks',
          'Equipment storage'
        ]
      },
      {
        name: 'Solar LED Light System',
        description: 'Advanced solar-powered pool lighting',
        price: 199.99,
        rating: 4.6,
        link: 'https://www.amazon.com/s?k=Solar-powered+LED+pool+lights&crid=M3R2L3HHJR4E&sprefix=solar-powered+led+pool+lights%2Caps%2C340&linkCode=ll2&tag=mysavingtod0b-20&linkId=39b6d5cb46fb4d3cc3c6397b44c30ad5&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Solar powered',
          'Multiple light modes',
          'Waterproof design',
          'Easy installation'
        ]
      },
      {
        name: 'LED Fountain System',
        description: 'Decorative pool fountain with LED lights',
        price: 299.99,
        rating: 4.7,
        link: 'https://www.amazon.com/s?k=Pool+fountain+with+LED+lights&crid=1AVFPZPAHHYBP&sprefix=pool+fountain+with+led+lights%2Caps%2C541&linkCode=ll2&tag=mysavingtod0b-20&linkId=de76b2d415ceb1b735b16b154baa28a4&language=en_US&ref_=as_li_ss_tl',
        features: [
          'Color-changing LEDs',
          'Adjustable flow',
          'Remote controlled',
          'Energy efficient'
        ]
      }
    ]
  }
];

export default function MaintenanceAccessories() {
  return (
    <>
      <SEO 
        title="Pool Maintenance Accessories - Essential Equipment Guide"
        description="Complete guide to pool maintenance accessories and equipment. Find professional-grade testing kits, cleaning tools, and chemical management solutions."
        canonical="/accessories/maintenance"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Pool Maintenance Accessories</h1>
        </div>

        <div className="space-y-8">
          {MAINTENANCE_CATEGORIES.map((category) => (
            <section key={category.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600">
                              <span className="text-blue-500 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                          <Tag className="w-5 h-5 text-blue-600" />
                          ${item.price}
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Maintenance Tips</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p>For effective pool maintenance:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Test water chemistry at least 2-3 times per week</li>
              <li>Clean skimmer and pump baskets regularly</li>
              <li>Brush walls and floor weekly to prevent algae</li>
              <li>Keep chemicals properly stored and labeled</li>
              <li>Maintain equipment according to manufacturer guidelines</li>
            </ul>
            <p className="text-sm text-yellow-600 mt-4">
              Note: Regular maintenance helps prevent costly repairs and ensures safe swimming conditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}