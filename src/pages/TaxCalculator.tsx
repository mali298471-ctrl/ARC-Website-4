import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, FileText, MessageCircle, Info } from 'lucide-react';

const TaxCalculator = () => {
  const [salary, setSalary] = useState<number>(0);
  const [taxYear, setTaxYear] = useState<string>('2024-25');
  const [results, setResults] = useState({
    annualSalary: 0,
    taxableIncome: 0,
    incomeTax: 0,
    netSalary: 0,
    monthlySalary: 0,
    monthlyTax: 0,
    monthlyNet: 0
  });

  // Tax slabs for 2024-25 (latest rates)
  const taxSlabs = [
    { min: 0, max: 600000, rate: 0 },
    { min: 600001, max: 1200000, rate: 2.5 },
    { min: 1200001, max: 2200000, rate: 12.5 },
    { min: 2200001, max: 3200000, rate: 20 },
    { min: 3200001, max: 4100000, rate: 25 },
    { min: 4100001, max: Infinity, rate: 35 }
  ];

  const calculateTax = (annualIncome: number) => {
    let tax = 0;
    let remainingIncome = annualIncome;

    for (const slab of taxSlabs) {
      if (remainingIncome <= 0) break;

      const slabIncome = Math.min(remainingIncome, slab.max - slab.min + 1);
      if (annualIncome > slab.min) {
        const taxableInThisSlab = Math.min(slabIncome, annualIncome - slab.min + 1);
        tax += (taxableInThisSlab * slab.rate) / 100;
        remainingIncome -= taxableInThisSlab;
      }
    }

    return Math.round(tax);
  };

  useEffect(() => {
    if (salary > 0) {
      const annualSalary = salary * 12;
      const incomeTax = calculateTax(annualSalary);
      const netAnnualSalary = annualSalary - incomeTax;
      
      setResults({
        annualSalary,
        taxableIncome: annualSalary,
        incomeTax,
        netSalary: netAnnualSalary,
        monthlySalary: salary,
        monthlyTax: Math.round(incomeTax / 12),
        monthlyNet: Math.round(netAnnualSalary / 12)
      });
    }
  }, [salary]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Tax Calculator</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Calculate your income tax based on the latest Pakistan tax rates for {taxYear}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculate Your Tax</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="taxYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Year
                  </label>
                  <select
                    id="taxYear"
                    value={taxYear}
                    onChange={(e) => setTaxYear(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="2024-25">2024-25</option>
                    <option value="2023-24">2023-24</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Salary (PKR)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="number"
                      id="salary"
                      value={salary || ''}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your monthly salary"
                      min="0"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">Note:</p>
                      <p>This calculator uses the standard tax rates for salaried individuals. Actual tax may vary based on deductions, allowances, and other factors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Calculation Results</h2>
              
              {salary > 0 ? (
                <div className="space-y-6">
                  {/* Monthly Breakdown */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Monthly Breakdown</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gross Salary:</span>
                        <span className="font-semibold">{formatCurrency(results.monthlySalary)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Income Tax:</span>
                        <span className="font-semibold text-red-600">-{formatCurrency(results.monthlyTax)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-semibold">Net Salary:</span>
                          <span className="font-bold text-green-600">{formatCurrency(results.monthlyNet)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Breakdown */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Annual Breakdown</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Salary:</span>
                        <span className="font-semibold">{formatCurrency(results.annualSalary)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Tax:</span>
                        <span className="font-semibold text-red-600">-{formatCurrency(results.incomeTax)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-semibold">Net Annual Income:</span>
                          <span className="font-bold text-green-600">{formatCurrency(results.netSalary)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Rate */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Effective Tax Rate</h3>
                    <div className="text-2xl font-bold text-yellow-600">
                      {results.annualSalary > 0 ? ((results.incomeTax / results.annualSalary) * 100).toFixed(2) : 0}%
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Enter your monthly salary to see tax calculation</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tax Slabs Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tax Slabs for {taxYear}</h2>
            <p className="text-xl text-gray-600">Current income tax rates for salaried individuals</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <div className="grid grid-cols-3 gap-4 font-semibold">
                  <div>Income Range (PKR)</div>
                  <div className="text-center">Tax Rate</div>
                  <div className="text-right">Tax Amount</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {taxSlabs.map((slab, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">
                        {formatCurrency(slab.min)} - {slab.max === Infinity ? 'Above' : formatCurrency(slab.max)}
                      </div>
                      <div className="text-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                          {slab.rate}%
                        </span>
                      </div>
                      <div className="text-right text-gray-600">
                        {slab.rate}% of amount exceeding {formatCurrency(slab.min - 1)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
              Need Professional Tax Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our expert tax consultants can help you optimize your tax planning and ensure compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get Professional Help
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

export default TaxCalculator;