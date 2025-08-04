import React from "react";
import juke1 from "../img//juke.jpg";
import ux1 from "../img/ux.jpg";
import auris1 from "../img/auris.jpg";
import nissan1 from "../img/nissan.jpg";
import c5 from "../img/c5.jpg";
import accord1 from "../img/accord.jpg";

interface GalleryProps {
  t: any;
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const images = [
    {
      url: juke1,
      alt: "Car inspection process",
    },
    {
      url: ux1,
      alt: "Professional car diagnostic",
    },
    {
      url: auris1,
      alt: "Car documentation check",
    },
    {
      url: accord1,
      alt: "Engine inspection",
    },
    {
      url: c5,
      alt: "Car exterior check",
    },
    {
      url: nissan1,
      alt: "Professional car service",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
            >
              <img
                src={image.url}
                // alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </h3>
              </div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
