import React from 'react';
import { Truck, Phone, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC<{ onOpenWholesale: () => void }> = ({ onOpenWholesale }) => {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-amber-50 text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-700/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-400" /> Factory Fresh
          </span>
          <span className="font-medium">
            Direct from Kataria Foods & Jagdamb Confectionery Hub • Free Delivery on orders over ₹499
          </span>
        </div>

        <div className="hidden md:flex items-center gap-5 text-xs text-amber-200">
          <button 
            onClick={onOpenWholesale}
            className="hover:text-white transition-colors underline underline-offset-2 font-medium cursor-pointer"
          >
            Distributor & Wholesale Enquiries
          </button>
          <span className="text-amber-500">•</span>
          <a 
            href="https://wa.me/919822054321?text=Hi%20Kataria%20Foods,%20I%20would%20like%20to%20inquire%20about%20your%20products" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Orders: +91 98220 54321
          </a>
        </div>
      </div>
    </div>
  );
};
