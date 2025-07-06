"use client"
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Star, Heart, Search, User, ChevronRight, Shield, Truck, RotateCcw, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/Navbar';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid');



    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
            {/* Header */}
           <Navbar/>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200">
                                    <span className="text-rose-600 font-medium">✨ New  Collection</span>
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Modest Fashion
                                    <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent block">
                                        Redefined
                                    </span>
                                    for Modern Women
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Discover our exquisite collection of hijabs, abayas, and scarves.
                                    Each piece is thoughtfully designed to celebrate your faith,
                                    enhance your beauty, and express your unique style.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Shop Collection
                                </button>
                                <button className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-xl font-semibold hover:border-rose-500 hover:bg-rose-50 transition-all duration-300">
                                    Styling Guide
                                </button>
                            </div>

                            <div className="flex items-center gap-8 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">10,000+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">4.9★</div>
                                    <div className="text-gray-600">Customer Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">280+</div>
                                    <div className="text-gray-600">Products</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-3xl transform rotate-6"></div>
                            <img
                                src="https://blackcamels.com.pk/cdn/shop/products/Misri-new-1_720x.jpg?v=1748963268"
                                alt="Beautiful woman in elegant hijab and abaya"
                                className="relative z-20 w-full h-96 lg:h-[500px] object-cover object-top rounded-3xl shadow-2xl"
                            />

                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Premium Quality</p>
                                        <p className="text-sm text-gray-600">Ethically Sourced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default App;