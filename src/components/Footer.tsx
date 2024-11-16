import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-500/10 via-blue-400/5 to-transparent backdrop-blur-sm border-t border-blue-100/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Free Pool Cost Calculator helps you estimate pool construction and maintenance costs.
              Get accurate estimates for your dream pool project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/guides/maintenance" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pool Maintenance Guide
                </Link>
              </li>
              <li>
                <Link to="/guides/seasonal-care" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Seasonal Care Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-100/20 text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Free Pool Cost Calculator. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            As an Amazon Associate, we earn from qualifying purchases. This means we may earn a commission if you 
            purchase products through our affiliate links at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}