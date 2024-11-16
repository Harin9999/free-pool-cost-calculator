import React from 'react';
import { Building2, Users, Truck, Factory } from 'lucide-react';

interface DirectoryListProps {
  state: string;
  city: string;
}

const directoryIcons = {
  dealers: Building2,
  contractors: Users,
  suppliers: Truck,
  manufacturers: Factory,
};

const directoryTypes = ['dealers', 'contractors', 'suppliers', 'manufacturers'];

export default function DirectoryList({ state, city }: DirectoryListProps) {
  if (!state || !city) return null;

  const getDirectoryUrl = (type: string) => {
    const baseUrl = 'https://localpooldirectory.com';
    return `${baseUrl}/${state.toLowerCase()}/${city.toLowerCase()}/${type}`;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Local Pool Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {directoryTypes.map((type) => {
          const Icon = directoryIcons[type as keyof typeof directoryIcons];
          return (
            <a
              key={type}
              href={getDirectoryUrl(type)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-4 border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 capitalize group-hover:text-blue-600 transition-colors">
                    {type}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Find local {type} in {city.replace('_', ' ')}, {state}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}