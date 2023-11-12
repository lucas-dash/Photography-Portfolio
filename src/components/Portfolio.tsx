'use client';

import { motion } from 'framer-motion';
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

  useEffect(() => {
    if (!showModal) {
      setSelectedImg(0);
    }
  }, [showModal]);

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
              <article
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
                  }}
                >
                  {card.name}
                </motion.h4>
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
                <div className="rounded-lg w-max h-max object-cover overflow-hidden max-h-80 ">
                  <Image
                    src={galleryImages[selectedIndex].images[selectedImg]}
                    alt={`${galleryImages[selectedIndex].name} image`}
                    width={250}
                    height={250}
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
                        <Image src={src} alt="image" width={100} height={10} />
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
