import { Link } from 'react-router-dom';

interface RelatedLink {
  path: string;
  label: string;
  description: string;
}

interface InternalLinksProps {
  currentPath: string;
  title?: string;
}

const allLinks: RelatedLink[] = [
  {
    path: '/',
    label: 'Pool Cost Calculator',
    description: 'Calculate the total cost of your dream pool'
  },
  {
    path: '/calculators/above-ground-pool',
    label: 'Above Ground Pool Calculator',
    description: 'Get instant cost estimates for above ground pools'
  },
  {
    path: '/calculators/equipment-repair',
    label: 'Equipment Repair Calculator',
    description: 'Estimate pool equipment repair and replacement costs'
  },
  {
    path: '/guides/maintenance',
    label: 'Pool Maintenance Guide',
    description: 'Complete guide to pool maintenance and care'
  },
  {
    path: '/guides/seasonal-care',
    label: 'Seasonal Care Tips',
    description: 'Learn how to maintain your pool year-round'
  }
];

export default function InternalLinks({ currentPath, title = 'Related Resources' }: InternalLinksProps) {
  const relatedLinks = allLinks.filter(link => link.path !== currentPath).slice(0, 3);

  if (relatedLinks.length === 0) return null;

  return (
    <section className="mt-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      <div className="grid gap-4">
        {relatedLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-1">{link.label}</h3>
            <p className="text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}