'use client';

import { motion, useInView, useAnimate, stagger } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { galleryImages } from '@/lib/gallery';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      animate('h3', { x: 0, opacity: 1 }, { delay: 0, duration: 0.6 });
      animate(
        'h4',
        { scale: 1, opacity: 1 },
        { delay: stagger(0.3), duration: 0.6 }
      );
    } else {
      animate(
        'h4',
        { scale: 0, opacity: 0 },
        { delay: stagger(0.3), duration: 0.6 }
      );
    }
  }, [animate, isInView, scope]);

  useEffect(() => {
    if (!showModal) {
      setSelectedImg(0);
    }
  }, [showModal]);

  return (
    <section className="p-2.5 container pt-10" ref={scope} id="gallery">
      <div className="px-10 lg:px-40 py-10">
        <motion.h3
          className="font-medium text-3xl sm:text-4xl md:text-5xl sm:text-right text-center"
          initial={{ x: 30, opacity: 0 }}
        >
          Portfolio
        </motion.h3>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-lightGray rounded-[20px] p-2.5 mb-10 max-w-[1100px] mx-auto text-text-light min-h-[300px] relative`}
      >
        <Dialog>
          {galleryImages.map((card, index) => {
            const imageBackground = index === card.index ? card.images[0] : '';

            return (
              <article
                key={index}
                className={`cursor-pointer bg-accent rounded-xl min-h-[240px] flex items-center justify-center relative overflow-hidden`}
                onClick={() => {
                  setShowModal(true);
                  setSelectedIndex(index);
                }}
              >
                <div className="absolute inset-0 z-0 group">
                  <Image
                    src={imageBackground}
                    alt={`cover image of ${card.name}`}
                    className="object-cover group-hover:scale-105 transition-all"
                    fill
                  />
                  <div className="bg-accent/60 hover:bg-accent/40 transition-all ease-out absolute inset-0 z-10"></div>
                </div>
                <h4 className="text-3xl md:text-4xl relative z-20">
                  {card.name}
                </h4>
              </article>
            );
          })}

          <Dialog
            modal
            open={showModal}
            onOpenChange={() => setShowModal(false)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{galleryImages[selectedIndex].name}</DialogTitle>
              </DialogHeader>
              <section className="flex flex-col items-center">
                <div className="rounded-lg w-max h-max object-cover overflow-hidden max-h-80">
                  <Image
                    src={galleryImages[selectedIndex].images[selectedImg]}
                    alt={`${galleryImages[selectedIndex].name} image`}
                    width={280}
                    height={280}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2.5 my-5 w-full overflow-hidden">
                  {galleryImages[selectedIndex].images.map((src, index) => {
                    return (
                      <div
                        key={index}
                        className={`object-cover rounded-lg overflow-hidden cursor-pointer max-h-[100px] ${
                          selectedImg === index
                            ? 'border-2 border-secondary'
                            : ''
                        }`}
                        onClick={() => setSelectedImg(index)}
                      >
                        <Image src={src} alt="image" width={100} height={100} />
                      </div>
                    );
                  })}
                </div>
              </section>
            </DialogContent>
          </Dialog>
        </Dialog>
      </div>
    </section>
  );
}
