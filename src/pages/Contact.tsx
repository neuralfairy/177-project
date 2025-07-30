import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Users } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://salescentri.com/get-started/contact', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your sales process with AI Hunter? We're here to help you get started 
              and answer any questions you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Calendar,
                title: "Book a Demo",
                description: "Schedule a personalized demo to see AI Hunter in action",
                action: "Book Demo",
                link: "https://salescentri.com/get-started/book-demo",
                color: "purple"
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Get instant answers from our support team",
                action: "Start Chat",
                link: "https://salescentri.com/contact/support-request/live-chat",
                color: "blue"
              },
              {
                icon: Users,
                title: "Sales Inquiry",
                description: "Speak with our sales team about your needs",
                action: "Contact Sales",
                link: "https://salescentri.com/contact/sales-inquiry",
                color: "indigo"
              }
            ].map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r from-${option.color}-500 to-${option.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <a
                  href={option.link}
                  className={`inline-block bg-gradient-to-r from-${option.color}-500 to-${option.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-${option.color}-600 hover:to-${option.color}-700 transition-all duration-200`}
                >
                  {option.action}
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="integration">Integration Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Charlotte Office</div>
                      <div className="text-gray-600">123 South Tryon Street<br />Charlotte, NC 28202</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">(704) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">hello@contactbooth.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Business Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 2:00 PM EST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-purple-100 mb-6">
                  Our support team is available to help you with any questions or technical issues.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://salescentri.com/contact/support-request/live-chat"
                    className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-colors duration-200 text-center"
                  >
                    Start Live Chat
                  </a>
                  <a
                    href="https://salescentri.com/contact/support-request/submit-ticket"
                    className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-colors duration-200 text-center"
                  >
                    Submit Support Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-gray-600">Choose the option that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Partnership Inquiry",
                description: "Explore partnership opportunities",
                link: "https://salescentri.com/contact/partnerships/partner-inquiry"
              },
              {
                title: "Request Quote",
                description: "Get custom pricing for your team",
                link: "https://salescentri.com/contact/sales-inquiry/request-quote"
              },
              {
                title: "Integration Request",
                description: "Request a custom integration",
                link: "https://salescentri.com/contact/partnerships/integration-requests"
              },
              {
                title: "Calendly Booking",
                description: "Schedule a convenient time",
                link: "https://salescentri.com/get-started/calendly"
              }
            ].map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <a
                  href={link.link}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};