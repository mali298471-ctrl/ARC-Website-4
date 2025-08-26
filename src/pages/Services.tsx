import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  FolderOpen,
  Phone,
  Mail
} from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedService, setExpandedService] = useState(null);

  // FULL services array kept intact (no cuts)
  const services = [
    // Corporate & Business Setup
    {
      icon: Building2,
      title: 'Company Registration (SECP Pvt Ltd / SMC)',
      description: 'Private Limited and SMC company formation services',
      category: 'Corporate & Business Setup',
      timeframe: '5–7 working days',
      documents: ['CNICs of directors', '3 name options', 'email', 'phone', 'address proof', 'incorporation docs (Memorandum & Articles)'],
      features: ['SECP registration', 'Legal compliance', 'Corporate structure', 'Ongoing support'],
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Sole Proprietorship Setup',
      description: 'Quick and easy sole proprietorship business setup',
      category: 'Corporate & Business Setup',
      timeframe: '2–3 working days',
      documents: ['CNIC', 'business name', 'electricity bill', 'mobile number', 'email'],
      features: ['Simple structure', 'Minimal compliance', 'Tax benefits', 'Cost-effective'],
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Partnership Firm Registration',
      description: 'Complete partnership firm setup and registration',
      category: 'Corporate & Business Setup',
      timeframe: '3–5 working days',
      documents: ['CNICs of partners', 'partnership deed', 'business address proof', 'recent utility bill'],
      features: ['Partnership deed', 'Registration process', 'Tax planning', 'Legal documentation'],
      color: 'purple'
    },
    {
      icon: Briefcase,
      title: 'Corporate Services (General)',
      description: 'General corporate services and compliance solutions',
      category: 'Corporate & Business Setup',
      timeframe: '1–10 working days',
      documents: ['CNIC', 'registration papers', 'required forms depending on service'],
      features: ['Flexible services', 'Compliance support', 'Documentation', 'Expert guidance'],
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'UK Ltd Company Formation',
      description: 'International UK company formation services',
      category: 'UK Services',
      timeframe: '7–10 working days',
      documents: ['Passport/ID of directors', 'address proof', 'business name', 'shareholding details'],
      features: ['UK incorporation', 'Bank account setup', 'Registered address', 'Compliance support'],
      color: 'red',
      theme: 'uk'
    },
    {
      icon: Briefcase,
      title: 'USA LLC Formation',
      description: 'US business formation and LLC setup services',
      category: 'USA Services',
      timeframe: '10–15 working days',
      documents: ['Passport/ID of owners', 'business name', 'address proof', 'EIN application form'],
      features: ['LLC formation', 'EIN registration', 'Bank account', 'Tax planning'],
      color: 'blue',
      theme: 'usa'
    },

    // Tax & Financial Services
    {
      icon: FileText,
      title: 'NTN / Tax Registration',
      description: 'Complete tax registration and compliance solutions',
      category: 'Tax & Financial Services',
      timeframe: '1–2 working days',
      documents: ['CNIC', 'business proof', 'electricity bill', 'letterhead & stamp'],
      features: ['Fast processing', 'Complete documentation', 'FBR compliance', 'Certificate delivery'],
      color: 'blue'
    },
    {
      icon: Calculator,
      title: 'Tax Preparation & Filing',
      description: 'Expert tax consultation and professional filing services',
      category: 'Tax & Financial Services',
      timeframe: '1–3 working days',
      documents: ['CNIC', 'salary certificate', 'bank statements', 'property docs', 'business receipts'],
      features: ['Expert consultation', 'Professional filing', 'Tax optimization', 'Audit support'],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Corporate Tax Advisory',
      description: 'Ongoing corporate tax consultation and advisory services',
      category: 'Tax & Financial Services',
      timeframe: 'Per case basis',
      documents: ['Company financials', 'tax returns', 'notices (if any)'],
      features: ['Strategic planning', 'Tax optimization', 'Compliance review', 'Risk management'],
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Sales Tax Registration (FBR / PRA)',
      description: 'FBR & PRA sales tax registration services',
      category: 'Tax & Financial Services',
      timeframe: '3–5 working days',
      documents: ['CNIC', 'NTN', 'rent agreement/ownership', 'electricity bill', 'company letterhead'],
      features: ['FBR registration', 'PRA compliance', 'Monthly filing', 'Expert guidance'],
      color: 'orange'
    },
    {
      icon: FileText,
      title: 'Monthly Sales Tax Filing',
      description: 'Monthly sales tax return filing services',
      category: 'Tax & Financial Services',
      timeframe: '1 working day',
      documents: ['Sales invoices', 'purchase invoices', 'previous month return'],
      features: ['Monthly compliance', 'Accurate filing', 'Deadline management', 'Expert support'],
      color: 'cyan'
    },
    {
      icon: FileText,
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping and accounting services',
      category: 'Tax & Financial Services',
      timeframe: 'Monthly / Quarterly',
      documents: ['Receipts', 'invoices', 'vouchers', 'payroll details', 'bank statements'],
      features: ['Monthly books', 'Financial reports', 'Tax preparation', 'Compliance tracking'],
      color: 'cyan'
    },
    {
      icon: Calculator,
      title: 'Small Business Accounting',
      description: 'Comprehensive accounting services for small businesses',
      category: 'Tax & Financial Services',
      timeframe: 'Monthly/Annual',
      documents: ['Sales/purchase records', 'expense details', 'payroll', 'bank statements'],
      features: ['Complete accounting', 'Financial statements', 'Tax compliance', 'Business insights'],
      color: 'green'
    },
    {
      icon: Award,
      title: 'Statutory Audit',
      description: 'Professional statutory audit and compliance services',
      category: 'Tax & Financial Services',
      timeframe: '15–30 days',
      documents: ['Financial statements', 'ledgers', 'vouchers', 'invoices', 'tax filings'],
      features: ['Comprehensive audit', 'Compliance review', 'Risk assessment', 'Audit reports'],
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analysis & Reporting',
      description: 'Detailed financial analysis and reporting services',
      category: 'Tax & Financial Services',
      timeframe: '5–10 working days',
      documents: ['Business financials', 'bank records', 'ledgers', 'invoices'],
      features: ['Financial insights', 'Performance analysis', 'Custom reports', 'Strategic recommendations'],
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Complete payroll management and processing',
      category: 'Tax & Financial Services',
      timeframe: 'Monthly',
      documents: ['Employee CNICs', 'salary structure', 'attendance records'],
      features: ['Salary processing', 'Tax calculations', 'Compliance management', 'Reporting'],
      color: 'purple'
    },

    // Legal Services
    {
      icon: Scale,
      title: 'Civil Law Services',
      description: 'Comprehensive civil law and litigation services',
      category: 'Legal Services',
      timeframe: '15–60 days average',
      documents: ['CNIC', 'property/contracts (if relevant)', 'case details'],
      features: ['Civil litigation', 'Property disputes', 'Contract matters', 'Legal representation'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Family Law Services',
      description: 'Complete family law and personal legal matters',
      category: 'Legal Services',
      timeframe: '7–60 days',
      documents: ['CNIC', 'marriage/divorce docs', 'birth certificates', 'affidavits'],
      features: ['Marriage matters', 'Divorce proceedings', 'Child custody', 'Family disputes'],
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'Intellectual Property (Trademark/Patent/Copyright)',
      description: 'Complete intellectual property registration and protection',
      category: 'Legal Services',
      timeframe: '3–6 months',
      documents: ['CNIC', 'logo/design', 'business proof', 'power of attorney'],
      features: ['Trademark registration', 'Patent filing', 'Copyright protection', 'IP portfolio'],
      color: 'indigo'
    },
    {
      icon: FileText,
      title: 'Legal Drafting & Contracts',
      description: 'Professional legal document drafting and contracts',
      category: 'Legal Services',
      timeframe: '2–5 working days',
      documents: ['CNIC', 'draft terms', 'previous agreements (if any)'],
      features: ['Contract drafting', 'Legal documents', 'Agreement review', 'Legal advice'],
      color: 'blue'
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      description: 'Professional dispute resolution and arbitration services',
      category: 'Legal Services',
      timeframe: 'Schedule dependent',
      documents: ['CNIC', 'case history', 'agreements', 'proof of dispute'],
      features: ['Arbitration', 'Mediation', 'Dispute resolution', 'Legal consultation'],
      color: 'red'
    },
    {
      icon: CheckCircle,
      title: 'Legal Compliance (SECP, FBR, PRA)',
      description: 'Complete legal compliance and regulatory services',
      category: 'Legal Services',
      timeframe: '3–10 working days',
      documents: ['CNIC', 'compliance notices', 'corporate documents'],
      features: ['Regulatory compliance', 'Notice handling', 'Legal updates', 'Risk management'],
      color: 'green'
    },

    // International Services
    {
      icon: Globe,
      title: 'International Business Structuring',
      description: 'Strategic international business structure planning',
      category: 'International Services',
      timeframe: '15–30 working days',
      documents: ['Ownership details', 'country of operation', 'financials'],
      features: ['Structure planning', 'Multi-jurisdiction setup', 'Tax optimization', 'Compliance strategy'],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Foreign Market Entry Consulting',
      description: 'Strategic consulting for entering foreign markets',
      category: 'International Services',
      timeframe: '20–45 days',
      documents: ['Company profile', 'product/service details', 'target market data'],
      features: ['Market analysis', 'Entry strategy', 'Regulatory guidance', 'Business planning'],
      color: 'emerald'
    },

    // Consulting Services
    {
      icon: TrendingUp,
      title: 'Business Process Consulting',
      description: 'Strategic business consulting and process optimization',
      category: 'Consulting Services',
      timeframe: '10–20 working days',
      documents: ['Current processes', 'organizational structure', 'business goals'],
      features: ['Process optimization', 'Strategic planning', 'Growth strategies', 'Market analysis'],
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Tax Notice & Audit Support',
      description: 'Professional support for tax notices and audits',
      category: 'Consulting Services',
      timeframe: '5–15 working days',
      documents: ['Tax return', 'notice copy', 'supporting records'],
      features: ['Notice response', 'Audit preparation', 'Documentation support', 'Legal representation'],
      color: 'orange'
    },
    {
      icon: TrendingUp,
      title: 'Financial Risk Management',
      description: 'Comprehensive financial risk assessment and management',
      category: 'Consulting Services',
      timeframe: '7–15 working days',
      documents: ['Company financials', 'investment details', 'contracts'],
      features: ['Risk assessment', 'Mitigation strategies', 'Financial planning', 'Compliance monitoring'],
      color: 'red'
    },
    {
      icon: Award,
      title: 'Strategic Legal & Tax Advisory',
      description: 'Ongoing strategic legal and tax consultation services',
      category: 'Consulting Services',
      timeframe: 'Ongoing basis',
      documents: ['CNIC', 'financial reports', 'business contracts'],
      features: ['Strategic planning', 'Legal guidance', 'Tax optimization', 'Risk management'],
      color: 'purple'
    },
    {
      icon: FileText,
      title: 'Resource & Knowledge Center',
      description: 'Access to guidance blogs, templates, and resources',
      category: 'Consulting Services',
      timeframe: 'On demand',
      documents: ['Not applicable (informational service)'],
      features: ['Knowledge base', 'Templates', 'Guides', 'Best practices'],
      color: 'cyan'
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Compliance Monitoring',
      description: 'Continuous compliance monitoring and management',
      category: 'Consulting Services',
      timeframe: 'Monthly/Quarterly',
      documents: ['Company filings', 'SECP/FBR notices', 'returns'],
      features: ['Continuous monitoring', 'Compliance alerts', 'Regular updates', 'Risk prevention'],
      color: 'green'
    }
  ];

  const categories = ['All', 'Corporate & Business Setup', 'Tax & Financial Services', 'Legal Services', 'UK Services', 'USA Services', 'International Services', 'Consulting Services'];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    };
    return colors[color] || colors.blue;
  };

  const getThemeBackground = (theme) => {
    if (theme === 'uk') return 'bg-gradient-to-r from-red-50 via-white to-blue-50';
    if (theme === 'usa') return 'bg-gradient-to-r from-blue-50 via-white to-red-50';
    return 'bg-white';
  };

  const getThemeBorder = (theme) => {
    if (theme === 'uk') return 'border-l-4 border-red-600';
    if (theme === 'usa') return 'border-l-4 border-blue-700';
    return 'border-l-4 border-gray-200';
  };

  return (
    <div>
      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <a
          href="https://wa.me/923077026707"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:block font-medium">WhatsApp</span>
        </a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Professional Building" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/85 to-blue-700/85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Our Professional Services
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive tax and legal solutions delivered with precision and expertise
            </p>

            {/* Search Bar with icon INSIDE (kept + refined) */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 h-5 w-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter (unchanged) */}
      <section className="py-6 bg-gray-50 border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT Services List (Windows-like rows). Only show icon + title + subheading. Everything else in "Learn more" */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <ul className="divide-y">
                {filteredServices.map((service, index) => {
                  const isOpen = expandedService === index;
                  return (
                    <li key={index} className={`${getThemeBackground(service.theme)}`}>
                      {/* Row */}
                      <button
                        onClick={() => setExpandedService(isOpen ? null : index)}
                        className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 focus:outline-none"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Icon */}
                          <div className={`bg-gradient-to-br ${getColorClasses(service.color)} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow`}>
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>

                          {/* Title + Subheading */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                                {service.title}
                              </h3>
                              <span className="hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                                {service.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                              {service.description}
                            </p>
                          </div>

                          {/* Learn more chevron */}
                          <div className="ml-2 text-gray-500">
                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>
                      </button>

                      {/* Expandable content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-4 sm:px-6 pb-4 sm:pb-6"
                          >
                            {/* Timeframe */}
                            <div className="flex items-center text-sm sm:text-base text-blue-700 mb-4">
                              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                              <span className="font-medium">{service.timeframe}</span>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key features</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Required Documents */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                <FolderOpen className="h-4 w-4 mr-2 text-blue-600" />
                                Required documents
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {service.documents.map((doc, idx) => (
                                  <div key={idx} className="flex items-start text-sm text-gray-700 bg-gray-50 p-2 rounded-md">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                                    <span>{doc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                              <a
                                href="/contact"
                                className={`inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r ${getColorClasses(service.color)} text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow`}
                              >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                              <button
                                onClick={() => setExpandedService(null)}
                                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors"
                              >
                                Close
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Custom Service CTA Section (kept) */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find Your Service?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We provide custom solutions tailored to your specific business needs. Contact us for personalized consultation and specialized services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-3">Speak directly with our experts</p>
                <a href="tel:+923077026707" className="text-blue-400 hover:text-blue-300 font-medium">
                  +92 307 702 6707
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm mb-3">Quick consultation via chat</p>
                <a
                  href="https://wa.me/923077026707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Chat Now
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-3">Detailed inquiry and consultation</p>
                <a href="/contact" className="text-purple-400 hover:text-purple-300 font-medium">
                  Send Message
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Request Custom Service
              </motion.a>
              <motion.a
                href="https://wa.me/923077026707?text=Hi,%20I%20need%20a%20custom%20service%20that's%20not%20listed%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Custom Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main CTA Section (kept) */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our expert team for personalized consultation and professional service delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </motion.a>
              <a
                href="https://wa.me/923077026707"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
