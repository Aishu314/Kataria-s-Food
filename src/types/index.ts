export type ProductCategory = 
  | 'all'
  | 'fruit-bars'
  | 'burfi'
  | 'candies'
  | 'aam-papad'
  | 'katli'
  | 'festive-gift-boxes';

export type FlavorProfile = 
  | 'All Flavors'
  | 'Tangy Tamarind / Imli'
  | 'Ripe Alphonso Mango'
  | 'Cool Pudina & Kairi'
  | 'Spicy Chatpata Masala'
  | 'Natural Jamun & Amla'
  | 'Assorted Fruit Delights';

export type PackageType = 'Pouch' | 'PET Jar' | 'Gift Box' | 'Carton Box';

export interface ProductPackOption {
  weight: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  packageType: PackageType;
}

export interface SensoryProfile {
  tanginess: number; // 1 to 5
  sweetness: number; // 1 to 5
  spiciness: number; // 1 to 5
}

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  category: ProductCategory;
  flavor: FlavorProfile;
  packageTypes: PackageType[];
  description: string;
  longDescription: string;
  image: string;
  additionalImages?: string[];
  packOptions: ProductPackOption[];
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewLaunch?: boolean;
  isSpecialSignature?: boolean;
  badge?: string;
  ingredients: string[];
  fruitPulpPercentage: number;
  sensoryProfile: SensoryProfile;
  bestMoments: string[];
  nutrition: {
    energy: string;
    carbohydrates: string;
    naturalSugars: string;
    fat: string;
    protein: string;
    dietaryFiber?: string;
  };
  highlights: string[];
  shelfLife: string;
  storageInstructions: string;
}

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  selectedPack: ProductPackOption;
  quantity: number;
  totalPrice: number;
}
