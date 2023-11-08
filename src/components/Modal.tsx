'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import { galleryImages } from '@/lib/gallery';
import Image from 'next/image';

export default function Modal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const galleryNumber = searchParams.get('gallery');

  // todo change images size, compres them

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{galleryImages[Number(galleryNumber)].name}</DialogTitle>
        </DialogHeader>
        <div className="columns-2 mx-auto sm:columns-2 space-y-3">
          {galleryImages[Number(galleryNumber)].images.map((src, index) => (
            <div
              key={index}
              className="object-cover rounded-lg overflow-hidden w-full h-full "
            >
              <Image src={src} alt="images" width={150} height={150} />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
