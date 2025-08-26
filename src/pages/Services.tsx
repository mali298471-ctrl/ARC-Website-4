// File: Services.tsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Users,
  FileText,
  Calculator,
  Scale,
  Shield,
  Globe,
  Briefcase,
  Search,
  Clock,
  FileCheck2,
  CheckCircle2,
  X,
} from "lucide-react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

type ServiceDetail = {
  timeframe: string;
  benefits: string[];
  process: string[];
};

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  category: "Corporate & Business Setup" | "Tax & Financial Services" | "Legal Services" | "Cross-Border & Specialized";
  color:
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "red"
    | "cyan"
    | "yellow"
    | "indigo"
    | "teal"
    | "rose"
    | "amber"
    | "emerald"
    | "violet";
  timeframe: string;
  docsRequired: string[];
  details: ServiceDetail;
  theme?: "uk" | "usa"; // extra visual treatment
};

// ------------------------------------------------------------
// Data (feel free to add/remove items; structure stays the same)
// ------------------------------------------------------------

const servicesData: Service[] = [
  {
    icon: Building2,
    title: "Company Registration (SECP Pvt Ltd / SMC)",
    description: "Complete private limited company registration with SECP",
    category: "Corporate & Business Setup",
    color: "blue",
    timeframe: "5–7 working days",
    docsRequired: [
      "CNICs of directors",
      "3 name options",
      "Email & phone",
      "Address proof",
      "Incorporation docs (Memorandum & Articles)",
    ],
    details: {
      timeframe: "5–7 working days",
      benefits: [
        "Complete SECP registration process",
        "Legal compliance assurance",
        "Corporate structure optimization",
        "Ongoing compliance support",
        "Business advisory services",
      ],
      process: [
        "Name reservation and approval",
        "Documentation preparation",
        "SECP filing and registration",
        "Certificate issuance",
        "Post-incorporation compliance",
      ],
    },
  },
  {
    icon: Users,
    title: "Sole Proprietorship Setup",
    description: "Individual business registration and setup",
    category: "Corporate & Business Setup",
    color: "green",
    timeframe: "2–3 working days",
    docsRequired: ["CNIC", "Business name", "Electricity bill", "Mobile number", "Email"],
    details: {
      timeframe: "2–3 working days",
      benefits: [
        "Simple business structure",
        "Minimal compliance requirements",
        "Direct tax benefits",
        "Easy setup process",
        "Cost-effective solution",
      ],
      process: [
        "Business name registration",
        "Tax registration",
        "License applications",
        "Bank account setup",
        "Compliance guidance",
      ],
    },
  },
  {
    icon: FileText,
    title: "NTN / Tax Registration",
    description: "National Tax Number registration for individuals and businesses",
    category: "Tax & Financial Services",
    color: "cyan",
    timeframe: "1–2 working days",
    docsRequired: ["CNIC", "Business proof", "Electricity bill", "Letterhead & stamp"],
    details: {
      timeframe: "1–2 working days",
      benefits: [
        "Fast NTN registration process",
        "Complete documentation handling",
        "FBR compliance assurance",
        "Certificate delivery",
        "Ongoing support",
      ],
      process: [
        "Document verification",
        "Application preparation",
        "FBR submission",
        "Follow-up and tracking",
        "NTN certificate delivery",
      ],
    },
  },
  {
    icon: Calculator,
    title: "Tax Preparation & Filing",
    description: "Professional tax return preparation and filing services",
    category: "Tax & Financial Services",
    color: "blue",
    timeframe: "1–3 working days",
    docsRequired: ["CNIC", "Salary certificate", "Bank statements", "Property docs", "Business receipts"],
    details: {
      timeframe: "1–3 working days",
      benefits: [
        "Expert tax preparation by certified professionals",
        "Maximum deductions and tax savings",
        "Error-free filing with accuracy guarantee",
        "Audit support and representation",
        "Year-round tax planning advice",
      ],
      process: [
        "Document collection and review",
        "Tax calculation and optimization",
        "Return preparation and review",
        "Electronic filing with FBR",
        "Confirmation and record keeping",
      ],
    },
  },
  {
    icon: Scale,
    title: "Civil Law Services",
    description: "Comprehensive civil law services and representation",
    category: "Legal Services",
    color: "purple",
    timeframe: "15–60 days (case dependent)",
    docsRequired: ["CNIC", "Property/contracts (if relevant)", "Case details"],
    details: {
      timeframe: "15–60 days (case dependent)",
      benefits: [
        "Expert legal representation",
        "Civil litigation support",
        "Contract disputes",
        "Property matters",
        "Legal documentation",
      ],
      process: [
        "Case evaluation",
        "Legal strategy development",
        "Documentation preparation",
        "Court representation",
        "Case resolution",
      ],
    },
  },
  {
    icon: Shield,
    title: "Intellectual Property Law",
    description: "Trademark, patent, and copyright registration services",
    category: "Legal Services",
    color: "indigo",
    timeframe: "3–6 months (IPO Pakistan)",
    docsRequired: ["CNIC", "Logo/design", "Business proof", "Power of attorney"],
    details: {
      timeframe: "3–6 months (IPO Pakistan)",
      benefits: [
        "Complete IP protection strategy",
        "Trademark search and registration",
        "Copyright and patent filing",
        "IP portfolio management",
        "Infringement protection",
      ],
      process: [
        "IP search and analysis",
        "Application preparation",
        "Filing with IPO Pakistan",
        "Examination and response",
        "Registration and maintenance",
      ],
    },
  },
  {
    icon: Globe,
    title: "International Business Structuring (UK Theme)",
    description: "International business structure planning and setup in the UK",
    category: "Cross-Border & Specialized",
    color: "teal",
    timeframe: "15–30 working days",
    docsRequired: ["Ownership details", "Country of operation", "Financials"],
    details: {
      timeframe: "15–30 working days",
      benefits: [
        "International structure planning",
        "Tax optimization strategies",
        "Multi-jurisdiction compliance",
        "Cross-border transactions",
        "Regulatory guidance",
      ],
      process: [
        "Structure analysis",
        "Jurisdiction selection",
        "Documentation preparation",
        "Registration processes",
        "Ongoing compliance",
      ],
    },
    theme: "uk",
  },
  {
    icon: Briefcase,
    title: "US Business Consulting (USA Theme)",
    description: "Business consulting and tax planning services for USA operations",
    category: "Cross-Border & Specialized",
    color: "amber",
    timeframe: "10–20 working days",
    docsRequired: ["Business proof", "Tax history", "Ownership details"],
    details: {
      timeframe: "10–20 working days",
      benefits: [
        "Tax-efficient strategies for US",
        "Business setup and planning",
        "Cross-border compliance",
        "IRS compliance guidance",
        "Advisory and support",
      ],
      process: [
        "Requirement analysis",
        "Tax planning",
        "Documentation",
        "Registration support",
        "Ongoing compliance",
      ],
    },
    theme: "usa",
  },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

const colorPill: Record<Service["color"], string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  green: "bg-green-50 text-green-700 border-green-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-red-50 text-red-700 border-red-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
};

const categories: Service["category"][] = [
  "Corporate & Business Setup",
  "Tax & Financial Services",
  "Legal Services",
  "Cross-Border & Specialized",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ------------------------------------------------------------
// Component
// ------------------------------------------------------------

const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // list-style expander
  const [search, setSearch] = useState("");
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return servicesData;
    return servicesData.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    const map = new Map<Service["category"], Service[]>();
    for (const cat of categories) map.set(cat, []);
    for (const s of filtered) {
      const arr = map.get(s.category)!;
      arr.push(s);
    }
    return map;
  }, [filtered]);

  const themeClass = (theme?: Service["theme"]) => {
    if (theme === "uk")
      return "relative border-l-4 border-red-600 bg-gradient-to-r from-red-50 via-white to-white";
    if (theme === "usa")
      return "relative border-l-4 border-blue-700 bg-gradient-to-r from-blue-50 via-white to-white";
    return "";
  };

  return (
    <div className="relative">
      {/* -------------------------------------- */}
      {/* Hero: Pakistan Supreme/High Court blend */}
      {/* -------------------------------------- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt="Supreme Court of Pakistan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70" />
          </div>
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="High Court of Pakistan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Our Professional Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/80 max-w-2xl mx-auto"
          >
            Legal, tax and corporate solutions—delivered with precision.
          </motion.p>

          {/* Search */}
          <div className="mt-10 flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services, e.g. ‘NTN’, ‘UK’, ‘SECP’"
                className="w-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur px-12 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* Services - clean LIST style by category */}
      {/* -------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {[...grouped.keys()].map((category) => {
            const items = grouped.get(category)!;
            if (!items.length) return null;
            return (
              <motion.div
                key={category}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 border-b-4 border-blue-600 inline-block pb-2">
                  {category}
                </h2>

                <ul className="rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm overflow-hidden">
                  {items.map((svc, idx) => {
                    const isOpen = expandedIndex === servicesData.indexOf(svc);
                    return (
                      <motion.li
                        key={`${svc.title}-${idx}`}
                        variants={itemVariants}
                        className={`${themeClass(svc.theme)} group`}
                      >
                        {/* Row */}
                        <button
                          onClick={() =>
                            setExpandedIndex((cur) =>
                              cur === servicesData.indexOf(svc) ? null : servicesData.indexOf(svc)
                            )
                          }
                          className="w-full flex items-start gap-4 p-5 text-left hover:bg-gray-50/60 transition"
                          aria-expanded={isOpen}
                        >
                          <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:shadow">
                            <svc.icon className="h-6 w-6" />
                          </span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-semibold text-gray-900">{svc.title}</h3>
                              <span className={`text-xs px-2.5 py-1 rounded-full border ${colorPill[svc.color]}`}>
                                {svc.category}
                              </span>
                              {svc.theme === "uk" && (
                                <span className="text-xs px-2.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-700">UK</span>
                              )}
                              {svc.theme === "usa" && (
                                <span className="text-xs px-2.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700">USA</span>
                              )}
                            </div>
                            <p className="mt-1 text-gray-600">{svc.description}</p>
                          </div>
                          <span className="ml-4 shrink-0 text-sm text-gray-500">{svc.timeframe}</span>
                        </button>

                        {/* Expandable detail */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-5 pb-6"
                            >
                              <div className="grid gap-6 md:grid-cols-3">
                                {/* Timeline */}
                                <div className="rounded-2xl border p-4 bg-blue-50/50 border-blue-200">
                                  <div className="flex items-center gap-2 mb-2 text-blue-900 font-semibold">
                                    <Clock className="h-5 w-5" />
                                    Timeline
                                  </div>
                                  <p className="text-blue-800">{svc.details.timeframe}</p>
                                </div>

                                {/* Docs */}
                                <div className="rounded-2xl border p-4 bg-emerald-50/50 border-emerald-200">
                                  <div className="flex items-center gap-2 mb-2 text-emerald-900 font-semibold">
                                    <FileCheck2 className="h-5 w-5" />
                                    Documents Required
                                  </div>
                                  <ul className="list-disc pl-5 space-y-1 text-emerald-900">
                                    {svc.docsRequired.map((d, i) => (
                                      <li key={i}>{d}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Benefits */}
                                <div className="rounded-2xl border p-4 bg-indigo-50/50 border-indigo-200">
                                  <div className="flex items-center gap-2 mb-2 text-indigo-900 font-semibold">
                                    <CheckCircle2 className="h-5 w-5" />
                                    Key Benefits
                                  </div>
                                  <ul className="space-y-1 text-indigo-900">
                                    {svc.details.benefits.map((b, i) => (
                                      <li key={i} className="flex gap-2">
                                        <span>•</span>
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Process */}
                              <div className="mt-6 rounded-2xl border p-4">
                                <p className="font-semibold text-gray-800 mb-2">Process</p>
                                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                                  {svc.details.process.map((p, i) => (
                                    <li key={i}>{p}</li>
                                  ))}
                                </ol>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* Subtle legal watermark strip (optional aesthetic) */}
      {/* -------------------------------------- */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 translate-y-1/2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 shadow-sm">
            <p className="text-center text-sm text-slate-500">
              * Imagery inspired by the Supreme Court of Pakistan and High Court to reflect our legal ethos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
