import React from 'react';
import {
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Coffee,
  Heart,
  Compass,
  CheckCircle2,
  Clock,
  Navigation,
} from 'lucide-react';
import { Page, Language } from '../types';
import { BUSINESS } from '../data/business';
import { TRANSLATIONS } from '../data/translations';
import { OFFERING_CATEGORIES } from '../data/offerings';
import { MapCard } from '../components/MapCard';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-[#e8dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbece5] border border-[#f0ba9f] text-xs font-semibold text-[#a84725]">
                <MapPin className="w-3.5 h-3.5 text-[#c25934]" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#211612] leading-[1.12]">
                {t.hero.headline}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-[#62473a] leading-relaxed max-w-2xl">
                {t.hero.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#c25934] hover:bg-[#a84725] text-white font-semibold text-base transition-all shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c25934]"
                  id="hero-cta-menu"
                >
                  <span>{t.hero.ctaMenu}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS.phoneRaw}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#211612] hover:bg-[#3c2921] text-[#f0ba9f] font-semibold text-base transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#211612]"
                  id="hero-cta-phone"
                >
                  <Phone className="w-4 h-4 text-[#c25934]" />
                  <span>044 433 22 82</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#e8dfd5] text-xs text-[#62473a]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3f5945] shrink-0" />
                  <span className="font-medium">Handwerkliche Zubereitung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3f5945] shrink-0" />
                  <span className="font-medium">Original Espresso Bar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3f5945] shrink-0" />
                  <span className="font-medium">Direkt am Lindenplatz</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main hero image */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#faf7f2] aspect-[4/5] bg-[#f4ede2]">
                  <img
                    src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop"
                    alt="Italienisches Gelato in Vitrine bei Gelateria Salvati"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211612]/70 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#f0ba9f] font-semibold">
                      Zürich Altstetten
                    </p>
                    <p className="font-serif text-xl font-bold mt-1">
                      Gelateria Salvati, Caffè Cioccolato
                    </p>
                    <p className="text-xs text-[#ded0bc] mt-0.5">
                      Lindenplatz 4 · Tram 2 Haltestelle direkt vor Ort
                    </p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-[#e8dfd5] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fbece5] flex items-center justify-center text-[#c25934] shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#856353]">
                      Espresso & Gelato
                    </span>
                    <span className="block font-serif text-sm font-bold text-[#211612]">
                      Italian Coffee & Dolci
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS INTRODUCTION & ESSENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f4ede2]/70 rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#ded0bc]">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
              {t.intro.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612]">
              {t.intro.heading}
            </h2>
            <div className="w-16 h-0.5 bg-[#c25934] mx-auto"></div>
            <p className="text-base sm:text-lg text-[#453026] leading-relaxed">
              {t.intro.text1}
            </p>
            <p className="text-base sm:text-lg text-[#62473a] leading-relaxed">
              {t.intro.text2}
            </p>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE PILLARS OF CRAFT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
            Unser Handwerk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612] mt-2">
            {t.intro.pillarsTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#62473a] mt-3">
            Drei unverzichtbare Elemente, die Ihren Aufenthalt bei Gelateria Salvati am Lindenplatz unvergesslich machen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Gelato */}
          <div className="bg-[#faf7f2] p-8 rounded-2xl border border-[#e8dfd5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#fbece5] text-[#c25934] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#211612]">
                {t.pillars.gelatoTitle}
              </h3>
              <p className="text-sm text-[#62473a] leading-relaxed">
                {t.pillars.gelatoDesc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#e8dfd5]">
              <button
                onClick={() => onNavigate('menu')}
                className="text-xs font-bold uppercase tracking-wider text-[#c25934] hover:text-[#a84725] inline-flex items-center gap-1.5 focus:outline-none"
              >
                <span>Gelato-Sorten ansehen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Espresso */}
          <div className="bg-[#faf7f2] p-8 rounded-2xl border border-[#e8dfd5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4ede2] text-[#211612] flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#211612]">
                {t.pillars.caffeTitle}
              </h3>
              <p className="text-sm text-[#62473a] leading-relaxed">
                {t.pillars.caffeDesc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#e8dfd5]">
              <button
                onClick={() => onNavigate('menu')}
                className="text-xs font-bold uppercase tracking-wider text-[#c25934] hover:text-[#a84725] inline-flex items-center gap-1.5 focus:outline-none"
              >
                <span>Kaffeekarte entdecken</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Cioccolato */}
          <div className="bg-[#faf7f2] p-8 rounded-2xl border border-[#e8dfd5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#fbece5] text-[#a84725] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#211612]">
                {t.pillars.cioccolatoTitle}
              </h3>
              <p className="text-sm text-[#62473a] leading-relaxed">
                {t.pillars.cioccolatoDesc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#e8dfd5]">
              <button
                onClick={() => onNavigate('menu')}
                className="text-xs font-bold uppercase tracking-wider text-[#c25934] hover:text-[#a84725] inline-flex items-center gap-1.5 focus:outline-none"
              >
                <span>Schokoladenwelt erkunden</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GELATERIA & CAFÉ EXPERIENCE */}
      <section className="bg-[#211612] text-[#faf7f2] py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f0ba9f]">
                Sinnesfreude
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t.experience.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#ded0bc] leading-relaxed">
                {t.experience.subheading}
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3c2921] text-[#f0ba9f] flex items-center justify-center shrink-0 mt-1 font-serif font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {t.experience.point1Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ded0bc] mt-1 leading-relaxed">
                      {t.experience.point1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3c2921] text-[#f0ba9f] flex items-center justify-center shrink-0 mt-1 font-serif font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {t.experience.point2Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ded0bc] mt-1 leading-relaxed">
                      {t.experience.point2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3c2921] text-[#f0ba9f] flex items-center justify-center shrink-0 mt-1 font-serif font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {t.experience.point3Title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ded0bc] mt-1 leading-relaxed">
                      {t.experience.point3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#3c2921] shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
                  alt="Espresso extraction with golden crema in ceramic cup"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#ded0bc]">
                  Traditionelle Espresso-Extraktion: Kräftiger Körper und dichte haselnussfarbene Crema.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REASONS TO VISIT GELATERIA SALVATI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
            Besuch am Lindenplatz
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612] mt-2">
            {t.reasons.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#62473a] mt-3">
            {t.reasons.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#e8dfd5]">
            <span className="font-serif text-2xl font-bold text-[#c25934]">01</span>
            <h3 className="font-serif text-lg font-bold text-[#211612] mt-2">
              {t.reasons.r1Title}
            </h3>
            <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
              {t.reasons.r1Desc}
            </p>
          </div>

          <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#e8dfd5]">
            <span className="font-serif text-2xl font-bold text-[#c25934]">02</span>
            <h3 className="font-serif text-lg font-bold text-[#211612] mt-2">
              {t.reasons.r2Title}
            </h3>
            <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
              {t.reasons.r2Desc}
            </p>
          </div>

          <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#e8dfd5]">
            <span className="font-serif text-2xl font-bold text-[#c25934]">03</span>
            <h3 className="font-serif text-lg font-bold text-[#211612] mt-2">
              {t.reasons.r3Title}
            </h3>
            <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
              {t.reasons.r3Desc}
            </p>
          </div>

          <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#e8dfd5]">
            <span className="font-serif text-2xl font-bold text-[#c25934]">04</span>
            <h3 className="font-serif text-lg font-bold text-[#211612] mt-2">
              {t.reasons.r4Title}
            </h3>
            <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
              {t.reasons.r4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 6. OFFERINGS SPOTLIGHT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
              Einblick in unsere Karte
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#211612] mt-1">
              Tradition & Genussvielfalt
            </h2>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c25934] hover:text-[#a84725] transition-colors"
            id="home-view-full-menu"
          >
            <span>Gesamtes Angebot ansehen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFERING_CATEGORIES.slice(0, 2).map((cat) => (
            <div
              key={cat.id}
              className="bg-[#faf7f2] p-8 rounded-2xl border border-[#e8dfd5] shadow-xs hover:border-[#c25934]/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl font-bold text-[#211612]">{cat.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f4ede2] text-[#856353]">
                  {cat.tagline}
                </span>
              </div>
              <p className="text-xs text-[#62473a] leading-relaxed mb-6">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.items.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-white border border-[#e8dfd5]/80 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-[#211612]">
                        {item.name}
                      </h4>
                      {item.italianName && (
                        <span className="text-[11px] italic text-[#856353]">
                          {item.italianName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#62473a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VISITOR LOCATION & TRANSIT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
            {t.visitorInfo.heading}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612] mt-2">
            Besuchen Sie uns am Lindenplatz
          </h2>
          <p className="text-sm text-[#62473a] mt-2">
            Mitten in Zürich-Altstetten, direkt mit den öffentlichen Verkehrsmitteln erreichbar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <MapCard />
        </div>
      </section>

      {/* 8. STRONG FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-br from-[#c25934] to-[#a84725] rounded-3xl p-8 sm:p-14 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#fbece5] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Lindenplatz 4 · Zürich Altstetten
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              {t.ctaSection.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#fbece5] leading-relaxed max-w-xl mx-auto">
              {t.ctaSection.subheading}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={BUSINESS.phoneRaw}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#211612] hover:bg-black text-[#faf7f2] font-semibold text-base transition-all shadow-md active:scale-95"
                id="cta-section-call"
              >
                <Phone className="w-4 h-4 text-[#f0ba9f]" />
                <span>{t.ctaSection.buttonCall}</span>
              </a>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#a84725] hover:bg-[#faf7f2] font-semibold text-base transition-all shadow-md active:scale-95"
                id="cta-section-directions"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.ctaSection.buttonDirections}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
