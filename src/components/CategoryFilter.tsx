import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Square, 
  Candy, 
  Sun, 
  Gem, 
  Gift,
  Filter, 
  SlidersHorizontal,
  Flame,
  X,
  LayoutGrid,
  List,
  IndianRupee,
  Package,
  Heart
} from 'lucide-react';
import { ProductCategory, PackageType } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  selectedFlavor: string;
  onSelectFlavor: (flavor: string) => void;
  selectedPackageType: string;
  onSelectPackageType: (pkg: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onlySugarFree: boolean;
  onToggleSugarFree: (val: boolean) => void;
  onlyBestsellers: boolean;
  onToggleBestsellers: (val: boolean) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onToggleViewMode: (mode: 'grid' | 'list') => void;
  totalCount: number;
}

const CATEGORY_ITEMS = [
  { id: 'all' as ProductCategory, label: 'All Confectionery', icon: Sparkles },
  { id: 'fruit-bars' as ProductCategory, label: 'Fruit Bars & Slabs', icon: Layers },
  { id: 'burfi' as ProductCategory, label: 'Fruit Bar Burfi', icon: Square },
  { id: 'candies' as ProductCategory, label: 'Imli Candies & Toffee', icon: Candy },
  { id: 'aam-papad' as ProductCategory, label: 'Traditional Aam Papad', icon: Sun },
  { id: 'katli' as ProductCategory, label: 'Royal Katli & Slices', icon: Gem },
  { id: 'festive-gift-boxes' as ProductCategory, label: 'Festive Hampers', icon: Gift },
];

const FLAVORS = [
  'All Flavors',
  'Tangy Tamarind / Imli',
  'Ripe Alphonso Mango',
  'Cool Pudina & Kairi',
  'Spicy Chatpata Masala',
  'Natural Jamun & Amla',
  'Assorted Fruit Delights'
];

const PACKAGE_TYPES = [
  'All Packaging',
  'Pouch',
  'PET Jar',
  'Gift Box',
  'Carton Box'
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedFlavor,
  onSelectFlavor,
  selectedPackageType,
  onSelectPackageType,
  priceRange,
  onPriceRangeChange,
  onlySugarFree,
  onToggleSugarFree,
  onlyBestsellers,
  onToggleBestsellers,
  sortBy,
  onSortChange,
  viewMode,
  onToggleViewMode,
  totalCount
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedFlavor !== 'All Flavors' || 
    selectedPackageType !== 'All Packaging' ||
    onlySugarFree ||
    onlyBestsellers ||
    priceRange[1] < 1000;

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSelectFlavor('All Flavors');
    onSelectPackageType('All Packaging');
    onPriceRangeChange([0, 1000]);
    onToggleSugarFree(false);
    onToggleBestsellers(false);
  };

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_ITEMS.map((item) => {
          const IconComponent = item.icon;
          const isActive = selectedCategory === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-[1.02]'
                  : 'bg-white text-stone-700 hover:bg-amber-50 hover:text-amber-900 border border-amber-200/80'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-100' : 'text-amber-600'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Filter Bar */}
      <div className="bg-white p-4 rounded-3xl border border-amber-200/80 shadow-xs space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Quick Attribute Pills */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Bestseller Filter */}
            <button
              onClick={() => onToggleBestsellers(!onlyBestsellers)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                onlyBestsellers
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Bestsellers</span>
            </button>

            {/* Sugar-Free Filter */}
            <button
              onClick={() => onToggleSugarFree(!onlySugarFree)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                onlySugarFree
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Added Sugar</span>
            </button>

            {/* Flavor Filter Dropdown */}
            <div className="flex items-center gap-1 text-xs">
              <select
                value={selectedFlavor}
                onChange={(e) => onSelectFlavor(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
              >
                {FLAVORS.map(flavor => (
                  <option key={flavor} value={flavor}>
                    {flavor}
                  </option>
                ))}
              </select>
            </div>

            {/* Package Type Dropdown */}
            <div className="flex items-center gap-1 text-xs">
              <select
                value={selectedPackageType}
                onChange={(e) => onSelectPackageType(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
              >
                {PACKAGE_TYPES.map(pkg => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle Advanced Filters (Price Slider) */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                showAdvancedFilters || priceRange[1] < 1000
                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5 text-amber-700" />
              <span>Price Filter {priceRange[1] < 1000 ? `(≤ ₹${priceRange[1]})` : ''}</span>
            </button>

            {/* Reset Filters */}
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 px-2.5 py-1 rounded-xl bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

          </div>

          {/* Right Controls: Sort & Grid/List View Mode */}
          <div className="flex items-center gap-3">
            
            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="pulp-desc">Fruit Pulp: Highest %</option>
              </select>
            </div>

            {/* Grid / List Mode */}
            <div className="flex items-center border border-stone-200 rounded-xl p-0.5 bg-stone-50">
              <button
                onClick={() => onToggleViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onToggleViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs font-semibold text-stone-500 hidden sm:inline">
              <strong>{totalCount}</strong> items
            </span>

          </div>

        </div>

        {/* Collapsible Advanced Price Slider Filter */}
        {showAdvancedFilters && (
          <div className="pt-3 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-1">
            <div className="w-full sm:max-w-md space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-stone-600">Filter by Maximum Price:</span>
                <span className="font-bold text-amber-800 text-sm bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  Up to ₹{priceRange[1]}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="1000"
                step="20"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([0, Number(e.target.value)])}
                className="w-full accent-amber-600 bg-stone-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400">
                <span>₹40 (Small Pouches)</span>
                <span>₹250 (PET Jars & Slabs)</span>
                <span>₹500 (Gift Boxes)</span>
                <span>₹1000 (Bulk 1kg)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onPriceRangeChange([0, 100])}
                className="px-2.5 py-1 text-xs rounded-lg border border-amber-200 hover:bg-amber-50 text-stone-700 cursor-pointer"
              >
                Under ₹100
              </button>
              <button
                onClick={() => onPriceRangeChange([0, 250])}
                className="px-2.5 py-1 text-xs rounded-lg border border-amber-200 hover:bg-amber-50 text-stone-700 cursor-pointer"
              >
                Under ₹250
              </button>
              <button
                onClick={() => onPriceRangeChange([0, 500])}
                className="px-2.5 py-1 text-xs rounded-lg border border-amber-200 hover:bg-amber-50 text-stone-700 cursor-pointer"
              >
                Under ₹500
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
