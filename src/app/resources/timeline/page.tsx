"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NATURALIZATION_TIMELINE,
  calculateEstimatedTimeline,
  formatProcessingTime,
  type TimelinePhase,
} from "@/lib/legal/processing-times";
import { NATURALIZATION_TIMELINES } from "@/lib/legal/citizenship-law";
import { Navbar } from "@/components/Navbar";
import {
  Clock,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";

type Pathway = "standard" | "marriage" | "military";

const PATHWAY_OPTIONS: {
  value: Pathway;
  label: string;
  description: string;
}[] = [
  {
    value: "standard",
    label: "Standard (5-Year)",
    description: "5 years as lawful permanent resident",
  },
  {
    value: "marriage",
    label: "Marriage (3-Year)",
    description: "3 years as LPR married to U.S. citizen",
  },
  {
    value: "military",
    label: "Military Service",
    description: "Expedited for qualifying service members",
  },
];

const STATUS_COLORS: Record<string, string> = {
  receipt: "from-blue-400 to-blue-600",
  biometrics: "from-purple-400 to-purple-600",
  review: "from-yellow-400 to-orange-500",
  interview: "from-cyan-400 to-blue-500",
  decision: "from-green-400 to-emerald-500",
  oath: "from-amber-400 to-yellow-500",
};

const STATUS_BG: Record<string, string> = {
  receipt: "bg-blue-500/10 border-blue-500/30",
  biometrics: "bg-purple-500/10 border-purple-500/30",
  review: "bg-yellow-500/10 border-yellow-500/30",
  interview: "bg-cyan-500/10 border-cyan-500/30",
  decision: "bg-green-500/10 border-green-500/30",
  oath: "bg-amber-500/10 border-amber-500/30",
};

export default function TimelinePage() {
  const [selectedPathway, setSelectedPathway] = useState<Pathway>("standard");
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const estimated = calculateEstimatedTimeline("N-400");
  const pathwayInfo =
    selectedPathway === "standard"
      ? NATURALIZATION_TIMELINES.standard
      : selectedPathway === "marriage"
        ? NATURALIZATION_TIMELINES.marriage
        : NATURALIZATION_TIMELINES.militaryPeacetime;

  const residencyDisplay =
    "totalYears" in pathwayInfo
      ? (pathwayInfo as { totalYears: string }).totalYears
      : pathwayInfo.totalTime;
  const earlyFilingDisplay =
    "earlyFiling" in pathwayInfo
      ? (pathwayInfo as { earlyFiling: string }).earlyFiling
      : pathwayInfo.eligibilityToFile;

  const togglePhase = (id: string) => {
    setExpandedPhase((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link
            href="/resources"
            className="hover:text-cyan-400 transition-colors"
          >
            Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-cyan-400">Timeline Calculator</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Timeline Calculator
              </h1>
              <p className="text-white/60">
                Estimate your naturalization journey from filing to oath
              </p>
            </div>
          </div>
        </div>

        {/* Pathway Selector */}
        <div className="mb-8 glass-panel p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Select Your Pathway
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {PATHWAY_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedPathway(option.value)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  selectedPathway === option.value
                    ? "border-cyan-500/50 bg-cyan-500/10"
                    : "border-gray-800 hover:border-gray-700"
                }`}
              >
                <div
                  className={`font-semibold ${selectedPathway === option.value ? "text-cyan-400" : "text-white"}`}
                >
                  {option.label}
                </div>
                <div className="text-sm text-gray-500">
                  {option.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="mb-8 glass-panel p-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-500 mb-1">
                Total Estimated Time
              </div>
              <div className="text-2xl font-bold text-white">
                {estimated.min}–{estimated.max} months
              </div>
              <div className="text-xs text-gray-500">from filing to oath</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">
                Residency Requirement
              </div>
              <div className="text-2xl font-bold text-cyan-400">
                {residencyDisplay}
              </div>
              <div className="text-xs text-gray-500">before filing</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Early Filing</div>
              <div className="text-2xl font-bold text-emerald-400">
                {earlyFilingDisplay}
              </div>
              <div className="text-xs text-gray-500">
                before requirement met
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-6">
            Naturalization Process Timeline
          </h2>
          <div className="space-y-4">
            {NATURALIZATION_TIMELINE.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Connector line */}
                {index < NATURALIZATION_TIMELINE.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-gray-700 to-transparent" />
                )}

                <button
                  onClick={() => togglePhase(phase.id)}
                  className={`w-full text-left glass-panel p-5 border transition-all ${
                    expandedPhase === phase.id
                      ? STATUS_BG[phase.status]
                      : "hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Step number */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${STATUS_COLORS[phase.status]} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>

                    {/* Phase info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white">
                          {phase.name}
                        </h3>
                        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                          {formatProcessingTime(phase.typicalDuration)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {phase.description}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedPhase === phase.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded details */}
                {expandedPhase === phase.id && (
                  <div
                    className={`mt-1 p-5 rounded-lg border ${STATUS_BG[phase.status]}`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Milestones
                        </h4>
                        <ul className="space-y-2">
                          {phase.milestones.map((m, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <ArrowRight className="w-3 h-3 mt-1 text-emerald-400 flex-shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Possible Delays
                        </h4>
                        <ul className="space-y-2">
                          {phase.possibleDelays.map((d, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <AlertTriangle className="w-3 h-3 mt-1 text-amber-400 flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8 glass-panel p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" /> Important Notes
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>
                Processing times vary significantly by USCIS field office. Check{" "}
                <a
                  href="https://egov.uscis.gov/processing-times/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  USCIS processing times
                </a>{" "}
                for your specific location.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>
                Military applicants may qualify for expedited processing under
                INA § 328–329.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>
                The 90-day early filing window is calculated from when you meet
                the continuous residence requirement.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>
                FBI name check delays are the most common cause of extended
                processing times.
              </span>
            </li>
          </ul>
        </div>

        {/* Related Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/processing"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">
                Processing Times by Office
              </div>
              <div className="text-sm text-gray-500">
                Current wait times at each field office
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
          <Link
            href="/resources/checklist"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">
                Requirements Checklist
              </div>
              <div className="text-sm text-gray-500">
                Track what you need for your pathway
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> Timeline estimates are based on
            publicly available USCIS data and may not reflect your individual
            case. Processing times change frequently. For advice about your
            specific situation, consult a licensed immigration attorney.
          </p>
        </div>
      </div>
    </main>
  );
}
