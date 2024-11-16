import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { DesktopNavProps, NavItem } from './types';

export default function DesktopNav({ items, activeDropdown, setActiveDropdown }: DesktopNavProps) {
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setActiveDropdown]);

  const renderNavItem = (section: NavItem) => (
    <div 
      key={section.label} 
      className="relative"
      onMouseEnter={() => setActiveDropdown(section.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button 
        className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-colors ${
          activeDropdown === section.label || location.pathname === section.items[0].path
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
        }`}
        aria-expanded={activeDropdown === section.label}
        aria-haspopup="true"
      >
        {section.icon}
        <span className="font-medium">{section.label}</span>
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

      {activeDropdown === section.label && (
        <div 
          className="absolute left-0 mt-2 w-56 rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 animate-fade-in"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2" role="none">
            {section.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActiveDropdown(null)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="hidden md:flex items-center space-x-6" ref={dropdownRef}>
      {items.map(renderNavItem)}
    </div>
  );
}