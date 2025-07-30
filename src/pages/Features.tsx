import React from 'react';
import { Search, Brain, Shield, Zap, Target, Users, BarChart3, Globe, CheckCircle } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Contact Discovery",
      description: "Find verified email addresses and phone numbers for any prospect using our AI-powered search engine.",
      benefits: ["99.5% email accuracy", "Real-time verification", "50+ million contacts", "Global coverage"]
    },
    {
      icon: Brain,
      title: "AI Data Enrichment",
      description: "Automatically enrich contacts with comprehensive data points including company info, social profiles, and technographics.",
      benefits: ["50+ data points", "Social media profiles", "Company intelligence", "Technographic data"]
    },
    {
      icon: Target,
      title: "Intent Detection",
      description: "Identify prospects showing buying intent through AI analysis of digital behavior and signals.",
      benefits: ["Buying intent signals", "Behavioral analysis", "Timing optimization", "Priority scoring"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track and optimize your outreach performance with detailed analytics and AI-powered insights.",
      benefits: ["Real-time metrics", "ROI tracking", "A/B testing", "Performance optimization"]
    },
    {
      icon: Globe,
      title: "CRM Integration",
      description: "Seamlessly integrate with popular CRMs and sales tools to streamline your workflow.",
      benefits: ["Salesforce integration", "HubSpot compatibility", "Pipedrive sync", "API access"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Stay compliant with GDPR, CCPA, and other regulations while maintaining SOC 2 security standards.",
      benefits: ["GDPR compliant", "SOC 2 certified", "Data encryption", "Privacy controls"]
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Zap className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Powered by Advanced AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Hunter
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Hunter's advanced features can transform your B2B sales process and help you find, verify, and engage with the right prospects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                Try Interactive Demo
              </a>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                See AI Hunter in Action
              </h2>
              <p className="text-xl text-purple-100">
                Experience the power of AI-driven contact intelligence with our interactive demo.
              </p>
              <div className="space-y-4">
                {[
                  "Search for any prospect in seconds",
                  "See real-time email verification",
                  "Explore AI enrichment capabilities",
                  "Test CRM integration features"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-purple-100">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <span>Launch Interactive Demo</span>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white/80">Interactive Demo Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect AI Hunter with your existing sales stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Salesforce', 'HubSpot', 'Pipedrive', 'Outreach',
              'SalesLoft', 'Slack', 'Zapier', 'Microsoft'
            ].map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                <div className="h-12 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-sm">{integration}</span>
                </div>
                <span className="text-sm text-gray-600">{integration}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/contact/partnerships/integration-requests"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              <span>Request Custom Integration</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Experience AI Hunter?
            </h2>
            <p className="text-xl text-gray-600">
              Start your free trial today and see how AI Hunter can transform your sales process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="https://salescentri.com/contact/sales-inquiry"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};