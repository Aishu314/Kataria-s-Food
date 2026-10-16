import React, { useState } from 'react';
import { Sparkles, RotateCcw, ShoppingBag, Check } from 'lucide-react';
import { Product, ProductPackOption } from '../types';

interface FlavorQuizProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, pack: ProductPackOption, qty: number) => void;
}

export const FlavorQuiz: React.FC<FlavorQuizProps> = ({
  products,
  onSelectProduct,
  onAddToCart
}) => {
  const [step, setStep] = useState(1);
  const [craving, setCraving] = useState<string>('');
  const [format, setFormat] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);
  const [added, setAdded] = useState(false);

  const CRAVINGS = [
    { id: 'imli', label: 'Tangy Khatta-Meetha Tamarind', icon: '🌿', desc: 'Real tamarind pulp with roasted cumin & rock salt' },
    { id: 'mango', label: 'Luscious Ripe Alphonso Mango', icon: '🥭', desc: 'Sweet, sunny Ratnagiri mango richness' },
    { id: 'kairi', label: 'Tart Green Raw Mango & Mint', icon: '🍃', desc: 'Chatpata kairi slices with cooling pudina' },
    { id: 'spicy', label: 'Spicy Masala Kala Aam Papad', icon: '🌶️', desc: 'Hing, ginger & roasted jeera digestive kick' },
    { id: 'healthy', label: 'Sugar-Free Herbal / Wild Jamun', icon: '🫐', desc: 'Diabetic-friendly pure fruit nutrition' }
  ];

  const FORMATS = [
    { id: 'bar', label: 'Dense Chewy Fruit Bar Slab', icon: '🍫', desc: 'Satisfying thick slabs with pure fruit chew' },
    { id: 'burfi', label: 'Melt-in-mouth Fruit Burfi Cubes', icon: '🧁', desc: 'Artisanal sweet squares for royal snacking' },
    { id: 'candy', label: 'Pocket Candy Drops & Toffee', icon: '🍬', desc: 'Twist-wrapped drops & PET jars for on-the-go' },
    { id: 'papad', label: 'Sun-dried Traditional Sheets', icon: '☀️', desc: 'Delicate sun-cured layered fruit leather' }
  ];

  const handleFinishQuiz = (selectedFormat: string) => {
    setFormat(selectedFormat);
    setStep(3);

    // Matching logic
    let match = products[0];
    if (craving === 'imli') {
      if (selectedFormat === 'candy') match = products.find(p => p.id === 'dobull-imli-candy') || match;
      else if (selectedFormat === 'burfi') match = products.find(p => p.id === 'imli-fruit-bar-burfi') || match;
      else match = products.find(p => p.id === 'imli-fruit-bar') || match;
    } else if (craving === 'mango') {
      if (selectedFormat === 'burfi') match = products.find(p => p.id === 'mango-fruit-bar-burfi') || match;
      else if (selectedFormat === 'papad') match = products.find(p => p.id === 'alphonso-royal-aam-papad') || match;
      else if (selectedFormat === 'candy') match = products.find(p => p.id === 'aam-papad-toffee') || match;
      else match = products.find(p => p.id === 'mango-fruit-cube-bar') || match;
    } else if (craving === 'kairi') {
      if (selectedFormat === 'candy') match = products.find(p => p.id === 'dobull-kairi-boom-candy') || match;
      else if (selectedFormat === 'papad') match = products.find(p => p.id === 'pudina-patakha-green-aam-papad') || match;
      else match = products.find(p => p.id === 'kaccha-mango-fruit-bar') || match;
    } else if (craving === 'spicy') {
      match = products.find(p => p.id === 'khatela-khatti-masala-aam-papad') || match;
    } else if (craving === 'healthy') {
      match = products.find(p => p.id === 'jamun-pachak-chips') || products.find(p => p.id === 'amla-dry-fruit-katli') || match;
    }

    setRecommendedProduct(match);
  };

  const resetQuiz = () => {
    setStep(1);
    setCraving('');
    setFormat('');
    setRecommendedProduct(null);
    setAdded(false);
  };

  return (
    <section id="flavor-finder" className="py-16 bg-gradient-to-br from-amber-100/50 via-orange-50/40 to-amber-50 rounded-3xl border border-amber-200/80 shadow-sm overflow-hidden my-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/10 text-amber-900 border border-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Interactive Flavor Matcher
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-stone-900">
            Find Your Signature Cravings Match
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            Not sure what to try first? Answer 2 quick questions to discover your personalized Kataria Foods delicacy.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            step >= 1 ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-500'
          }`}>1</div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-amber-600' : 'bg-stone-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            step >= 2 ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-500'
          }`}>2</div>
          <div className={`w-12 h-0.5 ${step === 3 ? 'bg-amber-600' : 'bg-stone-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            step === 3 ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-500'
          }`}>✓</div>
        </div>

        {/* Question Step 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h3 className="text-center font-bold text-lg text-stone-800">
              Step 1: What flavor note is calling you right now?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CRAVINGS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCraving(item.id);
                    setStep(2);
                  }}
                  className="p-4 rounded-2xl bg-white border-2 border-amber-200/80 hover:border-amber-500 text-left transition-all hover:scale-[1.02] shadow-xs cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-sm text-stone-900 group-hover:text-amber-700">
                    {item.label}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question Step 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
              >
                ← Back to Flavors
              </button>
              <span className="text-xs text-amber-800 font-bold">Question 2 of 2</span>
            </div>

            <h3 className="text-center font-bold text-lg text-stone-800">
              Step 2: How do you like to enjoy your fruit sweets?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FORMATS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleFinishQuiz(item.id)}
                  className="p-4 rounded-2xl bg-white border-2 border-amber-200/80 hover:border-amber-500 text-left transition-all hover:scale-[1.02] shadow-xs cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-sm text-stone-900 group-hover:text-amber-700">
                    {item.label}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Recommendation Result */}
        {step === 3 && recommendedProduct && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between border-b border-amber-100 pb-4 mb-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ✨ Your Perfect Match Found!
              </span>
              <button
                onClick={resetQuiz}
                className="text-xs text-stone-500 hover:text-amber-800 flex items-center gap-1 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 aspect-square rounded-2xl overflow-hidden bg-amber-50 border border-amber-200">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-8 space-y-3">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  {recommendedProduct.flavor}
                </div>
                <h3 className="font-display font-extrabold text-2xl text-stone-900">
                  {recommendedProduct.name}
                </h3>
                <p className="text-sm text-stone-600">
                  {recommendedProduct.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {recommendedProduct.highlights.map((h, i) => (
                    <span key={i} className="text-xs bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-lg text-amber-900 font-medium">
                      ✓ {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <div className="text-2xl font-black text-stone-900">
                    ₹{recommendedProduct.packOptions[0].price}
                    <span className="text-xs text-stone-500 font-normal ml-1">
                      ({recommendedProduct.packOptions[0].weight})
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(recommendedProduct, recommendedProduct.packOptions[0], 1);
                      setAdded(true);
                      setTimeout(() => setAdded(false), 1500);
                    }}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                      added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95'
                    }`}
                  >
                    {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    <span>{added ? 'Added to Cart!' : 'Add to Cart'}</span>
                  </button>

                  <button
                    onClick={() => onSelectProduct(recommendedProduct)}
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs cursor-pointer transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
