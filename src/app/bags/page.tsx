import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const bags: React.FC = () => {
  return (
    <div>
        
        <Navbar/>
    <section id="home" className="relative bg-gradient-to-r from-cream to-soft-pink py-20">
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Discover Your
              <span className="text-gradient block">Perfect Bag</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Elevate your style with our curated collection of premium handbags, 
              designed for the modern woman who values both elegance and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                View Lookbook
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Featured Handbag"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 bg-rose-gold text-white px-4 py-2 rounded-full font-medium">
              New Arrival
            </div>
            <div className="absolute -bottom-6 -left-6 bg-deep-navy text-white px-6 py-4 rounded-lg shadow-lg">
              <div className="text-sm text-gray-300">Starting from</div>
              <div className="text-2xl font-bold">$199</div>
            </div>
          </div>
        </div>
      </div>
    </section>    
     </div>
  );
};

export default bags;