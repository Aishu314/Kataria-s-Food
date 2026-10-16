import React, { useState, useEffect, useMemo } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { FlavorQuiz } from './components/FlavorQuiz';
import { WholesaleB2BSection } from './components/WholesaleB2BSection';
import { BrandHeritage } from './components/BrandHeritage';
import { CustomerReviews } from './components/CustomerReviews';
import { CartDrawer } from './components/CartDrawer';
import { WholesaleModal } from './components/WholesaleModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, ProductPackOption, CartItem } from './types';
import { 
  Sparkles, 
  Flame, 
  MessageCircle, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  Award,
  ArrowUp
} from 'lucide-react';

export default function App() {
  // Persistence for cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kataria_foods_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kataria_foods_cart', JSON.stringify(cart));
    } catch {
      // storage error ignored
    }
  }, [cart]);

  // Robust Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedFlavor, setSelectedFlavor] = useState('All Flavors');
  const [selectedPackageType, setSelectedPackageType] = useState('All Packaging');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [onlySugarFree, setOnlySugarFree] = useState(false);
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Modal & Drawer state
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, pack: ProductPackOption, qty: number) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === product.id && item.selectedPack.weight === pack.weight
      );
      if (existingIdx > -1) {
        const next = [...prev];
        const newQty = next[existingIdx].quantity + qty;
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: newQty,
          totalPrice: newQty * pack.price
        };
        return next;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            image: product.image,
            selectedPack: pack,
            quantity: qty,
            totalPrice: pack.price * qty
          }
        ];
      }
    });

    showToast(`Added ${qty}x ${product.name} (${pack.weight}) to cart!`);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        quantity: newQty,
        totalPrice: newQty * next[index].selectedPack.price
      };
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart cleared');
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Flavor filter
      if (selectedFlavor !== 'All Flavors' && item.flavor !== selectedFlavor) {
        return false;
      }
      // Package Type filter
      if (selectedPackageType !== 'All Packaging' && !item.packageTypes.includes(selectedPackageType as any)) {
        return false;
      }
      // Price range filter (checking lowest pack price)
      const lowestPrice = item.packOptions[0]?.price || 0;
      if (lowestPrice > priceRange[1]) {
        return false;
      }
      // Sugar Free filter
      if (onlySugarFree && item.badge !== 'Zero Added Sugar') {
        return false;
      }
      // Bestseller filter
      if (onlyBestsellers && !item.isBestseller) {
        return false;
      }
      // Multi-attribute search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesHindi = item.hindiName?.toLowerCase().includes(q) || false;
        const matchesFlavor = item.flavor.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesIngredient = item.ingredients.some(ing => ing.toLowerCase().includes(q));
        return matchesName || matchesDesc || matchesHindi || matchesFlavor || matchesCategory || matchesIngredient;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.packOptions[0].price - b.packOptions[0].price;
      }
      if (sortBy === 'price-desc') {
        return b.packOptions[0].price - a.packOptions[0].price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'pulp-desc') {
        return b.fruitPulpPercentage - a.fruitPulpPercentage;
      }
      // Default: bestsellers first
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [
    selectedCategory, 
    selectedFlavor, 
    selectedPackageType, 
    priceRange, 
    onlySugarFree, 
    onlyBestsellers, 
    searchQuery, 
    sortBy
  ]);

  const scrollToCatalog = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#292524] selection:bg-amber-200 selection:text-amber-900">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Announcement Header */}
      <AnnouncementBar onOpenWholesale={() => setIsWholesaleOpen(true)} />

      {/* 2. Sticky Navbar */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProductForModal(p)}
      />

      {/* 3. Hero Section */}
      <Hero
        onExploreClick={scrollToCatalog}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onSelectProduct={(p) => setSelectedProductForModal(p)}
        featuredProducts={PRODUCTS.filter((p) => p.isBestseller)}
      />

      {/* 4. Trust Assurance Strip */}
      <section className="bg-amber-50/70 border-b border-amber-200/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">FSSAI Certified</h4>
                <p className="text-[11px] text-stone-500">Lic. 11520038000124</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">100% Real Fruit Pulp</h4>
                <p className="text-[11px] text-stone-500">Zero Artificial Gelatin</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-orange-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Solar Cured Craft</h4>
                <p className="text-[11px] text-stone-500">Hygienic Dehydration</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Direct Factory Dispatch</h4>
                <p className="text-[11px] text-stone-500">Kolhapur & Alwar Kitchens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Main Product Catalog Section */}
      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-8">
        
        {/* Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-200/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-orange-600" /> Kataria Foods Catalog
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900">
              Fresh Batches & Artisanal Confectionery
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl">
              Explore authentic Imli Fruit Bars, Kaccha Mango Burfi, Dobull Imli Candy Jars, and Royal Alphonso Aam Papad crafted with 100% natural fruit pulp.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500">
              Factory Fresh Batch • Dispatched Daily
            </span>
          </div>
        </div>

        {/* Robust Category & Attribute Filter Controls */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedFlavor={selectedFlavor}
          onSelectFlavor={setSelectedFlavor}
          selectedPackageType={selectedPackageType}
          onSelectPackageType={setSelectedPackageType}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          onlySugarFree={onlySugarFree}
          onToggleSugarFree={setOnlySugarFree}
          onlyBestsellers={onlyBestsellers}
          onToggleBestsellers={setOnlyBestsellers}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          totalCount={filteredProducts.length}
        />

        {/* Product Display: Grid or List */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-amber-200 space-y-3">
            <div className="text-4xl">🔍</div>
            <h3 className="font-display font-bold text-xl text-stone-900">No products match your criteria</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              We couldn't find any treats matching your current search or filters. Try adjusting your price range or clearing filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedFlavor('All Flavors');
                setSelectedPackageType('All Packaging');
                setPriceRange([0, 1000]);
                setOnlySugarFree(false);
                setOnlyBestsellers(false);
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'list' ? (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onOpenQuickView={(p) => setSelectedProductForModal(p)}
                viewMode="list"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onOpenQuickView={(p) => setSelectedProductForModal(p)}
                viewMode="grid"
              />
            ))}
          </div>
        )}

        {/* 6. Interactive Flavor Quiz Section */}
        <FlavorQuiz
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProductForModal(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Wholesale B2B Section */}
        <WholesaleB2BSection products={PRODUCTS} />

        {/* 8. Brand Heritage & Craftsmanship */}
        <BrandHeritage />

        {/* 9. Verified Customer Reviews */}
        <CustomerReviews />

      </main>

      {/* 10. Footer */}
      <Footer onOpenWholesale={() => setIsWholesaleOpen(true)} />

      {/* Slide-in Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Wholesale Modal */}
      <WholesaleModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
        products={PRODUCTS}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919822054321?text=Hi%20Kataria%20Foods%20Team!%20I%20want%20to%20inquire%20about%20your%20fresh%20fruit%20bars%20and%20candies."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">
          WhatsApp Order Desk
        </span>
      </a>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur border border-amber-300 text-stone-700 hover:bg-amber-100 p-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-amber-700" />
        </button>
      )}

    </div>
  );
}
