"use client";
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video src="/intro.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65 z-0" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >Κάνε τον φόβο σου δύναμη</motion.h1>
          <motion.div
            initial={{ y: 25 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Είμαστε όλοι μαζί στον αγώνα πρόληψης και καταπολέμησης της
            <span className="inline-block text-amber-700 font-semibold p-2">έμφυλης βίας</span>
          </motion.div>
          <Link href="#contact" className="inline-block text-gray-400 bg-purple-700/5 hover:bg-purple-800/35 backdrop-blur-2xl font-semibold py-3 px-6 rounded-2xl transition duration-300 shadow-lg hover:shadow-xl hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Επικοινωνία</Link>
        </div>
      </motion.section>

      <motion.section id="features" className="relative flex py-50 items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black/65 z-0" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-20">
          {[
            { icon: '/prevention.png', title: 'Πρόληψη', desc: 'Συμβουλευτική και υποστήριξη' },
            { icon: '/education.png', title: 'Εκπαίδευση', desc: 'Εργαστήρια και σεμινάρια' },
            { icon: '/advocacy.png', title: 'Υπεράσπιση', desc: 'Νομική βοήθεια και καθοδήγηση' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/25 backdrop-blur-2xl p-6 rounded-lg shadow-md text-center"
            >
              <Image src={item.icon} alt={item.title} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="relative flex h-screen items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/contact-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/65 z-0" />
        <div className="container mx-auto max-w-lg text-center z-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-6">Επικοινωνήστε μαζί μας</motion.h2>
          <form className="space-y-4">
            <input type="text" placeholder="Όνομα" className="w-full border rounded bg-white/25 backdrop-blur-2xl p-3 focus:outline-none focus:ring" />
            <input type="email" placeholder="Email" className="w-full border rounded bg-white/25 backdrop-blur-2xl p-3 focus:outline-none focus:ring" />
            <textarea placeholder="Μήνυμα" className="w-full border rounded bg-white/25 backdrop-blur-2xl p-3 focus:outline-none focus:ring h-32"></textarea>
            <button type="submit" className="inline-block bg-purple-700/5 hover:bg-purple-800/35 backdrop-blur-2xl text-white font-semibold py-3 px-6 rounded-2xl transition duration-300 shadow-lg hover:shadow-xl">Αποστολή</button>
          </form>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
