"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, change: number) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // ✅ Save cart to localStorage on cart change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p._id === item._id);
      if (existing) {
        return prevCart.map((p) =>
          p._id === item._id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prevCart, item];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
