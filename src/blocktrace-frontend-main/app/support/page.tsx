"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MessageCircle, HelpCircle, FileText, Send, ChevronDown, ChevronRight } from 'lucide-react';

export default function Support() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('contact');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const faqs = [
    {
      question: "How do I add my first supply chain step?",
      answer: "Navigate to 'Add Step' page, fill in the required fields (Product ID, Actor Name, Role, Action, Location), and click 'Submit to Blockchain'. Your step will be permanently recorded on the ICP blockchain."
    },
    {
      question: "Why can't I see other users' products?",
      answer: "BlockTrace uses multi-tenant architecture. Each user has completely isolated data - you can only see your own products and supply chain steps. This ensures data privacy and security."
    },
    {
      question: "How is the ESG score calculated?",
      answer: "ESG Score = 100 - (distance/100) + (transparency bonus × steps). It factors in total distance, carbon footprint (0.162 kg CO₂/km), and supply chain transparency. Higher scores indicate better sustainability."
    },
    {
      question: "What authentication methods are supported?",
      answer: "We support Internet Identity (decentralized) and Plug Wallet. Both provide secure, cryptographic authentication without storing personal information."
    },
    {
      question: "Can I export my supply chain data?",
      answer: "Yes! Use the 'Export PDF' button on the track page to generate professional reports with ESG metrics, or contact support for bulk data export in JSON/CSV format."
    },
    {
      question: "Is my data stored securely?",
      answer: "Yes. Data is stored on the Internet Computer Protocol blockchain with end-to-end encryption. Each user's data is completely isolated through our multi-tenant architecture."
    },
    {
      question: "How do I upgrade my subscription?",
      answer: "Visit the Pricing page and select your desired plan. PayPal will handle the secure payment processing. Your new features will be available immediately."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "Your blockchain data remains accessible in read-only mode. You can reactivate anytime to resume full functionality. We provide 30 days notice before any data archival."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your support system
    alert('Support request submitted! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '', priority: 'medium' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="relative z-10 flex items-center justify-between px-6 py-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            Customer Support
          </h1>
          <p className="text-gray-400">Get help with BlockTrace supply chain platform</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-2 border border-white/10">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-xl transition flex items-center gap-2 ${
                activeTab === 'contact' 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-xl transition flex items-center gap-2 ${
                activeTab === 'faq' 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-6 py-3 rounded-xl transition flex items-center gap-2 ${
                activeTab === 'docs' 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-5 h-5" />
              Documentation
            </button>
          </div>
        </div>

        {/* Contact Form */}
        {activeTab === 'contact' && (
          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Our Support Team</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/70 px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/70 px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-black/70 px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 transition"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full bg-black/70 px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 transition"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Technical issue</option>
                    <option value="high">High - Service disruption</option>
                    <option value="urgent">Urgent - Critical business impact</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/70 px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 transition resize-none"
                  placeholder="Please describe your issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Support Request
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h3 className="font-bold text-blue-300 mb-2">Response Times</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="text-green-400">Low:</span> 48 hours</div>
                <div><span className="text-yellow-400">Medium:</span> 24 hours</div>
                <div><span className="text-orange-400">High:</span> 8 hours</div>
                <div><span className="text-red-400">Urgent:</span> 2 hours</div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documentation */}
        {activeTab === 'docs' && (
          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Documentation & Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-purple-300 mb-4">Getting Started</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Setting up your account</li>
                  <li>• Adding your first supply chain step</li>
                  <li>• Understanding ESG scores</li>
                  <li>• Tracking products</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-blue-300 mb-4">Advanced Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multi-tenant data isolation</li>
                  <li>• Digital product passports</li>
                  <li>• PDF report generation</li>
                  <li>• API integration</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-green-300 mb-4">Blockchain & ICP</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Internet Computer Protocol basics</li>
                  <li>• Authentication methods</li>
                  <li>• Data immutability</li>
                  <li>• Canister architecture</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-orange-300 mb-4">Compliance & Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• GDPR compliance</li>
                  <li>• Data privacy measures</li>
                  <li>• Security best practices</li>
                  <li>• Audit trails</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}