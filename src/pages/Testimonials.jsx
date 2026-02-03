import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Shumaila Anjum",
      role: "Software Engineer",
      text: "I used to have a glass of wine every night to wind down. Now I have a cup of High Chai. Better sleep, no headache, same relaxation.",
      rating: 5
    },
    {
      name: "Chaudhary Shujaat",
      role: "Creative Director",
      text: "The buzz is real. It is not like coffee jitters. It feels like a warm blanket for your brain. Highly recommend the Masala blend.",
      rating: 5
    },
    {
      name: "Sheikh Rasheed",
      role: "Yoga Instructor",
      text: "I was skeptical about the 'high' claim. But wow. It really puts you in a meditative state almost instantly.",
      rating: 4
    },
    {
      name: "Shabana Raahat",
      role: "Graduate Student",
      text: "Helps me write papers without the anxiety. It is legal?" ,
      rating: 5
    },
    {
      name: "Mustanser Hussain Taarar Saab",
      role: "Chef",
      text: "The flavor profile is actually legit chai. The effect is just a bonus.",
      rating: 5
    },
    {
      name: "Mushtaq Chaudhary",
      role: "Musician",
      text: "Vibe in a cup. Seriously.",
      rating: 5
    }
  ];

  return (
    <div className="bg-amber-50/30 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-amber-950">The Vibe Check</h1>
          <p className="text-xl text-amber-900/70">See what the community is sipping.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-amber-200 hover:shadow-md transition-shadow"
            >
              <Quote className="text-amber-300 w-10 h-10 mb-4" />
              <p className="text-amber-950 mb-6 italic leading-relaxed font-semibold">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-amber-950">{review.name}</h4>
                  <p className="text-xs text-amber-700/70 uppercase tracking-wide">{review.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-amber-600" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-amber-800 to-orange-700 text-white px-8 py-4 rounded-full font-bold hover:from-amber-900 hover:to-orange-800 transition-colors flex items-center gap-2 mx-auto">
            <MessageSquare size={20} />
            Leave a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
