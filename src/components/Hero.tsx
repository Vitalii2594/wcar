import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t.hero.title}
        </h1> */}
        <h1 className="text-xl sm:text-2xl text-cyan-100 mb-8 font-light">
          {t.hero.subtitle}
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
        >
          {t.hero.cta}
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;