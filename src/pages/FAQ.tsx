import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Zap, Shield, Target } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: "Getting Started with AI Hunter",
      icon: Zap,
      faqs: [
        {
          question: "What is AI Hunter and how does it work?",
          answer: "AI Hunter is our flagship AI-powered contact intelligence platform that helps B2B sales teams find verified email addresses and enrich prospect data. It uses advanced machine learning algorithms to search across 50+ million contacts, verify email accuracy in real-time, and provide comprehensive prospect enrichment with 50+ data points including company information, social profiles, and technographic data."
        },
        {
          question: "How accurate are the email addresses provided by AI Hunter?",
          answer: "AI Hunter maintains a 99.5% email accuracy rate through real-time verification and advanced AI validation processes. We continuously update our database and use multiple verification methods to ensure you're getting current, deliverable email addresses that won't bounce."
        },
        {
          question: "How long does it take to set up AI Hunter?",
          answer: "Most teams can set up AI Hunter in under 5 minutes. Simply sign up for your free trial, integrate with your existing CRM (optional), and start searching for contacts immediately. Our intuitive interface requires no training, and our support team is available to help with any questions."
        },
        {
          question: "Can I try AI Hunter before purchasing?",
          answer: "Yes! We offer a comprehensive 14-day free trial with no credit card required. During your trial, you'll have access to all Professional plan features, including 1,000 email credits, advanced AI enrichment, and CRM integration capabilities."
        }
      ]
    },
    {
      title: "Features & Capabilities",
      icon: Target,
      faqs: [
        {
          question: "What data points does AI Hunter provide for each contact?",
          answer: "AI Hunter enriches each contact with 50+ data points including: verified email addresses, phone numbers, job titles, company information, social media profiles, company size, industry, technology stack, recent news and funding information, contact's role and seniority level, and behavioral intent signals."
        },
        {
          question: "Does AI Hunter integrate with my existing CRM?",
          answer: "Yes, AI Hunter seamlessly integrates with all major CRMs including Salesforce, HubSpot, Pipedrive, Outreach, SalesLoft, and more. You can sync contacts directly to your CRM, update existing records, and maintain your existing workflow without disruption."
        },
        {
          question: "What is intent detection and how does it help my sales team?",
          answer: "Intent detection uses AI to analyze digital behavior and identify prospects who are actively researching solutions like yours. This includes monitoring website visits, content engagement, search patterns, and buying signals to help you prioritize prospects who are most likely to convert."
        },
        {
          question: "Can I perform bulk contact searches and exports?",
          answer: "Absolutely! AI Hunter supports bulk operations including batch contact searches, bulk email verification, mass data enrichment, and CSV/Excel exports. Professional and Enterprise plans include advanced bulk features with higher processing limits."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: HelpCircle,
      faqs: [
        {
          question: "What's included in each pricing plan?",
          answer: "Starter ($49/user/month): 1,000 email credits, basic enrichment, email verification, CRM integration. Professional ($149/user/month): 5,000 email credits, advanced AI enrichment, intent detection, priority support, analytics. Enterprise (Custom): Unlimited credits, full AI suite, custom integrations, dedicated support, white-label options."
        },
        {
          question: "What happens if I exceed my monthly email credit limit?",
          answer: "You can either upgrade to a higher plan or purchase additional email credits as needed. We'll notify you when you're approaching 80% of your limit, and you won't be charged overage fees without your explicit consent."
        },
        {
          question: "Do you offer annual billing discounts?",
          answer: "Yes, we offer a 20% discount when you pay annually. Enterprise customers can also negotiate custom pricing based on volume and specific requirements. Contact our sales team for detailed pricing discussions."
        },
        {
          question: "Can I change or cancel my plan anytime?",
          answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Plan changes take effect immediately with prorated billing. There are no cancellation fees or long-term contracts required."
        }
      ]
    },
    {
      title: "Data & Compliance",
      icon: Shield,
      faqs: [
        {
          question: "Is AI Hunter GDPR compliant?",
          answer: "Yes, AI Hunter is fully GDPR compliant. We only collect and process business contact information that is publicly available or legitimately obtained. We provide data subject rights, maintain detailed privacy policies, and follow strict data protection protocols. All data is encrypted and stored securely."
        },
        {
          question: "What security measures does AI Hunter have in place?",
          answer: "AI Hunter maintains SOC 2 Type II certification, uses enterprise-grade encryption (AES-256), implements secure API protocols, provides role-based access controls, maintains regular security audits, and follows industry best practices for data protection and privacy."
        },
        {
          question: "Where does AI Hunter source its contact data?",
          answer: "We aggregate data from publicly available sources including company websites, professional social networks, business directories, press releases, and other legitimate public sources. All data is verified and updated regularly to maintain accuracy and compliance."
        },
        {
          question: "How often is the contact database updated?",
          answer: "Our database is updated continuously in real-time. We refresh contact information daily, verify email addresses before delivery, monitor for job changes and company updates, and remove invalid or outdated information automatically."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: MessageCircle,
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer: "We offer multiple support channels: Live chat (available 9 AM - 6 PM EST), Email support with 4-hour response time, Phone support for Enterprise customers, Comprehensive documentation and tutorials, Video training sessions, and dedicated customer success managers for Enterprise accounts."
        },
        {
          question: "Do you provide API access?",
          answer: "Yes, AI Hunter provides full REST API access for Enterprise customers. Our API allows you to integrate contact discovery and enrichment directly into your applications, automate data workflows, and build custom integrations with your existing tech stack."
        },
        {
          question: "Can you help with custom integrations?",
          answer: "Absolutely! Our Professional Services team can help with custom integrations, data migration, workflow setup, and training. Enterprise customers receive priority support for custom integration requests and dedicated implementation assistance."
        },
        {
          question: "What if I need help getting started?",
          answer: "We provide comprehensive onboarding including: Welcome call with your customer success manager, Guided setup and configuration, CRM integration assistance, Team training sessions, Best practices consultation, and ongoing optimization recommendations."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <HelpCircle className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Get Your Questions Answered</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about AI Hunter, our features, pricing, and how we can help transform your B2B sales process.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse all questions below.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear search and show all questions
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openFAQ === globalIndex;
                      
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg hover:border-purple-300 transition-colors duration-200">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <div className="h-px bg-gray-200 mb-4"></div>
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help you understand how AI Hunter can transform your sales process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: MessageCircle,
                  title: "Live Chat Support",
                  description: "Get instant answers from our support team",
                  action: "Start Chat",
                  link: "https://salescentri.com/contact/support-request/live-chat"
                },
                {
                  icon: HelpCircle,
                  title: "Book a Demo",
                  description: "See AI Hunter in action with a personalized demo",
                  action: "Schedule Demo",
                  link: "https://salescentri.com/get-started/book-demo"
                },
                {
                  icon: Target,
                  title: "Contact Sales",
                  description: "Speak directly with our sales team",
                  action: "Contact Sales",
                  link: "https://salescentri.com/contact/sales-inquiry"
                }
              ].map((option, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <a
                    href={option.link}
                    className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience AI Hunter?
            </h2>
            <p className="text-xl text-purple-100">
              Start your free trial today and discover how AI Hunter can transform your B2B sales process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="text-white hover:text-purple-100 font-medium"
              >
                Try Interactive Demo
              </a>
            </div>
            <div className="text-sm text-purple-100">
              14-day free trial • No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};