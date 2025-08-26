import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock, Star, Calculator, FileText, Building, TrendingUp, MessageCircle, Phone, X, Info } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '2000+', label: 'Happy Clients' },
    { number: '50+', label: 'Corporate Partners' },
  ];

  // Your actual client logos - replace these URLs with your hosted images
  const clientLogos = [
    { name: 'PITB', logo: '/New Project.png', color: 'bg-blue-600' },
    { name: 'SNGPL', logo: '/New Project (1).png', color: 'bg-green-600' },
    { name: 'WHO', logo: '/New Project (2).png', color: 'bg-red-600' },
    { name: 'PCB', logo: '/New Project (3).png', color: 'bg-purple-600' },
    { name: 'PTCL', logo: '/New Project (4).png', color: 'bg-orange-600' },
    { name: 'Hen N Bun', logo: '/New Project (5).png', color: 'bg-emerald-600' },
    { name: 'Client 6', logo: '/New Project (6).png', color: 'bg-yellow-600' },
    { name: 'Client 7', logo: '/New Project (7).png', color: 'bg-pink-600' },
    { name: 'Client 8', logo: '/New Project (8).png', color: 'bg-indigo-600' },
    { name: 'Client 9', logo: '/New Project (9).png', color: 'bg-cyan-600' },
    { name: 'Client 10', logo: '/New Project (10).png', color: 'bg-teal-600' },
  ];

  const testimonials = [
    {
      name: 'Muhammad Tariq',
      company: 'Business Owner - Lahore',
      text: 'AR Raheem Consulting made my company registration process incredibly smooth. Their expertise in Pakistani tax laws is exceptional and they guided us through every step professionally.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Sheikh',
      company: 'Freelancer - Karachi',
      text: 'Excellent service for NTN registration and income tax filing. The team at AR Raheem Consulting is very knowledgeable about FBR procedures and saved me so much time.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ahmed Ali Khan',
      company: 'Import/Export Business',
      text: 'Outstanding support for sales tax registration and corporate compliance. AR Raheem Consulting understands the complexities of Pakistani business regulations perfectly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sadia Malik',
      company: 'IT Services Company',
      text: 'Professional and reliable service. They handled our annual tax returns and business compliance with great attention to detail. Highly recommend AR Raheem Consulting.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Usman Raza',
      company: 'Manufacturing Sector',
      text: 'AR Raheem Consulting provided excellent guidance for our factory registration and tax planning. Their deep knowledge of industrial tax matters is impressive.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Nadia Hussain',
      company: 'Retail Business Owner',
      text: 'Very satisfied with their professional approach. AR Raheem Consulting helped us with GST registration and monthly filing requirements. Great experience overall.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  // All services from the document
  const allServices = [
    { icon: FileText, title: 'Tax Registration Services', description: 'Complete NTN registration and tax compliance solutions', time: '1-2 working days' },
    { icon: Calculator, title: 'Tax Advisory & Filing', description: 'Expert tax consultation and professional filing services', time: '1-3 working days' },
    { icon: Building, title: 'Company Registration', description: 'SECP Pvt Ltd & SMC company formation services', time: '5-7 working days' },
    { icon: Users, title: 'Sole Proprietorship Setup', description: 'Quick and easy sole proprietorship business setup', time: '2-3 working days' },
    { icon: TrendingUp, title: 'Sales Tax Registration', description: 'FBR & PRA sales tax registration services', time: '3-5 working days' },
    { icon: FileText, title: 'Partnership Firm Registration', description: 'Complete partnership firm setup and registration', time: '3-5 working days' },
    { icon: Calculator, title: 'Bookkeeping Services', description: 'Professional bookkeeping and accounting services', time: 'Monthly basis' },
    { icon: Award, title: 'UK Ltd Company Formation', description: 'International UK company formation services', time: '7-10 working days' },
    { icon: Star, title: 'USA LLC Formation', description: 'US business formation and LLC setup', time: '10-15 working days' },
    { icon: Building, title: 'Legal Services', description: 'Civil law, family law and IP legal services', time: 'Case dependent' },
    { icon: FileText, title: 'Statutory Audit', description: 'Professional statutory audit and compliance', time: '15-30 days' },
    { icon: TrendingUp, title: 'Business Process Consulting', description: 'Strategic business consulting and advisory', time: '10-20 working days' }
  ];

  // Simple animation styles using CSS transforms
  const scrollAnimation = {
    animation: 'scroll 30s linear infinite'
  };

  const testimonialAnimation = {
    animation: 'testimonialScroll 40s linear infinite'
  };

  return (
    <div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes testimonialScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes serviceCarousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${(allServices.length * 320)}px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .service-carousel {
          animation: serviceCarousel ${allServices.length * 3}s linear infinite;
        }
        .service-carousel:hover {
          animation-play-state: paused;
        }
        .service-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(0.85);
          opacity: 0.6;
          filter: grayscale(0.3) brightness(0.9);
          border: 2px solid transparent;
        }
        .service-card.center {
          transform: scale(1.1);
          opacity: 1;
          filter: grayscale(0) brightness(1.1);
          border: 3px solid #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }
        .service-card.side {
          transform: scale(0.95);
          opacity: 0.8;
          filter: grayscale(0.1) brightness(0.95);
        }
      `}</style>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <a
          href="https://wa.me/923077026707"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:block font-medium">WhatsApp</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-0">
        {/* Real Government Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Government Building" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Smart Tax Solutions
              <span className="text-blue-300"> Made Simple</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Leading tax consultation and business advisory firm in Pakistan with 8+ years of excellence. 
              We provide comprehensive tax solutions, legal services, and business advisory to help you achieve compliance and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 font-semibold rounded-lg transition-all duration-300 text-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Fixed */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-blue-700">
              We have worked with many prestigious brands and organizations
            </p>
          </div>
          
          <div className="relative h-40 overflow-hidden">
            <div 
              className="flex space-x-12 absolute items-center"
              style={scrollAnimation}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-56 h-32 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={`absolute inset-0 ${client.color} text-white font-bold text-lg flex items-center justify-center hidden`}>
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        {/* Professional FBR Building Background */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="FBR Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Picks For You
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our most popular and essential tax services tailored for your success
            </p>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-inner">
            <div className="flex justify-center">
              <div className="relative w-full max-w-5xl overflow-hidden">
                <div className="service-carousel flex space-x-8">
                  {/* Triple the services for seamless loop */}
                  {[...allServices, ...allServices, ...allServices].map((service, index) => {
                    // Calculate position for center effect
                    const position = index % 3;
                    let cardClass = 'service-card';
                    if (position === 1) cardClass += ' center';
                    else if (position === 0 || position === 2) cardClass += ' side';

                    return (
                      <div
                        key={index}
                        className={`${cardClass} flex-shrink-0 w-80 bg-white p-8 rounded-2xl shadow-lg relative`}
                      >
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                          <service.icon className="h-8 w-8 text-blue-600 z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                        {service.time && (
                          <div className="flex items-center text-xs text-blue-600 mb-4">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{service.time}</span>
                          </div>
                        )}
                        <div className="flex space-x-2">
                          <a
                            href="#contact"
                            className="flex-1 inline-flex items-center justify-center text-blue-600 hover:text-blue-700 font-semibold transition-colors border border-blue-200 hover:border-blue-300 rounded-lg py-2 px-3 text-sm"
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                          <a
                            href="tel:+923362280987"
                            className="inline-flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Fade edges for better visual effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Showing {allServices.length} professional services • Hover to pause animation</p>
            <a href="/services" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fixed */}
      <section className="py-20 bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What People Say About Us
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Real feedback from our satisfied clients
            </p>
          </div>

          <div className="relative h-64 overflow-hidden">
            <div
              className="flex space-x-6 absolute"
              style={testimonialAnimation}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-56">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Your Tax Matters Sorted?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get expert tax consultation, NTN registration, and business formation services. Let us handle your compliance needs professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/923077026707"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white hover:bg-green-600 font-semibold rounded-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;