import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Star } from 'lucide-react';

const Product = () => {
  return (
    <div>
      <section className="pt-20 pb-32 bg-gradient-to-b from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Product Image Side */}
            <div className="lg:w-1/2 sticky top-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl aspect-[4/5] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-200/70 to-transparent opacity-50" />
                <div className="flex items-center justify-center h-full">
                  <img src="/product.jpeg" className='object-cover w-full h-full' alt="High Chai Product"/>
                </div>
              </motion.div>
            </div>

            {/* Product Details Side */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Best Seller
                  </span>
                  <div className="flex text-amber-600">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-sm text-amber-800/70">(1,240 Reviews)</span>
                </div>

                <h1 className="text-5xl font-bold mb-4 text-amber-950">Original <span className="font-handwritten text-amber-700">High Chai</span></h1>
                <p className="text-3xl text-amber-900 font-medium mb-8">$29.99 <span className="text-lg text-amber-800/70 font-normal">/ 15 servings</span></p>

                <div className="prose prose-amber mb-8">
                  <p className="text-amber-900/80 leading-relaxed">
                    The original formula that started the revolution. A robust blend of Assam black tea, 
                    cardamom, cinnamon, ginger, and our proprietary FDA-approved neuro-enhancers.
                  </p>
                  <p className="text-amber-900/80 leading-relaxed">
                    Dissolves instantly in hot water or milk. Works in 15 minutes. Lasts for 2-3 hours.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-amber-300 mb-8 shadow-md">
                  <h3 className="font-bold mb-4 flex items-center gap-2 text-amber-950">
                    <AlertCircle size={20} className="text-amber-600" />
                    Effect Profile
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1 text-amber-900">
                        <span>Euphoria</span>
                        <span>8/10</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-orange-600 w-[80%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1 text-amber-900">
                        <span>Energy</span>
                        <span>6/10</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-orange-600 w-[60%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1 text-amber-900">
                        <span>Relaxation</span>
                        <span>9/10</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-orange-600 w-[90%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <button className="flex-1 bg-gradient-to-r from-amber-800 to-orange-700 text-white py-4 rounded-xl font-bold hover:from-amber-900 hover:to-orange-800 transition-colors shadow-lg">
                    Add to Cart
                  </button>
                  <button className="px-6 border-2 border-amber-300 text-amber-900 rounded-xl hover:border-amber-600 hover:bg-amber-50 transition-colors">
                    Subscribe & Save 10%
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {['Free Shipping', 'Money-back Guarantee', 'Lab Tested', 'Vegan'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-amber-900/80">
                      <Check size={16} className="text-green-700" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
