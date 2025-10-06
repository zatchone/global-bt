"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Shield, ArrowLeft, Scale, Globe, Lock, FileText } from 'lucide-react';

export default function TermsOfService() {
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-400" />
                1. Service Description
              </h2>
              <p className="mb-4">
                BlockTrace provides blockchain-based supply chain tracking, real-time ESG scoring, digital product passports, and multi-tenant data isolation on the Internet Computer Protocol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-400" />
                2. Data Privacy & GDPR Compliance
              </h2>
              <p className="mb-4">
                <strong>Multi-Tenant Architecture:</strong> Your data is completely isolated from other users.
              </p>
              <p className="mb-4">
                <strong>GDPR Rights:</strong> You have the right to access, rectify, erase, and port your data.
              </p>
              <p>
                <strong>Blockchain Storage:</strong> Data stored on ICP blockchain is immutable for transparency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Subscription & Billing</h2>
              <p className="mb-4">
                Plans: Starter ($99/month), Professional ($299/month), Enterprise ($999/month)
              </p>
              <p>
                Payments processed via PayPal. Cancel anytime with 30 days notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate supply chain information</li>
                <li>Maintain security of authentication credentials</li>
                <li>Use service for legitimate business purposes only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
              <div className="bg-white/5 p-4 rounded-lg">
                <p>Email: theobsydeon@gmail.com</p>
                <p>Address: BlockTrace Inc., New Delhi, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}