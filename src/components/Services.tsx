import React from 'react';
import { ShoppingCart, FileText, TrendingUp, CheckCircle } from 'lucide-react';

interface ServicesProps {
  t: any;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    {
      icon: ShoppingCart,
      title: t.services.purchase.title,
      price: t.services.purchase.price,
      features: t.services.purchase.features,
      color: 'blue'
    },
    {
      icon: FileText,
      title: t.services.registration.title,
      price: t.services.registration.price,
      features: t.services.registration.features,
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: t.services.sale.title,
      price: t.services.sale.price,
      features: t.services.sale.features,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
        hover: 'hover:from-cyan-600 hover:to-blue-700',
        text: 'text-cyan-400',
        bgLight: 'bg-gray-800'
      },
      green: {
        bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
        hover: 'hover:from-green-600 hover:to-emerald-700',
        text: 'text-green-400',
        bgLight: 'bg-gray-800'
      },
      orange: {
        bg: 'bg-gradient-to-r from-purple-500 to-pink-600',
        hover: 'hover:from-purple-600 hover:to-pink-700',
        text: 'text-purple-400',
        bgLight: 'bg-gray-800'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div key={index} className="bg-gray-900 rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden group border border-gray-700">
                <div className={`${colors.bgLight} px-8 py-6 text-center`}>
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className={`text-2xl font-bold ${colors.text}`}>{service.price}</p>
                </div>
                
                <div className="px-8 py-6">
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;