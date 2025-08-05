import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface HeroTranslations {
  seoTitle?: string;
  seoDescription?: string;
  title?: string;
  subtitle: string;
  description: string;
  cta: string;
  backgroundAlt?: string;
}

interface HeroProps {
  t: {
    hero: HeroTranslations;
  };
  canonicalUrl?: string;
  lang?: string;
}

const defaultCanonical = typeof window !== 'undefined' ? window.location.href : '';
const imageUrl = "/pexels-photo-3802510.webp";

const Hero: React.FC<HeroProps> = ({ t, canonicalUrl = defaultCanonical, lang = 'pl' }) => {
  return (
    <>
      <Helmet>
        <html lang={lang} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href={imageUrl} />

        <title>{t.hero.seoTitle || t.hero.title || 'Strona Główna'}</title>
        <meta name="description" content={t.hero.seoDescription || t.hero.description || 'Opis strony'} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={t.hero.seoTitle || t.hero.title || 'Strona Główna'} />
        <meta property="og:description" content={t.hero.seoDescription || t.hero.description || 'Opis strony'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.hero.seoTitle || t.hero.title || 'Strona Główna'} />
        <meta name="twitter:description" content={t.hero.seoDescription || t.hero.description || 'Opis strony'} />
        <meta name="twitter:image" content={imageUrl} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: t.hero.seoTitle || t.hero.title || 'Strona Główna',
              description: t.hero.seoDescription || t.hero.description || 'Opis strony',
              url: canonicalUrl,
              image: imageUrl,
            }),
          }}
        />
      </Helmet>

      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Sekcja powitalna"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${imageUrl}")` }}
          role="img"
          aria-label={t.hero.backgroundAlt || 'Tło z krajobrazem'}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl sm:text-2xl text-cyan-100 mb-8 font-light">
            {t.hero.subtitle}
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <a
            href="#contact"
            aria-label={t.hero.cta}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
