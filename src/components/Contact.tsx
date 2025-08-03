import React from 'react';
import { Phone, Mail, MessageCircle, Facebook, Instagram, Send } from 'lucide-react';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+48 123 456 789',
      href: 'tel:+48123456789'
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: 'kontakt@witalcar.pl',
      href: 'mailto:kontakt@witalcar.pl'
    },
    {
      icon: Send,
      title: t.contact.telegram,
      value: '@witalcar',
      href: 'https://t.me/witalcar'
    }
  ];

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

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                
                return (
                  <div key={index} className="flex items-center space-x-4 group p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">{t.contact.social}</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 shadow-lg border border-gray-600`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Gotowy na zakup?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Skontaktuj się z nami już dziś i pozwól nam pomóc Ci znaleźć idealny samochód. 
                Nasze doświadczenie i profesjonalizm gwarantują bezpieczny zakup.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+48123456789"
                  className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                >
                  Zadzwoń teraz
                </a>
                <a
                  href="mailto:kontakt@witalcar.pl"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  Napisz email
                </a>
                <a
                  href="https://t.me/witalcar"
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;