import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-stone-900 pr-8">{question}</span>
        {isOpen ? <Minus className="flex-shrink-0 text-orange-600" /> : <Plus className="flex-shrink-0 text-stone-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
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
      question: " Can I mix it with alcohol?",
      answer: "We do not recommend mixing High Chai with alcohol or other sedatives as it may intensify the effects."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Questions?</h1>
          <p className="text-xl text-stone-600">We have answers. No shady business here.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
