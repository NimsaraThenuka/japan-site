/**
 * API Service Layer
 * 
 * BACKEND INTEGRATION INSTRUCTIONS:
 * Replace these mock functions with actual API calls to your backend.
 * Each function includes comments showing the expected request/response structure.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory?: string; // Added for jewelry subcategories
  image: string;
  stock: number;
  rating: number;
  reviews: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    description: 'Elegant 18k white gold solitaire ring with 1.5 carat diamond',
    price: 5999,
    category: 'jewelry',
    subCategory: 'rings',
    image: 'https://images.unsplash.com/photo-1739591414031-edd27896c8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY4ODY2MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 5,
    rating: 4.9,
    reviews: 128
  },
  {
    id: '2',
    name: 'Ruby Pendant Necklace',
    description: 'Stunning ruby pendant with diamond accents on 14k gold chain',
    price: 3499,
    category: 'jewelry',
    subCategory: 'necklaces',
    image: 'https://images.unsplash.com/photo-1551122102-63cd339bfaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJ5JTIwZ2Vtc3RvbmV8ZW58MXx8fHwxNzY4ODc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 8,
    rating: 4.8,
    reviews: 95
  },
  {
    id: '3',
    name: 'Emerald Drop Earrings',
    description: 'Exquisite emerald earrings set in platinum',
    price: 4299,
    category: 'jewelry',
    subCategory: 'earrings',
    image: 'https://images.unsplash.com/photo-1623449567043-e0cad8ee793a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwamV3ZWxyeXxlbnwxfHx8fDE3Njg4ODA2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 6,
    rating: 4.7,
    reviews: 73
  },
  {
    id: '4',
    name: 'Sapphire Tennis Bracelet',
    description: 'Classic tennis bracelet featuring brilliant blue sapphires',
    price: 2899,
    category: 'jewelry',
    subCategory: 'bracelets',
    image: 'https://images.unsplash.com/photo-1705575472028-d92d0bba6608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMHN0b25lfGVufDF8fHx8MTc2ODg4MDY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 12,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '5',
    name: 'Pearl Strand Necklace',
    description: 'Luxurious freshwater pearl necklace with gold clasp',
    price: 1799,
    category: 'jewelry',
    subCategory: 'necklaces',
    image: 'https://images.unsplash.com/photo-1761042118251-61730841e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMG5lY2tsYWNlJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODgzOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 15,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '6',
    name: 'Gold Bangle Set',
    description: 'Set of three 22k gold bangles with intricate design',
    price: 2299,
    category: 'jewelry',
    subCategory: 'bracelets',
    image: 'https://images.unsplash.com/photo-1650389236412-e7413cbcf2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMHN0b3JlfGVufDF8fHx8MTc2ODg4MDcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 20,
    rating: 4.8,
    reviews: 112
  },
  {
    id: '7',
    name: 'Custom Diamond Ring',
    description: 'Bespoke engagement ring with your choice of diamond',
    price: 7999,
    category: 'jewelry',
    subCategory: 'rings',
    image: 'https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY4ODgwNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 3,
    rating: 5.0,
    reviews: 45
  },
  {
    id: '8',
    name: 'Amethyst Cluster Earrings',
    description: 'Unique amethyst gemstone cluster earrings in silver setting',
    price: 899,
    category: 'jewelry',
    subCategory: 'earrings',
    image: 'https://images.unsplash.com/photo-1609619742069-f5e18afeef17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzY4ODgwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 18,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '9',
    name: 'Raw Ruby Gemstone',
    description: 'Natural uncut ruby gemstone, 15 carats',
    price: 2500,
    category: 'gems',
    image: 'https://images.unsplash.com/photo-1551122102-63cd339bfaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJ5JTIwZ2Vtc3RvbmV8ZW58MXx8fHwxNzY4ODc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 10,
    rating: 4.9,
    reviews: 34
  },
  {
    id: '10',
    name: 'Blue Sapphire Gem',
    description: 'Premium quality blue sapphire, 10 carats',
    price: 3200,
    category: 'gems',
    image: 'https://images.unsplash.com/photo-1705575472028-d92d0bba6608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMHN0b25lfGVufDF8fHx8MTc2ODg4MDY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 7,
    rating: 4.8,
    reviews: 28
  },
  {
    id: '11',
    name: 'Emerald Gemstone',
    description: 'Natural emerald, 12 carats with excellent clarity',
    price: 4500,
    category: 'gems',
    image: 'https://images.unsplash.com/photo-1623449567043-e0cad8ee793a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwamV3ZWxyeXxlbnwxfHx8fDE3Njg4ODA2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 5,
    rating: 5.0,
    reviews: 41
  },
];

// =============================================================================
// PRODUCT APIs
// =============================================================================

/**
 * Fetch all products with optional filters
 * 
 * BACKEND: Replace with: GET /api/products?category={category}&search={search}
 */
export const fetchProducts = async (category?: string, search?: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filtered = [...mockProducts];
  
  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  return filtered;
};

/**
 * Fetch a single product by ID
 * 
 * BACKEND: Replace with: GET /api/products/{id}
 */
export const fetchProductById = async (id: string): Promise<Product | null> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockProducts.find(p => p.id === id) || null;
};

/**
 * Create a new product (Admin only)
 * 
 * BACKEND: Replace with: POST /api/admin/products
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newProduct = { ...product, id: Date.now().toString() };
  mockProducts.push(newProduct);
  return newProduct;
};

/**
 * Update an existing product (Admin only)
 * 
 * BACKEND: Replace with: PUT /api/admin/products/{id}
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockProducts.findIndex(p => p.id === id);
  if (index !== -1) {
    mockProducts[index] = { ...mockProducts[index], ...updates };
    return mockProducts[index];
  }
  throw new Error('Product not found');
};

/**
 * Delete a product (Admin only)
 * 
 * BACKEND: Replace with: DELETE /api/admin/products/{id}
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const deleteProduct = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const index = mockProducts.findIndex(p => p.id === id);
  if (index !== -1) {
    mockProducts.splice(index, 1);
  }
};

// =============================================================================
// AUTH APIs
// =============================================================================

/**
 * Login user
 * 
 * BACKEND: Replace with: POST /api/auth/login
 * Body: { email, password }
 * Response: { user, token }
 */
export const login = async (email: string, password: string): Promise<{ user: User; token: string }> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock authentication
  const user: User = {
    id: '1',
    email,
    name: email.split('@')[0],
    role: email.includes('admin') ? 'admin' : 'customer'
  };
  
  return {
    user,
    token: 'mock-jwt-token-' + Date.now()
  };
};

/**
 * Register new user
 * 
 * BACKEND: Replace with: POST /api/auth/register
 * Body: { email, password, name }
 * Response: { user, token }
 */
export const register = async (email: string, password: string, name: string): Promise<{ user: User; token: string }> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const user: User = {
    id: Date.now().toString(),
    email,
    name,
    role: 'customer'
  };
  
  return {
    user,
    token: 'mock-jwt-token-' + Date.now()
  };
};

/**
 * Get current user profile
 * 
 * BACKEND: Replace with: GET /api/auth/me
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const getCurrentUser = async (token: string): Promise<User | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (!token) return null;
  
  // Mock user from token
  return {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'customer'
  };
};

// =============================================================================
// ORDER APIs
// =============================================================================

/**
 * Create new order
 * 
 * BACKEND: Replace with: POST /api/orders
 * Headers: { Authorization: `Bearer ${token}` }
 * Body: { items, shippingAddress, paymentMethod }
 */
export const createOrder = async (
  items: CartItem[],
  shippingAddress: Address,
  token: string
): Promise<Order> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  const order: Order = {
    id: 'ORD-' + Date.now(),
    userId: '1',
    items,
    total,
    status: 'pending',
    createdAt: new Date().toISOString(),
    shippingAddress
  };
  
  return order;
};

/**
 * Fetch user orders
 * 
 * BACKEND: Replace with: GET /api/orders
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const fetchUserOrders = async (token: string): Promise<Order[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return empty array for demo
  return [];
};

/**
 * Fetch all orders (Admin only)
 * 
 * BACKEND: Replace with: GET /api/admin/orders
 * Headers: { Authorization: `Bearer ${token}` }
 */
export const fetchAllOrders = async (token: string): Promise<Order[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return empty array for demo
  return [];
};

/**
 * Update order status (Admin only)
 * 
 * BACKEND: Replace with: PATCH /api/admin/orders/{id}/status
 * Headers: { Authorization: `Bearer ${token}` }
 * Body: { status }
 */
export const updateOrderStatus = async (
  orderId: string,
  status: Order['status'],
  token: string
): Promise<Order> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock response
  throw new Error('Not implemented');
};

// =============================================================================
// CONTACT API
// =============================================================================

/**
 * Submit contact form
 * 
 * BACKEND: Replace with: POST /api/contact
 * Body: { name, email, subject, message }
 */
export const submitContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Contact form submitted:', data);
};