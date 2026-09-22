import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Coffee,
  Heart,
  Search,
  Phone,
  Info,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';
import { Page, Language } from '../types';
import { OFFERING_CATEGORIES } from '../data/offerings';
import { BUSINESS } from '../data/business';

interface MenuPageProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterVeganOnly, setFilterVeganOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Alle Angebote' },
    { id: 'gelato', label: 'Gelato Tradizionale' },
    { id: 'sorbetti', label: 'Sorbetti (Frucht)' },
    { id: 'caffe', label: 'Espresso & Caffè' },
    { id: 'cioccolato', label: 'Cioccolato & Dolci' },
  ];

  const filteredCategories = useMemo(() => {
    return OFFERING_CATEGORIES.map((cat) => {
      // If category filter is active and doesn't match
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return { ...cat, items: [] };
      }

      const matchingItems = cat.items.filter((item) => {
        // Vegan / Dairy free filter
        if (filterVeganOnly && !item.tags.some((t) => t.toLowerCase().includes('dairy-free') || t.toLowerCase().includes('vegan'))) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchIt = item.italianName?.toLowerCase().includes(q) || false;
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
          return matchName || matchIt || matchDesc || matchTags;
        }

        return true;
      });

      return {
        ...cat,
        items: matchingItems,
      };
    }).filter((cat) => cat.items.length > 0);
  }, [selectedCategory, searchQuery, filterVeganOnly]);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbece5] text-xs font-semibold text-[#a84725]">
            <Sparkles className="w-3.5 h-3.5 text-[#c25934]" />
            <span>Handwerk & Spezialitäten</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#211612]">
            Angebot & Handwerkliche Spezialitäten
          </h1>
          <p className="font-sans text-lg text-[#62473a] leading-relaxed">
            Vom traditionell gerührten Gelato und samtigen Fruchtsorbets bis hin zu meisterhaft extrahiertem Espresso und reichhaltigem italienischem Cioccolato.
          </p>

          {/* Honest freshness & rotation advisory notice */}
          <div className="p-4 rounded-xl bg-[#f4ede2] border border-[#ded0bc] text-xs sm:text-sm text-[#453026] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#c25934] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#211612]">
                Täglich frische Vitrinenauswahl
              </p>
              <p className="text-xs text-[#62473a] mt-0.5 leading-relaxed">
                Unsere Vitrine am Lindenplatz wird mit frischen Batches bestückt, die sich nach Saison und Reife der Zutaten richten. Fragen Sie gerne unser Barista- und Gelato-Team direkt an der Theke oder rufen Sie uns an unter <a href={BUSINESS.phoneRaw} className="font-bold text-[#c25934] hover:underline">044 433 22 82</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] p-4 sm:p-6 rounded-2xl border border-[#e8dfd5] space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#856353] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Sorten, Espresso oder Zutaten suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#ded0bc] text-sm text-[#211612] placeholder-[#856353] focus:outline-none focus:ring-2 focus:ring-[#c25934]"
                id="menu-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#856353] hover:text-[#211612]"
                >
                  Zurücksetzen
                </button>
              )}
            </div>

            {/* Vegan / Dairy-Free Filter Toggle */}
            <label className="flex items-center gap-2 text-xs font-semibold text-[#453026] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filterVeganOnly}
                onChange={(e) => setFilterVeganOnly(e.target.checked)}
                className="w-4 h-4 rounded text-[#c25934] border-[#ded0bc] focus:ring-[#c25934]"
                id="filter-vegan-checkbox"
              />
              <span>Nur laktosefreie & vegane Sorbets anzeigen</span>
            </label>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#e8dfd5]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#c25934] text-white shadow-xs'
                    : 'bg-[#f4ede2] text-[#453026] hover:bg-[#eae0d0]'
                }`}
                id={`menu-cat-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center bg-[#faf7f2] rounded-2xl border border-[#e8dfd5] space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-[#856353] mx-auto" />
            <h3 className="font-serif text-lg font-bold text-[#211612]">
              Keine passenden Angebote gefunden
            </h3>
            <p className="text-xs text-[#62473a]">
              Versuchen Sie einen anderen Suchbegriff oder heben Sie die Filter auf.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilterVeganOnly(false);
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#c25934] text-white text-xs font-semibold hover:bg-[#a84725]"
            >
              Alle Filter zurücksetzen
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              <div className="border-b border-[#e8dfd5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#fbece5] text-[#c25934]">
                    {cat.id === 'caffe' ? (
                      <Coffee className="w-5 h-5" />
                    ) : cat.id === 'cioccolato' ? (
                      <Heart className="w-5 h-5" />
                    ) : (
                      <Sparkles className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211612]">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#856353] mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8dfd5] shadow-xs hover:border-[#c25934]/50 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#211612]">
                          {item.name}
                        </h3>
                        {item.italianName && (
                          <span className="text-xs italic text-[#856353] shrink-0 font-serif">
                            {item.italianName}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#62473a] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#e8dfd5]/60">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#f4ede2] text-[#62473a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Call to Experience Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#211612] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3c2921]">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#faf7f2]">
              Lust auf eine Kugel Gelato oder einen Caffè?
            </h3>
            <p className="text-xs sm:text-sm text-[#ded0bc] leading-relaxed">
              Kommen Sie direkt am Lindenplatz 4 in Zürich vorbei. Für Gruppenanfragen oder spezielle Wünsche erreichen Sie uns telefonisch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BUSINESS.phoneRaw}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c25934] hover:bg-[#a84725] text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>044 433 22 82</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/20"
            >
              <span>Anfahrt & Öffnungszeiten</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
