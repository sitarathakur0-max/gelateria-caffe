import React from 'react';
import { MapPin, Phone, Coffee, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { Page, Language } from '../types';
import { BUSINESS } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1b120e] text-[#e8dfd5] pt-16 pb-12 border-t border-[#3c2921]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2d1f19]">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2d1f19] border border-[#453026] flex items-center justify-center text-[#c25934]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-[#faf7f2]">
                  Gelateria Salvati
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-[#f0ba9f]">
                  Caffè Cioccolato · Zürich
                </span>
              </div>
            </div>
            <p className="text-xs text-[#ded0bc] leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d1f19] border border-[#3c2921] text-xs text-[#f0ba9f]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Lindenplatz 4 · 8048 Zürich</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#faf7f2] mb-4 flex items-center gap-2">
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-[#ded0bc] hover:text-[#f0ba9f] transition-colors focus:outline-none focus:underline"
                  id="footer-link-home"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-[#ded0bc] hover:text-[#f0ba9f] transition-colors focus:outline-none focus:underline"
                  id="footer-link-about"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('menu')}
                  className="text-[#ded0bc] hover:text-[#f0ba9f] transition-colors focus:outline-none focus:underline"
                  id="footer-link-menu"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="text-[#ded0bc] hover:text-[#f0ba9f] transition-colors focus:outline-none focus:underline"
                  id="footer-link-gallery"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-[#ded0bc] hover:text-[#f0ba9f] transition-colors focus:outline-none focus:underline"
                  id="footer-link-contact"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Public Transit */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#faf7f2] mb-4 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#c25934]" />
              <span>{t.footer.visitUs}</span>
            </h4>
            <div className="space-y-3 text-xs text-[#ded0bc]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c25934] shrink-0 mt-0.5" />
                <span>
                  <strong>{BUSINESS.address.street}</strong>
                  <br />
                  {BUSINESS.address.postalCode} {BUSINESS.address.city}, {BUSINESS.address.country}
                  <br />
                  <span className="text-[#f0ba9f]">Quartier Altstetten</span>
                </span>
              </p>

              <div className="bg-[#211612] p-2.5 rounded-lg border border-[#3c2921]">
                <p className="font-medium text-[#f0ba9f] mb-1">Öffentliche Verkehrsmittel:</p>
                <p className="text-[11px] leading-relaxed text-[#e8dfd5]">
                  • Tram 2 (Haltestelle Lindenplatz)
                  <br />
                  • Bus 31 / Bus 35 (Lindenplatz)
                  <br />
                  • 6 Min. Fussweg ab Bahnhof Zürich-Altstetten
                </p>
              </div>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#f0ba9f] hover:text-white transition-colors underline"
              >
                <span>Auf Google Maps öffnen</span>
              </a>
            </div>
          </div>

          {/* Direct Contact & Inquiries */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#faf7f2] mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#c25934]" />
              <span>{t.footer.contactUs}</span>
            </h4>
            <div className="space-y-3">
              <p className="text-xs text-[#ded0bc]">
                Rufen Sie uns direkt im Geschäft an für Fragen zu aktuellen Sorten oder Besuchsinformationen:
              </p>

              <a
                href={BUSINESS.phoneRaw}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#291b15] hover:bg-[#3c2921] border border-[#453026] text-[#f0ba9f] hover:text-white transition-colors group"
                id="footer-phone-cta"
              >
                <div className="w-8 h-8 rounded-full bg-[#c25934] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#ded0bc]">Telefon Direkt</span>
                  <span className="font-serif text-base font-bold text-[#faf7f2]">{BUSINESS.phone}</span>
                </div>
              </a>

              <p className="text-[11px] text-[#ded0bc]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c25934] shrink-0" />
                <span>Herzlich willkommen am Lindenplatz in Zürich</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & local business affirmation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ded0bc]/70">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c25934]" />
              <span>Echter Betrieb in Zürich (Lindenplatz 4, 8048 Zürich)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
