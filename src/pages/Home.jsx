import React from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, Zap, Plus, Minus, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-amber-900/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-amber-950 pr-8 group-hover:text-amber-800 transition-colors">{question}</span>
        {isOpen ? <Minus className="flex-shrink-0 text-amber-700" /> : <Plus className="flex-shrink-0 text-amber-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-amber-900/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const faqs = [
    {
      question: "Is this legal?",
      answer: "Yes. High Chai is 100% federally legal. We do not use any controlled substances. Our proprietary blend uses FDA-approved herbal extracts and compounds that are designated generally recognized as safe (GRAS)."
    },
    {
      question: "Will it make me fail a drug test?",
      answer: "No. Our ingredients are not screened for in standard drug panels (5-panel, 10-panel, etc). It does not contain THC, opiates, or synthetic cannabinoids."
    },
    {
      question: "What does the high feel like?",
      answer: "Users describe it as a 'lucid buzz'. Think of the relaxation of a glass of wine mixed with the focus of nicotine, but without the intoxication or jitteriness. You will feel relaxed, heavy-bodied, and mood-lifted."
    },
    {
      question: "How long does it last?",
      answer: "Onset is typically 15-20 minutes. Peak effects last 45-90 minutes. Residual relaxation can last up to 3 hours."
    },
    {
      question: "Is it safe?",
      answer: "We manufacture in an FDA-registered facility. All batches are third-party lab tested for purity and potency. However, we do not recommend operating heavy machinery after consuming your first cup until you know how it affects you."
    },
    {
      question: "Can I mix it with alcohol?",
      answer: "We do not recommend mixing High Chai with alcohol or other sedatives as it may intensify the effects."
    }
  ];

  return (
    <div className="overflow-hidden relative">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: 'url(/new_bg.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-50/95 via-40% to-transparent" />
        </div>
        
        {/* Tea Stain Decorative Elements - subtle overlays */}
        <motion.div 
          style={{ y: smoothY, opacity }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" 
        />
        
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale, opacity }}
            className="max-w-2xl"
          >
            {/* Enhanced FDA Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 text-amber-900 text-lg font-bold tracking-wide mb-8 shadow-2xl border-2 border-amber-300 animate-pulse-glow"
            >
              <ShieldCheck size={28} className="animate-pulse text-amber-800" />
              <span className="text-xl font-black">FDA APPROVED • 100% LEGAL</span>
              <Sparkles size={28} className="animate-pulse text-amber-800" />
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-amber-900 tracking-tight mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-amber-800">Chai</span> <span className="text-amber-900/90">that gets</span><br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 gradient-animate">
                  you high
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-orange-600 opacity-20 blur-2xl -z-10 rounded-lg"
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
              className="text-lg md:text-xl text-amber-900/80 max-w-xl mb-12 leading-relaxed font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The ancient tradition of chai meets modern relaxation science. 
              A perfect, legal buzz in every cup <span className="italic">without the crash.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-start items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-amber-800 to-orange-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Get The High</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-900"
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
                  className="px-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-amber-300 text-amber-900 rounded-full font-bold text-lg hover:border-amber-600 hover:bg-amber-50 transition-all shadow-md"
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
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-amber-700 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Everyone's Switching - Moved before FAQ */}
      <section className="py-32 bg-amber-50/30 tea-stain tea-stain-3">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-amber-950 mb-4 font-serif">
              Why Everyone's <span className="font-handwritten text-amber-700 text-6xl px-2">Switching</span>
            </h2>
            <p className="text-xl text-amber-900/70 font-serif italic">Engineered euphoria without the downsides</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "The Perfect High",
                desc: "Engineered to give you a euphoric lift similar to nicotine, but cleaner, smoother, and longer-lasting.",
                color: "from-amber-600 to-orange-600"
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "FDA Approved",
                desc: "Fully compliant and tested rigorous safety standards. Enjoy the buzz without the worry.",
                color: "from-orange-600 to-amber-700"
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "All Natural Base",
                desc: "Deep, rich black tea and aromatic spices form the foundation of our revolutionary formula.",
                color: "from-amber-700 to-orange-700"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl bg-white border border-amber-200 hover:border-amber-400 card-hover overflow-hidden"
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
                
                <h3 className="text-2xl font-bold mb-4 text-amber-950 group-hover:text-amber-700 transition-colors font-serif">{feature.title}</h3>
                <p className="text-amber-900/70 leading-relaxed">{feature.desc}</p>
                
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

      {/* FAQ Section - Moved after Why Everyone's Switching */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Tea stain decorative element */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-amber-950 mb-4 font-serif">
              Questions? <span className="font-handwritten text-amber-700 block text-6xl mt-2">We've Got Answers.</span>
            </h2>
            <p className="text-xl text-amber-900/70 font-serif italic">No shady business here. Just good vibes.</p>
          </motion.div>

          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-amber-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Highlight - Moved to bottom */}
      <section className="relative py-32 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-950 text-white overflow-hidden tea-stain tea-stain-1">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-600/20 to-amber-600/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative pl-6 border-l-4 border-amber-500 mb-10">
                <p className="text-amber-100 text-xl leading-relaxed italic font-serif">
                  "I stopped smoking and started sipping. This chai gives me that focus and relaxation 
                  I need to get through my day, legally and safely."
                </p>
                <span className="text-amber-400 text-sm mt-2 block font-sans">— Sarah K., Creative Director</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-amber-600/30 border border-amber-500/40 rounded-full text-amber-300 text-sm font-bold mb-6"
              >
                TRENDING NOW
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight font-serif">
                Not Just Tea. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 gradient-animate font-handwritten text-7xl">
                  A Movement.
                </span>
              </h2>
              
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
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 border-4 border-amber-900 flex items-center justify-center text-white font-bold cursor-pointer"
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="text-3xl font-black text-white">10,000+</div>
                  <div className="text-sm text-amber-300">Happy Sippers</div>
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
              <div className="aspect-square rounded-full bg-gradient-to-tr from-amber-600 to-orange-600 opacity-20 blur-3xl absolute inset-0 animate-pulse" />
              <motion.div 
                className="relative z-10 bg-amber-950/50 backdrop-blur-sm p-10 rounded-3xl border-2 border-amber-700/50 hover:border-amber-600 transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="text-amber-400" size={20} />
                  <span className="text-xs text-amber-300 uppercase tracking-widest font-bold">Active Ingredients</span>
                </div>
                <div className="space-y-5 font-mono text-sm">
                  {[
                    { name: 'Black Tea Extract', amount: '500mg', color: 'from-amber-500 to-orange-500' },
                    { name: 'Euphoria Blend™', amount: '120mg', color: 'from-orange-500 to-amber-600' },
                    { name: 'Natural Spices', amount: 'Var.', color: 'from-amber-600 to-orange-600' }
                  ].map((ingredient, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between items-center pb-4 border-b border-amber-800/50 last:border-0 group"
                    >
                      <span className="text-amber-200 group-hover:text-white transition-colors">{ingredient.name}</span>
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
