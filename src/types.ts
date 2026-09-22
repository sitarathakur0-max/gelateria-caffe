export type Page = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

export type Language = 'de' | 'en' | 'it';

export interface BusinessDetails {
  name: string;
  subtitle: string;
  category: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    canton: string;
    neighborhood: string;
    fullFormatted: string;
  };
  phone: string;
  phoneRaw: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  transit: {
    tram: string[];
    bus: string[];
    train: string;
    stopName: string;
  };
}

export interface OfferingCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  items: OfferingItem[];
}

export interface OfferingItem {
  id: string;
  name: string;
  italianName?: string;
  description: string;
  category: string;
  tags: string[];
  seasonal?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'gelato' | 'caffe' | 'cioccolato' | 'ambiance';
  imageUrl: string;
  caption: string;
  alt: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
