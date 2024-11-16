import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { MobileNavProps, NavItem } from './types';

export default function MobileNav({ 
  items, 
  isOpen, 
  activeDropdown,
  setActiveDropdown,
  onClose 
}: MobileNavProps) {
  const location = useLocation();

  if (!isOpen) return null;

  const renderNavItem = (section: NavItem) => (
    <div key={section.label} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
      <button
        onClick={() => setActiveDropdown(activeDropdown === section.label ? null : section.label)}
        className={`flex items-center justify-between w-full py-3 px-2 rounded-lg transition-colors ${
          activeDropdown === section.label || location.pathname === section.items[0].path
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
            : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        <div className="flex items-center gap-2">
          {section.icon}
          <span className="font-medium">{section.label}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            activeDropdown === section.label ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          activeDropdown === section.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {section.items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`block pl-9 pr-4 py-2 text-sm transition-colors ${
              location.pathname === item.path
                ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm z-40 overflow-y-auto animate-fade-in">
      <nav className="container mx-auto px-4 py-4 space-y-1">
        {items.map(renderNavItem)}
      </nav>
    </div>
  );
}