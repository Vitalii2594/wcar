import React from 'react';
import { Users, Award, Shield } from 'lucide-react';

interface AboutUsProps {
  t: any;
}

const AboutUs: React.FC<AboutUsProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Doświadczony zespół</h3>
            <p className="text-gray-400">Specjaliści z wieloletnim doświadczeniem w branży motoryzacyjnej</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Profesjonalne podejście</h3>
            <p className="text-gray-400">Każdy samochód sprawdzamy z najwyższą starannością i precyzją</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Gwarancja bezpieczeństwa</h3>
            <p className="text-gray-400">Kompleksowa weryfikacja techniczna i dokumentacyjna pojazdu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;