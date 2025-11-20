import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Star, Heart, Package, Truck, Shield, CreditCard, ChevronRight } from 'lucide-react';

const EcommerceUI = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: 299, rating: 4.8, image: '🎧', category: 'Electronics' },
    { id: 2, name: 'Smart Watch Pro', price: 399, rating: 4.9, image: '⌚', category: 'Electronics' },
    { id: 3, name: 'Designer Backpack', price: 149, rating: 4.6, image: '🎒', category: 'Fashion' },
    { id: 4, name: 'Running Shoes Elite', price: 179, rating: 4.7, image: '👟', category: 'Sports' },
    { id: 5, name: 'Coffee Maker Deluxe', price: 249, rating: 4.5, image: '☕', category: 'Home' },
    { id: 6, name: 'Bluetooth Speaker', price: 129, rating: 4.8, image: '🔊', category: 'Electronics' }
  ];

  const features = [
    { icon: Package, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: Truck, title: 'Fast Delivery', desc: '2-3 business days' },
    { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
    { icon: CreditCard, title: 'Easy Returns', desc: '30-day guarantee' }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🛍️</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Home', 'Products', 'Categories', 'Deals'].map(item => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="text-gray-700" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['Home', 'Products', 'Categories', 'Deals'].map(item => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Shop the latest trends with exclusive deals and free shipping on orders over $50
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Shop Now</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-1">
              <span>View All</span>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 h-48 flex items-center justify-center">
                  <div className="text-7xl">{product.image}</div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                      size={20}
                    />
                  </button>
                  <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                    <span className="text-gray-700 font-medium">{product.rating}</span>
                    <span className="text-gray-500 text-sm">(120 reviews)</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      onClick={addToCart}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-purple-100 mb-8">
              Get exclusive deals and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🛍️</div>
                <span className="text-xl font-bold">ShopHub</span>
              </div>
              <p className="text-gray-400">
                Your one-stop shop for amazing products and unbeatable deals.
              </p>
            </div>
            
            {['Shop', 'Support', 'Company'].map(section => (
              <div key={section}>
                <h3 className="font-semibold mb-4">{section}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white transition-colors">Link 1</button></li>
                  <li><button className="hover:text-white transition-colors">Link 2</button></li>
                  <li><button className="hover:text-white transition-colors">Link 3</button></li>
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceUI;