import React, { useState } from 'react';
import { X, Briefcase, Phone, CheckCircle2, Send } from 'lucide-react';
import { Product } from '../types';

interface WholesaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({
  isOpen,
  onClose,
  products
}) => {
  if (!isOpen) return null;

  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = `*Kataria Foods - B2B Dealership Request*
Business: ${businessName || 'Business Owner'}
Contact: ${contactName || 'Sir/Madam'}
Phone: ${phone}
City: ${city}
Requirement: ${notes || 'Dealer rate list and sample box'}
Please send Kataria price catalog and dealer terms.`;
    window.open(`https://wa.me/919822054321?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-600/30">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-stone-900">
              Wholesale & Distributorship Rates
            </h3>
            <p className="text-xs text-stone-500">
              Direct factory supply for retailers, stockists & bulk gifting
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-lg text-stone-900">
              Request Sent!
            </h4>
            <p className="text-xs text-stone-600">
              We have forwarded your details to our Kataria Foods B2B sales team. You will receive the wholesale catalog PDF via WhatsApp within 30 minutes.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                Store / Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mahavir Sweet Center"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                City / State *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Kolhapur, Maharashtra"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                Products Interested In / Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Dobull Imli Candy Jars (20 cartons) and Aam Papad Toffee"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit & Download Wholesale Price PDF</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Instant WhatsApp B2B Connect (+91 98220 54321)</span>
              </button>
            </div>
          </form>
        )}

      </div>

    </div>
  );
};
