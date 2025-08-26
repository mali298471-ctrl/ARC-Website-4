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

    // Cross-Border & Specialized Services
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

    // Advisory & Support Services
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