import React from 'react';
import { Sun, ShieldCheck, Heart, Award, Sparkles, CheckCircle2, Factory } from 'lucide-react';

export const BrandHeritage: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> The Kataria & Jagdamb Story
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-stone-900 tracking-tight">
            Preserving Indian Confectionery Traditions With Modern Food Safety
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From our family origins in fruit processing to modern hygienic production facilities in Kolhapur and Alwar, we craft pure fruit confections that evoke cherished childhood memories of Indian bazaars.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Solar Dehydration Craft</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We employ hygienic enclosed solar dehydration chambers to slowly evaporate moisture while locking in authentic golden color, fruity aroma, and tender chew.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Zero Artificial Gelatin</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              100% pure vegetarian (green dot). Our fruit bars and candies obtain their luscious structure solely from real fruit pectin, jaggery, and fruit pulp.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Digestive Herbal Spices</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Infused with Ayurvedic spices like roasted cumin, rock salt (Sendha Namak), black pepper, and hing that naturally stimulate digestion after meals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Factory className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Hygienic Packaging</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Packed in food-grade airtight PET jars and moisture-barrier metallized zipper pouches to preserve factory freshness across long journeys.
            </p>
          </div>

        </div>

        {/* Story Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Authentic Collaboration
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Why We Brought Jagdamb Foods Specialities to Kataria Foods
            </h3>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              Our customers loved both brands: the iconic <em>Dobull Imli Candy</em>, <em>Jet Imli Boom</em>, and <em>Kaccha Mango Burfi</em> from Jagdamb Foods, alongside the heritage <em>Aam Papad</em>, <em>Royal Katli</em>, and <em>Fruit Slabs</em> from Kataria Foods. By uniting the entire product catalog under a unified, modern digital platform, customers and wholesale partners can now order every single delicacy in one single cart with seamless factory dispatch.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-amber-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> One Unified Factory Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Consolidated Billing & Bulk Rates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Pan-India Home Delivery
              </span>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
