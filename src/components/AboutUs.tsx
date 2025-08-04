import React from "react";
import { Users, Award, Shield } from "lucide-react";

interface AboutCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgGradient: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, description, bgGradient }) => (
  <div className="text-center group">
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg ${bgGradient}`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface AboutUsTranslations {
  about: {
    title: string;
    description: string;
    cards: {
      teamTitle: string;
      teamDesc: string;
      qualityTitle: string;
      qualityDesc: string;
      safetyTitle: string;
      safetyDesc: string;
    };
  };
}

interface AboutUsProps {
  t: AboutUsTranslations;
}

const AboutUs: React.FC<AboutUsProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AboutCard
            icon={Users}
            title={t.about.cards.teamTitle}
            description={t.about.cards.teamDesc}
            bgGradient="bg-gradient-to-r from-cyan-500 to-blue-600"
          />
          <AboutCard
            icon={Award}
            title={t.about.cards.qualityTitle}
            description={t.about.cards.qualityDesc}
            bgGradient="bg-gradient-to-r from-purple-500 to-pink-600"
          />
          <AboutCard
            icon={Shield}
            title={t.about.cards.safetyTitle}
            description={t.about.cards.safetyDesc}
            bgGradient="bg-gradient-to-r from-green-500 to-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
