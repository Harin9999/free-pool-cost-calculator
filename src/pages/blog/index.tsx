import React from 'react';
import { BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    slug: 'choosing-right-pool',
    title: 'How to Choose the Right Pool for Your Home',
    excerpt: 'Learn about different pool types and which one best suits your needs and budget.',
    date: '2024-03-14',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&auto=format&fit=crop&q=80'
  },
  {
    slug: 'pool-maintenance-tips',
    title: 'Essential Pool Maintenance Tips for Beginners',
    excerpt: 'A comprehensive guide to keeping your pool clean and well-maintained year-round.',
    date: '2024-03-12',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1562844275-857f6e7c4865?w=1200&auto=format&fit=crop&q=80'
  },
  {
    slug: 'pool-safety-guide',
    title: 'Pool Safety: A Complete Guide for Families',
    excerpt: 'Essential safety measures and equipment to protect your family and guests.',
    date: '2024-03-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&auto=format&fit=crop&q=80'
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Pool Care Blog - Expert Tips and Guides"
        description="Read expert advice on pool maintenance, safety tips, and cost-saving strategies. Stay informed with our comprehensive pool care guides."
        canonical="/blog"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Pool Care Blog</h1>
        </div>

        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 hover:text-blue-700 font-medium">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}