import React from 'react';
import { Calendar, Sun, Cloud, Snowflake, Leaf } from 'lucide-react';
import SEO from '../../components/SEO';

const SEASONAL_GUIDES = [
  {
    season: 'Spring',
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    color: 'green',
    tasks: [
      'Remove and clean winter cover',
      'Clean and inspect pool surfaces',
      'Check and repair equipment',
      'Balance water chemistry',
      'Shock treat the pool',
      'Install ladder and accessories',
    ],
    tips: 'Start spring cleaning early to ensure your pool is ready for the swimming season. Check for winter damage and address repairs promptly.',
  },
  {
    season: 'Summer',
    icon: <Sun className="w-6 h-6 text-yellow-600" />,
    color: 'yellow',
    tasks: [
      'Monitor water chemistry daily',
      'Run filter system consistently',
      'Clean skimmer and pump baskets',
      'Brush walls and floor weekly',
      'Maintain proper water level',
      'Check and adjust chlorine levels',
    ],
    tips: 'Regular maintenance is crucial during peak swimming season. Test water more frequently during heavy pool use.',
  },
  {
    season: 'Fall',
    icon: <Leaf className="w-6 h-6 text-orange-600" />,
    color: 'orange',
    tasks: [
      'Remove leaves and debris regularly',
      'Clean pool thoroughly',
      'Balance water chemistry',
      'Lower water level',
      'Clean and store accessories',
      'Prepare winter cover',
    ],
    tips: 'Begin winterizing preparations before temperatures drop too low. Remove leaves promptly to prevent staining.',
  },
  {
    season: 'Winter',
    icon: <Snowflake className="w-6 h-6 text-blue-600" />,
    color: 'blue',
    tasks: [
      'Install winter cover securely',
      'Drain equipment and pipes',
      'Add winterizing chemicals',
      'Monitor cover for damage',
      'Remove snow accumulation',
      'Check water level monthly',
    ],
    tips: 'Proper winterization prevents freeze damage and makes spring opening easier. Monitor your pool cover throughout the winter.',
  },
];

const CHEMICAL_ADJUSTMENTS = [
  {
    season: 'Spring',
    adjustments: [
      { parameter: 'pH', range: '7.2-7.6' },
      { parameter: 'Chlorine', range: '2-4 ppm' },
      { parameter: 'Alkalinity', range: '80-120 ppm' },
    ],
  },
  {
    season: 'Summer',
    adjustments: [
      { parameter: 'pH', range: '7.4-7.6' },
      { parameter: 'Chlorine', range: '1-3 ppm' },
      { parameter: 'Alkalinity', range: '80-120 ppm' },
    ],
  },
  {
    season: 'Fall',
    adjustments: [
      { parameter: 'pH', range: '7.2-7.6' },
      { parameter: 'Chlorine', range: '2-4 ppm' },
      { parameter: 'Alkalinity', range: '80-120 ppm' },
    ],
  },
  {
    season: 'Winter',
    adjustments: [
      { parameter: 'pH', range: '7.2-7.6' },
      { parameter: 'Chlorine', range: '2-4 ppm' },
      { parameter: 'Alkalinity', range: '80-120 ppm' },
    ],
  },
];

export default function SeasonalCare() {
  return (
    <>
      <SEO 
        title="Seasonal Pool Care Guide - Year-Round Maintenance Tips"
        description="Learn how to maintain your pool throughout the year with our comprehensive seasonal care guide. Get expert tips for spring, summer, fall, and winter maintenance."
        canonical="/guides/seasonal-care"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Seasonal Pool Care Guide</h1>
        </div>

        <div className="grid gap-8">
          {SEASONAL_GUIDES.map((season) => (
            <section key={season.season} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                {season.icon}
                <h2 className="text-2xl font-semibold text-gray-800">{season.season} Maintenance</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Essential Tasks</h3>
                  <ul className="space-y-3">
                    {season.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className={`text-${season.color}-500 mt-1`}>•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Chemical Balance</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {CHEMICAL_ADJUSTMENTS.find(s => s.season === season.season)?.adjustments.map((adj, index) => (
                        <div key={index} className="flex justify-between py-1 border-b last:border-0 border-gray-200">
                          <span className="text-gray-600">{adj.parameter}</span>
                          <span className="font-medium text-gray-800">{adj.range}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Pro Tips</h3>
                    <p className="text-gray-600">{season.tips}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Year-Round Maintenance Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Regular Monitoring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check water chemistry weekly</li>
                  <li>• Inspect equipment for leaks</li>
                  <li>• Monitor water level</li>
                  <li>• Clean skimmer baskets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Safety Checks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Test safety covers and fences</li>
                  <li>• Check lighting systems</li>
                  <li>• Verify alarm functionality</li>
                  <li>• Maintain clear deck areas</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}