import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Redefining Relaxation</h1>
          <p className="text-xl text-stone-600">
            We believe that adults deserve a way to unwind that is safe, social, and effective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] bg-stone-200 rounded-3xl overflow-hidden">
              <img 
                src="/our-story.jpeg" 
                alt="High Chai - Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
             <div className="absolute -bottom-6 -right-6 bg-amber-100 p-8 rounded-2xl max-w-xs shadow-lg border border-amber-200">
                <p className="font-serif text-lg italic text-amber-900">
                  "It started in a kitchen lab in 2024, trying to find an alternative to alcohol."
                </p>
              </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-stone-600">
              <p className="mb-4">
                The world is stressful. For a long time, the only legal ways to really "take the edge off" were alcohol (hangover included) or nicotine (addiction included).
              </p>
              <p className="mb-4">
                We asked: Why can't there be something better?
              </p>
              <p>
                Our team of food scientists and herbalists spent two years developing High Chai. We identified specific FDA-approved compounds found in nature that interact with the same receptors as some controlled substances, but in a safe, self-limiting way.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-12">The Science of The High</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">01.</div>
              <h3 className="text-xl font-bold mb-2">Absorption</h3>
              <p className="text-stone-600">Special lipid-binding allows the active compounds to cross the blood-brain barrier effectively.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">02.</div>
              <h3 className="text-xl font-bold mb-2">Activation</h3>
              <p className="text-stone-600">Targets GABA receptors to induce profound relaxation without sedation.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">03.</div>
              <h3 className="text-xl font-bold mb-2">Clearance</h3>
              <p className="text-stone-600">Metabolizes cleanly within 3 hours, leaving you fresh and alert.</p>
            </div>
          </div>
        </div>

        <div id="contact-section" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 border border-amber-200 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Visit Us</h3>
                  <p className="text-lg text-stone-700">High Chai Studio</p>
                  <p className="text-stone-600">F-11 Markaz, Islamabad, Pakistan</p>
                  <p className="text-stone-600">Near Melody Market, Sector F-11</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Connect With Us</h3>
                  <p className="text-stone-600">Email: hello@highchai.com</p>
                  <p className="text-stone-600">Phone: +92 (300) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
