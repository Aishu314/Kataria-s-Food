import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Heart, 
  Send, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export const Footer: React.FC<{ onOpenWholesale: () => void }> = ({ onOpenWholesale }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-amber-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Bar */}
        <div className="bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-stone-900 rounded-3xl p-6 sm:p-10 border border-amber-800/50 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Direct Factory Club
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Get 10% Off Your First Order
            </h3>
            <p className="text-xs text-stone-400">
              Receive seasonal harvest alerts for fresh Alphonso batches and Jagdamb candy arrivals. Use code: <strong className="text-amber-300">KATARIA10</strong>
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-950/40 px-5 py-3 rounded-2xl border border-emerald-600/40">
              <CheckCircle className="w-5 h-5" />
              <span>Coupon Code 'KATARIA10' activated!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[240px]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-white font-display font-black text-xl shadow-md">
                KF
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white">
                  Kataria<span className="text-amber-500">Foods</span>
                </span>
                <p className="text-[10px] text-amber-400 font-medium">Kataria Grah Udyog & Jagdamb Specialities</p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              India's authentic manufacturer of real fruit pulp confectionery, sun-cured Aam Papad, tangy Imli candies, Kaccha Mango burfi, and natural wellness snacks since 2010.
            </p>

            <div className="flex flex-col gap-1 text-[11px] text-stone-400 pt-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>FSSAI Lic. No: <strong>11520038000124</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>ISO 22000 Certified Hygienic Facility</span>
              </div>
            </div>
          </div>

          {/* Quick Catalog Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Imli Fruit Bars</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Mango Fruit Burfi</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Dobull Imli Candy</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Jet Imli Boom</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Alphonso Aam Papad</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Sugar-Free Jamun</a></li>
            </ul>
          </div>

          {/* Business & Wholesale */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              B2B & Dealership
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={onOpenWholesale} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Wholesale Price Calculator
                </button>
              </li>
              <li>
                <button onClick={onOpenWholesale} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Request Free Sample Box
                </button>
              </li>
              <li><a href="#heritage" className="hover:text-amber-400 transition-colors">Manufacturing & Solar Craft</a></li>
              <li><a href="#flavor-finder" className="hover:text-amber-400 transition-colors">Flavor Match Quiz</a></li>
              <li>
                <a 
                  href="https://wa.me/919822054321?text=Hi%20Kataria%20Foods,%20I%20am%20interested%20in%20becoming%20a%20distributor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-400 font-semibold"
                >
                  <Phone className="w-3 h-3" /> WhatsApp B2B Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Contact Hubs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Factory & Dispatch Units
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Kolhapur Hub (Jagdamb Unit):</strong> Near Mirajkar Tikti, Kolhapur, Maharashtra - 416012
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Alwar Unit (Kataria Foods):</strong> Industrial Confectionery Area, Alwar, Rajasthan - 301001
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Helpline: +91 98220 54321</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>orders@thekatariafoods.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Kataria Foods & Jagdamb Confectionery Specialities. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Vegetarian (Green Dot)</span>
            <span>•</span>
            <span>FSSAI Compliant</span>
            <span>•</span>
            <span>Proudly Made in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
