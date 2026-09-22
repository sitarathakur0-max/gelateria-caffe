import React from 'react';
import { Coffee, Sparkles, MapPin, Heart, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Page, Language } from '../types';
import { BUSINESS } from '../data/business';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbece5] text-xs font-semibold text-[#a84725]">
            <Sparkles className="w-3.5 h-3.5 text-[#c25934]" />
            <span>Über Gelateria Salvati, Caffè Cioccolato</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#211612]">
            Italienische Gelateria-Kultur am Lindenplatz in Zürich
          </h1>
          <p className="font-sans text-lg text-[#62473a] leading-relaxed">
            Ein Ort, an dem sich traditionelle italienische Handwerkskunst, duftender Espresso und gelebte Quartier-Gastfreundschaft begegnen.
          </p>
        </div>
      </section>

      {/* Main Narrative with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#ded0bc] aspect-[4/3] bg-[#f4ede2]">
              <img
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1200&auto=format&fit=crop"
                alt="Knuspriges Cornetto mit feinem Gelato"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#211612] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#3c2921]">
              <p className="font-serif text-base font-bold text-[#faf7f2]">
                Echtes Handwerk
              </p>
              <p className="text-xs text-[#ded0bc] mt-1">
                Langsame Mantecatura für unverwechselbare Dichte und reinen Geschmack.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#211612]">
              Das Versprechen authentischer Frische
            </h2>
            <p className="text-base text-[#453026] leading-relaxed">
              Bei <strong>Gelateria Salvati, Caffè Cioccolato</strong> steht die Leidenschaft für unverfälschten Genuss im Mittelpunkt. Echtes italienisches Gelato unterscheidet sich spürbar von herkömmlichem Eis: Es wird mit geringerem Luftaufschlag und bei optimaler Genusstemperatur serviert. Dadurch ist die Textur samtig, dicht und schmilzt sanft auf der Zunge.
            </p>
            <p className="text-base text-[#62473a] leading-relaxed">
              Wir widmen uns klassischen Milch- und Sahnekompositionen ebenso wie erfrischenden Fruchtsorbets, die rein pflanzlich zubereitet werden. Ob feines Kakaopulver, sorgfältig geröstete Nüsse oder reife Früchte – wir lassen die Eigenaromen der Zutaten für sich sprechen.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#a84725]">
                <ShieldCheck className="w-4 h-4 text-[#3f5945]" />
                <span>Ohne künstliche Überladenheit</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#a84725]">
                <ShieldCheck className="w-4 h-4 text-[#3f5945]" />
                <span>Klassische italienische Schule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lindenplatz & Café Spirit */}
      <section className="bg-[#f4ede2]/60 py-16 sm:py-20 border-y border-[#ded0bc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
                Quartierleben & Treffpunkt
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612]">
                Der Lindenplatz als Herz von Altstetten
              </h2>
              <p className="text-base text-[#453026] leading-relaxed">
                Der Lindenplatz ist seit jeher ein pulsierender Ort des Austauschs in Zürich-Altstetten. Zwischen schattenspendenden Bäumen, Brunnenplätschern und der vorüberfahrenden Tramlinie 2 bietet Gelateria Salvati eine Oase der Ruhe und Geselligkeit.
              </p>
              <p className="text-base text-[#62473a] leading-relaxed">
                Hier begegnen sich Nachbarn für den morgendlichen Espresso an der Bar, Familien nach der Schule auf eine Kugel Gelato im Cornetto und Kaffeegeniesser, die am Nachmittag die Sonne geniessen.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS.phoneRaw}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#211612] text-[#f0ba9f] font-semibold text-sm hover:bg-[#3c2921] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c25934]" />
                  <span>044 433 22 82</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#ded0bc]">
                <Coffee className="w-6 h-6 text-[#c25934] mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#211612]">Un Caffè al Banco</h3>
                <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
                  Der typisch italienische Espresso im Stehen – kurz, intensiv und ein belebender Moment im Tagesverlauf.
                </p>
              </div>

              <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#ded0bc]">
                <Heart className="w-6 h-6 text-[#c25934] mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#211612]">Cioccolato & Dolci</h3>
                <p className="text-xs text-[#62473a] mt-2 leading-relaxed">
                  Dichte, samtige Trinkschokolade und feine Kleinigkeiten für eine genussvolle Auszeit.
                </p>
              </div>

              <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#ded0bc] sm:col-span-2">
                <MapPin className="w-6 h-6 text-[#3f5945] mb-2" />
                <h3 className="font-serif text-lg font-bold text-[#211612]">Zentrale Adresse in 8048 Zürich</h3>
                <p className="text-xs text-[#62473a] mt-1 leading-relaxed">
                  Lindenplatz 4, mit perfekter Anbindung an Tram 2, Bus 31/35 und den Bahnhof Altstetten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Experience */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211612]">
          Erleben Sie die Vielfalt unseres Angebots
        </h2>
        <p className="text-base text-[#62473a] leading-relaxed">
          Entdecken Sie unsere saisonal wechselnden Gelato-Kreationen, Kaffeespezialitäten und Schokoladenkreationen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c25934] text-white font-semibold hover:bg-[#a84725] transition-colors shadow-xs"
            id="about-cta-menu"
          >
            <span>Angebot entdecken</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#faf7f2] border border-[#ded0bc] text-[#211612] font-semibold hover:bg-[#f4ede2] transition-colors"
            id="about-cta-contact"
          >
            <span>Kontakt & Anfahrt</span>
          </button>
        </div>
      </section>
    </div>
  );
};
