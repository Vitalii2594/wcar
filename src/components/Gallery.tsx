import React, { useEffect, useState } from "react";

interface GalleryTranslations {
  gallery: {
    title: string;
    subtitle: string;
  };
}

interface GalleryProps {
  t: GalleryTranslations;
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const images = [
    {
      url: "/juke.webp",
      alt: "Nissan Juke – samochód z zewnątrz, widok z przodu",
      caption: "Nissan Juke",
      width: 400,
      height: 300,
    },
    {
      url: "/ux.webp",
      alt: "Lexus UX – widok zewnętrzny crossovera z przodu",
      caption: "Lexus UX",
      width: 400,
      height: 300,
    },
    {
      url: "/auris.webp",
      alt: "Toyota Auris – zewnętrzny widok hatchbacka z boku",
      caption: "Toyota Auris",
      width: 400,
      height: 300,
    },
    {
      url: "/accord.webp",
      alt: "Honda Accord – limuzyna widziana z zewnątrz, z przodu",
      caption: "Honda Accord",
      width: 400,
      height: 300,
    },
    {
      url: "/c5.webp",
      alt: "Citroën C5 – widok samochodu osobowego z zewnątrz",
      caption: "Citroën C5",
      width: 400,
      height: 300,
    },
    {
      url: "/nissan.webp",
      alt: "Nissan – ujęcie z zewnątrz samochodu osobowego",
      caption: "Nissan – widok zewnętrzny",
      width: 400,
      height: 300,
    },
  ];

  const [showSubtitle, setShowSubtitle] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.gallery.title}
          </h2>
          {showSubtitle && (
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.gallery.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <figure
              key={image.url}
              className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
            >
              <img
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                fetchpriority={index < 2 ? "high" : "low"}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <figcaption className="absolute bottom-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
