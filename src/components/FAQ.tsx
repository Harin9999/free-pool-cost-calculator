import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How much does an inground pool cost?',
    answer: 'The average cost ranges from $35,000 to $100,000 depending on size, materials, and features. Concrete pools typically cost more than fiberglass or vinyl, but offer more customization options.',
  },
  {
    question: 'What type of pool is best for my climate?',
    answer: 'In cold climates, fiberglass pools resist freeze-thaw damage better than concrete. In warm climates, all pool types work well, but concrete pools with proper finishing can better handle intense sun exposure.',
  },
  {
    question: 'How long does it take to build a pool?',
    answer: 'Construction time varies: vinyl pools take 2-4 weeks, fiberglass pools 3-6 weeks, and concrete pools 8-12 weeks. Factors like weather, permits, and site conditions can affect timeline.',
  },
  {
    question: 'What are the ongoing maintenance costs?',
    answer: 'Annual maintenance typically costs $3,000-$5,000, including chemicals, utilities, cleaning, and routine repairs. Concrete pools generally have higher maintenance costs than fiberglass or vinyl.',
  },
  {
    question: 'Which pool features add the most value?',
    answer: 'Features like heating systems, automatic covers, and proper lighting offer the best return on investment. They enhance usability, safety, and energy efficiency while appealing to future buyers.',
  },
  {
    question: 'How can I reduce pool maintenance costs?',
    answer: 'Install energy-efficient equipment, use a pool cover to reduce chemical evaporation, maintain proper chemical balance, and perform regular cleaning to prevent larger issues.',
  },
  {
    question: 'What safety features should I consider?',
    answer: 'Essential safety features include fencing with self-closing gates, pool covers, alarms, proper lighting, and non-slip decking. Many areas have specific safety requirements by law.',
  },
  {
    question: 'How often should I test pool water?',
    answer: 'Test chemical levels 2-3 times per week during peak season. Check pH, chlorine, and alkalinity regularly. Test other parameters like calcium hardness and cyanuric acid monthly.',
  }
];

export default function FAQ() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-3">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-center text-blue-700">
          Have more questions? Contact our pool experts for personalized advice!
        </p>
      </div>
    </div>
  );
}