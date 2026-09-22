import React, { useState, useMemo } from 'react';
import { Sparkles, Maximize2, Phone, MapPin } from 'lucide-react';
import { Page, Language, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { Lightbox } from '../components/Lightbox';
import { BUSINESS } from '../data/business';

interface GalleryPageProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Impressionen' },
    { id: 'gelato', label: 'Gelato & Sorbetti' },
    { id: 'caffe', label: 'Espresso & Caffè' },
    { id: 'cioccolato', label: 'Cioccolato' },
    { id: 'ambiance', label: 'Atmosphäre' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbece5] text-xs font-semibold text-[#a84725]">
            <Sparkles className="w-3.5 h-3.5 text-[#c25934]" />
            <span>Optische Einblicke</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#211612]">
            Impressionen aus unserer Gelateria & Kaffeebar
          </h1>
          <p className="font-sans text-lg text-[#62473a] leading-relaxed">
            Ein visueller Streifzug durch das handwerkliche Schaffen, den Duft frisch gerösteten Kaffees und die gemütliche Stimmung am Lindenplatz in Zürich.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c25934] text-white shadow-xs'
                  : 'bg-[#faf7f2] border border-[#ded0bc] text-[#453026] hover:bg-[#f4ede2]'
              }`}
              id={`gallery-cat-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#ded0bc] bg-[#faf7f2] shadow-xs hover:shadow-md transition-all cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="self-end">
                  <span className="p-2 rounded-full bg-black/40 backdrop-blur-xs text-white group-hover:bg-[#c25934] transition-colors inline-flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#f0ba9f]">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ded0bc] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(item) => setSelectedItem(item)}
      />

      {/* Visit invitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f4ede2] rounded-2xl p-8 border border-[#ded0bc] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#211612]">
              Kommen Sie vorbei und probieren Sie selbst
            </h3>
            <p className="text-xs text-[#62473a]">
              Gelateria Salvati · Lindenplatz 4, 8048 Zürich · Tram 2
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneRaw}
              className="px-5 py-2.5 rounded-xl bg-[#c25934] text-white text-xs font-semibold hover:bg-[#a84725] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>044 433 22 82</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#ded0bc] text-[#211612] text-xs font-semibold hover:bg-[#faf7f2] transition-colors flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c25934]" />
              <span>Standort</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
