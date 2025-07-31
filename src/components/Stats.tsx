import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-yellow-100 text-gray-800 text-sm p-4 rounded-xl mt-10">
            ⚠️ This platform uses AI models for verification. Output may not be 100% accurate. Always double-check critical information.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;