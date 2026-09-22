import { BusinessDetails } from '../types';

export const BUSINESS: BusinessDetails = {
  name: 'Gelateria Salvati, Caffè Cioccolato',
  subtitle: 'Gelato Artigianale, Espresso Italiano & Cioccolato al Lindenplatz',
  category: 'Gelateria / Café',
  address: {
    street: 'Lindenplatz 4',
    postalCode: '8048',
    city: 'Zürich',
    country: 'Schweiz',
    canton: 'ZH',
    neighborhood: 'Altstetten',
    fullFormatted: 'Lindenplatz 4, 8048 Zürich, Schweiz'
  },
  phone: '044 433 22 82',
  phoneRaw: 'tel:0444332282',
  coordinates: {
    lat: 47.3879,
    lng: 8.4877
  },
  googleMapsUrl: 'https://maps.google.com/?q=Lindenplatz+4,+8048+Z%C3%BCrich',
  transit: {
    tram: ['Tram 2 (Haltestelle Lindenplatz - direkt vor der Tür)'],
    bus: ['Bus 31', 'Bus 35 (Haltestelle Lindenplatz)'],
    train: 'Bahnhof Zürich Altstetten (ca. 6 Gehminuten)',
    stopName: 'Lindenplatz, Zürich'
  }
};
