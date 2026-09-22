import { OfferingCategory } from '../types';

export const OFFERING_CATEGORIES: OfferingCategory[] = [
  {
    id: 'gelato',
    title: 'Gelato Tradizionale',
    tagline: 'Artisanal Italian Gelato',
    description: 'Slowly churned milk and cream creations celebrating Italian confectionery traditions, known for their dense silkiness and authentic taste profile.',
    iconName: 'IceCream',
    items: [
      {
        id: 'g-creme',
        name: 'Classic Cream Bases',
        italianName: 'Creme della Tradizione',
        description: 'Velvety gelato varieties crafted with fresh whole milk and pure cream, highlighting time-tested combinations like sweet cream, vanilla, and gentle caramel notes.',
        category: 'gelato',
        tags: ['Vegetarian', 'Classic', 'Gluten-Friendly']
      },
      {
        id: 'g-nocciola',
        name: 'Roasted Nut & Praline Varieties',
        italianName: 'Specialità alle Noci & Gianduja',
        description: 'Rich, comforting selections featuring finely milled roasted hazelnuts, rich cocoa swirls, and aromatic nut pastes in the authentic northern Italian style.',
        category: 'gelato',
        tags: ['Nut Specialty', 'Rich', 'Vegetarian']
      },
      {
        id: 'g-cioccolato',
        name: 'Dark Cocoa & Chocolate Infusions',
        italianName: 'Cioccolato Puro & Variazioni',
        description: 'Deep, bittersweet cocoa churns and silky chocolate gelato styles designed for genuine chocolate connoisseurs.',
        category: 'gelato',
        tags: ['Chocolate', 'Intense', 'Vegetarian']
      },
      {
        id: 'g-stracciatella',
        name: 'Crisp Chocolate Flake Gelato',
        italianName: 'Stracciatella & Croccante',
        description: 'Smooth fior di latte folded with fine shards of dark chocolate that crack gently on the tongue.',
        category: 'gelato',
        tags: ['Traditional Favorite', 'Vegetarian']
      }
    ]
  },
  {
    id: 'sorbetti',
    title: 'Sorbetti di Frutta',
    tagline: 'Pure Fruit Sorbets',
    description: 'Refreshing, naturally dairy-free sorbetti whipped from ripe fruit and simple syrup, preserving the vibrant natural acidity and fragrance of seasonal fruit.',
    iconName: 'Sparkles',
    items: [
      {
        id: 's-agrumi',
        name: 'Citrus & Sun-Kissed Fruits',
        italianName: 'Agrumi & Frutti Solari',
        description: 'Bright and invigorating sorbets with lively tartness and crisp finish, ideal for a warm afternoon on Lindenplatz.',
        category: 'sorbetti',
        tags: ['Dairy-Free', 'Vegan', 'Refreshing']
      },
      {
        id: 's-bacche',
        name: 'Berry & Forest Fruit Melodies',
        italianName: 'Frutti di Bosco & More',
        description: 'Naturally deep-hued fruit sorbetti loaded with the pure aroma of strawberries, raspberries, and dark forest berries.',
        category: 'sorbetti',
        tags: ['Dairy-Free', 'Vegan', 'Seasonal']
      },
      {
        id: 's-esotico',
        name: 'Tropical & Orchard Harvests',
        italianName: 'Frutta Esotica & del Frutteto',
        description: 'Smooth, aromatic fruit purée sorbets offering a delicate sweetness and velvety, seedless melt.',
        category: 'sorbetti',
        tags: ['Dairy-Free', 'Vegan']
      }
    ]
  },
  {
    id: 'caffe',
    title: 'Caffè & Bar dell’Espresso',
    tagline: 'Italian Coffee Heritage',
    description: 'Properly pulled espresso shots roasted in the Italian tradition, balancing crema, aroma, body, and lingering hazelnut notes.',
    iconName: 'Coffee',
    items: [
      {
        id: 'c-espresso',
        name: 'Espresso & Ristretto',
        italianName: 'Espresso al Banco',
        description: 'The foundation of Italian café culture: a short, dense extraction crowned with a thick golden-hazelnut crema.',
        category: 'caffe',
        tags: ['Classic', 'Bar Tradition']
      },
      {
        id: 'c-cappuccino',
        name: 'Cappuccino & Latte Macchiato',
        italianName: 'Cappuccino all’Italiana',
        description: 'Harmonious marriage of rich espresso and micro-foamed milk, poured with a glossy, dense finish.',
        category: 'caffe',
        tags: ['Milk Specialty', 'Morning Favorite']
      },
      {
        id: 'c-affogato',
        name: 'Affogato al Caffè',
        italianName: 'L’Incontro Perfetto',
        description: 'A scoop of artisanal gelato drenched tableside with a steaming shot of freshly extracted espresso.',
        category: 'caffe',
        tags: ['Gelateria Signature', 'Dessert & Coffee']
      },
      {
        id: 'c-freddo',
        name: 'Shakerato & Chilled Coffee',
        italianName: 'Caffè Freddo & Shakerato',
        description: 'Vigorously shaken with ice to create an airy, frosted crema layer—a summer staple on Italian piazzas.',
        category: 'caffe',
        tags: ['Chilled', 'Refreshing']
      }
    ]
  },
  {
    id: 'cioccolato',
    title: 'Cioccolato & Dolcezze',
    tagline: 'Chocolate & Sweet Accompaniments',
    description: 'Indulgent specialties honoring Italian chocolate craft, from spoonable thick hot chocolate to refined accompaniments.',
    iconName: 'Heart',
    items: [
      {
        id: 'ch-calda',
        name: 'Dense Italian Hot Chocolate',
        italianName: 'Cioccolata Calda Tradizionale',
        description: 'Rich, thick drinking chocolate served hot in the classic Italian style—so thick it can almost be enjoyed with a spoon.',
        category: 'cioccolato',
        tags: ['Signature Drink', 'Rich & Comforting']
      },
      {
        id: 'ch-panna',
        name: 'Cioccolata con Panna',
        italianName: 'Cioccolata con Panna Fresca',
        description: 'Our traditional hot chocolate topped with a generous cloud of lightly whipped fresh cream.',
        category: 'cioccolato',
        tags: ['Decadent', 'Indulgent']
      },
      {
        id: 'ch-dolci',
        name: 'Italian Biscuits & Pastry Bites',
        italianName: 'Piccola Pasticceria & Cantucci',
        description: 'Delicate Italian biscuits, almond cantucci, and small sweet bites chosen to accompany an espresso or cappuccino.',
        category: 'cioccolato',
        tags: ['Coffee Pairing', 'Vegetarian']
      }
    ]
  }
];
