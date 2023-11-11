'use client';

import { useAnimate, motion, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { galleryImages } from '@/lib/gallery';

export default function ExpandPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  const cardVariants = {
    expanded: {
      width: '100%',
      height: '400px',
    },
    collapsed: {
      width: 'auto',
      height: 'auto',
    },
  };

  return (
    <section className="p-2.5">
      <h3 className="font-medium text-3xl sm:text-4xl sm:text-right text-center sm:px-40 py-8">
        Portfolio
      </h3>

      <motion.div
        // layout
        className={`${
          expanded
            ? ''
            : 'grid grid-cols-1 sm:grid-cols-2 gap-2.5 min-h-[300px]'
        } bg-lightGray rounded-[20px] p-2.5 mb-10 max-w-[1100px] mx-auto text-text-light`}
      >
        {galleryImages.map((card, index) => {
          return (
            <motion.article
              key={index}
              ref={scope}
              className={` ${
                expanded && selectedIndex !== index ? 'hidden' : 'collapsed'
              } cursor-pointer min-h-[240px] bg-accent rounded-xl flex items-center justify-center`}
              onClick={() => {
                setSelectedIndex(index);
                setExpanded((prev) => !prev);
              }}
              variants={cardVariants}
              initial={'collapsed'}
              animate={index === selectedIndex ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.5 }}
            >
              <motion.h4
                className="text-3xl"
                initial={{ display: 'none', scale: 0 }}
                animate={{ display: 'block', scale: 1 }}
                transition={{
                  duration: 0.6,
                }}
              >
                {card.name}
              </motion.h4>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
