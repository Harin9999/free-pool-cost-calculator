import React, { useEffect } from 'react';
import { MapPin, Store, Users2, Truck, Factory } from 'lucide-react';

interface LocationContentProps {
  state: string;
  city: string;
}

const RESOURCE_TYPES = [
  { id: 'dealers', label: 'Local Dealers', icon: Store },
  { id: 'contractors', label: 'Contractors', icon: Users2 },
  { id: 'suppliers', label: 'Suppliers', icon: Truck },
  { id: 'manufacturers', label: 'Manufacturers', icon: Factory },
];

export default function LocationContent({ state, city }: LocationContentProps) {
  const sanitizedCity = city.replace(/_/g, ' ');
  const baseUrl = 'https://localpooldirectory.com';

  const getResourceUrl = (type: string) => {
    return `${baseUrl}/${state.toLowerCase()}/${city.toLowerCase()}/${type}`;
  };

  useEffect(() => {
    // Cleanup any potential timers on unmount
    return () => {
      const highestId = window.setTimeout(() => {}, 0);
      for (let i = highestId; i >= 0; i--) {
        window.clearTimeout(i);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">
          Pool Resources in {sanitizedCity}, {state}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {RESOURCE_TYPES.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={getResourceUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200"
          >
            <div className="mr-4 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                {label}
              </h3>
              <p className="text-sm text-gray-500">
                Find {label.toLowerCase()} in your area
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> All listed providers are independently verified and regularly updated
          to ensure quality service.
        </p>
      </div>
    </div>
  );
}