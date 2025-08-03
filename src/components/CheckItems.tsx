import React from 'react';
import { FileText, Car, Settings, Cpu, Gauge, FileCheck } from 'lucide-react';

interface CheckItemsProps {
  t: any;
}

const CheckItems: React.FC<CheckItemsProps> = ({ t }) => {
  const iconMap = {
    FileText,
    Car,
    Settings,
    Cpu,
    Gauge,
    FileCheck
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.checkItems.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.checkItems.items.map((item: any, index: number) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className="bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-cyan-500/10 transition-all duration-300 group border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckItems;