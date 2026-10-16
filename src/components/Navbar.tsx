import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Briefcase,
  PhoneCall,
  Heart
} from 'lucide-react';
import { Product } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWholesale: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenWholesale,
  searchQuery,
  onSearchChange,
  products,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Suggestions for search
  const filteredSuggestions = searchQuery.trim().length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-700 to-red-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 ring-2 ring-amber-400/40 group-hover:scale-105 transition-transform">
                <span className="font-display font-black text-2xl tracking-tighter">KF</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-2xl tracking-tight text-amber-950 group-hover:text-amber-800 transition-colors">
                    Kataria<span className="text-amber-600">Foods</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Est. 2010
                  </span>
                </div>
                <p className="text-[11px] text-amber-800/80 font-medium tracking-wide flex items-center gap-1">
                  <span>Pure Fruit Confectionery</span>
                  <span className="text-amber-400">•</span>
                  <span className="text-amber-700 font-semibold">Jagdamb Specialities</span>
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block relative flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Imli Candy, Aam Papad, Fruit Burfi..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-amber-50/60 border border-amber-200/90 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs bg-amber-100 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Search Suggestions Dropdown */}
            {searchFocused && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-amber-100 py-2 z-50 overflow-hidden">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                  Matching Products ({filteredSuggestions.length})
                </div>
                {filteredSuggestions.map((product) => (
                  <button
                    key={product.id}
                    onMouseDown={() => {
                      onSelectProduct(product);
                      onSearchChange('');
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-amber-50/80 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-10 h-10 object-cover rounded-lg border border-amber-200/50" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-stone-900 truncate">
                        {product.name}
                      </div>
                      <div className="text-xs text-amber-700 flex items-center gap-2">
                        <span>₹{product.packOptions[0].price}</span>
                        <span>•</span>
                        <span className="text-stone-500 truncate">{product.tagline}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <a href="#products" className="hover:text-amber-700 transition-colors">Catalog</a>
            <a href="#flavor-finder" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Flavor Quiz
            </a>
            <a href="#heritage" className="hover:text-amber-700 transition-colors">Our Craft</a>
            <a href="#wholesale" className="hover:text-amber-700 transition-colors flex items-center gap-1 text-amber-900 font-bold">
              <Briefcase className="w-3.5 h-3.5 text-amber-600" /> Wholesale B2B
            </a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Wholesale CTA Button */}
            <button
              onClick={onOpenWholesale}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200/80 border border-amber-300 transition-all cursor-pointer shadow-xs"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-800" />
              <span>Bulk / Dealer</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-2 cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-stone-700 hover:bg-amber-100/60 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search fruit bars, candies, aam papad..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
            <Search className="w-3.5 h-3.5 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-amber-100 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-stone-800">
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50/70 rounded-xl hover:bg-amber-100 transition-colors"
            >
              📦 Product Catalog
            </a>
            <a 
              href="#flavor-finder" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50/70 rounded-xl hover:bg-amber-100 transition-colors"
            >
              ✨ Flavor Quiz
            </a>
            <a 
              href="#heritage" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50/70 rounded-xl hover:bg-amber-100 transition-colors"
            >
              🌿 Factory Craft
            </a>
            <a 
              href="#wholesale" 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWholesale();
              }}
              className="p-3 bg-amber-500/10 text-amber-900 border border-amber-300 rounded-xl hover:bg-amber-100 transition-colors"
            >
              💼 Wholesale & Dealership
            </a>
          </div>

          <div className="pt-2 border-t border-amber-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWholesale();
              }}
              className="w-full py-2.5 rounded-xl bg-amber-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" /> Request Wholesale Price List
            </button>
            <a
              href="https://wa.me/919822054321?text=Hi%20Kataria%20Foods%20Team,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
