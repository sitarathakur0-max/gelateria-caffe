import React, { useState, useEffect } from 'react';
import { Page, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Phone } from 'lucide-react';
import { BUSINESS } from './data/business';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentLang, setCurrentLang] = useState<Language>('de');

  // Sync state with URL hash on initial mount and on hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'about', 'menu', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#241a15] font-sans antialiased selection:bg-[#c25934] selection:text-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#c25934] text-white rounded-lg font-semibold shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} currentLang={currentLang} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} currentLang={currentLang} />
        )}
        {currentPage === 'menu' && (
          <MenuPage onNavigate={handleNavigate} currentLang={currentLang} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} currentLang={currentLang} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} currentLang={currentLang} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} currentLang={currentLang} />

      {/* Quick Mobile Floating Call Button */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <a
          href={BUSINESS.phoneRaw}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#c25934] text-white font-semibold text-xs shadow-xl active:scale-95 border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#c25934]"
          aria-label="Gelateria Salvati anrufen"
          id="floating-mobile-call-btn"
        >
          <Phone className="w-4 h-4" />
          <span>044 433 22 82</span>
        </a>
      </div>
    </div>
  );
}
