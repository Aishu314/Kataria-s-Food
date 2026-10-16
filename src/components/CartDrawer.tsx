import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Plus, 
  Minus, 
  Truck, 
  Tag, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [isOrderingOnline, setIsOrderingOnline] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPincode, setCustomerPincode] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const freeShippingThreshold = 499;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 49;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const grandTotal = Math.max(0, subtotal - appliedDiscount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = coupon.trim().toUpperCase();
    if (code === 'KATARIA10') {
      const disc = Math.round(subtotal * 0.1);
      setAppliedDiscount(disc);
    } else if (code === 'KATARIA50') {
      setAppliedDiscount(50);
    } else {
      setCouponError('Invalid coupon. Try "KATARIA10" for 10% off');
    }
  };

  const generateWhatsAppOrder = () => {
    let orderText = `*Kataria Foods - Customer Order Inquiry*\n`;
    orderText += `---------------------------------------\n`;
    cart.forEach((item, idx) => {
      orderText += `${idx + 1}. *${item.name}*\n   Pack: ${item.selectedPack.weight} (${item.selectedPack.packageType}) | Qty: ${item.quantity} | Total: ₹${item.totalPrice}\n`;
    });
    orderText += `---------------------------------------\n`;
    orderText += `Subtotal: ₹${subtotal}\n`;
    if (appliedDiscount > 0) orderText += `Coupon Discount: -₹${appliedDiscount}\n`;
    orderText += `Shipping: ${isFreeShipping ? 'FREE' : '₹' + shippingFee}\n`;
    orderText += `*Grand Total: ₹${grandTotal}*\n\n`;
    if (customerName) orderText += `Name: ${customerName}\n`;
    if (customerAddress) orderText += `Delivery Address: ${customerAddress}, Pincode: ${customerPincode}\n`;
    orderText += `Please share payment QR / bank details to confirm dispatch!`;

    window.open(`https://wa.me/919822054321?text=${encodeURIComponent(orderText)}`, '_blank');
  };

  const handleOnlineCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-amber-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-stone-900">Your Fresh Cart</h2>
              <p className="text-xs text-stone-500">{cart.length} unique delicacies</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        {cart.length > 0 && (
          <div className="px-5 py-3 bg-amber-50/90 border-b border-amber-200/70 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Congratulations! You've unlocked FREE Shipping!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-amber-700" />
                    <span>Add <strong>₹{remainingForFreeShipping}</strong> more for <strong>FREE Delivery</strong></span>
                  </span>
                  <span className="font-bold text-amber-800">
                    {Math.round((subtotal / freeShippingThreshold) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {orderConfirmed ? (
            <div className="p-8 text-center space-y-4 my-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-stone-900">
                Order Received!
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Thank you, <strong>{customerName || 'Valued Customer'}</strong>! Your Kataria Foods order reference is <strong>#KF-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our confectionery desk will prepare your fresh batch for dispatch.
              </p>
              <button
                onClick={() => {
                  setOrderConfirmed(false);
                  setIsOrderingOnline(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-stone-900">Your cart is empty</h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Explore our tangy Imli candies, Kaccha Mango bars, and royal fruit katlis to fill your bag!
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-md hover:bg-amber-700 transition-colors cursor-pointer"
              >
                Browse Delicious Products
              </button>
            </div>
          ) : isOrderingOnline ? (
            /* Online Shipping Form */
            <form onSubmit={handleOnlineCheckoutSubmit} className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-amber-100">
                <span className="font-bold text-sm text-stone-900">Delivery Information</span>
                <button
                  type="button"
                  onClick={() => setIsOrderingOnline(false)}
                  className="text-xs text-amber-700 font-semibold hover:underline"
                >
                  ← Back to Items
                </button>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 uppercase block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 uppercase block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98220 XXXXX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 uppercase block mb-1">
                  Complete Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="House/Flat No, Street, Landmark, City"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 uppercase block mb-1">
                  Pincode *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="6-digit Indian PIN code"
                  value={customerPincode}
                  onChange={(e) => setCustomerPincode(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Payment on Dispatch / UPI Confirmation</span>
                </div>
                <p className="text-[11px] text-stone-600">
                  Our dispatch desk will verify your order on WhatsApp & provide instant UPI QR code / COD options.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                Confirm Order (₹{grandTotal})
              </button>
            </form>
          ) : (
            cart.map((item, index) => (
              <div 
                key={`${item.productId}-${item.selectedPack.weight}`}
                className="p-3 bg-stone-50/80 rounded-2xl border border-stone-200/80 flex items-center gap-3 relative group"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-xl border border-amber-100" 
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-stone-900 truncate">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                    {item.selectedPack.weight} ({item.selectedPack.packageType})
                  </div>
                  <div className="text-xs font-black text-amber-700 mt-1">
                    ₹{item.totalPrice}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-stone-200 rounded-lg bg-white p-0.5">
                  <button
                    onClick={() => onUpdateQty(index, item.quantity - 1)}
                    className="w-5 h-5 flex items-center justify-center text-stone-500 hover:text-stone-800"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-xs font-bold text-stone-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQty(index, item.quantity + 1)}
                    className="w-5 h-5 flex items-center justify-center text-stone-500 hover:text-stone-800"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-stone-400 hover:text-red-600 p-1 rounded-md transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && !orderConfirmed && !isOrderingOnline && (
          <div className="p-4 sm:p-5 border-t border-amber-100 bg-amber-50/30 space-y-3">
            
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Coupon: KATARIA10"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full pl-8 pr-2 py-1.5 rounded-xl border border-stone-300 text-xs uppercase font-semibold text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold cursor-pointer"
              >
                Apply
              </button>
            </form>
            {couponError && <p className="text-[10px] text-red-600 font-semibold">{couponError}</p>}
            {appliedDiscount > 0 && (
              <p className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" /> Coupon Applied! Saved ₹{appliedDiscount}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-stone-900">₹{subtotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount</span>
                  <span>-₹{appliedDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="font-bold text-stone-900">
                  {isFreeShipping ? (
                    <span className="text-emerald-700">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-stone-900 pt-2 border-t border-amber-200">
                <span>Total Amount</span>
                <span className="text-lg text-amber-700">₹{grandTotal}</span>
              </div>
            </div>

            {/* Double Checkout Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => setIsOrderingOnline(true)}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={generateWhatsAppOrder}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>1-Click Order on WhatsApp (+91 98220 54321)</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
              <button 
                onClick={onClearCart}
                className="text-stone-400 hover:text-red-600 underline cursor-pointer"
              >
                Clear Cart
              </button>
              <span>100% Secure Factory Fulfillment</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
