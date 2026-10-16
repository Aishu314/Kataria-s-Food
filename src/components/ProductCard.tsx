import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Eye, 
  Phone, 
  Sparkles, 
  Check, 
  Plus, 
  Minus 
} from 'lucide-react';
import { Product, ProductPackOption } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, pack: ProductPackOption, qty: number) => void;
  onOpenQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenQuickView
}) => {
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedEffect, setAddedEffect] = useState(false);

  const currentPack = product.packOptions[selectedPackIndex] || product.packOptions[0];
  const discountPercent = Math.round(
    ((currentPack.originalPrice - currentPack.price) / currentPack.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart(product, currentPack, qty);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1500);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Kataria Foods! I would like to order:
*${product.name}* (${currentPack.weight})
Quantity: ${qty}
Total Price: ₹${currentPack.price * qty}
Please confirm payment and delivery details.`;
    return `https://wa.me/919822054321?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="group bg-white rounded-3xl border border-amber-200/80 hover:border-amber-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
      
      {/* Top Media Container */}
      <div className="relative aspect-[4/3] bg-amber-50/60 overflow-hidden cursor-pointer" onClick={() => onOpenQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide uppercase shadow-sm ${
              product.badge.includes('Jagdamb')
                ? 'bg-orange-600 text-white'
                : product.badge.includes('Heritage')
                ? 'bg-amber-800 text-amber-100'
                : 'bg-emerald-700 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs w-max">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Veg Green Dot Emblem */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-md shadow-xs flex items-center justify-center">
          <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-xs">
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
          </div>
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-stone-900 text-xs font-bold shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-amber-600" /> Quick View
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Flavor & Category subtitle */}
          <div className="flex items-center justify-between text-xs text-amber-800/90 font-medium mb-1">
            <span className="truncate max-w-[70%] font-semibold">{product.flavor}</span>
            <div className="flex items-center gap-1 text-stone-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400 font-normal text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onOpenQuickView(product)}
            className="font-display font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-700 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {product.hindiName && (
            <p className="text-[11px] text-amber-900/70 font-medium mb-1.5">
              {product.hindiName}
            </p>
          )}

          {/* Short tagline description */}
          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Pack Options Selector Pills */}
          <div className="space-y-1 mb-4">
            <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
              Select Pack Size:
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {product.packOptions.map((pack, idx) => {
                const isSelected = selectedPackIndex === idx;
                return (
                  <button
                    key={pack.weight}
                    type="button"
                    onClick={() => setSelectedPackIndex(idx)}
                    className={`px-2 py-1.5 rounded-xl text-left text-[11px] font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-amber-50 hover:border-amber-300'
                    }`}
                  >
                    <div className="truncate">{pack.weight}</div>
                    <div className={`text-[10px] font-bold ${isSelected ? 'text-amber-100' : 'text-amber-700'}`}>
                      ₹{pack.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-3 border-t border-amber-100/80 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black text-stone-900">
                ₹{currentPack.price * qty}
              </span>
              {currentPack.originalPrice > currentPack.price && (
                <span className="ml-2 text-xs text-stone-400 line-through">
                  ₹{currentPack.originalPrice * qty}
                </span>
              )}
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center border border-amber-200 rounded-xl bg-amber-50/50 p-0.5">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white text-stone-600 transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-xs font-bold text-stone-800">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white text-stone-600 transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-12 gap-2">
            <button
              type="button"
              onClick={handleAdd}
              disabled={addedEffect}
              className={`col-span-8 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                addedEffect
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95 shadow-amber-600/20'
              }`}
            >
              {addedEffect ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Added!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                </>
              )}
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-4 py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
              title="Order directly on WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Order</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
