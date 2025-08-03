import React from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  MessageSquare
} from 'lucide-react';

interface ContactProps {
  t: any;
}

const ContactInfo: React.FC = () => (
  <div className="flex flex-col space-y-2">
    <a
      href="tel:+48123456789"
      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-start"
    >
      <Phone className="w-5 h-5 mr-2" />
      +48 123 456 789
    </a>
    <a
      href="mailto:kontakt@witalcar.pl"
      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-start"
    >
      <Mail className="w-5 h-5 mr-2" />
      kontakt@witalcar.pl
    </a>
  </div>
);

const Contact: React.FC<ContactProps> = ({ t }) => {
  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      href: 'https://t.me/witalcar',
      color: 'hover:text-blue-500'
    }
  ];

  const contactButtons = [
    {
      icon: Phone,
      text: 'Zadzwoń teraz',
      href: 'tel:+48123456789',
      gradient: 'from-green-500 to-emerald-600',
      hoverGradient: 'from-green-600 to-emerald-700',
      shadow: 'hover:shadow-green-500/25'
    },
    {
      icon: Mail,
      text: 'Napisz email',
      href: 'mailto:kontakt@witalcar.pl',
      gradient: 'from-cyan-500 to-blue-600',
      hoverGradient: 'from-cyan-600 to-blue-700',
      shadow: 'hover:shadow-cyan-500/25'
    },
    {
      icon: MessageCircle,
      text: 'Telegram',
      href: 'https://t.me/witalcar',
      gradient: 'from-purple-500 to-pink-600',
      hoverGradient: 'from-purple-600 to-pink-700',
      shadow: 'hover:shadow-purple-500/25'
    },
    {
      icon: MessageSquare,
      text: 'Viber',
      href: 'viber://chat?number=+48123456789',
      gradient: 'from-violet-600 to-purple-600',
      hoverGradient: 'from-violet-700 to-purple-700',
      shadow: 'hover:shadow-violet-500/25'
    },
    {
      icon: Send,
      text: 'WhatsApp',
      href: 'https://wa.me/48123456789',
      gradient: 'from-green-600 to-emerald-700',
      hoverGradient: 'from-green-700 to-emerald-800',
      shadow: 'hover:shadow-green-500/25'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Sekcja kontaktowa */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Gotowy na zakup?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Skontaktuj się z nami już dziś i pozwól nam pomóc Ci znaleźć idealny samochód. 
                  Nasze doświadczenie i profesjonalizm gwarantują bezpieczny zakup.
                </p>
                <div className="space-y-4">
                  {contactButtons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className={`block w-full bg-gradient-to-r ${button.gradient} text-white py-4 px-6 rounded-full font-semibold hover:${button.hoverGradient} transition-all duration-200 shadow-lg ${button.shadow} flex items-center justify-center space-x-2`}
                    >
                      <button.icon className="w-5 h-5" />
                      <span>{button.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white flex items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  WITALCAR
                </span>
              </div>
              <p className="text-gray-400 mt-2">Twój partner w zakupie samochodu</p>
            </div>

            {/* Kontakt */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <ContactInfo />
            </div>

            {/* Social media */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} WITALCAR. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
