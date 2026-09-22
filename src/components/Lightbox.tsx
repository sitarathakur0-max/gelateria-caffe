import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex < items.length - 1) {
          onNavigate(items[currentIndex + 1]);
        } else {
          onNavigate(items[0]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex > 0) {
          onNavigate(items[currentIndex - 1]);
        } else {
          onNavigate(items[items.length - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const nextIdx = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    onNavigate(items[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    onNavigate(items[nextIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#1b120e] rounded-2xl overflow-hidden border border-[#3c2921]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between p-4 border-b border-[#2d1f19] bg-[#150e0b]">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#c25934] font-semibold">
              Gelateria Salvati · Impressionen
            </span>
            <h3 className="font-serif text-lg font-bold text-[#faf7f2]">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#ded0bc] hover:text-white hover:bg-[#2d1f19] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c25934]"
            aria-label="Schliessen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="max-h-full max-w-full object-contain"
            referrerPolicy="no-referrer"
          />

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-[#c25934]"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-[#c25934]"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="p-4 bg-[#1b120e] border-t border-[#2d1f19] flex items-center justify-between gap-4 text-xs text-[#ded0bc]">
          <p className="max-w-2xl text-sm text-[#e8dfd5] leading-relaxed">{item.caption}</p>
          <span className="text-xs text-[#856353] whitespace-nowrap">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
