import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Calculator, 
  FileText, 
  Search, 
  CreditCard, 
  Building2, 
  MessageCircle,
  HelpCircle,
  CheckCircle,
  Globe,
  Shield,
  Users,
  BookOpen,
  Phone
} from 'lucide-react';

const Help = () => {
  const fbrTools = [
    {
      icon: Search,
      title: 'ATL Status Check',
      description: 'Check if you are on Active Taxpayers List (ATL)',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Tax Verification'
    },
    {
      icon: FileText,
      title: 'NTN Verification',
      description: 'Verify National Tax Number (NTN) status',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Tax Verification'
    },
    {
      icon: CreditCard,
      title: 'Sales Tax Registration Check',
      description: 'Verify Sales Tax Registration Number (STRN)',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Tax Verification'
    },
    {
      icon: FileText,
      title: 'Income Tax Return Filing',
      description: 'File your annual income tax returns online',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Tax Filing'
    },
    {
      icon: Building2,
      title: 'Sales Tax Return Filing',
      description: 'File monthly/quarterly sales tax returns',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Tax Filing'
    },
    {
      icon: Search,
      title: 'Tax Payment Verification',
      description: 'Verify your tax payments and challans',
      url: 'https://iris.fbr.gov.pk/',
      category: 'Payment Verification'
    }
  ];

  const otherTools = [
    {
      icon: Calculator,
      title: 'Tax Calculator',
      description: 'Calculate your income tax with our built-in calculator',
      url: '/tax-calculator',
      category: 'Calculation Tools',
      internal: true
    },
    {
      icon: Building2,
      title: 'SECP Company Search',
      description: 'Search for registered companies in Pakistan',
      url: 'https://www.secp.gov.pk/company-search/',
      category: 'Company Verification'
    },
    {
      icon: Globe,
      title: 'Intellectual Property Search',
      description: 'Search trademarks and patents in Pakistan',
      url: 'https://www.ipopakistan.gov.pk/',
      category: 'IP Services'
    },
    {
      icon: Shield,
      title: 'State Bank Exchange Rates',
      description: 'Current foreign exchange rates from SBP',
      url: 'https://www.sbp.org.pk/ecodata/rates/ExchangeRates.asp',
      category: 'Financial Information'
    }
  ];

  const quickHelp = [
    {
      question: 'How to get NTN?',
      answer: 'Visit FBR office with CNIC, business proof, and utility bill. We can help you get it in 1-2 days.',
      action: 'Get NTN Help'
    },
    {
      question: 'What is ATL status?',
      answer: 'Active Taxpayers List shows if you are compliant with tax filing requirements.',
      action: 'Check ATL Status'
    },
    {
      question: 'How to file tax returns?',
      answer: 'Use FBR IRIS portal or get professional help for accurate filing.',
      action: 'Filing Assistance'
    },
    {
      question: 'Company registration process?',
      answer: 'Register with SECP online or through authorized intermediaries like us.',
      action: 'Registration Help'
    }
  ];

  return (
    <div>
      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
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
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden pt-0">
        {/* Professional Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="FBR Building" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-blue-700/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Tax & Business Help Center</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Access official FBR tools, calculators, and get instant help with your tax and business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* FBR Official Tools */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* FBR Building Background */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="FBR Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Official FBR Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct access to Federal Board of Revenue's official verification and filing tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fbrTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <tool.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Access Tool
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Useful Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Tools & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More helpful tools for your business and tax needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <a
                  href={tool.url}
                  target={tool.internal ? "_self" : "_blank"}
                  rel={tool.internal ? "" : "noopener noreferrer"}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors text-sm"
                >
                  {tool.internal ? 'Use Tool' : 'Visit Site'}
                  {tool.internal ? <Calculator className="ml-1 h-4 w-4" /> : <ExternalLink className="ml-1 h-4 w-4" />}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Help & FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers to common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600 mb-4">{item.answer}</p>
                    <a
                      href="https://wa.me/923077026707"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {item.action}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Professional Assistance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our expert team is here to help with personalized solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Our Experts
              </motion.a>
              <a
                href="https://wa.me/923077026707"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
              </a>
              <a
                href="tel:+923362280987"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;