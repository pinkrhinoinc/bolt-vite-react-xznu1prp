import React from 'react';
import { Shield, Building2, Users, CheckCircle2, ArrowLeft, Globe, Lock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10">
        <nav className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-600">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-gray-200/50">
              <Building2 className="h-4 w-4 text-pink-600" />
              <span className="text-sm font-medium">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Enterprise-Grade Benefits Management for 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"> Large Organizations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Tailored solutions for companies with 100+ employees. Scale your benefits program with 
              advanced features, dedicated support, and enterprise-level security.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                Schedule Enterprise Demo
              </button>
              <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enterprise Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Globe className="h-8 w-8 text-pink-600" />,
                  title: "Global Workforce Support",
                  description: "Manage benefits across multiple countries with localized compliance and multi-currency support."
                },
                {
                  icon: <Lock className="h-8 w-8 text-pink-600" />,
                  title: "Enterprise Security",
                  description: "SOC 2 Type II certified, GDPR compliant, with SSO integration and role-based access control."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-pink-600" />,
                  title: "Advanced Analytics",
                  description: "Deep insights into benefits utilization, cost trends, and employee wellness metrics."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed specifically for large organizations
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Dedicated account management team",
                "Custom API integrations",
                "Multi-level approval workflows",
                "Advanced reporting and analytics",
                "Bulk employee management",
                "Custom branding options",
                "24/7 priority support",
                "Compliance monitoring and alerts"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Scale Your Benefits Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join leading enterprises in transforming their benefits administration
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}