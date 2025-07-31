import React from 'react';
import { Shield, CheckCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-50 pt-20 pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Content */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Truth Shouldn't Be a{' '}
                <span className="text-blue-600 relative">
                  Mystery
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 italic font-medium">
                "Sach Ki Pehchaan, Ab AI Ke Naam."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Powered by AI to detect misinformation, verify documents, and build trust in our digital world.
              </p>
            </div>

            {/* Floating verification badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">AI Verified</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Trusted Source</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                <span>Try Demo</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;