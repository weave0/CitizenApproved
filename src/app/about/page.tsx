'use client'

import Link from 'next/link'
import { Scale, Heart, Globe, Shield, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About CitizenApproved
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Making citizenship information accessible to everyone
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              CitizenApproved exists to make U.S. citizenship information accessible, accurate, and understandable 
              for everyone—regardless of their native language, financial situation, or legal background.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe that navigating the path to citizenship shouldn&apos;t require expensive legal consultations 
              just to understand the basics. By sourcing all information directly from federal law and official 
              government sources, we provide a foundation of knowledge that empowers applicants to understand 
              their options and make informed decisions.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Legal Accuracy</h3>
              <p className="text-gray-400">
                Every piece of information is sourced from official federal law, regulations, and government publications. 
                We cite our sources so you can verify everything yourself.
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
              <p className="text-gray-400">
                Written in plain English for easy translation into 100+ languages. Free forever, with no paywalls, 
                accounts, or hidden fees.
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
              <p className="text-gray-400">
                We show you exactly where each requirement comes from in the law. Understanding the legal hierarchy 
                helps you know which sources to trust most.
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-400">
                Beyond just listing requirements, we explain the &quot;why&quot; behind the law. Understanding context 
                helps you navigate the process more confidently.
              </p>
            </div>
          </div>
        </section>

        {/* What We Are / What We Are Not */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">What We Are</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>An educational resource about U.S. citizenship law</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>A comprehensive guide to all citizenship pathways</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>A collection of free tools to help you prepare</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>A bridge to official government sources</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-6 border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">What We Are Not</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>A law firm or legal service provider</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>A replacement for qualified legal advice</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Affiliated with USCIS or any government agency</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Able to guarantee any immigration outcome</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Sources</h2>
          <div className="glass-panel p-6">
            <p className="text-gray-300 mb-4">
              All information on CitizenApproved is derived from authoritative legal sources:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <strong>Title 8 U.S. Code</strong> — The official federal immigration statutes
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <strong>8 CFR</strong> — Code of Federal Regulations (implementing rules)
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <strong>USCIS Policy Manual</strong> — Official agency guidance
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <strong>Federal Court Decisions</strong> — Binding legal interpretations
              </li>
            </ul>
            <Link href="/sources" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              View our complete sources documentation →
            </Link>
          </div>
        </section>

        {/* When to Consult an Attorney */}
        <section className="mb-12">
          <div className="glass-panel p-6 border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-semibold text-white">When to Consult an Attorney</h3>
            </div>
            <p className="text-gray-300 mb-4">
              While our resources can help you understand the basics, you should consult a licensed immigration 
              attorney if:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• You have any criminal history (even minor offenses)</li>
              <li>• You&apos;ve had previous immigration violations</li>
              <li>• You&apos;re unsure which pathway applies to your situation</li>
              <li>• You&apos;ve received a denial or Request for Evidence (RFE)</li>
              <li>• Your case involves complex family or travel history</li>
              <li>• You need representation at an interview or hearing</li>
            </ul>
          </div>
        </section>

        {/* Contact / Feedback */}
        <section className="mb-12">
          <div className="glass-panel p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Have Feedback?</h3>
            <p className="text-gray-400 mb-4">
              Found an error? Have a suggestion? We&apos;re always working to improve our resources.
            </p>
            <p className="text-gray-500 text-sm">
              This is an open educational project. All content is provided free of charge.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Legal Disclaimer:</strong> CitizenApproved provides general information about U.S. citizenship 
            pathways based on federal law and official sources. This information is educational in nature and does 
            not constitute legal advice. Immigration law is complex and individual circumstances vary. For advice 
            about your specific situation, consult a licensed immigration attorney. CitizenApproved is not affiliated 
            with USCIS, the Department of Homeland Security, or any government agency.
          </p>
        </div>
      </div>
    </main>
  )
}
