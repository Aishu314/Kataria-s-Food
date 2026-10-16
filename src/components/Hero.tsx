import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Phone, 
  Flame, 
  Award,
  Leaf
} from 'lucide-react';
import { Product } from '../types';
import imliHeroImg from '../assets/images/imli_fruit_bar_1792175041148.jpg';
import candyHeroImg from '../assets/images/dobull_imli_candy_1792175041245.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onOpenWholesale: () => void;
  onSelectProduct: (product: Product) => void;
  featuredProducts: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenWholesale,
  onSelectProduct,
  featuredProducts
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-orange-50/30 to-white pt-6 pb-16 md:pt-12 md:pb-24 border-b border-amber-100/60">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Kataria Foods • 100% Real Fruit Pulp Confectionery</span>
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.15] tracking-tight">
              Real Fruit Bars, Tangy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">Imli Candies</span> & Royal Aam Papad.
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Direct from the artisanal solar-curing kitchens of <strong>Kataria Foods</strong>. Handcrafted with genuine Ratnagiri Alphonso mangoes, fresh Konkan tamarind, Himalayan rock salt, and digestive cumin—zero synthetic gelatin or artificial colors.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-semibold text-stone-700">
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg border border-amber-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Real Tamarind & Mango Extract
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg border border-amber-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> FSSAI Certified Hygienic Facility
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg border border-amber-200 shadow-xs">
                <Leaf className="w-4 h-4 text-emerald-600" /> Pure Vegetarian (Green Dot)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-amber-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Shop Product Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenWholesale}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-amber-50 text-amber-950 font-bold text-sm border-2 border-amber-300 shadow-xs hover:border-amber-400 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Wholesale & B2B Rates</span>
              </button>

              <a
                href="https://wa.me/919822054321?text=Hello%20Kataria%20Foods,%20I%20am%20interested%20in%20ordering%20fresh%20fruit%20bars%20and%20candies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Live Trust Metrics */}
            <div className="pt-6 border-t border-amber-200/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="font-display font-extrabold text-2xl text-stone-900">50K+</div>
                <div className="text-[11px] text-stone-500 font-medium">Delighted Snackers</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-amber-700">17+</div>
                <div className="text-[11px] text-stone-500 font-medium">Artisanal Flavors</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-stone-900 flex items-center justify-center lg:justify-start gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] text-stone-500 font-medium">Customer Rating</div>
              </div>
            </div>

          </div>

          {/* Right Visual Interactive Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative h-96 w-full overflow-hidden bg-amber-100">
                  <img
                    src={imliHeroImg}
                    alt="Authentic Indian Imli Fruit Bar - Pure Tamarind Pulp Slab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-600/95 backdrop-blur-md text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-amber-200" /> #1 Bestseller Imli Bar
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-700/95 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide flex items-center gap-1 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" /> 65% Real Tamarind Pulp
                    </span>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      Kataria Signature Batch
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      Imli Fruit Bar & Alphonso Aam Papad
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                      Slow-cooked authentic tamarind pulp with roasted jeera & sun-ripened Ratnagiri mango slabs.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-extrabold text-amber-400">
                        Starting at ₹45 <span className="text-xs text-stone-300 font-normal line-through">₹55</span>
                      </span>
                      <button
                        onClick={onExploreClick}
                        className="px-3.5 py-1.5 rounded-xl bg-white text-stone-900 text-xs font-bold hover:bg-amber-100 transition-colors cursor-pointer"
                      >
                        Explore Flavors
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Dobull Imli Candy Jar */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3 shadow-xl border border-amber-200 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <img 
                  src={candyHeroImg} 
                  alt="Dobull Imli Candy Jar" 
                  className="w-12 h-12 object-cover rounded-xl border border-amber-200 shadow-xs" 
                />
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-extrabold text-amber-600">
                    Kataria Bestseller
                  </div>
                  <div className="text-xs font-bold text-stone-900">Dobull Imli Candy</div>
                  <div className="text-[10px] text-stone-500">250g & 500g PET Jars</div>
                </div>
              </div>

              {/* Floating Badge 2 - Certified Quality */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-amber-200 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-600" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Hygienic Process</div>
                  <div className="text-xs font-extrabold text-stone-900">Solar Dehydration</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
