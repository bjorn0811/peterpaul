import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { FoodItem, MenuCategory } from "@/types/menu";

// Hook for fetching menu items
export const useMenuItems = () => {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: api.menu.getMenuItems,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook for fetching menu categories
export const useMenuCategories = () => {
  return useQuery({
    queryKey: ["menuCategories"],
    queryFn: api.menu.getCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  });
};

// Hook for fetching menu by category
export const useMenuByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["menuByCategory", categoryId],
    queryFn: () => api.menu.getMenuByCategory(categoryId),
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

// Hook for managing cart state
export const useCart = () => {
  const [cartItems, setCartItems] = useState<Array<{
    item: FoodItem;
    quantity: number;
  }>>([]);

  const addToCart = (item: FoodItem, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.item.id === item.id);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      
      return [...prev, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(cartItem => cartItem.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(cartItem =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => 
      total + (cartItem.item.price * cartItem.quantity), 0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };
};

// Hook for managing favorites
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem("oma-favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("oma-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) ? prev : [...prev, itemId]
    );
  };

  const removeFromFavorites = (itemId: string) => {
    setFavorites(prev => prev.filter(id => id !== itemId));
  };

  const toggleFavorite = (itemId: string) => {
    if (favorites.includes(itemId)) {
      removeFromFavorites(itemId);
    } else {
      addToFavorites(itemId);
    }
  };

  const isFavorite = (itemId: string) => {
    return favorites.includes(itemId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  };
};