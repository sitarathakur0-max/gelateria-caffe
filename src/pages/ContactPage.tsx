import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { Page, Language, ContactFormData, ContactFormErrors } from '../types';
import { BUSINESS } from '../data/business';
import { MapCard } from '../components/MapCard';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
  currentLang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Bitte geben Sie Ihren vollständigen Namen an.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Bitte hinterlassen Sie eine Nachricht.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Client-side submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Allgemeine Anfrage',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Page Title & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbece5] text-xs font-semibold text-[#a84725]">
            <MapPin className="w-3.5 h-3.5 text-[#c25934]" />
            <span>Kontakt & Standort</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#211612]">
            Kontaktieren Sie uns am Lindenplatz
          </h1>
          <p className="font-sans text-lg text-[#62473a] leading-relaxed">
            Haben Sie Fragen zu unserem Angebot, möchten Sie vorab Auskunft über aktuelle Tagessorten einholen oder eine Anfrage stellen? Wir freuen uns über Ihre Kontaktaufnahme.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Details + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8dfd5] shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbece5] text-[#c25934] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#856353] font-semibold">
                    Telefonischer Direktkontakt
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#211612]">
                    {BUSINESS.phone}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#62473a] leading-relaxed">
                Rufen Sie uns direkt an für schnelle Auskünfte oder aktuelle Sortenfragen:
              </p>
              <a
                href={BUSINESS.phoneRaw}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#c25934] text-white text-xs font-semibold hover:bg-[#a84725] transition-colors"
                id="contact-call-btn"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Jetzt anrufen: {BUSINESS.phone}</span>
              </a>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8dfd5] shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f4ede2] text-[#211612] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#856353] font-semibold">
                    Adresse & Lage
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#211612]">
                    {BUSINESS.address.street}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#62473a] leading-relaxed">
                <strong>{BUSINESS.address.postalCode} {BUSINESS.address.city}</strong>
                <br />
                Kanton Zürich, Schweiz · Quartier Altstetten
              </p>
              <div className="p-3 rounded-xl bg-[#f4ede2]/60 text-xs text-[#453026] border border-[#ded0bc]">
                <p className="font-semibold text-[#211612] mb-1">Anreise mit dem ÖV:</p>
                <ul className="space-y-1 text-[11px] text-[#62473a]">
                  <li>• Tram 2 hält direkt an der Station Lindenplatz</li>
                  <li>• Bus 31 und 35 halten am Lindenplatz</li>
                  <li>• ca. 6 Gehminuten vom Bahnhof Zürich-Altstetten</li>
                </ul>
              </div>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#c25934] font-semibold hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Route in Google Maps planen</span>
              </a>
            </div>

            {/* Opening notice reminder */}
            <div className="p-5 rounded-2xl bg-[#f4ede2] border border-[#ded0bc] flex items-start gap-3 text-xs text-[#62473a]">
              <Clock className="w-5 h-5 text-[#c25934] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#211612]">Besuchshinweis</p>
                <p className="text-[11px] mt-0.5 leading-relaxed">
                  Gerne heissen wir Sie vor Ort willkommen. Für tagesaktuelle Vitrinenangebote und saisonale Sorten können Sie uns jederzeit direkt telefonisch kontaktieren.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#faf7f2] border border-[#e8dfd5] shadow-xs">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c25934]">
                  Nachricht Senden
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#211612]">
                  Kontaktformular
                </h2>
                <p className="text-xs text-[#62473a]">
                  Füllen Sie die Felder aus, um uns eine schriftliche Anfrage zukommen zu lassen.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-[#f4f7f4] border border-[#3f5945]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#3f5945] text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#211612]">
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#453026] max-w-md mx-auto leading-relaxed">
                    Wir haben Ihre Mitteilung entgegengenommen und werden uns zeitnah bei Ihnen melden. Für dringende Angelegenheiten erreichen Sie uns unter 044 433 22 82.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-[#211612] text-white text-xs font-semibold hover:bg-[#3c2921] transition-colors"
                  >
                    Neue Nachricht verfassen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold text-[#211612] mb-1"
                    >
                      Vor- und Nachname <span className="text-[#c25934]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#211612] placeholder-[#856353]/70 focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-[#ded0bc] focus:ring-[#c25934]'
                      }`}
                      placeholder="z. B. Maria Rossi"
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#211612] mb-1"
                      >
                        E-Mail-Adresse <span className="text-[#c25934]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#211612] placeholder-[#856353]/70 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#ded0bc] focus:ring-[#c25934]'
                        }`}
                        placeholder="name@beispiel.ch"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#211612] mb-1"
                      >
                        Telefonnummer (optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded0bc] text-sm text-[#211612] placeholder-[#856353]/70 focus:outline-none focus:ring-2 focus:ring-[#c25934]"
                        placeholder="z. B. 079 123 45 67"
                      />
                    </div>
                  </div>

                  {/* Subject select */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-[#211612] mb-1"
                    >
                      Betreff
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded0bc] text-sm text-[#211612] focus:outline-none focus:ring-2 focus:ring-[#c25934]"
                    >
                      <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                      <option value="Anfrage für Familien oder Gruppen">Anfrage für Familien oder Gruppen</option>
                      <option value="Frage zu Inhaltsstoffen & Allergenen">Frage zu Inhaltsstoffen & Allergenen</option>
                      <option value="Feedback zu einem Besuch">Feedback zu einem Besuch</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#211612] mb-1"
                    >
                      Ihre Nachricht <span className="text-[#c25934]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#211612] placeholder-[#856353]/70 focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-[#ded0bc] focus:ring-[#c25934]'
                      }`}
                      placeholder="Wie können wir Ihnen weiterhelfen?"
                      aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#c25934] hover:bg-[#a84725] text-white font-semibold text-sm transition-all shadow-xs disabled:opacity-50 active:scale-95"
                      id="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <span>Nachricht absenden</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Card Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#e8dfd5] pt-12">
          <div className="max-w-4xl mx-auto">
            <MapCard />
          </div>
        </div>
      </section>
    </div>
  );
};
