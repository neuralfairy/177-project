import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Award, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ContactBooth</span>
            </div>
            <p className="text-gray-400">
              AI-powered contact intelligence platform helping B2B sales teams find verified emails and enrich prospects with advanced AI.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/features" className="hover:text-white transition-colors duration-200">Features</Link></li>
              <li><a href="https://salescentri.com/solutions/use-case-navigator/demo" className="hover:text-white transition-colors duration-200">Interactive Demo</a></li>
              <li><a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator" className="hover:text-white transition-colors duration-200">AI Aggregator</a></li>
              <li><a href="https://salescentri.com/services/data-enrichment" className="hover:text-white transition-colors duration-200">Data Enrichment</a></li>
              <li><a href="https://salescentri.com/docs/api-reference" className="hover:text-white transition-colors duration-200">API Reference</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="hover:text-white transition-colors duration-200">SDR Teams</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/it" className="hover:text-white transition-colors duration-200">IT Industry</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/healthcare" className="hover:text-white transition-colors duration-200">Healthcare</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation" className="hover:text-white transition-colors duration-200">Lead Generation</a></li>
              <li><a href="https://salescentri.com/solutions/psa-suite" className="hover:text-white transition-colors duration-200">PSA Suite</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://salescentri.com/docs/user-guide" className="hover:text-white transition-colors duration-200">User Guide</a></li>
              <li><a href="https://salescentri.com/contact/support-request" className="hover:text-white transition-colors duration-200">Support Request</a></li>
              <li><a href="https://salescentri.com/contact/support-request/live-chat" className="hover:text-white transition-colors duration-200">Live Chat</a></li>
              <li><Link to="/faq" className="hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><a href="https://salescentri.com/resources/tutorials-webinars" className="hover:text-white transition-colors duration-200">Tutorials</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2025 ContactBooth Solutions. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>Charlotte, NC</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="https://salescentri.com/trust/security-privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="https://salescentri.com/trust/compliance-certifications" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a 
                href="https://salescentri.com?utm_source=ContactBooth.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};