import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Info, 
  Sparkles, 
  Check, 
  Plus, 
  Minus,
  Truck,
  RotateCcw
} from 'lucide-react';
import { Product, ProductPackOption } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, pack: ProductPackOption, qty: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const pack = product.packOptions[selectedPackIndex] || product.packOptions[0];
  const allImages = [product.image, ...(product.additionalImages || [])];

  const handleAdd = () => {
    onAddToCart(product, pack, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const whatsAppUrl = `https://wa.me/919822054321?text=${encodeURIComponent(
    `Hello Kataria Foods, I want to purchase:\nProduct: *${product.name}*\nPack Size: ${pack.weight}\nQuantity: ${qty}\nTotal: ₹${pack.price * qty}\nPlease guide me on dispatch & payment.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-amber-200/80 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Media Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-amber-50 border border-amber-200/80">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-600 text-white shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-amber-600 scale-95' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees */}
            <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/70 space-y-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Direct factory dispatch within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Shelf life: <strong>{product.shelfLife}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Real fruit extract • FSSAI Approved</span>
              </div>
            </div>
          </div>

          {/* Right Product Specification Column */}
          <div className="md:col-span-7 space-y-5">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-1">
                <span>{product.flavor}</span>
                <span>•</span>
                <span className="capitalize">{product.category.replace('-', ' ')}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 leading-tight">
                {product.name}
              </h2>

              {product.hindiName && (
                <p className="text-sm text-amber-900/80 font-bold mt-0.5">
                  {product.hindiName}
                </p>
              )}

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-lg text-amber-950 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-stone-500">
                  {product.reviewCount} customer reviews
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> In Stock
                </span>
              </div>
            </div>

            {/* Full Story Description */}
            <p className="text-sm text-stone-600 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Pack Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Choose Packaging / Weight:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.packOptions.map((opt, idx) => {
                  const isSel = selectedPackIndex === idx;
                  return (
                    <button
                      key={opt.weight}
                      type="button"
                      onClick={() => setSelectedPackIndex(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSel
                          ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                          : 'bg-white text-stone-800 border-stone-200 hover:border-amber-400'
                      }`}
                    >
                      <div className="text-xs font-semibold truncate">{opt.weight}</div>
                      <div className={`text-sm font-black mt-0.5 ${isSel ? 'text-amber-100' : 'text-amber-700'}`}>
                        ₹{opt.price}
                      </div>
                      <div className={`text-[10px] ${isSel ? 'text-amber-200' : 'text-stone-400'}`}>
                        {opt.packageType}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price & Quantity Calculation Bar */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-stone-500">Total Payable</div>
                <div className="text-2xl font-black text-stone-900">
                  ₹{pack.price * qty}
                  {pack.originalPrice > pack.price && (
                    <span className="ml-2 text-sm text-stone-400 line-through font-normal">
                      ₹{pack.originalPrice * qty}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-amber-300 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-amber-50 text-stone-700 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-extrabold text-stone-900">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-amber-50 text-stone-700 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>

            {/* WhatsApp Direct Option */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Order this directly on WhatsApp (+91 98220 54321)</span>
            </a>

            {/* Ingredients & Nutritional Facts Breakdown */}
            <div className="border-t border-amber-200/80 pt-4 space-y-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  Ingredients:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="px-2.5 py-1 bg-stone-100 rounded-lg text-xs font-medium text-stone-800">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  Nutritional Value (Approx per 100g):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-100">
                    <span className="text-stone-400 block text-[10px]">Energy</span>
                    <strong className="text-stone-900">{product.nutrition.energy}</strong>
                  </div>
                  <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-100">
                    <span className="text-stone-400 block text-[10px]">Carbohydrates</span>
                    <strong className="text-stone-900">{product.nutrition.carbohydrates}</strong>
                  </div>
                  <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-100">
                    <span className="text-stone-400 block text-[10px]">Natural Sugars</span>
                    <strong className="text-stone-900">{product.nutrition.naturalSugars}</strong>
                  </div>
                  <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-100">
                    <span className="text-stone-400 block text-[10px]">Protein</span>
                    <strong className="text-stone-900">{product.nutrition.protein}</strong>
                  </div>
                </div>
              </div>

              {/* Storage */}
              <div className="text-xs text-stone-500 flex items-start gap-1.5 bg-stone-50 p-2.5 rounded-xl">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{product.storageInstructions}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
