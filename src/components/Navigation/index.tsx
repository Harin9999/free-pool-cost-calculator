import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, Wrench, MessageSquare, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { NavItem } from './types';

const navItems: NavItem[] = [
  {
    label: 'Calculator',
    icon: <Calculator className="w-5 h-5" aria-hidden="true" />,
    items: [
      { path: '/', label: 'Pool Cost Calculator' },
      { path: '/calculators/above-ground-pool', label: 'Above Ground Pool' },
      { path: '/calculators/equipment-repair', label: 'Equipment Repair' },
      { path: '/calculators/safety-features', label: 'Safety Features' },
    ],
  },
  {
    label: 'Resources',
    icon: <BookOpen className="w-5 h-5" aria-hidden="true" />,
    items: [
      { path: '/pool-types', label: 'Pool Types' },
      { path: '/blog', label: 'Blog' },
      { path: '/guides/maintenance', label: 'Maintenance Guide' },
      { path: '/guides/seasonal-care', label: 'Seasonal Care' },
    ],
  },
  {
    label: 'Accessories',
    icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
    items: [
      { path: '/accessories/maintenance', label: 'Maintenance Equipment' },
    ],
  },
  {
    label: 'Contact',
    icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />,
    items: [
      { path: '/contact', label: 'Contact Us' },
    ],
  },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-gradient-to-b from-blue-500/10 via-blue-400/5 to-transparent backdrop-blur-sm border-b border-blue-100/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Free Pool Calculator
            </span>
          </Link>

          <DesktopNav 
            items={navItems} 
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-blue-600/80" />
              ) : (
                <Sun className="w-5 h-5 text-blue-400/80" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-blue-600/80" />
              ) : (
                <Menu className="w-6 h-6 text-blue-600/80" />
              )}
            </button>
          </div>
        </div>

        <MobileNav
          items={navItems}
          isOpen={isMobileMenuOpen}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
}