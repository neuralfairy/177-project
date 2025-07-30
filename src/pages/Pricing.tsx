import React from 'react';
import { CheckCircle, X, Zap, Users, Building, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per user/month",
      description: "Perfect for small sales teams getting started with AI-powered prospecting",
      features: [
        "1,000 email credits/month",
        "Basic contact enrichment",
        "Email verification",
        "CRM integration",
        "Standard support",
        "Basic analytics"
      ],
      notIncluded: [
        "Advanced AI enrichment",
        "Intent detection",
        "Custom integrations",
        "Dedicated support"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
      icon: Users
    },
    {
      name: "Professional",
      price: "$149",
      period: "per user/month",
      description: "Advanced features for growing sales teams that need comprehensive contact intelligence",
      features: [
        "5,000 email credits/month",
        "Advanced AI enrichment",
        "Intent detection",
        "All CRM integrations",
        "Priority support",
        "Advanced analytics",
        "A/B testing",
        "Custom fields",
        "Bulk operations"
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
      icon: Zap
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Comprehensive solution for large organizations with custom requirements",
      features: [
        "Unlimited email credits",
        "Full AI enrichment suite",
        "Advanced intent detection",
        "Custom integrations",
        "Dedicated support",
        "Custom analytics",
        "Advanced security",
        "White-label options",
        "SSO integration",
        "Custom data sources",
        "API access",
        "Training & onboarding"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry",
      popular: false,
      icon: Building
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your sales team. Start with our free trial and scale as you grow.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-100'}`}>
                      <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-gray-500">/{plan.period}</span>}
                    </div>
                    {plan.price === "Custom" && <span className="text-gray-500">{plan.period}</span>}
                  </div>
                  
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={plan.ctaLink}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600' 
                        : 'border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
              },
              {
                question: "What happens if I exceed my email credit limit?",
                answer: "You can purchase additional email credits or upgrade to a higher plan. We'll notify you when you're approaching your limit."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
              },
              {
                question: "Do you offer annual billing discounts?",
                answer: "Yes, we offer a 20% discount when you pay annually. Contact our sales team for more details."
              },
              {
                question: "What integrations are included?",
                answer: "All plans include standard CRM integrations (Salesforce, HubSpot, Pipedrive). Enterprise plans include custom integrations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100">
              Start your free trial today and experience the power of AI Hunter for yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/contact/sales-inquiry"
                className="text-white hover:text-purple-100 font-medium"
              >
                or speak with our sales team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};