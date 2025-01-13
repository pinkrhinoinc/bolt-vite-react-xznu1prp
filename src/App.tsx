import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Shield, Users, Building2, ArrowRight, CheckCircle2, Phone, Mail, Building, Sparkles, Globe, Lock, Brain, Send, Bot } from 'lucide-react';
import Enterprise from './pages/Enterprise';

function HomePage() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI integration will be added later
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dynamic Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>
        <header className="relative">
          <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-pink-600" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Pink Rhino
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#platform" className="text-gray-600 hover:text-pink-600">Platform</a>
              <a href="#solutions" className="text-gray-600 hover:text-pink-600">Solutions</a>
              <a href="#enterprise" className="text-gray-600 hover:text-pink-600">Enterprise</a>
              <a href="#pricing" className="text-gray-600 hover:text-pink-600">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-600">Sign in</button>
              <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
          </nav>

          <div className="container mx-auto px-6 pt-24 pb-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-gray-200/50">
                <Sparkles className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium">Revolutionizing Group Benefits</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                The Modern Platform for 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"> Employee Benefits</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Empower your team with next-generation benefits. AI-powered recommendations, 
                real-time analytics, and seamless integration with your HR stack.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center">
                  Small Business <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link 
                  to="/enterprise"
                  className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors border border-gray-200 text-center"
                >
                  Enterprise Sales
                </Link>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50">
                <div className="text-4xl font-bold text-gray-900 mb-2">$2.5B+</div>
                <div className="text-gray-600">Benefits processed annually</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50">
                <div className="text-4xl font-bold text-gray-900 mb-2">15,000+</div>
                <div className="text-gray-600">Companies trust Pink Rhino</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50">
                <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Customer satisfaction rate</div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Features Grid */}
      <section id="platform" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Operating System for Modern Benefits
            </h2>
            <p className="text-xl text-gray-600">
              One platform to manage all your employee benefits, powered by cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-pink-600" />,
                title: "Global Coverage",
                description: "Seamlessly manage benefits across multiple countries and jurisdictions."
              },
              {
                icon: <Lock className="h-8 w-8 text-pink-600" />,
                title: "Enterprise Security",
                description: "SOC 2 Type II certified with bank-level encryption and compliance."
              },
              {
                icon: <Users className="h-8 w-8 text-pink-600" />,
                title: "Smart Onboarding",
                description: "AI-powered recommendations based on your team's unique needs."
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advisor Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-8 border border-gray-200">
                  <Brain className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium">AI-Powered Assistant</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Your 24/7 Benefits Advisor
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Get instant answers to your benefits questions and personalized recommendations.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask anything about your benefits..."
                      className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-4">
                    <Bot className="h-6 w-6 text-pink-600 mt-1" />
                    <div className="flex-1 bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200">
                      <p className="text-gray-600">
                        Hi! I'm your AI benefits advisor. How can I help you today?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Modern office space"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                      alt="Customer"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600">HR Director, TechCorp</div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "The AI advisor has transformed how we handle benefits questions. It's like having a benefits expert available 24/7."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Trusted by Forward-Thinking Companies
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Join thousands of innovative companies that have transformed their benefits management with Pink Rhino.
                </p>
                <div className="space-y-6">
                  {[
                    "Automated claims processing with 99.9% accuracy",
                    "Real-time benefits utilization analytics",
                    "Custom API integration with your tech stack",
                    "24/7 concierge support for your team"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Modern office space"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                      alt="Customer"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600">HR Director, TechCorp</div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Pink Rhino has transformed how we manage benefits. The platform is intuitive, and the AI recommendations have saved us countless hours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Benefits Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the next generation of HR leaders. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-pink-600" />
                <span className="text-2xl font-bold">Pink Rhino</span>
              </div>
              <p className="text-gray-600 mb-6">
                Revolutionizing employee benefits for the modern workforce.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Platform</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-pink-600">Features</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Security</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Enterprise</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Pricing</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-pink-600">About</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Press</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-pink-600">Documentation</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Help Center</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">API Reference</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600">Status</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 Pink Rhino, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-pink-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-pink-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/enterprise" element={<Enterprise />} />
    </Routes>
  );
}

export default App;