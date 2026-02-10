"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  DOCUMENT_CHECKLISTS,
  CATEGORY_LABELS,
  getRequiredDocuments,
  getConditionalDocuments,
  type PathwayType,
  type Document,
  type DocumentCategory,
} from "@/lib/legal/document-checklist";
import { Navbar } from "@/components/Navbar";
import {
  CheckSquare,
  ChevronRight,
  ChevronDown,
  FileText,
  AlertCircle,
  Info,
  Printer,
  Square,
  CheckCircle2,
} from "lucide-react";

type CheckedState = Record<string, boolean>;

const pathwayOptions: {
  value: PathwayType;
  label: string;
  shortLabel: string;
}[] = [
  {
    value: "naturalization_standard",
    label: "Standard Naturalization (5 years)",
    shortLabel: "5-Year",
  },
  {
    value: "naturalization_spouse",
    label: "Spouse of U.S. Citizen (3 years)",
    shortLabel: "Marriage",
  },
  {
    value: "naturalization_military_peacetime",
    label: "Military - Peacetime",
    shortLabel: "Military (Peace)",
  },
  {
    value: "naturalization_military_wartime",
    label: "Military - Wartime",
    shortLabel: "Military (War)",
  },
  {
    value: "birthright_jus_soli",
    label: "Born in the United States",
    shortLabel: "Born in U.S.",
  },
  {
    value: "birthright_jus_sanguinis",
    label: "Born Abroad to U.S. Parent",
    shortLabel: "Born Abroad",
  },
  {
    value: "derivative_automatic",
    label: "Derivative Citizenship (CCA)",
    shortLabel: "Derivative",
  },
  {
    value: "certificate_of_citizenship",
    label: "Certificate of Citizenship",
    shortLabel: "Certificate",
  },
];

const PRIORITY_COLORS: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  required: { bg: "bg-red-500/20", text: "text-red-400", label: "Required" },
  recommended: {
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
    label: "Recommended",
  },
  conditional: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    label: "Conditional",
  },
};

export default function ChecklistPage() {
  const [selectedPathway, setSelectedPathway] = useState<PathwayType>(
    "naturalization_standard",
  );
  const [checkedItems, setCheckedItems] = useState<CheckedState>({});
  const [showConditional, setShowConditional] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<
    Set<DocumentCategory>
  >(new Set());

  const checklist = DOCUMENT_CHECKLISTS[selectedPathway];
  const requiredDocs = getRequiredDocuments(selectedPathway);
  const conditionalDocs = getConditionalDocuments(selectedPathway);

  const documentsByCategory = useMemo(() => {
    if (!checklist) return new Map<DocumentCategory, Document[]>();
    const grouped = new Map<DocumentCategory, Document[]>();
    const allDocs = showConditional
      ? checklist.documents
      : checklist.documents.filter((d) => d.priority !== "conditional");
    allDocs.forEach((doc) => {
      const existing = grouped.get(doc.category) || [];
      existing.push(doc);
      grouped.set(doc.category, existing);
    });
    return grouped;
  }, [checklist, showConditional]);

  const toggleCheck = (docId: string) => {
    setCheckedItems((prev) => ({ ...prev, [docId]: !prev[docId] }));
  };

  const toggleCategory = (cat: DocumentCategory) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const totalDocs = showConditional
    ? checklist?.documents.length || 0
    : requiredDocs.length +
      (checklist?.documents.filter((d) => d.priority === "recommended")
        .length || 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const progress =
    totalDocs > 0 ? Math.round((checkedCount / totalDocs) * 100) : 0;

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
          <span className="text-cyan-400">Requirements Checklist</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Requirements Checklist
              </h1>
              <p className="text-white/60">
                Track every document and requirement for your citizenship
                pathway
              </p>
            </div>
          </div>
        </div>

        {/* Pathway Selector */}
        <div className="mb-6 glass-panel p-4">
          <label className="block text-sm text-gray-400 mb-2">
            Select your citizenship pathway:
          </label>
          <select
            value={selectedPathway}
            onChange={(e) => {
              setSelectedPathway(e.target.value as PathwayType);
              setCheckedItems({});
            }}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
          >
            {pathwayOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 glass-panel p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm font-mono text-cyan-400">
              {checkedCount}/{totalDocs} items ({progress}%)
            </span>
          </div>
          <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <div className="mt-2 text-sm text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> All items checked! Review and
              gather your documents.
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={showConditional}
              onChange={(e) => setShowConditional(e.target.checked)}
              className="rounded border-gray-600"
            />
            Show conditional documents
          </label>
          <button
            onClick={() => setCheckedItems({})}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Reset all
          </button>
        </div>

        {/* Checklist Description */}
        {checklist && (
          <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <h3 className="text-cyan-400 font-semibold mb-1">
              {checklist.pathwayName}
            </h3>
            <p className="text-sm text-gray-300">
              Form {checklist.form} &middot; Est. prep time:{" "}
              {checklist.estimatedPrepTime}
            </p>
            <div className="mt-2 flex gap-4 text-xs text-gray-500">
              <span>{requiredDocs.length} required</span>
              <span>{conditionalDocs.length} conditional</span>
              <span>{checklist.totalDocuments} total documents</span>
            </div>
          </div>
        )}

        {/* Document Categories */}
        <div className="space-y-4 mb-8">
          {Array.from(documentsByCategory.entries()).map(([category, docs]) => (
            <div key={category} className="glass-panel overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-800/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <div className="text-left">
                    <h3 className="font-semibold text-white">
                      {CATEGORY_LABELS[category] || category}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {docs.length} item{docs.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">
                    {docs.filter((d) => checkedItems[d.id]).length}/
                    {docs.length}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      expandedCategories.has(category) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedCategories.has(category) && (
                <div className="border-t border-gray-800 divide-y divide-gray-800/50">
                  {docs.map((doc) => (
                    <div
                      key={doc.id}
                      className={`p-4 flex items-start gap-3 transition-all ${
                        checkedItems[doc.id] ? "bg-emerald-500/5" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleCheck(doc.id)}
                        className="mt-0.5 flex-shrink-0"
                        aria-label={`Mark ${doc.name} as ${checkedItems[doc.id] ? "incomplete" : "complete"}`}
                      >
                        {checkedItems[doc.id] ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-600 hover:text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`font-medium ${checkedItems[doc.id] ? "text-gray-500 line-through" : "text-white"}`}
                          >
                            {doc.name}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded ${PRIORITY_COLORS[doc.priority]?.bg} ${PRIORITY_COLORS[doc.priority]?.text}`}
                          >
                            {PRIORITY_COLORS[doc.priority]?.label}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {doc.description}
                        </p>
                        {doc.legalBasis && (
                          <span className="text-[10px] font-mono text-cyan-400/60 mt-1 block">
                            {doc.legalBasis}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mb-8 glass-panel p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" /> Important Notes
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>
                Bring <strong>original documents</strong> and photocopies to
                your USCIS interview.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>
                All foreign-language documents must include certified English
                translations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>
                Conditional documents are only needed if they apply to your
                specific situation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>
                USCIS may request additional evidence (RFE) during your case
                review.
              </span>
            </li>
          </ul>
        </div>

        {/* Related Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/documents"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">
                Full Document Guide
              </div>
              <div className="text-sm text-gray-500">
                Detailed document descriptions and tips
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
          <Link
            href="/resources/forms"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">
                Forms Guide
              </div>
              <div className="text-sm text-gray-500">
                All USCIS forms for citizenship pathways
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> This checklist is based on general
            USCIS requirements and may not cover every situation. Requirements
            may change. Consult a licensed immigration attorney for advice about
            your specific case.
          </p>
        </div>
      </div>
    </main>
  );
}
