import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-stone-600 mb-12">
                Questions about wholesale? Press inquiries? just want to say hi?
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Headquarters</h3>
                    <p className="text-stone-600">123 Brew Street<br/>Portland, OR 97204</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Email Us</h3>
                    <p className="text-stone-600">hello@highchai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Support</h3>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
