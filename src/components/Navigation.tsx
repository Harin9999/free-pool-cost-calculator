import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, Wrench, MessageSquare, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  {
    label: 'Calculator',
    icon: <Calculator className="w-5 h-5" />,
    items: [
      { path: '/', label: 'Pool Cost Calculator' },
      { path: '/calculators/above-ground-pool', label: 'Above Ground Pool' },
      { path: '/calculators/equipment-repair', label: 'Equipment Repair' },
      { path: '/calculators/safety-features', label: 'Safety Features' },
    ],
  },
  {
    label: 'Guides',
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      { path: '/guides/maintenance', label: 'Maintenance Guide' },
      { path: '/guides/seasonal-care', label: 'Seasonal Care' },
    ],
  },
  {
    label: 'Accessories',
    icon: <Wrench className="w-5 h-5" />,
    items: [
      { path: '/accessories/maintenance', label: 'Maintenance Equipment' },
    ],
  },
  {
    label: 'Contact',
    icon: <MessageSquare className="w-5 h-5" />,
    items: [
      { path: '/contact', label: 'Contact Us' },
    ],
  },
];

export default function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              Free Pool Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm ${
                            location.pathname === subItem.path
                              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-6 pr-2 py-2 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            location.pathname === subItem.path
                              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}