'use client';

import { useAnimate, motion, stagger } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Modal from './Modal';
import { galleryImages } from '@/lib/gallery';

export default function Portfolio() {
  // todo stagger h4

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {}, []);

  return (
    <section className="p-2.5">
      <h3 className="font-medium text-3xl sm:text-4xl sm:text-right text-center sm:px-40 py-8">
        Portfolio
      </h3>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-lightGray rounded-[20px] p-2.5 mb-10 max-w-[1100px] mx-auto text-text-light min-h-[300px] relative`}
      >
        <Dialog>
          {galleryImages.map((card, index) => {
            return (
              <motion.article
                key={index}
                className={`cursor-pointer bg-accent rounded-xl min-h-[240px] flex items-center justify-center`}
                onClick={() => {
                  setShowModal(true);
                  setSelectedIndex(index);
                }}
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
              <div className="flex flex-col ">
                {galleryImages[selectedIndex].images.map((src, index) => (
                  <div
                    key={index}
                    className="object-cover rounded-lg overflow-hidden w-full h-full cursor-pointer min-h-[190px]"
                  >
                    <Image src={src} alt="images" width={250} height={250} />
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </Dialog>
      </div>
    </section>
  );
}
