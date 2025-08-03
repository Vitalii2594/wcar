import React from "react";
import { CheckCircle, Star } from "lucide-react";

interface PricingProps {
  t: any;
}

const Pricing: React.FC<PricingProps> = ({ t }) => {
  const plans = [
    {
      ...t.pricing.basic,
      popular: false,
    },
    {
      ...t.pricing.standard,
      popular: true,
    },
    {
      ...t.pricing.premium,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.pricing.title}
          </h2>
           <p className="text-gray-300 mb-8 leading-relaxed">
          *Opłata za dojazd wynosi 1,5 zł za 1 przejechany kilometr. Opłaty
          rejestracyjne, ubezpieczenie, przegląd, service i inne wydatki pokrywa
          klient. Podczas współpracy Autokrakus występuje jako pośrednik i pełni
          funkcję doradczą.
        </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 border ${
                plan.popular
                  ? "border-cyan-400 scale-105 shadow-cyan-500/25"
                  : "border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <div className="px-8 py-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                  }`}
                >
                  Wybierz pakiet
                </button>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Pricing;
