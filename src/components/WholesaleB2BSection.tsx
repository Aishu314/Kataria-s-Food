import React, { useState } from 'react';
import { 
  Briefcase, 
  Calculator, 
  CheckCircle2, 
  Phone, 
  Truck, 
  ShieldCheck, 
  Send, 
  FileSpreadsheet
} from 'lucide-react';
import { Product } from '../types';

interface WholesaleProps {
  products: Product[];
}

export const WholesaleB2BSection: React.FC<WholesaleProps> = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || 'imli-fruit-bar');
  const [cartons, setCartons] = useState<number>(10);
  const [businessName, setBusinessName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('Maharashtra');
  const [inquiryType, setInquiryType] = useState('distributor');
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
  
  // Standard packaging assumptions for FMCG candy & fruit bars
  const unitsPerCarton = selectedProduct.category === 'candies' ? 40 : 50; 
  const totalUnits = cartons * unitsPerCarton;
  const retailUnitPrice = selectedProduct.packOptions[0]?.price || 50;
  const retailValue = totalUnits * retailUnitPrice;
  
  // Wholesale discount scale based on carton tiers
  const discountRate = cartons >= 50 ? 0.38 : cartons >= 20 ? 0.32 : 0.25;
  const wholesalePrice = Math.round(retailValue * (1 - discountRate));
  const estimatedSavings = retailValue - wholesalePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `*Kataria Foods - B2B / Wholesale Inquiry*
---------------------------------------
• Business: ${businessName || 'Business Owner'}
• Contact: ${personName || 'Sir/Madam'}
• Phone: ${phone || 'N/A'}
• Location: ${city}, ${stateName}
• Type: ${inquiryType.toUpperCase()}
• Interested Product: ${selectedProduct.name}
• Estimated Order: ${cartons} Cartons (~${totalUnits} Units)
• Est. Wholesale Total: ₹${wholesalePrice.toLocaleString()}

Please send official B2B wholesale rate card & dispatch catalogue.`;
    window.open(`https://wa.me/919822054321?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="wholesale" className="py-16 bg-stone-900 text-stone-100 rounded-3xl overflow-hidden shadow-2xl my-12 border border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" /> B2B & Distributorship Hub
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Direct Factory Wholesale & Super Stockist Network
          </h2>
          <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
            Supply high-margin, fast-moving fruit bars, imli candies, and traditional aam papad to your retail stores, supermarkets, and sweet counters across India directly from Kataria Foods.
          </p>
        </div>

        {/* 2 Column Layout: Calculator & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Carton Calculator */}
          <div className="lg:col-span-6 bg-stone-800/80 rounded-3xl p-6 sm:p-8 border border-stone-700/80 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-700 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Interactive Carton Margin Estimator</h3>
                  <p className="text-xs text-stone-400">Calculate retailer margins and wholesale tiered pricing</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Up to 38% Margins
              </span>
            </div>

            {/* Select Product */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                Select Product Line:
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-600 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              >
                {products.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.packOptions[0]?.weight}) - {p.category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Carton Quantity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-stone-300">Required Master Cartons:</span>
                <span className="text-amber-400 font-extrabold text-base bg-amber-950/60 px-3 py-1 rounded-lg border border-amber-700/50">
                  {cartons} Cartons ({totalUnits.toLocaleString()} units)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={cartons}
                onChange={(e) => setCartons(Number(e.target.value))}
                className="w-full accent-amber-500 bg-stone-700 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>5 Cartons (Trial)</span>
                <span>25 Cartons</span>
                <span>50 Cartons</span>
                <span>100+ Cartons (Distributor)</span>
              </div>
            </div>

            {/* Margin Calculation Output */}
            <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-700 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-stone-800 rounded-xl border border-stone-700">
                  <div className="text-[11px] text-stone-400">Retail Value</div>
                  <div className="text-base font-bold text-stone-200">
                    ₹{retailValue.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-700/40">
                  <div className="text-[11px] text-amber-300">Est. B2B Price</div>
                  <div className="text-lg font-black text-amber-400">
                    ₹{wholesalePrice.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-700/40 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-emerald-300">Your Profit Margin</div>
                  <div className="text-base font-bold text-emerald-400">
                    ₹{estimatedSavings.toLocaleString()} ({Math.round(discountRate * 100)}%)
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-stone-400 flex items-center justify-between pt-1">
                <span>• Packaging: Heavy 5-Ply Corrugated Master Box</span>
                <span>• Dispatch: 24-48 Hours Ex-Factory</span>
              </div>
            </div>

            {/* Direct WhatsApp Action with Calculator Data */}
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Get Instant WhatsApp Wholesale Quote for {cartons} Cartons</span>
            </button>

          </div>

          {/* Right Column: Dealership / Super Stockist Form */}
          <div className="lg:col-span-6 bg-stone-800/80 rounded-3xl p-6 sm:p-8 border border-stone-700/80 shadow-xl">
            
            <div className="border-b border-stone-700 pb-4 mb-6">
              <h3 className="font-bold text-lg text-white">Apply for Kataria Dealership & Distributorship</h3>
              <p className="text-xs text-stone-400">
                Join our network of 350+ distributors across Maharashtra, Gujarat, Rajasthan & beyond.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-stone-900 rounded-2xl border border-emerald-500/40 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-sm text-stone-300">
                  Thank you, <strong>{personName || businessName}</strong>. Our Kataria Foods B2B coordinator will call you within 2 business hours with samples and territory exclusivity details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-xl text-xs font-bold text-stone-200"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Balaji Traders / Sweet Mart"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={personName}
                      onChange={(e) => setPersonName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      WhatsApp / Mobile No. *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      City & District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Kolhapur, Jaipur"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      State *
                    </label>
                    <select
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Goa">Goa</option>
                      <option value="Other">Other State / International</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-300 uppercase block mb-1">
                      Business Type *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-600 text-xs text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="distributor">Super Stockist / Distributor</option>
                      <option value="retailer">Retail Sweet Mart / Kirana</option>
                      <option value="supermarket">Supermarket / Modern Trade</option>
                      <option value="bulk-event">Wedding / Corporate Gifting</option>
                      <option value="export">Export Merchant</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Sample Box & Official Price Catalog</span>
                  </button>
                </div>

              </form>
            )}

            {/* B2B Assurance Badges */}
            <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-stone-700 text-center text-[10px] text-stone-400">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Pan-India Transport</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>GST Tax Invoices</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Damage Replacement</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
