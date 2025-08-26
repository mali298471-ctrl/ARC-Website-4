import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, Shield, Scale, BookOpen, MessageCircle, Building, Gavel, FileText } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all tax and legal consultations with complete transparency'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering accurate and meticulous tax solutions with zero tolerance for errors in compliance matters'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to superior quality service delivery that exceeds client expectations in every engagement'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Ensuring strict adherence to all regulatory requirements and maintaining full legal compliance'
    },
    {
      icon: BookOpen,
      title: 'Expertise',
      description: 'Deep technical knowledge of Pakistan tax laws, FBR regulations, and international tax compliance'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Building long-term strategic partnerships through personalized tax solutions and dedicated service'
    }
  ];

  const achievements = [
    {
      icon: Building,
      title: 'FBR Recognized',
      description: 'Officially recognized tax consultants with Federal Board of Revenue accreditation'
    },
    {
      icon: Gavel,
      title: 'High Court Practice',
      description: 'Authorized to represent clients before High Courts and tax tribunals across Pakistan'
    },
    {
      icon: FileText,
      title: 'Compliance Record',
      description: '100% success rate in tax compliance and penalty avoidance for our clients'
    },
    {
      icon: Users,
      title: 'Client Trust',
      description: 'Over 2000+ satisfied clients including individuals, SMEs, and multinational corporations'
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

      {/* Hero Section with FBR/High Court Building Background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden py-32">
        {/* Real FBR Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Government Building" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AR Raheem Consulting</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200">Premier Tax & Legal Advisory Firm</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Pakistan's premier tax consultation and legal advisory firm, delivering comprehensive solutions 
              across all areas of taxation, corporate law, and business advisory services with 8+ years of proven excellence 
              in serving individuals, businesses, and corporations throughout Pakistan and internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* High Court Building Background */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="High Court Building" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Excellence Since 2017</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 2017, AR Raheem Consulting Pvt Ltd has emerged as Pakistan's most trusted comprehensive 
                tax and legal solutions provider. Our practice spans all areas of tax law, business law, corporate advisory, 
                legal consultation, and strategic planning across domestic and international markets.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With official recognition from regulatory authorities and authorization to practice before High Courts, 
                we maintain the highest standards of professional excellence. Our comprehensive expertise covers all 
                areas of tax law, business law, corporate governance, financial planning, and strategic legal consultation 
                for individuals, businesses, and corporations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence and comprehensive service delivery has established us as the preferred 
                choice for discerning clients who demand precision, reliability, and strategic legal solutions 
                across all aspects of tax law, business law, and corporate legal advisory services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8 rounded-2xl relative"
            >
              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">8+</div>
                  <div className="text-blue-700 font-semibold">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">2000+</div>
                  <div className="text-blue-700 font-semibold">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                  <div className="text-blue-700 font-semibold">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
                  <div className="text-blue-700 font-semibold">Client Support</div>
                </div>
              </div>
              
              {/* Professional Certifications */}
              <div className="mt-8 pt-6 border-t border-blue-300">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Professional Accreditations</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• FBR Recognized Tax Consultants</li>
                  <li>• High Court Authorized Practice</li>
                  <li>• SECP Registered Advisors</li>
                  <li>• International Tax Specialists</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide comprehensive, reliable, and strategically sound legal and financial advisory 
                services across all areas of law and taxation. We are committed to delivering professional 
                excellence through comprehensive expertise, ethical practice, and unwavering dedication to client success 
                in all aspects of legal consultation, tax advisory, and strategic planning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be recognized as Pakistan's premier legal and financial advisory firm, setting the 
                benchmark for professional excellence across all areas of legal consultation and tax advisory services. 
                We aspire to be the comprehensive solution provider of choice for individuals, businesses, and corporations 
                seeking expert guidance across law, taxation, corporate governance, and strategic legal planning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and accreditations that demonstrate our commitment to professional excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Supreme Court Building Background with Proper Overlay */}
        <div className="absolute inset-0 opacity-8">
          <img 
            src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Supreme Court Building" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-blue-100/85 to-blue-200/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Professional Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The fundamental principles that guide our professional practice and client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-200"
              >
                <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Expertise */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        {/* Supreme Court Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Supreme Court Building" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-700/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Legal & Tax Expertise
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Our comprehensive expertise spans multiple areas of tax law, business regulations, and legal compliance, 
              backed by official recognition from regulatory authorities and courts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-3">Tax Law & Compliance</h3>
                <p className="text-blue-200">Comprehensive tax law services, compliance solutions, and regulatory guidance with official recognition</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-3">Business & Corporate Law</h3>
                <p className="text-blue-200">Complete business law services, corporate governance, and comprehensive legal compliance solutions</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-3">Legal Representation</h3>
                <p className="text-blue-200">Professional legal representation, court practice, comprehensive documentation, and regulatory compliance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;