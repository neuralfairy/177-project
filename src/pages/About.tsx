import React from 'react';
import { Users, Award, Target, Globe, Zap, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former VP of Sales at enterprise software companies with 15+ years in B2B sales technology.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "AI/ML expert with previous experience at Google and Microsoft, specializing in contact intelligence.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Johnson",
      role: "VP of Product",
      bio: "Product leader with deep expertise in sales automation and customer success at SaaS companies.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems and data processing architectures.",
      image: "/api/placeholder/200/200"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-First",
      description: "Everything we build is designed to solve real problems for sales teams and drive measurable results."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI-powered sales intelligence."
    },
    {
      icon: Heart,
      title: "Integrity", 
      description: "We believe in transparent, ethical business practices and data handling with the highest standards."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our mission is to democratize sales intelligence and help businesses worldwide grow faster."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                About
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> ContactBooth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in Charlotte, NC, ContactBooth Solutions is revolutionizing B2B sales with AI-powered contact intelligence. 
                We help sales teams find, verify, and engage with the right prospects at the right time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2,500+</div>
                  <div className="text-gray-600">Sales Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50M+</div>
                  <div className="text-gray-600">Verified Contacts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">99.5%</div>
                  <div className="text-gray-600">Email Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">300%</div>
                  <div className="text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower every B2B sales team with intelligent, ethical, and effective contact discovery tools that accelerate growth 
              while respecting privacy and data protection standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ContactBooth Solutions was born from the frustration of spending countless hours researching prospects 
                  only to find outdated or incorrect contact information. Our founders, with decades of combined experience 
                  in B2B sales and AI technology, recognized the need for a smarter solution.
                </p>
                <p>
                  In 2023, we launched AI Hunter with a simple goal: to help sales teams find and verify contact information 
                  with unprecedented accuracy. What started as a solution to our own challenges quickly grew into a platform 
                  trusted by thousands of sales professionals worldwide.
                </p>
                <p>
                  Today, we're proud to be at the forefront of AI-powered sales intelligence, continuously innovating to help 
                  our customers achieve better results while maintaining the highest standards of data privacy and security.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { year: "2023", event: "Company founded in Charlotte, NC" },
                  { year: "2023", event: "AI Hunter platform launched" },
                  { year: "2024", event: "Reached 1,000+ customers" },
                  { year: "2024", event: "SOC 2 certification achieved" },
                  { year: "2025", event: "2,500+ sales teams using our platform" }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                      {milestone.year}
                    </div>
                    <p className="text-gray-600 pt-1">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to transforming B2B sales intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-20 h-20 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
            <p className="text-xl text-purple-100">
              We're always looking for talented individuals who share our passion for transforming B2B sales with AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Award className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Competitive Benefits</h3>
                <p className="text-sm text-purple-100">Health, dental, vision, and 401k matching</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Globe className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Remote-First</h3>
                <p className="text-sm text-purple-100">Work from anywhere with flexible hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Target className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-sm text-purple-100">Learn, grow, and advance your career</p>
              </div>
            </div>
            <a
              href="https://salescentri.com/company/careers"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <span>View Open Positions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};