import React from 'react';

interface GalleryProps {
  t: any;
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Car inspection process'
    },
    {
      url: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Professional car diagnostic'
    },
    {
      url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Car documentation check'
    },
    {
      url: 'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Engine inspection'
    },
    {
      url: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Car exterior check'
    },
    {
      url: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Professional car service'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;