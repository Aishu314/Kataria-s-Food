export type ProductCategory = 
  | 'all'
  | 'fruit-bars'
  | 'burfi'
  | 'candies'
  | 'aam-papad'
  | 'katli'
  | 'jars-bulk';

export type FlavorProfile = 
  | 'Khatta-Meetha (Tangy & Sweet)'
  | 'Ripe Alphonso Mango'
  | 'Spicy Chatpata Masala'
  | 'Tangy Tamarind / Imli'
  | 'Cool Pudina & Kairi'
  | 'Natural Jamun & Amla';

export interface ProductPackOption {
  weight: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  packageType: 'Pouch' | 'PET Jar' | 'Gift Box' | 'Carton Box';
}

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  category: ProductCategory;
  flavor: FlavorProfile;
  description: string;
  longDescription: string;
  image: string;
  additionalImages?: string[];
  packOptions: ProductPackOption[];
  selectedPackIndex?: number;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewLaunch?: boolean;
  isJagdambSpecial?: boolean;
  badge?: string;
  ingredients: string[];
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

export interface WholesaleInquiry {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  inquiryType: 'distributor' | 'retailer' | 'bulk-event' | 'export';
  targetProducts: string[];
  estimatedMonthlyVolume: string;
  notes: string;
}
