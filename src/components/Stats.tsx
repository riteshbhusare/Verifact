import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-xl font-semibold text-yellow-800">Important Disclaimer</h3>
            </div>
            <p className="text-yellow-700 text-lg leading-relaxed">
              This AI tool provides AI-generated verification based on patterns. It does not guarantee accuracy and should not be considered a final judgment. Use responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;