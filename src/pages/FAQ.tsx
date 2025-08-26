import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General Services',
      questions: [
        {
          question: 'What services does AR Consulting provide?',
          answer: 'We provide comprehensive tax consultation services including Income Tax Returns, Sales Tax Registration, Company Registration, NTN Registration, Intellectual Property services, USA LLC formation, and various business registration options.'
        },
        {
          question: 'How long has AR Consulting been in business?',
          answer: 'AR Consulting has been providing professional tax and business services for over 10 years, serving thousands of satisfied clients across Pakistan and internationally.'
        },
        {
          question: 'Do you serve clients outside Pakistan?',
          answer: 'Yes, we serve clients globally, especially for USA LLC formation, US tax filing, and international business setup. We have offices in Lahore, Islamabad, and Dubai.'
        }
      ]
    },
    {
      category: 'Tax Services',
      questions: [
        {
          question: 'What documents do I need for income tax return filing?',
          answer: 'You need your CNIC, salary certificates, bank statements, investment documents, property documents (if any), and previous year tax returns. Our team will guide you through the complete documentation process.'
        },
        {
          question: 'How long does it take to file an income tax return?',
          answer: 'Income tax return filing typically takes 3-5 business days once we receive all required documents. We ensure error-free filing and provide confirmation of successful submission.'
        },
        {
          question: 'What is the penalty for late tax return filing?',
          answer: 'Late filing penalties vary based on income level and delay period. We help you avoid penalties by ensuring timely filing and can assist with penalty reduction applications if needed.'
        },
        {
          question: 'Do you provide audit support?',
          answer: 'Yes, we provide complete audit support and representation before tax authorities. Our experienced team handles all audit proceedings and documentation requirements.'
        }
      ]
    },
    {
      category: 'Business Registration',
      questions: [
        {
          question: 'What is the difference between sole proprietorship and private limited company?',
          answer: 'Sole proprietorship is simpler with minimal compliance but unlimited liability. Private limited company offers limited liability protection, better credibility, and growth opportunities but requires more compliance and documentation.'
        },
        {
          question: 'How long does company registration take?',
          answer: 'Company registration typically takes 7-10 business days including name reservation, documentation preparation, SECP filing, and certificate issuance.'
        },
        {
          question: 'What is required for sales tax registration?',
          answer: 'Sales tax registration requires business registration documents, bank account details, premises documents, and estimated monthly turnover information. We handle the complete process for you.'
        }
      ]
    },
    {
      category: 'USA Services',
      questions: [
        {
          question: 'Why should I form a USA LLC?',
          answer: 'USA LLC provides international business credibility, access to US banking and payment systems, tax benefits, asset protection, and easier access to global markets and investors.'
        },
        {
          question: 'Can I open a US bank account remotely?',
          answer: 'Yes, we assist with remote US bank account opening for your LLC. The process takes 15-20 business days and includes bank selection, application assistance, and account activation support.'
        },
        {
          question: 'Do I need to visit the US to form an LLC?',
          answer: 'No, you can form a US LLC completely remotely. We handle all documentation, filing, and setup processes without requiring your physical presence in the US.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'What are your service charges?',
          answer: 'Our pricing varies by service: NTN Registration starts from PKR 5,000, Income Tax Returns from PKR 8,000, Sales Tax Registration from PKR 10,000, and Company Registration from PKR 25,000. Contact us for detailed pricing.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects and ongoing services. Contact our team to discuss payment options that work best for your needs.'
        },
        {
          question: 'Is there a consultation fee?',
          answer: 'We offer free initial consultation to understand your requirements and provide guidance. Detailed consultation and advisory services may have charges based on complexity and time required.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
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
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden pt-0">
        {/* Professional Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Government Building" 
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our tax and business services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <motion.div
                      key={questionIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      whileHover={{ shadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our expert team is here to help. Contact us for personalized assistance with your tax and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
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

export default FAQ;