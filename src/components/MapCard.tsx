import React from 'react';
import { MapPin, Navigation, ExternalLink, Bus, Train, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const MapCard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className="bg-[#faf7f2] border border-[#e8dfd5] rounded-2xl overflow-hidden shadow-sm">
      {/* Visual Map Header / Area */}
      <div className="relative h-64 sm:h-72 w-full bg-[#f4ede2] border-b border-[#e8dfd5] overflow-hidden">
        {/* Stylized Zurich Altstetten / Lindenplatz Map Illustration */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-65"
          viewBox="0 0 600 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background land tone */}
          <rect width="600" height="350" fill="#f5eee5" />

          {/* Urban blocks / parcels */}
          <rect x="20" y="30" width="140" height="90" rx="6" fill="#eae0d0" />
          <rect x="180" y="30" width="160" height="80" rx="6" fill="#eae0d0" />
          <rect x="360" y="40" width="220" height="70" rx="6" fill="#eae0d0" />

          <rect x="30" y="160" width="120" height="150" rx="6" fill="#eae0d0" />
          <rect x="420" y="150" width="160" height="160" rx="6" fill="#eae0d0" />

          {/* Roads & Streets */}
          {/* Badenerstrasse & Hohlstrasse vectors */}
          <path d="M0 135 L600 135" stroke="#ded0bc" strokeWidth="24" />
          <path d="M0 135 L600 135" stroke="#ffffff" strokeWidth="18" />

          {/* Lindenplatz square opening */}
          <circle cx="300" cy="180" r="75" fill="#fbf8f3" stroke="#ded0bc" strokeWidth="4" />
          <circle cx="300" cy="180" r="55" fill="#f4ede2" />

          {/* Tram 2 tracks line along Badenerstrasse */}
          <path d="M0 135 L600 135" stroke="#3f5945" strokeWidth="3" strokeDasharray="6 4" />

          {/* Cross street Altstetterstrasse */}
          <path d="M290 0 L290 350" stroke="#ffffff" strokeWidth="16" />
          <path d="M310 0 L310 350" stroke="#eae0d0" strokeWidth="4" />

          {/* Park / Greenery nearby */}
          <circle cx="270" cy="185" r="14" fill="#3f5945" fillOpacity="0.25" />
          <circle cx="330" cy="175" r="12" fill="#3f5945" fillOpacity="0.25" />
          <circle cx="305" cy="205" r="10" fill="#3f5945" fillOpacity="0.25" />

          {/* Street names */}
          <text x="50" y="125" fill="#856353" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Badenerstrasse</text>
          <text x="315" y="60" fill="#856353" fontSize="11" fontFamily="sans-serif" transform="rotate(90 315,60)">Altstetterstrasse</text>
          <text x="255" y="240" fill="#3f5945" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Lindenplatz</text>
        </svg>

        {/* Pulsing Pin for Gelateria Salvati, Caffè Cioccolato at Lindenplatz 4 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#c25934] opacity-35"></span>
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#c25934] text-white shadow-lg flex items-center justify-center border-2 border-white">
              <MapPin className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-2 bg-[#211612] text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md border border-[#3c2921] whitespace-nowrap">
            Gelateria Salvati · Lindenplatz 4
          </div>
        </div>

        {/* Public Transport Badge */}
        <div className="absolute top-3 left-3 bg-[#faf7f2]/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#ded0bc] text-xs text-[#211612] shadow-xs flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3f5945]"></span>
          <span className="font-semibold">Tram 2: Haltestelle Lindenplatz</span>
        </div>

        {/* Direct Google Maps launch button */}
        <a
          href={BUSINESS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#211612] px-3 py-1.5 rounded-lg border border-[#ded0bc] text-xs font-medium shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#c25934]"
        >
          <span>Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#c25934]" />
        </a>
      </div>

      {/* Info Details Under Map */}
      <div className="p-6 space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c25934]">Standort & Adresse</span>
          <h3 className="font-serif text-xl font-bold text-[#211612] mt-0.5">
            {BUSINESS.name}
          </h3>
          <p className="text-sm text-[#453026] mt-1 font-medium">
            {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.city}
          </p>
          <p className="text-xs text-[#856353]">Quartier Zürich-Altstetten (Lindenplatz)</p>
        </div>

        {/* Transit Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-[#f4ede2]/60 p-3 rounded-xl border border-[#ded0bc] flex items-start gap-2.5">
            <div className="p-1.5 bg-[#3f5945] text-white rounded-lg shrink-0 mt-0.5">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#211612]">Tram 2</p>
              <p className="text-[11px] text-[#62473a]">Hält direkt an der Haltestelle Lindenplatz</p>
            </div>
          </div>

          <div className="bg-[#f4ede2]/60 p-3 rounded-xl border border-[#ded0bc] flex items-start gap-2.5">
            <div className="p-1.5 bg-[#c25934] text-white rounded-lg shrink-0 mt-0.5">
              <Bus className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#211612]">Bus 31 & 35</p>
              <p className="text-[11px] text-[#62473a]">Direkte Verbindungen zum Lindenplatz</p>
            </div>
          </div>

          <div className="bg-[#f4ede2]/60 p-3 rounded-xl border border-[#ded0bc] flex items-start gap-2.5">
            <div className="p-1.5 bg-[#211612] text-white rounded-lg shrink-0 mt-0.5">
              <Train className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#211612]">S-Bahn Altstetten</p>
              <p className="text-[11px] text-[#62473a]">Nur ca. 6 Gehminuten vom Bahnhof</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#c25934] text-white text-sm font-semibold hover:bg-[#a84725] transition-colors shadow-xs"
          >
            <Navigation className="w-4 h-4" />
            <span>Route planen</span>
          </a>

          <a
            href={BUSINESS.phoneRaw}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#211612] text-[#f0ba9f] text-sm font-semibold hover:bg-[#3c2921] transition-colors border border-[#3c2921]"
          >
            <Phone className="w-4 h-4" />
            <span>044 433 22 82</span>
          </a>
        </div>
      </div>
    </div>
  );
};
