import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-orange-100 via-stone-50 to-stone-50" />
        
        {/* Enhanced Decorative Elements */}
        <motion.div 
          style={{ y: smoothY, opacity }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" 
        />
        <motion.div 
          style={{ y: useTransform(smoothY, v => `-${v}`), opacity }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale, opacity }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-bold tracking-wide mb-8 shadow-lg border border-orange-200"
            >
              <Sparkles size={16} className="animate-pulse" />
              FDA APPROVED • 100% LEGAL
              <Zap size={16} className="animate-pulse" />
            </motion.span>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-stone-900 tracking-tighter mb-8 leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              CHAI THAT GETS<br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 gradient-animate">
                  YOU HIGH
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-amber-600 opacity-20 blur-2xl -z-10 rounded-lg"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The ancient tradition of chai meets modern relaxation science. 
              A perfect, legal buzz in every cup without the crash.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-stone-900 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Get The High</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white border-2 border-stone-200 text-stone-900 rounded-full font-bold text-lg hover:border-orange-600 hover:bg-orange-50 transition-all shadow-md"
                >
                  How it works
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-orange-600 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">
              Why Everyone's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Switching</span>
            </h2>
            <p className="text-xl text-stone-600">Engineered euphoria without the downsides</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "The Perfect High",
                desc: "Engineered to give you a euphoric lift similar to nicotine, but cleaner, smoother, and longer-lasting.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "FDA Approved",
                desc: "Fully compliant and tested rigorous safety standards. Enjoy the buzz without the worry.",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "All Natural Base",
                desc: "Deep, rich black tea and aromatic spices form the foundation of our revolutionary formula.",
                color: "from-orange-600 to-amber-600"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl bg-white border border-stone-200 hover:border-orange-300 card-hover overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon with gradient background */}
                <motion.div 
                  className={`mb-6 p-5 bg-gradient-to-br ${feature.color} rounded-2xl inline-block shadow-lg text-white relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-stone-900 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
                
                {/* Bottom accent line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-600/20 to-orange-600/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-400 text-sm font-bold mb-6"
              >
                TRENDING NOW
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Not Just Tea. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 gradient-animate">
                  A Movement.
                </span>
              </h2>
              
              <div className="relative pl-6 border-l-4 border-orange-600 mb-10">
                <p className="text-stone-300 text-xl leading-relaxed italic">
                  "I stopped smoking and started sipping. This chai gives me that focus and relaxation 
                  I need to get through my day, legally and safely."
                </p>
                <span className="text-stone-500 text-sm mt-2 block">— Sarah K., Creative Director</span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0, x: -20 }}
                      whileInView={{ scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 border-4 border-stone-900 flex items-center justify-center text-white font-bold cursor-pointer"
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="text-3xl font-black text-white">10,000+</div>
                  <div className="text-sm text-stone-400">Happy Sippers</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-square rounded-full bg-gradient-to-tr from-orange-600 to-amber-600 opacity-20 blur-3xl absolute inset-0 animate-pulse" />
              <motion.div 
                className="relative z-10 bg-stone-800 p-10 rounded-3xl border-2 border-stone-700 hover:border-orange-600 transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="text-orange-400" size={20} />
                  <span className="text-xs text-orange-400 uppercase tracking-widest font-bold">Active Ingredients</span>
                </div>
                <div className="space-y-5 font-mono text-sm">
                  {[
                    { name: 'Black Tea Extract', amount: '500mg', color: 'from-orange-500 to-amber-500' },
                    { name: 'Euphoria Blend™', amount: '120mg', color: 'from-amber-500 to-orange-600' },
                    { name: 'Natural Spices', amount: 'Var.', color: 'from-orange-600 to-amber-600' }
                  ].map((ingredient, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between items-center pb-4 border-b border-stone-700 last:border-0 group"
                    >
                      <span className="text-stone-300 group-hover:text-white transition-colors">{ingredient.name}</span>
                      <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${ingredient.color}`}>
                        {ingredient.amount}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
