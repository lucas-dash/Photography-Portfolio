'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import { galleryImages } from '@/lib/gallery';
import Image from 'next/image';

export default function Modal({ images }: { images: string[] }) {
  // todo change images size, compres them

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{images}</DialogTitle>
        </DialogHeader>
        {/* <div className="columns-2 mx-auto sm:columns-2 space-y-1 sm:space-y-3">
          {galleryImages[Number(galleryNumber)].images.map((src, index) => (
            <div
              key={index}
              className="object-cover rounded-lg overflow-hidden w-full h-full cursor-pointer"
            >
              <Image src={src} alt="images" width={190} height={190} />
            </div>
          ))}
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
