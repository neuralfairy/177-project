import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Target, Brain } from 'lucide-react';

export const Blog: React.FC = () => {
  const featuredPost = {
    title: "The Future of AI-Powered Sales Intelligence: 2025 Predictions",
    excerpt: "Discover how artificial intelligence is reshaping B2B sales and what trends will dominate the landscape in 2025.",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  };

  const blogPosts = [
    {
      title: "10 Email Prospecting Mistakes That Kill Your Response Rates",
      excerpt: "Learn about the common mistakes sales teams make when prospecting via email and how to avoid them.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Sales Strategy",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
    },
    {
      title: "GDPR Compliance in B2B Data Collection: A Complete Guide",
      excerpt: "Everything you need to know about collecting and using B2B contact data while staying GDPR compliant.",
      author: "Emily Johnson",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Compliance",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
    },
    {
      title: "How to Build a High-Converting Sales Sequence with AI Hunter",
      excerpt: "Step-by-step guide to creating effective sales sequences using AI-powered contact intelligence.",
      author: "David Kim",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "How-To",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    },
    {
      title: "The ROI of Sales Intelligence: Real Customer Case Studies",
      excerpt: "See how companies achieved 300%+ ROI using AI Hunter for their prospecting and outreach efforts.",
      author: "Sarah Chen",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Case Studies",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
      title: "Intent Data: The Secret Weapon for B2B Sales Teams",
      excerpt: "Learn how to use intent data to identify prospects who are ready to buy and time your outreach perfectly.",
      author: "Michael Rodriguez",
      date: "January 3, 2025",
      readTime: "5 min read",
      category: "Sales Strategy",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "Integrating AI Hunter with Your CRM: Best Practices",
      excerpt: "Maximize your sales efficiency by properly integrating AI Hunter with Salesforce, HubSpot, and other CRMs.",
      author: "David Kim",
      date: "December 30, 2024",
      readTime: "6 min read",
      category: "Integration",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "AI & Technology", count: 8 },
    { name: "Sales Strategy", count: 10 },
    { name: "How-To", count: 6 },
    { name: "Case Studies", count: 4 },
    { name: "Compliance", count: 3 },
    { name: "Integration", count: 5 }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Hunter
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, strategies, and best practices for B2B sales teams leveraging AI-powered contact intelligence.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Actionable tips</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>AI expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <div className="space-y-6">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-purple-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:aspect-square">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${
                        category.active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}>
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-xl text-white mt-8">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Get the latest insights on AI-powered sales intelligence delivered weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                  />
                  <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <a
                        href="https://salescentri.com/resources/whitepapers-ebooks"
                        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <a
                  href="https://salescentri.com/resources/tutorials-webinars"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                >
                  Load More Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Put These Insights to Work?
            </h2>
            <p className="text-xl text-gray-600">
              Start using AI Hunter today and transform your B2B sales process with intelligent contact discovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="https://salescentri.com/resources/case-studies"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};