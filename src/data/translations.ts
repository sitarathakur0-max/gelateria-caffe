import { Language } from '../types';

export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    menu: string;
    gallery: string;
    contact: string;
    callUs: string;
    directions: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaMenu: string;
    ctaVisit: string;
    phoneLabel: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    text1: string;
    text2: string;
    pillarsTitle: string;
  };
  pillars: {
    gelatoTitle: string;
    gelatoDesc: string;
    caffeTitle: string;
    caffeDesc: string;
    cioccolatoTitle: string;
    cioccolatoDesc: string;
  };
  experience: {
    heading: string;
    subheading: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  reasons: {
    heading: string;
    subheading: string;
    r1Title: string;
    r1Desc: string;
    r2Title: string;
    r2Desc: string;
    r3Title: string;
    r3Desc: string;
    r4Title: string;
    r4Desc: string;
  };
  visitorInfo: {
    heading: string;
    subheading: string;
    addressLabel: string;
    phoneLabel: string;
    transitLabel: string;
    transitDesc: string;
    callNotice: string;
    viewLocation: string;
  };
  ctaSection: {
    heading: string;
    subheading: string;
    buttonCall: string;
    buttonDirections: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    visitUs: string;
    contactUs: string;
    transitSummary: string;
    allRightsReserved: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      menu: 'Angebot & Genuss',
      gallery: 'Impressionen',
      contact: 'Kontakt & Anfahrt',
      callUs: 'Anrufen: 044 433 22 82',
      directions: 'Anfahrt'
    },
    hero: {
      badge: 'Lindenplatz 4 · 8048 Zürich',
      headline: 'Italienische Gelato-Kultur & Kaffeegenuss in Zürich',
      subheadline: 'Treffpunkt für handwerklich zubereitetes italienisches Gelato, vollendeten Espresso und erlesene Schokoladenspezialitäten am lebendigen Lindenplatz.',
      ctaMenu: 'Unser Angebot entdecken',
      ctaVisit: 'Besuchen Sie uns am Lindenplatz',
      phoneLabel: 'Telefon: 044 433 22 82'
    },
    intro: {
      eyebrow: 'Tradition & Leidenschaft',
      heading: 'Willkommen bei Gelateria Salvati, Caffè Cioccolato',
      text1: 'Mitten im Herzen von Zürich-Altstetten am Lindenplatz lädt Gelateria Salvati dazu ein, den unverfälschten Genuss traditioneller italienischer Gelateria- und Café-Kultur zu erleben.',
      text2: 'Ob eine cremige Kugel Gelato im knusprigen Cornetto, ein aromatischer Espresso an der Bar oder eine dichte heisse Trinkschokolade – hier geniessen Sie handwerkliche Sorgfalt und herzliche Gastfreundschaft.',
      pillarsTitle: 'Drei Säulen unseres Handwerks'
    },
    pillars: {
      gelatoTitle: 'Handwerkliches Gelato',
      gelatoDesc: 'Traditionell langsam gerührt für eine seidige Dichte und intensive Geschmackstiefe – von klassischen Cremesorten bis zu fruchtigen Sorbets.',
      caffeTitle: 'Italienische Kaffeekunst',
      caffeDesc: 'Klassischer Espresso, samtiger Cappuccino und Kaffeespezialitäten nach bester italienischer Röst- und Barista-Tradition.',
      cioccolatoTitle: 'Feine Schokolade & Dolci',
      cioccolatoDesc: 'Reichhaltige Trinkschokolade nach italienischer Art sowie süsse Begleiter für jede Tageszeit.'
    },
    experience: {
      heading: 'Das Gelateria- & Café-Erlebnis',
      subheading: 'Ein Moment italienischer Lebensfreude mitten in Zürich',
      point1Title: 'Frische Zubereitung & Textur',
      point1Desc: 'Echtes italienisches Gelato zeichnet sich durch seine samtige Konsistenz und den bewussten Verzicht auf übermässige Lufteinschlüsse aus. So entfaltet jede Sorte ihren vollen Charakter.',
      point2Title: 'Die Bar-Kultur am Tresen',
      point2Desc: 'Wie in Italien üblich, gehört der kurze Halt am Tresen für einen frisch extrahierten Caffè oder der entspannte Genuss auf der Terrasse zum täglichen Lebensgefühl.',
      point3Title: 'Vielfalt für jeden Gaumen',
      point3Desc: 'Von vollmundigen Milch- und Nussnoten bis hin zu erfrischenden, rein pflanzlichen Fruchtsorbets bieten wir eine Auswahl für bewusste Geniesser.'
    },
    reasons: {
      heading: 'Warum ein Besuch am Lindenplatz lohnt',
      subheading: 'Vier Gründe für Ihre Auszeit bei Gelateria Salvati',
      r1Title: 'Echte italienische Atmosphäre',
      r1Desc: 'Ein stilvoller Ort, an dem sich mediterrane Gelassenheit und Zürcher Quartierleben harmonisch begegnen.',
      r2Title: 'Sorgfältige Handwerkskunst',
      r2Desc: 'Fokus auf bewährte Rezepturen und achtsamen Umgang mit erlesenen Rohstoffen wie Schokolade, Nüssen und Früchten.',
      r3Title: 'Perfekte Lage am Lindenplatz',
      r3Desc: 'Bequem erreichbar mit der Tramlinie 2 direkt vor der Tür sowie wenigen Gehminuten vom Bahnhof Altstetten.',
      r4Title: 'Für jede Tageszeit',
      r4Desc: 'Vom stärkenden Morgen-Espresso über das Nachmittags-Gelato bis zum süssen Ausklang am Abend.'
    },
    visitorInfo: {
      heading: 'Besucherinformationen',
      subheading: 'Finden Sie zu uns an den Lindenplatz in Zürich',
      addressLabel: 'Adresse',
      phoneLabel: 'Telefon',
      transitLabel: 'Öffentliche Verkehrsmittel',
      transitDesc: 'Tramlinie 2 hält direkt an der Station Lindenplatz. Buslinien 31 und 35 halten ebenfalls am Platz. Vom Bahnhof Zürich-Altstetten ca. 6 Minuten zu Fuss.',
      callNotice: 'Haben Sie Fragen zum aktuellen Tagesangebot? Rufen Sie uns gerne direkt an.',
      viewLocation: 'Route in Google Maps öffnen'
    },
    ctaSection: {
      heading: 'Geniessen Sie den Moment bei uns',
      subheading: 'Kommen Sie vorbei am Lindenplatz 4 in 8048 Zürich oder kontaktieren Sie uns direkt.',
      buttonCall: 'Jetzt anrufen: 044 433 22 82',
      buttonDirections: 'Anfahrtsweg anzeigen'
    },
    footer: {
      tagline: 'Authentische italienische Gelateria, Kaffeebar und Schokoladenspezialitäten am Lindenplatz in Zürich-Altstetten.',
      quickLinks: 'Navigation',
      visitUs: 'Standort',
      contactUs: 'Direktkontakt',
      transitSummary: 'Tram 2 & Bus 31/35 bis Haltestelle Lindenplatz',
      allRightsReserved: 'Alle Rechte vorbehalten.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      menu: 'Offerings & Menu',
      gallery: 'Gallery',
      contact: 'Contact & Location',
      callUs: 'Call: 044 433 22 82',
      directions: 'Directions'
    },
    hero: {
      badge: 'Lindenplatz 4 · 8048 Zürich',
      headline: 'Authentic Italian Gelato & Coffee Craft in Zürich',
      subheadline: 'A welcoming destination for artisanal Italian gelato, velvety espresso, and fine drinking chocolates at Lindenplatz in Zürich-Altstetten.',
      ctaMenu: 'Explore Our Offerings',
      ctaVisit: 'Visit Us at Lindenplatz',
      phoneLabel: 'Phone: 044 433 22 82'
    },
    intro: {
      eyebrow: 'Tradition & Dedication',
      heading: 'Welcome to Gelateria Salvati, Caffè Cioccolato',
      text1: 'Located in the heart of Zürich-Altstetten on Lindenplatz, Gelateria Salvati welcomes you to discover the authentic essence of an Italian neighborhood café and gelateria.',
      text2: 'Whether enjoying a silky scoop of gelato in a crispy cornetto, a perfectly extracted espresso at the bar, or a decadent hot chocolate, you will find artisanal care and warm hospitality.',
      pillarsTitle: 'Three Pillars of Our Craft'
    },
    pillars: {
      gelatoTitle: 'Artisanal Italian Gelato',
      gelatoDesc: 'Crafted with traditional slow churning methods for unmatched silkiness and depth, from rich creams to refreshing sorbetti.',
      caffeTitle: 'Italian Coffee Culture',
      caffeDesc: 'Classic espresso, smooth cappuccino, and coffee specialties prepared in the finest Italian barista tradition.',
      cioccolatoTitle: 'Fine Chocolate & Delights',
      cioccolatoDesc: 'Rich Italian-style drinking chocolate and sweet indulgences to complement your coffee or gelato moment.'
    },
    experience: {
      heading: 'The Gelateria & Café Experience',
      subheading: 'A moment of Italian Dolce Vita in Zürich',
      point1Title: 'Silky Texture & Fresh Batches',
      point1Desc: 'Authentic Italian gelato is known for its dense, velvety mouthfeel and balanced serving temperature that accentuates natural flavors.',
      point2Title: 'The Authentic Counter Ritual',
      point2Desc: 'Enjoy an espresso al banco in the classic Italian style, or linger with friends and family on the sunny Lindenplatz square.',
      point3Title: 'Something for Everyone',
      point3Desc: 'A thoughtfully balanced selection ranging from indulgent milk-based favorites to naturally dairy-free fruit sorbetti.'
    },
    reasons: {
      heading: 'Why Visit Lindenplatz',
      subheading: 'Four reasons to enjoy a sweet pause at Gelateria Salvati',
      r1Title: 'True Italian Atmosphere',
      r1Desc: 'A warm, elegant space where Mediterranean conviviality meets the vibrant neighborhood rhythm of Zürich.',
      r2Title: 'Artisanal Craftsmanship',
      r2Desc: 'A steadfast focus on time-honored recipes and quality ingredients like cocoa, nuts, and fresh fruits.',
      r3Title: 'Easily Accessible',
      r3Desc: 'Tram 2 stops directly outside at Lindenplatz, with easy connection to Zürich Altstetten train station.',
      r4Title: 'Perfect for Every Hour',
      r4Desc: 'From your morning espresso boost to an afternoon gelato break or evening sweet treat.'
    },
    visitorInfo: {
      heading: 'Visitor Information',
      subheading: 'How to find us at Lindenplatz in Zürich',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      transitLabel: 'Public Transport',
      transitDesc: 'Tram 2 stops directly at Lindenplatz. Bus 31 and 35 also serve the square. Approximately 6 minutes on foot from Zürich-Altstetten station.',
      callNotice: 'For inquiries about current daily cabinet selections, please give us a direct call.',
      viewLocation: 'Open Directions in Google Maps'
    },
    ctaSection: {
      heading: 'Experience the Craft at Lindenplatz',
      subheading: 'Drop by Lindenplatz 4 in 8048 Zürich or contact us directly.',
      buttonCall: 'Call Now: 044 433 22 82',
      buttonDirections: 'Get Directions'
    },
    footer: {
      tagline: 'Artisanal Italian gelateria, espresso bar, and chocolate specialty café at Lindenplatz in Zürich-Altstetten.',
      quickLinks: 'Navigation',
      visitUs: 'Location',
      contactUs: 'Direct Contact',
      transitSummary: 'Tram 2 & Bus 31/35 to Lindenplatz station',
      allRightsReserved: 'All rights reserved.'
    }
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      menu: 'Offerta & Gelato',
      gallery: 'Galleria',
      contact: 'Contatti & Dove Siamo',
      callUs: 'Chiama: 044 433 22 82',
      directions: 'Indicazioni'
    },
    hero: {
      badge: 'Lindenplatz 4 · 8048 Zurigo',
      headline: 'Autentica Tradizione del Gelato & Caffè a Zurigo',
      subheadline: 'Il punto di incontro per gelato artigianale all’italiana, espresso a regola d’arte e cioccolato caldo nella splendida cornice di Lindenplatz.',
      ctaMenu: 'Scopri le Nostre Specialità',
      ctaVisit: 'Vieni a trovarci a Lindenplatz',
      phoneLabel: 'Telefono: 044 433 22 82'
    },
    intro: {
      eyebrow: 'Passione & Maestria Artigianale',
      heading: 'Benvenuti alla Gelateria Salvati, Caffè Cioccolato',
      text1: 'Nel cuore di Zurigo-Altstetten, affacciata sulla storica Lindenplatz, Gelateria Salvati vi accoglie per farvi rivivere l’emozione del vero bar e gelateria all’italiana.',
      text2: 'Che si tratti di una pallina di gelato cremoso in cialda, di un caffè espresso gustato al banco o di una vellutata cioccolata calda, ogni dettaglio è curato con passione autentica.',
      pillarsTitle: 'I Tre Pilastri del Nostro Mestiere'
    },
    pillars: {
      gelatoTitle: 'Gelato Artigianale',
      gelatoDesc: 'Mantecatura lenta e densa per preservare aromi puri e consistenza vellutata, dai grandi classici ai sorbetti di frutta fresca.',
      caffeTitle: 'Espresso & Caffetteria',
      caffeDesc: 'La cura della perfetta estrazione: espresso corposo, cappuccino con crema lucida e specialità secondo tradizione italiana.',
      cioccolatoTitle: 'Cioccolato & Pasticceria',
      cioccolatoDesc: 'Pregiata cioccolata densa all’italiana e dolci selezionati per accompagnare ogni momento della giornata.'
    },
    experience: {
      heading: 'L’Esperienza del Gelato & del Caffè',
      subheading: 'Un autentico momento di Dolce Vita a Zurigo',
      point1Title: 'Mantecatura & Consistenza',
      point1Desc: 'Il vero gelato italiano non necessita di scorciatoie: la sua densità naturale e la giusta temperatura regalano un sapore pieno e persistente.',
      point2Title: 'Il Rituale del Banco',
      point2Desc: 'L’intramontabile pausa per un caffè al volo oppure una pausa rilassante ai tavolini all’aperto ammirando la piazza.',
      point3Title: 'Attenzione a Tutti i Gusti',
      point3Desc: 'Una proposta equilibrata tra ricche creme di latte, specialità al cacao e sorbetti di frutta naturalmente privi di lattosio.'
    },
    reasons: {
      heading: 'Perché Venire a Trovarci a Lindenplatz',
      subheading: 'Quattro motivi per una sosta rigenerante',
      r1Title: 'Vera Atmosfera Italiana',
      r1Desc: 'Uno spazio curato e accogliente dove la cordialità mediterranea incontra la vivacità zurighese.',
      r2Title: 'Cura Artigianale',
      r2Desc: 'Rispetto delle ricette tradizionali e passione per gli ingredienti genuini: latte, cacao e frutta.',
      r3Title: 'Comodità & Posizione',
      r3Desc: 'Il Tram 2 ferma proprio davanti al locale alla fermata Lindenplatz, a pochi minuti dalla stazione di Altstetten.',
      r4Title: 'Dalla Mattina alla Sera',
      r4Desc: 'Per iniziare bene la giornata con un buon espresso o per concedersi un gelato rinfrescante nel pomeriggio.'
    },
    visitorInfo: {
      heading: 'Informazioni per la Visita',
      subheading: 'Come raggiungerci a Lindenplatz a Zurigo',
      addressLabel: 'Indirizzo',
      phoneLabel: 'Telefono',
      transitLabel: 'Trasporti Pubblici',
      transitDesc: 'Tram 2 (fermata Lindenplatz direttamente di fronte). Linee bus 31 e 35. A soli 6 minuti a piedi dalla stazione FFS di Zurigo-Altstetten.',
      callNotice: 'Per informazioni sulle selezioni del giorno in vetrina, non esitate a contattarci telefonicamente.',
      viewLocation: 'Apri le indicazioni su Google Maps'
    },
    ctaSection: {
      heading: 'Regalati una Pausa a Lindenplatz',
      subheading: 'Vieni a trovarci in Lindenplatz 4, 8048 Zurigo oppure chiamaci direttamente.',
      buttonCall: 'Chiama ora: 044 433 22 82',
      buttonDirections: 'Ottieni Indicazioni'
    },
    footer: {
      tagline: 'Gelateria artigianale, espresso bar e cioccolateria italiana a Lindenplatz, Zurigo-Altstetten.',
      quickLinks: 'Navigazione',
      visitUs: 'Dove Siamo',
      contactUs: 'Contatto Diretto',
      transitSummary: 'Tram 2 e Bus 31/35 fermata Lindenplatz',
      allRightsReserved: 'Tutti i diritti riservati.'
    }
  }
};
