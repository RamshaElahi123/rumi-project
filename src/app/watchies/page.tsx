'use client';

import React from 'react';
import {
  ArrowRight,
  Clock,
  Award,
  Shield,
  Users,
  Sparkles,
  Zap,
  Crown,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const Watch: React.FC = () => {
  const categories = [
    {
      id: 'men',
      name: "Men's Collection",
      description: "Bold and sophisticated timepieces designed for the modern gentleman",
      image:
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      productCount: 45,
      icon: Users,
      gradient: 'from-dark-blue to-charcoal',
    },
    {
      id: 'women',
      name: "Women's Collection",
      description: 'Elegant and refined watches that complement every style',
      image:
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      productCount: 38,
      icon: Sparkles,
      gradient: 'from-gold to-yellow-600',
    },
    {
      id: 'smart',
      name: 'Smart Watches',
      description: 'Cutting-edge technology meets timeless design',
      image:
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      productCount: 22,
      icon: Zap,
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'Exquisite timepieces for the discerning collector',
      image:
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      productCount: 15,
      icon: Crown,
      gradient: 'from-yellow-600 to-orange-600',
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-cream via-light-gray to-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-dark-blue/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Clock className="h-12 w-12 text-gold mr-4 animate-pulse-slow" />
                <span className="text-lg font-semibold text-charcoal">
                  Premium Timepieces
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold text-dark-blue mb-6 leading-tight">
                Time is <span className="text-gradient block">Everything</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Discover our exquisite collection of premium watches for men and
                women. Where craftsmanship meets innovation, and every second
                counts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="btn-primary flex items-center justify-center group">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary">Watch Catalog</button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-semibold text-charcoal">
                    Premium Quality
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-semibold text-charcoal">
                    2 Year Warranty
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-semibold text-charcoal">
                    Swiss Movement
                  </p>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative z-10 animate-float">
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Premium Watch"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Tags */}
              <div className="absolute top-8 right-8 glass-effect text-dark-blue px-4 py-2 rounded-full font-semibold z-20">
                Limited Edition
              </div>

              <div className="absolute -bottom-6 -left-6 bg-dark-blue text-white px-8 py-6 rounded-2xl shadow-2xl z-20">
                <div className="text-sm text-gray-300">Starting from</div>
                <div className="text-3xl font-bold text-gold">$199</div>
                <div className="text-sm text-gray-300">Free Shipping</div>
              </div>

              {/* Decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-dark-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
              Explore Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From classic elegance to modern innovation, discover timepieces
              that define your style and elevate every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    index === 0 || index === 3
                      ? 'md:col-span-1'
                      : 'md:col-span-1'
                  }`}
                >
                  <div className="aspect-w-16 aspect-h-10 relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                        <div className="flex items-center mb-4">
                          <Icon className="h-8 w-8 mr-3" />
                          <h3 className="text-3xl font-bold">
                            {category.name}
                          </h3>
                        </div>

                        <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-lg">
                          {category.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">
                            {category.productCount} timepieces
                          </span>
                          <ArrowRight className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watch;
