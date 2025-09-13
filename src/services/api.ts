import type { FoodItem, MenuCategory } from "@/types/menu";

// API configuration
const API_BASE_URL = process.env.VITE_API_BASE_URL || "https://api.omasoliebollen.nl";

// API endpoints
export const API_ENDPOINTS = {
  menu: "/api/menu",
  categories: "/api/categories", 
  orders: "/api/orders",
  locations: "/api/locations"
} as const;

// Fetch wrapper with error handling
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API Request failed for ${endpoint}:`, error);
    throw error;
  }
}

// Menu API functions
export const menuAPI = {
  // Get all menu items
  getMenuItems: async (): Promise<FoodItem[]> => {
    return apiRequest<FoodItem[]>(API_ENDPOINTS.menu);
  },

  // Get menu items by category
  getMenuByCategory: async (categoryId: string): Promise<FoodItem[]> => {
    return apiRequest<FoodItem[]>(`${API_ENDPOINTS.menu}?category=${categoryId}`);
  },

  // Get menu categories
  getCategories: async (): Promise<MenuCategory[]> => {
    return apiRequest<MenuCategory[]>(API_ENDPOINTS.categories);
  },

  // Get single menu item
  getMenuItem: async (itemId: string): Promise<FoodItem> => {
    return apiRequest<FoodItem>(`${API_ENDPOINTS.menu}/${itemId}`);
  }
};

// Order API functions  
export const orderAPI = {
  // Create new order
  createOrder: async (orderData: {
    items: Array<{ itemId: string; quantity: number }>;
    customerInfo: {
      name: string;
      email: string;
      phone: string;
      address?: string;
    };
  }) => {
    return apiRequest(API_ENDPOINTS.orders, {
      method: "POST",
      body: JSON.stringify(orderData),
    });
  },

  // Get order status
  getOrderStatus: async (orderId: string) => {
    return apiRequest(`${API_ENDPOINTS.orders}/${orderId}`);
  }
};

// Location API functions
export const locationAPI = {
  // Get current foodtruck locations
  getCurrentLocations: async () => {
    return apiRequest(`${API_ENDPOINTS.locations}/current`);
  },

  // Get location schedule
  getSchedule: async (date?: string) => {
    const query = date ? `?date=${date}` : "";
    return apiRequest(`${API_ENDPOINTS.locations}/schedule${query}`);
  }
};

// Export all APIs
export const api = {
  menu: menuAPI,
  orders: orderAPI,
  locations: locationAPI
};