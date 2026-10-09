"use client";

import React from "react";
import Image from "next/image";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { STORE_INFO } from "@/data/products";

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 1500;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = "";
    cart.forEach((item, index) => {
      const productSlug = item.slug || item.id;
      itemsList += `${index + 1}. *${item.name}*\n   Flavor: ${item.flavor || "Default"} | Qty: ${item.quantity} | ₹${(item.price * item.quantity).toLocaleString("en-IN")}\n   Link: https://vapeshopdelhi.com/product/${productSlug}\n\n`;
    });

    const message =
      `*NEW CART ORDER - VAPE SHOP DELHI*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 *Items Ordered:*\n\n${itemsList}` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *Subtotal:* ₹${subtotal.toLocaleString("en-IN")}\n` +
      `🚚 *Delivery:* ${isFreeDelivery ? "FREE (30-60 Min Express)" : `₹${deliveryFee}`}\n` +
      `💵 *Grand Total:* ₹${grandTotal.toLocaleString("en-IN")}\n` +
      `💳 *Payment:* Cash on Delivery (COD) / UPI on Delivery\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📍 *Customer Delivery Details:*\n` +
      `• Name:\n` +
      `• Delivery Address:\n` +
      `• Area / Colony in Delhi:\n` +
      `• Phone Number:\n\n` +
      `⚡ Please dispatch order for express 30-60 min delivery across Delhi!`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full sm:rounded-l-[28px] overflow-hidden transform transition-all duration-300">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-orange-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shadow-xs">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">Your Cart</h2>
                  <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                    {totalItems}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Delhi &amp; Delhi NCR Express Delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">Your cart is empty</h3>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Explore our authentic vape pods, disposables, and juices in Delhi!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 py-2.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.flavor}`}
                      className="group p-3.5 rounded-3xl border border-orange-100/90 bg-white hover:border-orange-300 shadow-sm hover:shadow-md transition-all flex gap-3.5 items-center"
                    >
                      {/* Product Image */}
                      <div className="relative h-18 w-18 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden shrink-0 shadow-2xs">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={`${item.name} | Vape Shop Delhi`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            Vape
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                            {item.brand || "VAPE"}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id, item.flavor)}
                            className="text-slate-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-1">
                          {item.name}
                        </h4>

                        <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                          Flavor: <span className="text-orange-600 font-semibold">{item.flavor}</span>
                        </p>

                        <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-slate-100">
                          <span className="text-sm font-bold text-slate-900">
                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                          </span>

                          {/* Stepper */}
                          <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden p-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.flavor, -1)}
                              className="w-7 h-7 rounded-xl hover:bg-white text-slate-600 hover:text-orange-600 flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-slate-900 min-w-6 text-center select-none">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.flavor, 1)}
                              className="w-7 h-7 rounded-xl hover:bg-white text-slate-600 hover:text-orange-600 flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Trust Highlights */}
                <div className="mt-4 p-3.5 rounded-3xl bg-orange-50/70 border border-orange-200/80 space-y-1.5 text-slate-700">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-orange-900">
                    <Truck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Instant dispatch within <strong>30-60 mins</strong> across Delhi</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-orange-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span><strong>100% Genuine</strong> sealed packs with authenticity warranty</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-white space-y-3 shrink-0 shadow-lg rounded-t-3xl">
              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Fee</span>
                  <span className={`font-bold ${deliveryFee === 0 ? "text-orange-600" : "text-slate-900"}`}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-base font-bold text-slate-900 pt-2 border-t border-dashed border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-slate-900 font-extrabold text-lg">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-5 rounded-3xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-[0.99] shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2.5 cursor-pointer transition-all"
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span>Checkout via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                ⚡ Cash on Delivery / UPI on Delivery • Express Delhi Dispatch
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
