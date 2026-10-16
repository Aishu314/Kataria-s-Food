import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Square, 
  Candy, 
  Sun, 
  Gem, 
  Filter, 
  SlidersHorizontal,
  Flame,
  X
} from 'lucide-react';
import { ProductCategory, FlavorProfile } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  selectedFlavor: string;
  onSelectFlavor: (flavor: string) => void;
  onlyJagdamb: boolean;
  onToggleJagdamb: (val: boolean) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
}

const CATEGORY_ITEMS = [
  { id: 'all' as ProductCategory, label: 'All Confectionery', icon: Sparkles },
  { id: 'fruit-bars' as ProductCategory, label: 'Fruit Bars & Slabs', icon: Layers },
  { id: 'burfi' as ProductCategory, label: 'Fruit Bar Burfi', icon: Square },
  { id: 'candies' as ProductCategory, label: 'Imli Candies & Toffee', icon: Candy },
  { id: 'aam-papad' as ProductCategory, label: 'Traditional Aam Papad', icon: Sun },
  { id: 'katli' as ProductCategory, label: 'Royal Katli', icon: Gem },
];

const FLAVORS = [
  'All Flavors',
  'Tangy Tamarind / Imli',
  'Ripe Alphonso Mango',
  'Cool Pudina & Kairi',
  'Spicy Chatpata Masala',
  'Natural Jamun & Amla'
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedFlavor,
  onSelectFlavor,
  onlyJagdamb,
  onToggleJagdamb,
  sortBy,
  onSortChange,
  totalCount
}) => {
  const hasActiveFilters = selectedCategory !== 'all' || selectedFlavor !== 'All Flavors' || onlyJagdamb;

  return (
    <div className="space-y-5">
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

      {/* Secondary Controls: Jagdamb Special Filter, Flavor dropdown & Sort */}
      <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-xs flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Jagdamb Special Toggle */}
          <button
            onClick={() => onToggleJagdamb(!onlyJagdamb)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              onlyJagdamb
                ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                : 'bg-orange-50 text-orange-950 border-orange-200 hover:bg-orange-100'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${onlyJagdamb ? 'text-orange-200' : 'text-orange-600'}`} />
            <span>Jagdamb Foods Specials</span>
            {onlyJagdamb && <span className="bg-white text-orange-700 rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-black">✓</span>}
          </button>

          {/* Flavor Profile Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-stone-500 font-medium hidden sm:inline">Flavor:</span>
            <select
              value={selectedFlavor}
              onChange={(e) => onSelectFlavor(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
            >
              {FLAVORS.map(flavor => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filter Button */}
          {hasActiveFilters && (
            <button
              onClick={() => {
                onSelectCategory('all');
                onSelectFlavor('All Flavors');
                onToggleJagdamb(false);
              }}
              className="text-xs text-stone-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Right Info & Sort */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <span className="text-xs font-semibold text-stone-500">
            Showing <strong className="text-stone-900">{totalCount}</strong> items
          </span>

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
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};
