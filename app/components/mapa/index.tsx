'use client'

import { motion } from 'framer-motion';
import { SectionTitle } from '../section-title';

export const Mapa = () => {
  return (
    <section
      className="flex items-center justify-center bg-blue-950"
      id="mapa"
    >
      <div className="w-full max-w-3xl mx-auto">
        <SectionTitle
          title="Localização"
          className="items-center text-emerald-400 text-center" 
        />
        <motion.div
          className="mt-12 w-full flex items-center justify-center bg-blue-950"
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full">
            <iframe
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228517.62110843236!2d-53.73993204082461!3d-26.50121272477639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b0c5ef60d87%3A0x91addafea4459246!2sBonno%20Free%20Shop!5e0!3m2!1spt-BR!2sbr!4v1747852915980!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
