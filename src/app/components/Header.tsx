import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search, Diamond, ChevronDown, Heart, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Input } from '@/app/components/ui/input';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { totalItems } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuOpen && !(event.target as Element).closest('.user-menu')) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userMenuOpen]);

  const categories = [
    { name: 'Rings', path: '/shop?category=jewelry&subCategory=rings', description: 'Engagement & Wedding Rings' },
    { name: 'Necklaces', path: '/shop?category=jewelry&subCategory=necklaces', description: 'Pendants & Chains' },
    { name: 'Earrings', path: '/shop?category=jewelry&subCategory=earrings', description: 'Studs & Drop Earrings' },
    { name: 'Bracelets', path: '/shop?category=jewelry&subCategory=bracelets', description: 'Bangles & Tennis Bracelets' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Diamond className="h-8 w-8 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-purple-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                 {t("Harita")}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group py-2"
              >
                {t("Home")}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
              
              {/* Shop Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors outline-none">
                  {t("Shop")}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80 p-4">
                  <div className="mb-3">
                    <h3 className="font-semibold text-base mb-1">Shop by Category</h3>
                    <p className="text-xs text-gray-500">Explore our curated collections</p>
                  </div>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-3 py-2.5 rounded-lg hover:bg-purple-50 transition-colors group"
                      >
                        <div className="font-medium text-sm group-hover:text-purple-600 transition-colors">
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{category.description}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/shop"
                      className="block text-center text-sm font-medium text-purple-600 hover:text-purple-700"
                    >
                      View All Products →
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/about"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group py-2"
              >
                {t("About")}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group py-2"
              >
                {t("Contact")}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="px-2 py-1 text-sm border border-gray-300 rounded-md bg-white"
              >
                <option value="en">EN</option>
                <option value="ja">JA</option>
              </select>

              {/* Search */}
              <div className="hidden md:block">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder={t("Search jewelry...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pr-10 border-purple-200 focus:border-purple-400"
                      autoFocus
                      onBlur={() => {
                        setTimeout(() => {
                          if (!searchQuery) setSearchOpen(false);
                        }, 200);
                      }}
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchOpen(true)}
                    className="hover:bg-purple-50 hover:text-purple-600"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* Wishlist (placeholder) */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-purple-50 hover:text-purple-600"
              >
                <Heart className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-purple-50 hover:text-purple-600"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-xs text-white flex items-center justify-center font-semibold shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* User Menu */}
              {user ? (
                <div className="relative user-menu">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-purple-50 hover:text-purple-600"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center text-white text-sm font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  </Button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="p-3 border-b">
                        <div className="flex flex-col">
                          <span className="font-semibold">{user.name}</span>
                          <span className="text-xs text-gray-500 font-normal">{user.email}</span>
                        </div>
                      </div>
                      <div className="py-1">
                        <button 
                          onClick={() => { navigate('/orders'); setUserMenuOpen(false); }} 
                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center cursor-pointer"
                        >
                          <Package className="h-4 w-4 mr-2" />
                          {t("My Orders")}
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center cursor-pointer">
                          <Heart className="h-4 w-4 mr-2" />
                          {t("Wishlist")}
                        </button>
                        {isAdmin && (
                          <>
                            <div className="border-t my-1"></div>
                            <button 
                              onClick={() => { navigate('/admin'); setUserMenuOpen(false); }} 
                              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center cursor-pointer text-purple-600"
                            >
                              <Diamond className="h-4 w-4 mr-2" />
                              {t("Admin Dashboard")}
                            </button>
                          </>
                        )}
                        <div className="border-t my-1"></div>
                        <button 
                          onClick={() => { handleLogout(); setUserMenuOpen(false); }} 
                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center cursor-pointer text-red-600"
                        >
                          {t("Logout")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Button 
                  onClick={() => navigate('/login')} 
                  size="sm"
                  className="hidden md:flex bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  {t("Login")}
                </Button>
              )}

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-purple-50">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-purple-700">
                      <div className="flex items-center gap-3">
                        <Diamond className="h-6 w-6 text-white" />
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-white"> Gems</span>
                          <span className="text-xs text-purple-200">Fine Jewelry</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4 border-b">
                      <form onSubmit={handleSearch}>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </form>
                    </div>

                    {/* Mobile Nav */}
                    <nav className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-1">
                        <Link
                          to="/"
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Home
                        </Link>
                        
                        <div className="py-2">
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Categories</div>
                          {categories.map((category) => (
                            <Link
                              key={category.path}
                              to={category.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>

                        <Link
                          to="/about"
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                        <Link
                          to="/contact"
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact
                        </Link>
                      </div>
                    </nav>

                    {/* Mobile Footer */}
                    {!user && (
                      <div className="p-4 border-t">
                        <Button 
                          onClick={() => {
                            navigate('/login');
                            setMobileMenuOpen(false);
                          }} 
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-700"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Login / Register
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};