import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Coffee, ChevronRight, Globe } from 'lucide-react';
import { Page, Language } from '../types';
import { BUSINESS } from '../data/business';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  currentLang,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'menu', label: t.nav.menu },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top info strip */}
      <div className="bg-[#211612] text-[#e8dfd5] text-xs py-2 px-4 border-b border-[#3c2921]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#f0ba9f] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c25934] rounded px-1"
              title="Auf Google Maps anzeigen"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c25934] shrink-0" />
              <span>{BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.city} (Tram 2 Lindenplatz)</span>
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={BUSINESS.phoneRaw}
              className="flex items-center gap-1.5 font-medium text-[#f0ba9f] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#c25934] rounded px-1"
              id="header-top-phone"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{BUSINESS.phone}</span>
            </a>

            <div className="h-3 w-px bg-[#3c2921] hidden sm:block"></div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-[11px]">
              <Globe className="w-3 h-3 text-[#ded0bc] mr-0.5" />
              {(['de', 'en', 'it'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 py-0.5 uppercase tracking-wider rounded font-medium transition-colors ${
                    currentLang === lang
                      ? 'bg-[#c25934] text-white font-semibold'
                      : 'text-[#ded0bc] hover:text-white hover:bg-[#3c2921]'
                  }`}
                  aria-label={`Switch language to ${lang.toUpperCase()}`}
                  id={`lang-switch-${lang}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf7f2]/95 backdrop-blur-md shadow-sm border-b border-[#e8dfd5]'
            : 'bg-[#faf7f2] border-b border-[#e8dfd5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus:ring-2 focus:ring-[#c25934] rounded-lg p-1 group"
              id="brand-logo-button"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#f4ede2] border border-[#ded0bc] flex items-center justify-center text-[#c25934] group-hover:bg-[#c25934] group-hover:text-white transition-all shadow-xs">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#211612]">
                    Gelateria Salvati
                  </span>
                  <span className="block font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#856353] font-medium">
                    Caffè Cioccolato · Zürich
                  </span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c25934] ${
                      isActive
                        ? 'text-[#c25934] bg-[#f7d7c9]/40 font-semibold'
                        : 'text-[#453026] hover:text-[#211612] hover:bg-[#f4ede2]'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#c25934] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Call Action & Direct Contact */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS.phoneRaw}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#c25934] hover:bg-[#a84725] active:scale-95 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c25934]"
                id="header-cta-phone"
              >
                <Phone className="w-4 h-4" />
                <span>044 433 22 82</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={BUSINESS.phoneRaw}
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-[#c25934] text-white focus:outline-none focus:ring-2 focus:ring-[#c25934]"
                aria-label="Call Gelateria Salvati"
                id="mobile-phone-btn"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#211612] hover:bg-[#f4ede2] focus:outline-none focus:ring-2 focus:ring-[#c25934]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e8dfd5] bg-[#faf7f2] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-left transition-colors ${
                      isActive
                        ? 'bg-[#c25934] text-white font-semibold'
                        : 'text-[#211612] hover:bg-[#f4ede2]'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#856353]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#e8dfd5] flex flex-col gap-3">
              <a
                href={BUSINESS.phoneRaw}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c25934] text-white font-semibold text-center shadow-xs"
                id="mobile-menu-call-cta"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS.phone}</span>
              </a>

              <div className="text-xs text-center text-[#62473a] px-2">
                <p className="font-medium">{BUSINESS.address.fullFormatted}</p>
                <p className="text-[11px] text-[#856353] mt-0.5">Haltestelle Lindenplatz (Tram 2 / Bus 31)</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
