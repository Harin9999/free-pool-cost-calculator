import React from 'react';
import { BookOpen, Calendar, Droplets, Shield, Wrench } from 'lucide-react';
import SEO from '../../components/SEO';

const MAINTENANCE_SECTIONS = [
  {
    title: 'Daily Maintenance',
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    tasks: [
      {
        task: 'Check Water Level',
        description: 'Maintain water level at midpoint of skimmer opening',
        importance: 'Critical for proper filtration and equipment operation'
      },
      {
        task: 'Run Filter System',
        description: 'Operate pump during recommended hours',
        importance: 'Essential for water circulation and cleanliness'
      },
      {
        task: 'Remove Debris',
        description: 'Skim surface and empty skimmer baskets',
        importance: 'Prevents debris from sinking and staining'
      }
    ]
  },
  {
    title: 'Weekly Maintenance',
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    tasks: [
      {
        task: 'Test Water Chemistry',
        description: 'Check pH, chlorine, alkalinity, and stabilizer levels',
        importance: 'Ensures safe and balanced water conditions'
      },
      {
        task: 'Brush Walls and Floor',
        description: 'Scrub all surfaces to prevent algae growth',
        importance: 'Prevents algae and scale buildup'
      },
      {
        task: 'Vacuum Pool',
        description: 'Remove settled debris and dirt',
        importance: 'Maintains cleanliness and prevents staining'
      },
      {
        task: 'Clean Filter Baskets',
        description: 'Empty pump and skimmer baskets',
        importance: 'Ensures proper water flow'
      }
    ]
  },
  {
    title: 'Monthly Maintenance',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    tasks: [
      {
        task: 'Clean Filter',
        description: 'Backwash sand filter or clean cartridge',
        importance: 'Maintains filtration efficiency'
      },
      {
        task: 'Check Equipment',
        description: 'Inspect pump, heater, and chlorinator',
        importance: 'Identifies potential issues early'
      },
      {
        task: 'Test Total Dissolved Solids',
        description: 'Measure TDS levels',
        importance: 'Prevents water balance issues'
      }
    ]
  },
  {
    title: 'Safety Checks',
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    tasks: [
      {
        task: 'Inspect Safety Equipment',
        description: 'Check fences, gates, and covers',
        importance: 'Ensures pool safety compliance'
      },
      {
        task: 'Test GFCI Protection',
        description: 'Verify electrical safety devices',
        importance: 'Prevents electrical hazards'
      },
      {
        task: 'Check Warning Signs',
        description: 'Ensure safety signage is visible',
        importance: 'Maintains safety awareness'
      }
    ]
  }
];

const WATER_CHEMISTRY = [
  { parameter: 'pH', range: '7.2-7.6', importance: 'Affects sanitizer effectiveness and comfort' },
  { parameter: 'Chlorine', range: '1-3 ppm', importance: 'Primary sanitizer for water safety' },
  { parameter: 'Alkalinity', range: '80-120 ppm', importance: 'Buffers pH changes' },
  { parameter: 'Stabilizer', range: '30-80 ppm', importance: 'Protects chlorine from sun' },
  { parameter: 'Calcium', range: '200-400 ppm', importance: 'Prevents surface damage' }
];

export default function MaintenanceGuide() {
  return (
    <>
      <SEO 
        title="Pool Maintenance Guide - Expert Care Instructions"
        description="Learn professional pool maintenance techniques with our comprehensive guide. Step-by-step instructions for water chemistry, cleaning, equipment care, and seasonal maintenance."
        canonical="/guides/maintenance"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Pool Maintenance Guide</h1>
        </div>

        <div className="grid gap-8">
          {MAINTENANCE_SECTIONS.map((section) => (
            <section key={section.title} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.tasks.map((task, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{task.task}</h3>
                    <p className="text-gray-600 mb-2">{task.description}</p>
                    <p className="text-sm text-blue-600">{task.importance}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Water Chemistry Guide</h2>
            <div className="grid gap-4">
              {WATER_CHEMISTRY.map((param) => (
                <div key={param.parameter} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">{param.parameter}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {param.range}
                    </span>
                  </div>
                  <p className="text-gray-600">{param.importance}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro Tips</h2>
            <div className="space-y-4 text-gray-600">
              <p>For optimal pool maintenance:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Keep a maintenance log to track tasks and chemical readings</li>
                <li>Clean equipment and test water at the same time each week</li>
                <li>Store chemicals properly and follow safety guidelines</li>
                <li>Address problems immediately to prevent larger issues</li>
                <li>Consider professional service for major repairs</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> Always follow manufacturer guidelines for specific equipment
                  and chemical usage. When in doubt, consult a pool professional.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}