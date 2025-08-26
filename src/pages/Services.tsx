import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
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
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    // Corporate & Business Setup
    {
      icon: FileText,
      title: 'Tax Registration Services',
      description: 'Complete tax registration and compliance solutions',
      category: 'Corporate & Business Setup',
      timeframe: '1-2 working days',
      features: ['Fast processing', 'Complete documentation', 'FBR compliance', 'Certificate delivery'],
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Company Registration (SECP)',
      description: 'Private Limited and SMC company formation services',
      category: 'Corporate & Business Setup',
      timeframe: '5-7 working days',
      features: ['SECP registration', 'Legal compliance', 'Corporate structure', 'Ongoing support'],
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Sole Proprietorship Setup',
      description: 'Quick and easy sole proprietorship business setup',
      category: 'Corporate & Business Setup',
      timeframe: '2-3 working days',
      features: ['Simple structure', 'Minimal compliance', 'Tax benefits', 'Cost-effective'],
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Partnership Firm Registration',
      description: 'Complete partnership firm setup and registration',
      category: 'Corporate & Business Setup',
      timeframe: '3-5 working days',
      features: ['Partnership deed', 'Registration process', 'Tax planning', 'Legal documentation'],
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Sales Tax Registration',
      description: 'FBR & PRA sales tax registration services',
      category: 'Corporate & Business Setup',
      timeframe: '3-5 working days',
      features: ['FBR registration', 'PRA compliance', 'Monthly filing', 'Expert guidance'],
      color: 'orange'
    },

    // Tax & Financial Services
    {
      icon: Calculator,
      title: 'Tax Advisory & Filing',
      description: 'Expert tax consultation and professional filing services',
      category: 'Tax & Financial Services',
      timeframe: '1-3 working days',
      features: ['Expert consultation', 'Professional filing', 'Tax optimization', 'Audit support'],
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping and accounting services',
      category: 'Tax & Financial Services',
      timeframe: 'Monthly basis',
      features: ['Monthly books', 'Financial reports', 'Tax preparation', 'Compliance tracking'],
      color: 'cyan'
    },
    {
      icon: Award,
      title: 'Statutory Audit',
      description: 'Professional statutory audit and compliance services',
      category: 'Tax & Financial Services',
      timeframe: '15-30 days',
      features: ['Comprehensive audit', 'Compliance review', 'Risk assessment', 'Audit reports'],
      color: 'red'
    },

    // Legal Services
    {
      icon: Scale,
      title: 'Legal Services',
      description: 'Civil law, family law and comprehensive legal services',
      category: 'Legal Services',
      timeframe: 'Case dependent',
      features: ['Civil litigation', 'Family law', 'Contract disputes', 'Legal representation'],
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Trademark, patent, and copyright registration services',
      category: 'Legal Services',
      timeframe: '3-6 months',
      features: ['Trademark registration', 'Patent filing', 'Copyright protection', 'IP portfolio'],
      color: 'indigo'
    },

    // International Services
    {
      icon: Globe,
      title: 'UK Ltd Company Formation',
      description: 'International UK company formation services',
      category: 'UK Services',
      timeframe: '7-10 working days',
      features: ['UK incorporation', 'Bank account setup', 'Registered address', 'Compliance support'],
      color: 'red',
      theme: 'uk'
    },
    {
      icon: Briefcase,
      title: 'USA LLC Formation',
      description: 'US business formation and LLC setup services',
      category: 'USA Services',
      timeframe: '10-15 working days',
      features: ['LLC formation', 'EIN registration', 'Bank account', 'Tax planning'],
      color: 'blue',
      theme: 'usa'
    },
    {
      icon: TrendingUp,
      title: 'Business Process Consulting',
      description: 'Strategic business consulting and advisory services',
      category: 'Consulting Services',
      timeframe: '10-20 working days',
      features: ['Strategic planning', 'Process optimization', 'Growth strategies', 'Market analysis'],
      color: 'emerald'
    }
  ];

  const categories = ['All', 'Corporate & Business Setup', 'Tax & Financial Services', 'Legal Services', 'UK Services', 'USA Services', 'Consulting Services'];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
    };
    return colors[color] || colors.blue;
  };

  const getThemeBackground = (theme?: string) => {
    if (theme === 'uk') {
      return 'bg-gradient-to-br from-red-50 via-white to-blue-50';
    }
    if (theme === 'usa') {
      return 'bg-gradient-to-br from-blue-50 via-white to-red-50';
    }
    return 'bg-white';
  };

  const getThemeBorder = (theme?: string) => {
    if (theme === 'uk') {
      return 'border-l-4 border-red-600';
    }
    if (theme === 'usa') {
      return 'border-l-4 border-blue-700';
    }
    return 'border-l-4 border-gray-200';
  };

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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-0">
        {/* Professional Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Professional Building" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/85 to-blue-700/85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Our Professional Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive tax and legal solutions delivered with precision and expertise
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${getThemeBackground(service.theme)} ${getThemeBorder(service.theme)} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* UK Flag Background */}
                  {service.theme === 'uk' && (
                    <div className="absolute top-0 right-0 w-20 h-12 opacity-20">
                      <div className="w-full h-full bg-gradient-to-br from-red-600 via-white to-blue-600"></div>
                    </div>
                  )}
                  
                  {/* USA Flag Background */}
                  {service.theme === 'usa' && (
                    <div className="absolute top-0 right-0 w-20 h-12 opacity-20">
                      <div className="w-full h-full bg-gradient-to-br from-blue-700 via-white to-red-600"></div>
                    </div>
                  )}

                  <div className="p-8 relative">
                    {/* Icon */}
                    <div className={`bg-gradient-to-br ${getColorClasses(service.color)} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        service.theme === 'uk' ? 'bg-red-100 text-red-800' :
                        service.theme === 'usa' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    {/* Timeframe */}
                    <div className="flex items-center text-sm text-blue-600 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{service.timeframe}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="flex space-x-3">
                      <a
                        href="/contact"
                        className={`flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${getColorClasses(service.color)} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our expert team for personalized consultation and professional service delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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