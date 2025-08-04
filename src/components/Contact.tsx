import React from "react";
import logoFooter from "../img/logo1.png";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  MessageSquare,
} from "lucide-react";

interface Translation {
  contact: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    buttons: {
      call: string;
      email: string;
      telegram: string;
      viber: string;
      whatsapp: string;
    };
  };
  footer: {
    partnerText: string;
    copyright: string;
  };
}

interface ContactProps {
  t: Translation;
  logoImage?: string;
}

const ContactInfo: React.FC = () => (
  <div className="flex flex-col space-y-2">
    <a
      href="tel:+48535367308"
      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-center"
    >
      <Phone className="w-5 h-5 mr-2" />
      +48 535 267 308
    </a>
    <a
      href="mailto:kontakt@clikdrive.pl"
      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-center"
    >
      <Mail className="w-5 h-5 mr-2" />
      kontakt@clikdrive.pl
    </a>
  </div>
);

const Contact: React.FC<ContactProps> = ({ t, logoImage }) => {
  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      icon: MessageCircle,
      name: "Telegram",
      href: "https://t.me/WJ_Channel",
      color: "hover:text-blue-500",
    },
  ];

  const contactButtons = [
    {
      id: "call",
      icon: Phone,
      href: "tel:+48535267308",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
      shadow: "hover:shadow-green-500/25",
    },
    {
      id: "email",
      icon: Mail,
      href: "mailto:kontakt@clikdrive.pl",
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      shadow: "hover:shadow-cyan-500/25",
    },
    {
      id: "telegram",
      icon: MessageCircle,
      href: "https://t.me/WJ_Channel",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "from-purple-600 to-pink-700",
      shadow: "hover:shadow-purple-500/25",
    },
    {
      id: "viber",
      icon: MessageSquare,
      href: "viber://chat?number=+48535267308",
      gradient: "from-violet-600 to-purple-600",
      hoverGradient: "from-violet-700 to-purple-700",
      shadow: "hover:shadow-violet-500/25",
    },
    {
      id: "whatsapp",
      icon: Send,
      href: "https://wa.me/48535267308",
      gradient: "from-green-600 to-emerald-700",
      hoverGradient: "from-green-700 to-emerald-800",
      shadow: "hover:shadow-green-500/25",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Sekcja kontaktowa */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">{t.cta.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">{t.cta.description}</p>
                <div className="space-y-4">
                  {contactButtons.map((button) => (
                    <a
                      key={button.id}
                      href={button.href}
                      className={`block w-full bg-gradient-to-r ${button.gradient} text-white py-4 px-6 rounded-full font-semibold hover:${button.hoverGradient} transition-all duration-200 shadow-lg ${button.shadow} flex items-center justify-center space-x-2`}
                    >
                      <button.icon className="w-5 h-5" />
                      <span>{t.cta.buttons[button.id]}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Lewa kolumna - Logo i tekst */}
            <div className="flex flex-col items-center md:items-start">
              <img src={logoImage || logoFooter} alt="Logo WICAR" className="w-40 h-auto" />
              <p className="text-gray-400 text-center md:text-left">{t.footer.partnerText}</p>
            </div>

            {/* Środkowa kolumna - Social media */}
            <div className="flex flex-col items-center">
              <p className="text-white text-lg font-semibold mb-2 text-center">Social Media</p>
              <div className="flex justify-center space-x-6">
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

            {/* Prawa kolumna - Kontakt */}
            <div className="flex flex-col items-center">
              <p className="text-white text-lg font-semibold mb-2 text-center">Kontakt</p>
              <ContactInfo />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>{t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
