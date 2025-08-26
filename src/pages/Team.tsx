import React from 'react';
import { Award, GraduationCap, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Muhammad Asif Khan',
      position: 'Senior Tax Advisor',
      image: '/Prof 1.png'
    },
    {
      name: 'Ahmed Malik',
      position: 'Business Registration Specialist',
      image: '/Prof 2.png'
    },
    {
      name: 'Ahmed Ali Shah',
      position: 'Tax Compliance Officer',
      image: '/Prof 3.png'
    },
    {
      name: 'Hassan Rehman',
      position: 'Client Relations Executive',
      image: '/Prof 4.png'
    }
  ];

  // Simple animation styles using CSS transforms
  const fadeInUp = {
    animation: 'fadeInUp 0.8s ease-out forwards'
  };

  const hoverFloat = {
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer'
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
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
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden pt-0">
        {/* Professional Building Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Professional Building" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-blue-700/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center relative z-10" style={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experienced tax professionals dedicated to delivering excellence in every service
            </p>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Professional Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals committed to providing exceptional tax and business consulting services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center hover-lift"
                style={hoverFloat}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Message - Left Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from CEO</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  "At AR Raheem Consulting, we believe that every client deserves personalized, professional tax and business advisory services. Our commitment to excellence has been the cornerstone of our success."
                </p>
                <p>
                  "We understand that navigating Pakistan's tax landscape can be complex. That's why our team of experienced professionals works tirelessly to ensure your compliance while maximizing your financial efficiency."
                </p>
                <p>
                  "Our vision extends beyond traditional consulting. We aim to be your trusted partner in achieving sustainable business growth and financial success in Pakistan's evolving business environment."
                </p>
              </div>
              
              <div className="pt-4">
                <div className="text-xl font-bold text-gray-900">Qaisar Bukhari</div>
                <div className="text-blue-600 font-semibold">Chief Executive Officer</div>
                <div className="text-gray-500 text-sm mt-1">AR Raheem Consulting</div>
              </div>
            </div>

            {/* CEO Image - Right Side */}
            <div className="relative">
              {/* Blue Rectangle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform -rotate-1"></div>
              
              {/* CEO Image Container */}
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/CEO 1.png"
                    alt="Qaisar Bukhari - CEO"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                </div>
                
                {/* Image Caption */}
                <div className="mt-6 text-center">
                  <div className="text-xl font-bold text-gray-900">Qaisar Bukhari</div>
                  <div className="text-blue-600 font-semibold">Chief Executive Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're always looking for talented professionals who share our passion for excellence and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                View Open Positions
              </button>
              <a
                href="https://wa.me/923077026707"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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

export default Team;