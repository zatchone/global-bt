"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Shield, ArrowLeft, Lock, Eye, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const router = useRouter();

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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">GDPR Compliant • Last updated: January 2025</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-green-400" />
                1. Data We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Supply Chain Data</h3>
                  <p>Product IDs, actor names, locations, timestamps, transport modes, quality scores, and environmental metrics you provide.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Authentication Data</h3>
                  <p>Principal IDs from Internet Identity or Plug Wallet (no personal information stored).</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Usage Analytics</h3>
                  <p>Anonymized usage patterns to improve service performance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-400" />
                2. How We Use Your Data
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide supply chain tracking and ESG scoring services</li>
                <li>Generate analytics and reports for your organization</li>
                <li>Maintain blockchain records for transparency and immutability</li>
                <li>Improve service quality and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-purple-400" />
                3. Data Isolation & Multi-Tenancy
              </h2>
              <p className="mb-4">
                <strong>Complete Isolation:</strong> Your data is completely isolated from other users through our multi-tenant architecture.
              </p>
              <p className="mb-4">
                <strong>User-Specific Access:</strong> Only you can access your supply chain data using your authenticated principal ID.
              </p>
              <p>
                <strong>No Cross-User Visibility:</strong> Other users cannot see or access your products, steps, or ESG metrics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-cyan-400" />
                4. GDPR Rights (EU Users)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-bold text-green-300 mb-2">Right to Access</h3>
                  <p className="text-sm">Request a copy of your personal data we hold.</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-bold text-blue-300 mb-2">Right to Rectification</h3>
                  <p className="text-sm">Correct inaccurate or incomplete data.</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-2">Right to Erasure</h3>
                  <p className="text-sm">Request deletion of your personal data.</p>
                </div>
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h3 className="font-bold text-orange-300 mb-2">Right to Portability</h3>
                  <p className="text-sm">Export your data in a machine-readable format.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Blockchain Considerations</h2>
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <p className="mb-2">
                  <strong>Immutable Records:</strong> Data stored on the Internet Computer Protocol blockchain is immutable by design for transparency and trust.
                </p>
                <p>
                  <strong>Pseudonymous:</strong> Blockchain records are linked to cryptographic identifiers, not personal information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end encryption for data transmission</li>
                <li>Decentralized storage on Internet Computer Protocol</li>
                <li>Multi-signature authentication requirements</li>
                <li>Regular security audits and monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact & Data Protection Officer</h2>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="mb-2">For privacy-related inquiries or to exercise your GDPR rights:</p>
                <p>Email: theobsydeon@gmail.com</p>
                <p>DPO: theobsydeon@gmail.com</p>
                <p>Response time: Within 30 days as required by GDPR</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}