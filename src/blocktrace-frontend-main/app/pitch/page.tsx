'use client';
import React from 'react';
import { ArrowLeft, Users, Target, TrendingUp, Shield, Zap, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react';

const PitchPage = () => {

  // This pitch page is intentionally minimal on config objects.
  // The content below is handcrafted for a final-round pitch: strong, standalone, and persuasive.

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/40"></div>

      {/* Minimal header: standalone pitch page (no external navigation) */}
      <header className="relative z-10 flex items-center justify-center p-8 border-b border-white/10">
        <div className="text-2xl font-bold text-white">BLOCKTRACE — PITCH</div>
      </header>

      {/* HERO — instant hook */}
      <section id="hero" className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            This is not a presentation — this is the product.
          </h1>

          <p className="text-xl text-gray-300 mb-6">Verifiable supply chains for a transparent, sustainable world.</p>

          <p className="text-lg text-gray-300 mb-8">BlockTrace records every step on-chain, computes live ESG impact, and issues an immutable product passport — instantly proving claims to customers and auditors.</p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => scrollToId('problem')}
              className="inline-flex items-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              ▶ Walk Through (Start)
            </button>

            <button
              onClick={() => { navigator.clipboard?.writeText('theobsydeon@gmail.com'); alert('Contact copied: theobsydeon@gmail.com'); }}
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-gray-200"
            >
              Contact Founder
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM — concise, painful */}
      <section id="problem" className="relative z-10 py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Problem — urgency, not nuance</h2>
          <div className="text-lg text-gray-200 space-y-3 mb-6">
            <p>• $50B lost yearly to greenwashing and supply-chain fraud.</p>
            <p>• Consumers demand proof, not promises — trust is collapsing.</p>
            <p>• Manual ESG reports are slow, expensive and fakeable.</p>
          </div>

          <div className="mt-6 bg-white/3 rounded-2xl p-6">
            <div className="text-left text-gray-100 font-semibold mb-2">Why this matters right now</div>
            <div className="text-gray-300">Regulators, retailers and consumers are converging on verifiable claims. Companies that cannot prove their sustainability will lose market access and trust — fast.</div>
          </div>
        </div>
      </section>

      {/* SOLUTION — product proof flow for the video */}
      <section id="solution" className="relative z-10 py-16 px-6 lg:px-8 bg-white/2 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Solution — three steps to irrefutable proof</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-emerald-600/10 to-emerald-500/5 border border-emerald-500/20">
              <div className="text-2xl font-bold mb-2">1️⃣ Track</div>
              <div className="text-gray-300">Log each supply-chain event on-chain. No backdating, no edits.</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-blue-500/5 border border-blue-500/20">
              <div className="text-2xl font-bold mb-2">2️⃣ Score</div>
              <div className="text-gray-300">Live ESG calculation from real transport, material and supplier data — fully auditable.</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-purple-600/10 to-purple-500/5 border border-purple-500/20">
              <div className="text-2xl font-bold mb-2">3️⃣ Prove</div>
              <div className="text-gray-300">Mint a verifiable NFT passport or export a signed PDF — proof  regulator or buyer can verify.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH & PROOF — concise badges, no external images */}
      <section id="proof" className="relative z-10 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tech & Live Proof</h2>
          <p className="text-gray-300 mb-6">Built and running: Internet Computer (ICP) canisters (Rust), Next.js frontend, t‑ECDSA signatures, PayPal payments, PDF export and NFT logic — production data available on mainnet.</p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-3 bg-white/5 rounded-full">✅ Runs on mainnet</div>
            <div className="px-4 py-3 bg-white/5 rounded-full">✅ End-to-end ESG scoring</div>
            <div className="px-4 py-3 bg-white/5 rounded-full">✅ Multi-tenant & enterprise-ready</div>
          </div>

          <div className="mt-8 text-gray-300 text-left leading-relaxed">
            <p className="mb-3"><strong className="text-white">Quick proof snippet:</strong> Live backend endpoint and frontend are deployed. During your video, open the passport for a product and show the on-chain history — that moment alone ends the debate.</p>
            <pre className="bg-black/50 p-3 rounded text-sm text-emerald-300 overflow-x-auto">Supply Chain Canister: s2wch-oiaaa-aaaam-qd4ga-cai</pre>
          </div>
        </div>
      </section>

      {/* MARKET & BUSINESS MODEL — single-screen, judge-focused */}
      <section id="market" className="relative z-10 py-16 px-6 lg:px-8 bg-white/2 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Market & Business Model</h2>
          <p className="text-gray-300 mb-3">Target customers: Mid-sized exporters & manufacturers who need verifiable ESG but can't afford bespoke enterprise systems.</p>
          <p className="text-gray-300 mb-6">Market size: ~$6B. Simple pricing: SaaS starting at $99/month per org, plus API & enterprise tiers.</p>

          <div className="inline-flex items-center gap-4 bg-white/5 p-4 rounded-full">
            <div className="font-semibold text-emerald-300">SaaS — $99 / org</div>
            <div className="text-gray-300">+ API & enterprise</div>
          </div>
        </div>
      </section>

      {/* VISION & CLOSING — emotional hook, judgment-proof */}
      <section id="vision" className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">"Every product will tell its story — truthfully."</h2>
          <p className="text-gray-300 mb-6">BlockTrace gives brands the ability to prove their claims, gives buyers the certainty they demand, and gives regulators a cryptographic record they can trust.</p>

          <div className="bg-gradient-to-r from-emerald-500/8 to-blue-500/8 p-6 rounded-2xl inline-block">
            <div className="text-lg text-white font-semibold">Founder: Yashasvi Sharma</div>
            <div className="text-gray-300">Email: theobsydeon@gmail.com</div>
          </div>

          <div className="mt-8">
            <div className="text-lg text-emerald-300 font-bold">Judges — a small ask</div>
            <div className="text-gray-300 mt-2">If you accept BlockTrace, you accept a future where claims are provable. Saying no is saying customers and regulators can accept opaque ESG forever — we all know that's not the future.</div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 BlockTrace. Built with ❤️ on the Internet Computer Protocol.</p>
        </div>
      </footer>
    </div>
  );
};

export default PitchPage;