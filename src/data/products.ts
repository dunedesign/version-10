export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'chouchous' | 'bandeaux' | 'coffrets';
  description?: string;
  videoUrl?: string;
}

export interface Color {
  name: string;
  hex: string;
}

export const colors: Color[] = [
  { name: 'Navy', hex: '#141A29' },
  { name: 'Mint', hex: '#8C9889' },
  { name: 'Nude', hex: '#C38C90' },
  { name: 'Silver Grey', hex: '#A4A3A8' },
  { name: 'Terra', hex: '#8F3E2B' }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Chouchou Ouessane",
    price: 16.60,
    category: "chouchous",
    image: "https://i.imgur.com/NOx64xi.jpg",
    description: "Chouchou avec un noeud coulant. S'adapte à la tête et l'épaisseur des cheveux. Préhension facilitée avec les boutons.",
    videoUrl: "https://youtu.be/gvqdXswaROw?si=WFhRo1axMPZwFCRH"
  },
  {
    id: 2,
    name: "Chouchou Lucie",
    price: 19.45,
    category: "chouchous",
    image: "https://i.imgur.com/NIwADvS.jpg",
    description: "Chouchou avec un aimant. Pratique pour les cheveux bouclés.",
    videoUrl: "https://youtu.be/tQI_obQ5psc?si=Cx-M0pkEKBVe96B5"
  },
  {
    id: 3,
    name: "Chouchou Héloïse",
    price: 15.55,
    category: "chouchous",
    image: "https://i.imgur.com/l7wg38k.jpg",
    description: "Chouchou avec une pince. S'accroche à une ou deux mains.",
    videoUrl: "https://youtu.be/q_L_DUq7vSI?si=KBBiiOmZAZz-"
  },
  {
    id: 4,
    name: "Chouchou Victoire",
    price: 16.60,
    category: "chouchous",
    image: "https://i.imgur.com/3lwb6FQ.jpg",
    description: "Chouchou avec deux pinces. S'accroche à une ou deux mains.",
    videoUrl: "https://youtu.be/w25_u4-AORo?si=y0nmfqYJ4IUJ4zal"
  },
  {
    id: 5,
    name: "Bandeau Iliana",
    price: 17.10,
    category: "bandeaux",
    image: "https://i.imgur.com/7aLKtGg.jpg",
    description: "S'adapte à la tête et l'épaisseur des cheveux. Préhension facilitée avec les boutons.",
    videoUrl: "https://youtu.be/v6kewn_TlC4?si=mY91fo_aRNaI8QOV"
  },
  {
    id: 6,
    name: "Bandeau Inès",
    price: 20.90,
    category: "bandeaux",
    image: "https://i.imgur.com/4nezkB7.jpg",
    description: "Bandeau avec une pince et un aimant. S'accroche à une ou deux mains.",
    videoUrl: "https://youtu.be/vcs4ViH_OYA?si=-KRxqYo8eDDMS4wz"
  },
  {
    id: 7,
    name: "Coffret découverte : 3 Lullas",
    price: 45.00,
    category: "coffrets",
    image: "https://i.imgur.com/vTsvEgv.jpg",
    description: "Sélectionne tes 3 Lullas préférés !"
  },
  {
    id: 8,
    name: "Coffret premium : 6 Lullas",
    price: 85.00,
    category: "coffrets",
    image: "https://i.imgur.com/qYwsxXk.jpg",
    description: "Sélectionne tes 6 Lullas préférés !"
  }
];