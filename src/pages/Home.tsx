import React, { useState } from 'react';
import { ArrowRight, Zap, Target, Shield, TrendingUp, Users, CheckCircle, Star, Play } from 'lucide-react';

export const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleTrialSignup = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://salescentri.com/get-started/free-trial', '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-700">AI-Powered Contact Intelligence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Find Verified Contacts with
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI Hunter</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Supercharge your B2B sales with AI-powered contact discovery and enrichment. 
                Find verified emails, enrich prospect data, and boost your outreach ROI by 300%.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Book Demo</span>
              </a>
            </div>

            <div className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <p className="text-gray-500 font-medium">Trusted by 2,500+ B2B Sales Teams</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Company Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose AI Hunter?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI algorithms combined with real-time verification ensure the highest quality contact data for your sales team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "99.5% Email Accuracy",
                description: "Real-time verification ensures you're reaching actual decision-makers, not bounced emails.",
                color: "purple"
              },
              {
                icon: Zap,
                title: "AI-Powered Enrichment",
                description: "Automatically enrich contacts with 50+ data points including job changes, company info, and social profiles.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "GDPR Compliant",
                description: "Full compliance with international data protection regulations and SOC 2 security standards.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Calculate Your ROI with AI Hunter
              </h2>
              <p className="text-xl text-purple-100">
                See how much time and money you could save with AI-powered contact intelligence.
              </p>
              <div className="space-y-4">
                {[
                  "300% increase in email open rates",
                  "75% reduction in research time",
                  "$50K+ average annual savings per SDR"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-purple-100">{benefit}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Calculate Your ROI</span>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Quick ROI Estimate</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-100 mb-2">Number of SDRs</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" placeholder="5" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-100 mb-2">Emails per month</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" placeholder="1000" />
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$12,500</div>
                    <div className="text-sm text-purple-100">Monthly savings potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              See how AI Hunter transformed their sales performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "VP of Sales, TechCorp",
                content: "AI Hunter increased our email response rates by 240%. The contact accuracy is incredible.",
                rating: 5
              },
              {
                name: "Mike Chen",
                title: "Sales Director, GrowthCo",
                content: "We cut our prospecting time in half while tripling our qualified leads. Game changer.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                title: "SDR Manager, ScaleUp",
                content: "The AI enrichment features provide insights we never had before. Our close rate improved by 60%.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Supercharge Your Sales?
            </h2>
            <p className="text-xl text-purple-100">
              Join 2,500+ sales teams using AI Hunter to find verified contacts and close more deals.
            </p>
            
            <form onSubmit={handleTrialSignup} className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Free Trial
                </button>
              </div>
            </form>
            
            <div className="text-sm text-purple-100">
              14-day free trial • No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};