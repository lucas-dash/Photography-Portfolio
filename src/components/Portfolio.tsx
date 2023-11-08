'use client';

import { useAnimate, motion, stagger } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const stack = [
  { name: 'Family' },
  { name: 'Kids' },
  { name: 'New Born' },
  { name: 'Moments' },
];

export default function Portfolio() {
  // todo stagger h4

  const [showUp, setSetshowUp] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: '100%',
    },
    collapsed: {
      width: 'auto',
    },
  };

  return (
    <section className="p-2.5">
      <h3 className="font-medium text-3xl sm:text-4xl sm:text-right text-center sm:px-40 py-8">
        Portfolio
      </h3>

      <section
        className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-lightGray rounded-[20px] p-2.5 mb-10 max-w-[1100px] mx-auto text-text-light min-h-[300px] relative`}
      >
        {stack.map((card, index) => {
          return (
            <Link href={`/?gallery=${index}`} key={index} scroll={false}>
              <motion.article
                key={index}
                className={`cursor-pointer bg-accent rounded-xl min-h-[240px] flex items-center justify-center ${
                  index === expandedIndex ? 'expanded ' : ''
                }`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
              >
                <motion.h4
                  className="text-3xl"
                  initial={{ display: 'none', scale: 0 }}
                  animate={{ display: 'block', scale: 1 }}
                  transition={{
                    duration: 0.6,
                    staggerChildren: 0.5,
                  }}
                >
                  {card.name}
                </motion.h4>
              </motion.article>
            </Link>
          );
        })}
      </section>
    </section>
  );
}
