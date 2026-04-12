import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, t } = useLanguage();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: heading + price callout */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-violet-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {t.faq.label[lang]}
              </span>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-[0.85] tracking-tighter mb-10">
                {t.faq.headline1[lang]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  {t.faq.headline2[lang]}
                </span>
              </h2>

              {/* Price highlight card */}
              <div className="bg-violet-600/10 border border-violet-500/20 rounded-3xl p-8">
                <div className="font-display font-bold text-6xl text-violet-400 leading-none mb-3">
                  €600
                </div>
                <div className="font-bold text-white text-base mb-2">
                  {t.faq.priceLabel[lang]}
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  {t.faq.priceDesc[lang]}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:w-7/12 w-full">
            <div className="space-y-3">
              {t.faq.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'bg-white/5 border-violet-500/30'
                          : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => toggle(index)}
                        className="w-full text-left px-7 py-6 flex items-start justify-between gap-5"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-5 flex-1">
                          <span className="font-display font-bold text-sm text-violet-400/50 tabular-nums w-7 flex-shrink-0 pt-0.5">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className={`font-bold text-base md:text-lg leading-snug transition-colors ${
                            isOpen ? 'text-white' : 'text-white/70'
                          }`}>
                            {item.question[lang]}
                          </span>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                          isOpen
                            ? 'bg-violet-600 border-violet-600 text-white'
                            : 'border-white/20 text-white/40'
                        }`}>
                          {isOpen
                            ? <Minus className="w-3.5 h-3.5" />
                            : <Plus className="w-3.5 h-3.5" />
                          }
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <p className="px-7 pb-7 pt-0 pl-[calc(1.75rem+3rem)] text-white/50 leading-relaxed text-sm md:text-base">
                              {item.answer[lang]}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
