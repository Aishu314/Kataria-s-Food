import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Rating Overview */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-amber-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-xl text-stone-900">4.9 out of 5</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Loved by Snackers & Sweet Marts Across India
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Based on 2,400+ verified retail and wholesale customer orders from Kataria Foods.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80">
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-900">98%</span>
              <span className="text-[11px] font-semibold text-stone-600">Repeat Orders</span>
            </div>
            <div className="w-px h-8 bg-amber-300" />
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-900">15+</span>
              <span className="text-[11px] font-semibold text-stone-600">States Reached</span>
            </div>
            <div className="w-px h-8 bg-amber-300" />
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-900">100%</span>
              <span className="text-[11px] font-semibold text-stone-600">Pure Veg</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-stone-50/60 p-6 rounded-3xl border border-amber-200/60 flex flex-col justify-between hover:border-amber-300 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Order
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100/60 mt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-stone-900">{t.name}</div>
                  <div className="text-[11px] text-amber-800 font-medium">{t.role}</div>
                </div>
                <div className="text-[10px] text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
