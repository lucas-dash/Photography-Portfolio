'use client';

import { motion, useInView, useAnimate, stagger } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { galleryImageCovers } from '@/lib/constants';
import Link from 'next/link';

export default function Portfolio() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      animate('h2', { x: 0, opacity: 1 }, { delay: 0, duration: 0.6 });
      animate(
        'h3',
        { scale: 1, opacity: 1 },
        { delay: stagger(0.3), duration: 0.6 }
      );
    } else {
      animate(
        'h3',
        { scale: 0, opacity: 0 },
        { delay: stagger(0.3), duration: 0.6 }
      );
    }
  }, [animate, isInView, scope]);

  return (
    <section className="p-2.5 container my-10" ref={scope} id="gallery">
      <div className="px-10 lg:px-40 py-10">
        <motion.h2
          className="font-medium text-3xl sm:text-4xl md:text-5xl sm:text-right text-center"
          initial={{ x: 30, opacity: 0 }}
        >
          Portfolio
        </motion.h2>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 p-3 bg-lightGray rounded-3xl max-w-[1100px] mx-auto text-text-light min-h-[300px]`}
      >
        {galleryImageCovers.map(({ id, name, cover }) => {
          return (
            <article
              key={id}
              className={`cursor-pointer bg-accent rounded-xl min-h-[280px] flex items-center justify-center relative overflow-hidden`}
            >
              <Link
                href={`/${name}`}
                aria-label={`Link to ${name} gallery`}
                aria-describedby={`Check all ${name} gallery photos`}
                className="absolute inset-0 group"
              >
                <div className="relative h-full w-full ">
                  <Image
                    src={cover}
                    alt={`cover image of ${name} gallery`}
                    className="object-cover group-hover:scale-105 transition-all"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute flex items-center justify-center inset-0">
                  <div className="bg-accent/60 hover:bg-accent/20 transition-all ease-out absolute inset-0 z-10"></div>
                  <h3 className="text-3xl md:text-4xl relative z-50 capitalize">
                    {name}
                  </h3>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
