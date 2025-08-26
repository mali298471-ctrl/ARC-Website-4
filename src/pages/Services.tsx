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
  ChevronDown,
  ChevronUp,
  FolderOpen,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Private Limited / SMC formation',
      timeframe: '5–7 working days',
      documents: ['CNICs of directors', '3 name options', 'email', 'phone'],
      features: ['SECP registration', 'Legal compliance'],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Sole Proprietorship Setup',
      description: 'Quick and easy business setup',
      timeframe: '2–3 working days',
      documents: ['CNIC', 'business name', 'utility bill'],
      features: ['Simple structure', 'Tax benefits'],
      color: 'green'
    },
    {
      icon: FileText,
      title: 'NTN / Tax Registration',
      description: 'Tax registration and compliance',
      timeframe: '1–2 working days',
      documents: ['CNIC', 'business proof', 'utility bill'],
      features: ['Fast processing', 'FBR compliance'],
      color: 'indigo'
    },
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-10 max-w-4xl mx-auto px-4">
        {filteredServices.length === 0 ? (
          <div className="text-center text-gray-500">No services found</div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="flex items-center p-4 cursor-pointer" onClick={() => setExpandedService(expandedService === idx ? null : idx)}>
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  {/* Title + Description */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                  {/* Expand Icon */}
                  {expandedService === idx ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>

                <AnimatePresence>
                  {expandedService === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-sm text-gray-600"
                    >
                      <div className="flex items-center mb-3">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{service.timeframe}</span>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-medium text-gray-800 mb-1">Features:</h4>
                        <ul className="list-disc pl-5">
                          {service.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                          <FolderOpen className="h-4 w-4 mr-2 text-blue-600" />
                          Documents Required:
                        </h4>
                        <ul className="list-disc pl-5">
                          {service.documents.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>

                      <a
                        href="/contact"
                        className="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
