import { Product } from '../types';

import imliFruitBarImg from '../assets/images/imli_fruit_bar_1792175041148.jpg';
import kacchaMangoBarImg from '../assets/images/kaccha_mango_bar_1792175061984.jpg';
import mangoBurfiImg from '../assets/images/mango_burfi_1792175061717.jpg';
import imliBurfiImg from '../assets/images/imli_burfi_1792175123697.jpg';
import kacchaMangoBurfiImg from '../assets/images/kaccha_mango_burfi_1792175171767.jpg';
import dobullImliCandyImg from '../assets/images/dobull_imli_candy_1792175041245.jpg';
import jetImliBoomImg from '../assets/images/jet_imli_boom_1792175103700.jpg';
import dobullKairiBoomImg from '../assets/images/dobull_kairi_boom_1792175103159.jpg';
import aamPapadToffeeImg from '../assets/images/aam_papad_toffee_1792175061911.jpg';
import mangoFruitCubesImg from '../assets/images/mango_fruit_cubes_1792175151767.jpg';
import alphonsoAamPapadImg from '../assets/images/alphonso_aam_papad_1792175042852.jpg';
import khatelaMasalaAamPapadImg from '../assets/images/khatela_masala_aam_papad_1792175083160.jpg';
import pudinaGreenAamPapadImg from '../assets/images/pudina_green_aam_papad_1792175152163.jpg';
import alphonsoKatliImg from '../assets/images/alphonso_katli_1792175104089.jpg';
import amlaKatliImg from '../assets/images/amla_katli_1792175151925.jpg';
import jamunChipsImg from '../assets/images/jamun_chips_1792175124520.jpg';
import katariaGiftBoxImg from '../assets/images/kataria_gift_box_1792175172591.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'imli-fruit-bar',
    name: 'Imli Fruit Bar (Tamarind Bar)',
    hindiName: 'इमली फ्रूट बार',
    tagline: 'Pure Tamarind Pulp Slabs with Traditional Khatta-Meetha Zing',
    category: 'fruit-bars',
    flavor: 'Tangy Tamarind / Imli',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Slow-cooked pure tamarind pulp blended with mild jaggery and roasted cumin. Chewy, mouth-watering, and 100% natural.',
    longDescription: 'Our flagship Kataria Imli Fruit Bar is prepared using a heritage confectionery craft perfected over decades. We extract ripe tamarind pulp, gently filter the fibers and seeds, and slowly concentrate it with roasted jeera and black salt. Contains zero synthetic gelatin, zero trans fat, and no artificial colorants.',
    image: imliFruitBarImg,
    fruitPulpPercentage: 65,
    sensoryProfile: {
      tanginess: 5,
      sweetness: 3,
      spiciness: 2
    },
    bestMoments: ['Post-lunch digestive', 'Travel & road trips', 'Tangy craving cure'],
    packOptions: [
      { weight: '100g Pouch', price: 45, originalPrice: 55, inStock: true, packageType: 'Pouch' },
      { weight: '250g Zipper Pack', price: 110, originalPrice: 130, inStock: true, packageType: 'Pouch' },
      { weight: '500g Value Pack', price: 210, originalPrice: 250, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Bulk Wholesale', price: 390, originalPrice: 470, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.9,
    reviewCount: 384,
    isBestseller: true,
    isSpecialSignature: true,
    badge: 'Kataria Classic',
    ingredients: ['Tamarind Pulp (65%)', 'Sugar', 'Liquid Glucose', 'Black Salt', 'Roasted Cumin', 'Citric Acid'],
    nutrition: {
      energy: '332 kcal / 100g',
      carbohydrates: '79.4g',
      naturalSugars: '62.0g',
      fat: '0.6g',
      protein: '2.1g',
      dietaryFiber: '4.8g'
    },
    highlights: ['65% Real Tamarind Extract', 'Digestive Cumin Notes', 'No Artificial Colorants', 'Rich in Dietary Fiber'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store in a cool, dry place away from direct sunlight. Reseal pouch after opening.'
  },
  {
    id: 'kaccha-mango-fruit-bar',
    name: 'Kaccha Mango Fruit Bar',
    hindiName: 'कच्चा आम फ्रूट बार',
    tagline: 'Refreshing Raw Mango Bar with Zingy Chatpata Masala',
    category: 'fruit-bars',
    flavor: 'Cool Pudina & Kairi',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Made from hand-picked green raw mangoes (Kairi) infused with rock salt and hand-ground black pepper for an authentic street-style tang.',
    longDescription: 'Capturing the irresistible nostalgia of Indian summer kairi slices. Kataria Kaccha Mango Fruit Bar blends tart raw mango pulp with a signature blend of Himalayan rock salt, crushed mint, and digestive herbs. Strikes the perfect harmonious chord between spicy, sour, and mildly sweet.',
    image: kacchaMangoBarImg,
    fruitPulpPercentage: 62,
    sensoryProfile: {
      tanginess: 5,
      sweetness: 2,
      spiciness: 3
    },
    bestMoments: ['Afternoon refreshment', 'Summer heat soother', 'School lunchbox snack'],
    packOptions: [
      { weight: '100g Pouch', price: 45, originalPrice: 55, inStock: true, packageType: 'Pouch' },
      { weight: '250g Zipper Pack', price: 110, originalPrice: 130, inStock: true, packageType: 'Pouch' },
      { weight: '500g Value Pack', price: 210, originalPrice: 250, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Bulk Wholesale', price: 390, originalPrice: 470, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.8,
    reviewCount: 290,
    isBestseller: true,
    isSpecialSignature: true,
    badge: 'Popular Zing',
    ingredients: ['Raw Green Mango Pulp (62%)', 'Sugar', 'Rock Salt (Sendha Namak)', 'Mint Leaves', 'Black Pepper', 'Spices'],
    nutrition: {
      energy: '320 kcal / 100g',
      carbohydrates: '76.8g',
      naturalSugars: '58.5g',
      fat: '0.4g',
      protein: '1.8g',
      dietaryFiber: '3.9g'
    },
    highlights: ['Fresh Harvest Green Kairi', 'Digestive Rock Salt', 'Traditional Recipe', 'Zero Trans Fats'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Keep in an airtight container once opened. Keep in a dry place.'
  },
  {
    id: 'mango-fruit-bar-burfi',
    name: 'Mango Fruit Bar Burfi',
    hindiName: 'मैंगो फ्रूट बार बर्फी',
    tagline: 'Royal Alphonso Mango Pulp Layered into Chewy Dessert Squares',
    category: 'burfi',
    flavor: 'Ripe Alphonso Mango',
    packageTypes: ['Gift Box', 'Carton Box'],
    description: 'Velvety, rich Alphonso mango pulp crafted into golden burfi slabs with a chewy artisanal texture and fragrant cardamom aroma.',
    longDescription: 'A modern dessert innovation by Kataria Foods: all the celebratory delight of traditional Indian burfi crafted entirely with pure Alphonso fruit pulp. Dense, chewy, and melt-in-the-mouth, our Mango Fruit Bar Burfi is loved across tea tables, festive gifting, and sweet connoisseurs.',
    image: mangoBurfiImg,
    fruitPulpPercentage: 70,
    sensoryProfile: {
      tanginess: 2,
      sweetness: 5,
      spiciness: 0
    },
    bestMoments: ['Festive celebrations', 'Chai time accompaniment', 'Gift hampers'],
    packOptions: [
      { weight: '250g Box', price: 135, originalPrice: 160, inStock: true, packageType: 'Gift Box' },
      { weight: '500g Royal Box', price: 260, originalPrice: 310, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Festive Carton', price: 495, originalPrice: 590, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.9,
    reviewCount: 412,
    isBestseller: true,
    isSpecialSignature: true,
    badge: 'Festive Bestseller',
    ingredients: ['Alphonso Mango Pulp (70%)', 'Invert Sugar', 'Liquid Glucose', 'Pectin', 'Cardamom', 'Vegetarian Glaze'],
    nutrition: {
      energy: '345 kcal / 100g',
      carbohydrates: '82.2g',
      naturalSugars: '68.0g',
      fat: '1.1g',
      protein: '1.5g',
      dietaryFiber: '2.8g'
    },
    highlights: ['70% Ratnagiri Alphonso Pulp', 'Gluten Free & Dairy Free', 'Premium Gifting Pack', 'Soft & Chewy Texture'],
    shelfLife: '9 Months from MFD',
    storageInstructions: 'Store in cool and dry ambience. Avoid heat exposure to keep fudge texture optimal.'
  },
  {
    id: 'imli-fruit-bar-burfi',
    name: 'Imli Fruit Bar Burfi',
    hindiName: 'इमली फ्रूट बार बर्फी',
    tagline: 'Artisanal Tangy Tamarind Burfi Cubes with Spiced Sugar Crust',
    category: 'burfi',
    flavor: 'Tangy Tamarind / Imli',
    packageTypes: ['Gift Box', 'Carton Box'],
    description: 'Firm, sliceable tamarind burfi squares coated in mild spice-sugar crystals. A sophisticated celebration of authentic Indian confectionery craft.',
    longDescription: 'Created exclusively by Kataria Foods master confectioners, this treat elevates concentrated tamarind pulp into a sophisticated sweetmeat cube that satisfies sour cravings with authentic Indian candy heritage.',
    image: imliBurfiImg,
    fruitPulpPercentage: 60,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 4,
      spiciness: 2
    },
    bestMoments: ['Digestive after dinner', 'Office desk snacking', 'Family gatherings'],
    packOptions: [
      { weight: '250g Box', price: 130, originalPrice: 155, inStock: true, packageType: 'Gift Box' },
      { weight: '500g Box', price: 250, originalPrice: 295, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Carton', price: 480, originalPrice: 570, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.8,
    reviewCount: 195,
    badge: 'Artisanal Burfi',
    ingredients: ['Tamarind Pulp (60%)', 'Desi Khand / Sugar', 'Black Salt', 'Jeera Powder', 'Pectin', 'Natural Spices'],
    nutrition: {
      energy: '338 kcal / 100g',
      carbohydrates: '80.5g',
      naturalSugars: '63.4g',
      fat: '0.8g',
      protein: '1.9g'
    },
    highlights: ['Digestive Snack after meals', 'No Added Preservatives', 'Firm Chewy Bite', 'Real Fruit Essence'],
    shelfLife: '10 Months from MFD',
    storageInstructions: 'Keep sealed in container at room temperature.'
  },
  {
    id: 'kaccha-mango-fruit-bar-burfi',
    name: 'Kaccha Mango Fruit Bar Burfi',
    hindiName: 'कच्चा आम फ्रूट बर्फी',
    tagline: 'Green Raw Mango Confectionery Squares with Tangy Masala Dust',
    category: 'burfi',
    flavor: 'Cool Pudina & Kairi',
    packageTypes: ['Gift Box', 'Carton Box'],
    description: 'Refreshing tart raw mango burfi cubes dusted with mild chatpata masala. A vibrant culinary experience for your palate.',
    longDescription: 'Crafted with genuine green mango pulp boiled to high density and set into easy-to-snack squares. Perfect for school tiffins, evening chai companions, and travel snacking.',
    image: kacchaMangoBurfiImg,
    fruitPulpPercentage: 60,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 3,
      spiciness: 2
    },
    bestMoments: ['Evening teatime', 'Tangy craving', 'Kids snack'],
    packOptions: [
      { weight: '250g Box', price: 130, originalPrice: 155, inStock: true, packageType: 'Gift Box' },
      { weight: '500g Box', price: 250, originalPrice: 295, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Carton', price: 480, originalPrice: 570, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.7,
    reviewCount: 167,
    ingredients: ['Raw Mango Pulp', 'Sugar', 'Mint Extract', 'Sendha Namak', 'Amchur'],
    nutrition: {
      energy: '325 kcal / 100g',
      carbohydrates: '77.3g',
      naturalSugars: '59.0g',
      fat: '0.5g',
      protein: '1.6g'
    },
    highlights: ['Rich in Fruit Pectin', 'Authentic Green Kairi Sourness', 'Vegetarian Certified', 'Great for All Ages'],
    shelfLife: '10 Months from MFD',
    storageInstructions: 'Store in dry place.'
  },
  {
    id: 'dobull-imli-candy',
    name: 'Dobull Imli Candy (Pet Jar Edition)',
    hindiName: 'डोबल इमली कैंडी',
    tagline: 'Double-Burst Tamarind Drops with Chewy Spiced Center',
    category: 'candies',
    flavor: 'Tangy Tamarind / Imli',
    packageTypes: ['Pouch', 'PET Jar'],
    description: 'The famous Kataria dual-sensation candy: a hard tangy outer shell bursting into an authentic gooey tamarind-cumin core.',
    longDescription: 'Dobull Imli Candy delivers a dual-stage flavor sensation: first the crisp tangy shell, followed by a gooey, rich tamarind-spice core that lingers on your palate. Individually wrapped in airtight protective wrappers.',
    image: dobullImliCandyImg,
    fruitPulpPercentage: 28,
    sensoryProfile: {
      tanginess: 5,
      sweetness: 3,
      spiciness: 2
    },
    bestMoments: ['Car rides & daily travel', 'Post-meal digestive', 'Retail sweet jar staple'],
    packOptions: [
      { weight: '100g Pouch (~35 pcs)', price: 35, originalPrice: 40, inStock: true, packageType: 'Pouch' },
      { weight: '250g PET Jar (~90 pcs)', price: 85, originalPrice: 100, inStock: true, packageType: 'PET Jar' },
      { weight: '500g PET Jar (~180 pcs)', price: 160, originalPrice: 190, inStock: true, packageType: 'PET Jar' },
      { weight: '1kg Family PET Jar', price: 295, originalPrice: 350, inStock: true, packageType: 'PET Jar' }
    ],
    rating: 4.9,
    reviewCount: 520,
    isBestseller: true,
    isSpecialSignature: true,
    badge: 'Mega Bestseller',
    ingredients: ['Sugar', 'Liquid Glucose', 'Concentrated Tamarind Pulp (28%)', 'Kala Namak', 'Jeera', 'Food Grade Acidity Regulators'],
    nutrition: {
      energy: '378 kcal / 100g',
      carbohydrates: '93.5g',
      naturalSugars: '72.0g',
      fat: '0.2g',
      protein: '0.9g'
    },
    highlights: ['Two-Layer Flavor Burst', 'Individual Sealed Wrappers', 'Long Lasting Freshness', 'Popular Retail Favorite'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store jar in cool ambient environment. Keep lid tightly closed.'
  },
  {
    id: 'jet-imli-boom-candy',
    name: 'Jet Imli Boom Candy',
    hindiName: 'जेट इमली बूम कैंडी',
    tagline: 'High-Impact Sour Tamarind Blast for Extreme Tang Lovers',
    category: 'candies',
    flavor: 'Tangy Tamarind / Imli',
    packageTypes: ['Pouch', 'PET Jar'],
    description: 'An explosive tamarind candy packed with spicy black salt and zesty citrus burst that instantly awakens the palate.',
    longDescription: 'Created for true tamarind lovers who crave that electrifying boom! Formulated using dark aged tamarind paste with an intense chatpata kick. A staple in cars, travel bags, and retail checkout counters.',
    image: jetImliBoomImg,
    fruitPulpPercentage: 30,
    sensoryProfile: {
      tanginess: 5,
      sweetness: 2,
      spiciness: 4
    },
    bestMoments: ['Driving alertness', 'Sour candy lovers', 'Quick palate cleanser'],
    packOptions: [
      { weight: '100g Pouch', price: 35, originalPrice: 40, inStock: true, packageType: 'Pouch' },
      { weight: '250g PET Jar', price: 85, originalPrice: 100, inStock: true, packageType: 'PET Jar' },
      { weight: '500g PET Jar', price: 160, originalPrice: 190, inStock: true, packageType: 'PET Jar' },
      { weight: '1kg Bulk Jar', price: 295, originalPrice: 350, inStock: true, packageType: 'PET Jar' }
    ],
    rating: 4.8,
    reviewCount: 310,
    badge: 'Intense Zing',
    ingredients: ['Sugar', 'Tamarind Pulp', 'Liquid Glucose', 'Rock Salt', 'Chili Flakes (mild)', 'Ajwain Infusion'],
    nutrition: {
      energy: '372 kcal / 100g',
      carbohydrates: '92.1g',
      naturalSugars: '70.8g',
      fat: '0.3g',
      protein: '1.0g'
    },
    highlights: ['Explosive Sour Taste', 'Digestive Ajwain & Rock Salt', 'Non-Sticky Formula', 'Great Road Trip Snack'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store in dry place.'
  },
  {
    id: 'dobull-kairi-boom-candy',
    name: 'Dobull Kairi Boom Candy',
    hindiName: 'डोबल कैरी बूम कैंडी',
    tagline: 'Spicy Green Raw Mango Candy with Crunchy Tang Shell',
    category: 'candies',
    flavor: 'Cool Pudina & Kairi',
    packageTypes: ['Pouch', 'PET Jar'],
    description: 'Raw green mango flavor with a heart of chatpata masala. Crisp on the outside, tantalizing on the tongue.',
    longDescription: 'A nostalgic recipe transformed into modern high-barrier packaging. Delivers the authentic taste of raw mango slices dipped in chili-salt from village fairs.',
    image: dobullKairiBoomImg,
    fruitPulpPercentage: 25,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 3,
      spiciness: 3
    },
    bestMoments: ['Summer treat', 'School tiffin', 'Movie night'],
    packOptions: [
      { weight: '100g Pouch', price: 35, originalPrice: 40, inStock: true, packageType: 'Pouch' },
      { weight: '250g PET Jar', price: 85, originalPrice: 100, inStock: true, packageType: 'PET Jar' },
      { weight: '500g PET Jar', price: 160, originalPrice: 190, inStock: true, packageType: 'PET Jar' }
    ],
    rating: 4.8,
    reviewCount: 228,
    ingredients: ['Sugar', 'Liquid Glucose', 'Kairi Concentrated Extract', 'Mint', 'Black Salt', 'Citric Acid'],
    nutrition: {
      energy: '380 kcal / 100g',
      carbohydrates: '94.0g',
      naturalSugars: '73.2g',
      fat: '0.1g',
      protein: '0.5g'
    },
    highlights: ['Refreshing Green Mango Aroma', 'Digestive Rock Salt', 'Children & Adult Favorite'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store in dry place.'
  },
  {
    id: 'aam-papad-toffee',
    name: 'Aam Papad Toffee (Jar Edition)',
    hindiName: 'आम पापड़ टॉफी',
    tagline: 'Chewy Alphonso Mango Pulp Toffees in Resealable Jar',
    category: 'candies',
    flavor: 'Ripe Alphonso Mango',
    packageTypes: ['PET Jar', 'Carton Box'],
    description: 'Individually twist-wrapped bite-sized toffees made from pure mango pulp. Soft, smooth, and non-sticky.',
    longDescription: 'All the rich goodness of sun-cured Aam Papad transformed into handy, non-sticky individual toffee portions. Perfect for carrying in pockets, gifting in hampers, or keeping on office desks.',
    image: aamPapadToffeeImg,
    fruitPulpPercentage: 55,
    sensoryProfile: {
      tanginess: 2,
      sweetness: 5,
      spiciness: 0
    },
    bestMoments: ['Office desk bowl', 'Wedding favors', 'Sweet tooth cravings'],
    packOptions: [
      { weight: '250g PET Jar (~65 pcs)', price: 99, originalPrice: 120, inStock: true, packageType: 'PET Jar' },
      { weight: '500g PET Jar (~130 pcs)', price: 185, originalPrice: 220, inStock: true, packageType: 'PET Jar' },
      { weight: '1kg Bulk Bag', price: 340, originalPrice: 410, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.9,
    reviewCount: 440,
    isBestseller: true,
    badge: 'Popular Snacker',
    ingredients: ['Pure Mango Pulp (55%)', 'Sugar', 'Liquid Glucose', 'Pectin', 'Cardamom Extract'],
    nutrition: {
      energy: '350 kcal / 100g',
      carbohydrates: '84.0g',
      naturalSugars: '66.5g',
      fat: '0.8g',
      protein: '1.2g'
    },
    highlights: ['Non-Sticky Fruit Chew', 'Twist Wrapped Portions', 'Real Fruit Fiber', 'Ideal for Kids'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Keep in cool dry conditions.'
  },
  {
    id: 'mango-fruit-cube-bar',
    name: 'Mango Fruit Cube Bar',
    hindiName: 'मैंगो फ्रूट क्यूब बार',
    tagline: 'Dehydrated Golden Mango Pulp Cubes for Effortless Snacking',
    category: 'fruit-bars',
    flavor: 'Ripe Alphonso Mango',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Precision cut dried mango cubes with a soft jelly-like bite. Rich in natural carotene and tropical aroma.',
    longDescription: 'A modern fruit snack format manufactured using gentle low-temperature drying that locks in natural mango aroma, vitamins, and luscious sweet taste without caramelizing.',
    image: mangoFruitCubesImg,
    fruitPulpPercentage: 75,
    sensoryProfile: {
      tanginess: 2,
      sweetness: 5,
      spiciness: 0
    },
    bestMoments: ['Hiking & sports', 'Morning cereal topping', 'Guilt-free snacking'],
    packOptions: [
      { weight: '150g Pouch', price: 75, originalPrice: 90, inStock: true, packageType: 'Pouch' },
      { weight: '300g Zipper Pack', price: 145, originalPrice: 175, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Bulk Carton', price: 440, originalPrice: 520, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.7,
    reviewCount: 145,
    ingredients: ['Mango Pulp (75%)', 'Organic Sugar', 'Pectin', 'Citric Acid'],
    nutrition: {
      energy: '335 kcal / 100g',
      carbohydrates: '81.0g',
      naturalSugars: '64.0g',
      fat: '0.4g',
      protein: '1.7g'
    },
    highlights: ['Pre-cut Bite Size', 'Clean Finger Snacking', 'High Natural Fiber', 'Rich Tropical Flavor'],
    shelfLife: '10 Months from MFD',
    storageInstructions: 'Reseal zipper pouch after use.'
  },
  {
    id: 'alphonso-royal-aam-papad',
    name: 'Kataria Classic Alphonso Aam Papad',
    hindiName: 'अल्फांसो आम पापड़ (कटारिया क्लासिक)',
    tagline: 'Sun-Drenched 100% Ratnagiri Alphonso Mango Pulp Layers',
    category: 'aam-papad',
    flavor: 'Ripe Alphonso Mango',
    packageTypes: ['Pouch', 'Gift Box', 'Carton Box'],
    description: 'The crowning jewel of Kataria Foods: delicate translucent golden layers of sun-dried Alphonso mango pulp with pure natural sweetness.',
    longDescription: 'Prepared using century-old sun-drying traditions in certified hygienic solar drying chambers. Each layer is gently dried to form thin, glossy, golden sheets of intense Alphonso mango richness.',
    image: alphonsoAamPapadImg,
    fruitPulpPercentage: 85,
    sensoryProfile: {
      tanginess: 2,
      sweetness: 5,
      spiciness: 0
    },
    bestMoments: ['Family dessert', 'Traditional festivals', 'Royal gifting'],
    packOptions: [
      { weight: '200g Pack', price: 115, originalPrice: 135, inStock: true, packageType: 'Pouch' },
      { weight: '400g Fresh Tray', price: 220, originalPrice: 260, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Heritage Slab', price: 490, originalPrice: 590, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 5.0,
    reviewCount: 680,
    isBestseller: true,
    isSpecialSignature: true,
    badge: 'Kataria Gold Heritage',
    ingredients: ['Ratnagiri Alphonso Mango Pulp (85%)', 'Sugar (15%)', 'Natural Saffron hint'],
    nutrition: {
      energy: '340 kcal / 100g',
      carbohydrates: '82.5g',
      naturalSugars: '69.0g',
      fat: '0.5g',
      protein: '1.4g'
    },
    highlights: ['85% Real Alphonso Pulp', 'Solar Dried for Hygiene', 'No Artificial Flavors', 'Traditional Indian Taste'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Keep in an airtight jar in a cool place.'
  },
  {
    id: 'khatela-khatti-masala-aam-papad',
    name: 'Khatela Khatti Masala Aam Papad',
    hindiName: 'खटेला खट्टी मसाला आम पापड़',
    tagline: 'Dark Spicy Kala Aam Papad Infused with Hing & Roasted Spices',
    category: 'aam-papad',
    flavor: 'Spicy Chatpata Masala',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Authentic dark roasted aam papad strips packed with black pepper, asafoetida, cumin, and dry ginger for royal digestive kick.',
    longDescription: 'Known throughout Rajasthan and Gujarat as the ultimate post-meal digestive snack. Slow cooked to deep caramel tones and cured with crushed hing and sea salt.',
    image: khatelaMasalaAamPapadImg,
    fruitPulpPercentage: 72,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 3,
      spiciness: 4
    },
    bestMoments: ['Post-heavy meal digestive', 'Street-food cravings', 'Winter evening munching'],
    packOptions: [
      { weight: '200g Pouch', price: 120, originalPrice: 140, inStock: true, packageType: 'Pouch' },
      { weight: '400g Tray', price: 230, originalPrice: 270, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Bulk Slab', price: 510, originalPrice: 620, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.9,
    reviewCount: 388,
    isBestseller: true,
    badge: 'Spicy Signature',
    ingredients: ['Dry Mango Pulp', 'Sugar', 'Kala Namak', 'Jeera', 'Hing (Asafoetida)', 'Ginger Powder (Sonth)', 'Black Pepper'],
    nutrition: {
      energy: '315 kcal / 100g',
      carbohydrates: '74.2g',
      naturalSugars: '54.0g',
      fat: '0.7g',
      protein: '2.4g'
    },
    highlights: ['Digestive Ayurvedic Herbs', 'Intense Chatpata Kick', 'Zero Preservatives', 'Heritage Recipe'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Keep away from moisture.'
  },
  {
    id: 'pudina-patakha-green-aam-papad',
    name: 'Pudina Patakha Green Aam Papad',
    hindiName: 'पुदीना पटाखा ग्रीन आम पापड़',
    tagline: 'Mint-Infused Raw Kairi Dried Strips with Rock Salt Crust',
    category: 'aam-papad',
    flavor: 'Cool Pudina & Kairi',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Vibrant green sun-dried mango sheets with fresh mint cooling essence and zesty rock salt.',
    longDescription: 'A refreshing twist on classic papad combining mountain mint extract with tart green mango sheets. Savor the cold mint sensation paired with tart sourness.',
    image: pudinaGreenAamPapadImg,
    fruitPulpPercentage: 70,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 3,
      spiciness: 2
    },
    bestMoments: ['Hot summer afternoons', 'After-sports refresher', 'Party snack'],
    packOptions: [
      { weight: '200g Pouch', price: 115, originalPrice: 135, inStock: true, packageType: 'Pouch' },
      { weight: '400g Pack', price: 220, originalPrice: 260, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Slab', price: 490, originalPrice: 580, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.8,
    reviewCount: 215,
    ingredients: ['Raw Mango Pulp (70%)', 'Fresh Mint Extract', 'Sugar', 'Sendha Namak', 'Green Spices'],
    nutrition: {
      energy: '320 kcal / 100g',
      carbohydrates: '76.0g',
      naturalSugars: '56.5g',
      fat: '0.4g',
      protein: '1.9g'
    },
    highlights: ['Natural Mint Coolness', 'Solar Dried Cleanliness', 'Vegetarian Green Dot', 'Zero Trans Fat'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store in dry place.'
  },
  {
    id: 'alphonso-mango-fruit-katli',
    name: 'Royal Alphonso Mango Fruit Katli',
    hindiName: 'रॉयल अल्फांसो मैंगो फ्रूट कतली',
    tagline: 'Diamond Cut Luxury Mango Slices Crafted with Pure Fruit Pulp',
    category: 'katli',
    flavor: 'Ripe Alphonso Mango',
    packageTypes: ['Gift Box', 'Carton Box'],
    description: 'Kataria celebrated diamond cut confectionery: delicate fruit katli with a smooth melt, natural mango fibers, and silver sheen.',
    longDescription: 'An exquisite celebratory sweet created as a guilt-free fruit alternative to traditional mawa katlis. Made exclusively from thick Alphonso pulp reduced to glossy perfection and sliced into elegant diamond facets.',
    image: alphonsoKatliImg,
    fruitPulpPercentage: 78,
    sensoryProfile: {
      tanginess: 2,
      sweetness: 5,
      spiciness: 0
    },
    bestMoments: ['Weddings & anniversaries', 'Diwali & Raksha Bandhan', 'VIP corporate gifting'],
    packOptions: [
      { weight: '250g Gift Box', price: 155, originalPrice: 185, inStock: true, packageType: 'Gift Box' },
      { weight: '500g Luxury Box', price: 295, originalPrice: 350, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Festive Carton', price: 570, originalPrice: 680, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 5.0,
    reviewCount: 418,
    isBestseller: true,
    badge: 'Luxury Kataria',
    ingredients: ['Alphonso Mango Pulp (78%)', 'Sugar', 'Pectin', 'Vegetarian Glaze', 'Kesar (Saffron)'],
    nutrition: {
      energy: '348 kcal / 100g',
      carbohydrates: '83.0g',
      naturalSugars: '68.5g',
      fat: '0.8g',
      protein: '1.5g'
    },
    highlights: ['Authentic Diamond Cut', 'Zero Mawa / 100% Vegan Fruit', 'Festive Gifting Ready', 'Rich Alphonso Aroma'],
    shelfLife: '9 Months from MFD',
    storageInstructions: 'Store in cool place. Avoid direct sunlight.'
  },
  {
    id: 'amla-dry-fruit-katli',
    name: 'Amla Dry Fruit Katli',
    hindiName: 'आंवला ड्राई फ्रूट कतली',
    tagline: 'Immunity Boosting Indian Gooseberry Slices with Almond & Pistachio',
    category: 'katli',
    flavor: 'Natural Jamun & Amla',
    packageTypes: ['Gift Box'],
    description: 'Nutrient-rich candied wild Amla pulp enriched with crushed almonds, pistachios, and green cardamom for vitality.',
    longDescription: 'Combining ancient Ayurvedic wisdom with gourmet confectionery. Each square provides a rich source of natural Vitamin C and bioflavonoids balanced with crunchy dry fruits.',
    image: amlaKatliImg,
    fruitPulpPercentage: 68,
    sensoryProfile: {
      tanginess: 3,
      sweetness: 4,
      spiciness: 1
    },
    bestMoments: ['Morning vitality bite', 'Elderly health sweet', 'Ayurvedic wellness'],
    packOptions: [
      { weight: '250g Box', price: 165, originalPrice: 195, inStock: true, packageType: 'Gift Box' },
      { weight: '500g Box', price: 310, originalPrice: 370, inStock: true, packageType: 'Gift Box' }
    ],
    rating: 4.8,
    reviewCount: 176,
    badge: 'Ayurvedic Goodness',
    ingredients: ['Desi Amla Pulp (68%)', 'Almonds', 'Pistachios', 'Sugar', 'Cardamom', 'Nutmeg'],
    nutrition: {
      energy: '355 kcal / 100g',
      carbohydrates: '72.0g',
      naturalSugars: '51.0g',
      fat: '4.2g',
      protein: '3.6g',
      dietaryFiber: '6.1g'
    },
    highlights: ['Natural Vitamin C Boost', 'Loaded with Real Dry Fruits', 'Strengthens Digestion', 'Pure Vegetarian'],
    shelfLife: '9 Months from MFD',
    storageInstructions: 'Store in airtight box.'
  },
  {
    id: 'jamun-pachak-chips',
    name: 'Jamun Pachak Chips (Sugar-Free)',
    hindiName: 'जामुन पाचक चिप्स (शुगर-फ्री)',
    tagline: '100% Wild Black Plum Dried Strips, Diabetic Friendly with Zero Added Sugar',
    category: 'fruit-bars',
    flavor: 'Natural Jamun & Amla',
    packageTypes: ['Pouch', 'Carton Box'],
    description: 'Pure dehydrated wild Jamun (black plum) strips spiced with black salt and cumin. Specially curated for wellness and sugar management.',
    longDescription: 'Made from high-altitude wild Jamun pulp without any added refined cane sugar. Famous for supporting healthy glycemic balance while serving as a delightful tangy digestive after meals.',
    image: jamunChipsImg,
    fruitPulpPercentage: 92,
    sensoryProfile: {
      tanginess: 4,
      sweetness: 2,
      spiciness: 2
    },
    bestMoments: ['Diabetic-safe indulgence', 'Post-lunch digestive', 'Daily antioxidant boost'],
    packOptions: [
      { weight: '150g Pouch', price: 145, originalPrice: 175, inStock: true, packageType: 'Pouch' },
      { weight: '300g Pouch', price: 275, originalPrice: 330, inStock: true, packageType: 'Pouch' },
      { weight: '1kg Bulk Bag', price: 820, originalPrice: 980, inStock: true, packageType: 'Carton Box' }
    ],
    rating: 4.9,
    reviewCount: 260,
    badge: 'Zero Added Sugar',
    ingredients: ['Wild Jamun Pulp (92%)', 'Rock Salt', 'Roasted Cumin', 'Black Pepper', 'Natural Stevia hint'],
    nutrition: {
      energy: '265 kcal / 100g',
      carbohydrates: '58.0g',
      naturalSugars: '28.0g (Naturally Occurring Fruit Sugar)',
      fat: '0.3g',
      protein: '2.8g',
      dietaryFiber: '8.4g'
    },
    highlights: ['Diabetic Friendly', '0% Added Cane Sugar', 'Rich in Anthocyanin Antioxidants', 'Aids Digestion'],
    shelfLife: '12 Months from MFD',
    storageInstructions: 'Store in dry place.'
  },
  {
    id: 'kataria-royal-gift-box',
    name: 'Kataria Royal Confectionery Gift Box',
    hindiName: 'कटारिया रॉयल कन्फेक्शनरी गिफ्ट बॉक्स',
    tagline: 'Festive Luxury Wooden Hamper with Assorted Aam Papad & Fruit Bars',
    category: 'festive-gift-boxes',
    flavor: 'Assorted Fruit Delights',
    packageTypes: ['Gift Box'],
    description: 'A magnificent festive assortment presenting Kataria signature fruit bars, Alphonso aam papad rolls, and twist-wrapped fruit confections.',
    longDescription: 'Curated for grand celebrations, corporate gifting, and weddings. Encased in an ornate royal blue and gold keepsake box, containing individual sealed compartments of Alphonso Mango Katli, Tamarind Imli Bars, Green Kairi Papads, and festive toffees.',
    image: katariaGiftBoxImg,
    fruitPulpPercentage: 80,
    sensoryProfile: {
      tanginess: 3,
      sweetness: 4,
      spiciness: 2
    },
    bestMoments: ['Diwali gifting', 'Corporate executive presents', 'Family reunion feasts'],
    packOptions: [
      { weight: '500g Assorted Hamper', price: 395, originalPrice: 470, inStock: true, packageType: 'Gift Box' },
      { weight: '1kg Grand Royal Hamper', price: 750, originalPrice: 890, inStock: true, packageType: 'Gift Box' }
    ],
    rating: 5.0,
    reviewCount: 312,
    isBestseller: true,
    badge: 'Luxury Gift Hamper',
    ingredients: ['Alphonso Mango Pulp', 'Tamarind Extract', 'Raw Green Mango Pulp', 'Dry Fruits', 'Natural Spices'],
    nutrition: {
      energy: '338 kcal / 100g',
      carbohydrates: '80.0g',
      naturalSugars: '63.0g',
      fat: '1.2g',
      protein: '2.0g'
    },
    highlights: ['Premium Keepsake Gift Box', 'All 6 Signature Flavors', 'Hermetically Sealed Compartments', 'Perfect Festive Present'],
    shelfLife: '9 Months from MFD',
    storageInstructions: 'Store in a cool and dry place.'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Confectionery', count: 17, icon: 'Sparkles' },
  { id: 'fruit-bars', name: 'Fruit Bars & Slabs', count: 5, icon: 'Layers' },
  { id: 'burfi', name: 'Fruit Burfi', count: 3, icon: 'Square' },
  { id: 'candies', name: 'Imli Candies & Toffees', count: 4, icon: 'Candy' },
  { id: 'aam-papad', name: 'Traditional Aam Papad', count: 3, icon: 'Sun' },
  { id: 'katli', name: 'Royal Katli & Slices', count: 2, icon: 'Gem' },
  { id: 'festive-gift-boxes', name: 'Festive Gift Hampers', count: 1, icon: 'Gift' }
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Retail Distributor, Pune',
    text: 'We have been ordering Kataria Imli Candy and Aam Papad for our 45 retail stores. The packaging is premium, moisture-proof, and the taste is identical to nostalgic village street treats. Customers keep returning for Dobull Imli!',
    rating: 5,
    location: 'Pune, Maharashtra'
  },
  {
    id: 2,
    name: 'Pooja Agarwal',
    role: 'Verified Buyer',
    text: 'Ordered the Mango Fruit Bar Burfi and Khatela Khatti Aam Papad for Diwali gifting. Everyone in the family couldn’t stop praising the authentic sour-sweet balance. The resealable zipper packs keep them super fresh.',
    rating: 5,
    location: 'Ahmedabad, Gujarat'
  },
  {
    id: 3,
    name: 'Mahesh Deshmukh',
    role: 'Sweet Mart Owner',
    text: 'The wholesale pricing tier and fast dispatch directly from the factory is unmatched. The Kaccha Mango Bar and Jet Imli Boom sell out within 3 days at our counter.',
    rating: 5,
    location: 'Kolhapur, Maharashtra'
  }
];
