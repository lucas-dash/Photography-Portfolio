'use client';

import CldImage from './ui/CldImage';
import { ImageResponse } from '@/Types/cloudinary';
import { motion } from 'framer-motion';

type GalleryProps = {
  result: ImageResponse[];
  alt: string;
};
export default function Gallery({ result, alt }: GalleryProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <motion.section
      className="space-y-4 max-[450px]:columns-1 columns-2 md:columns-3 lg:columns-4 my-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {result.map((data, index) => {
        return (
          <motion.div key={data.public_id} variants={itemVariants}>
            <CldImage
              src={data.public_id}
              alt={alt}
              width={400}
              height={300}
              aspectRatio={data.aspect_ratio}
              className="rounded-xl object-cover"
              priority={index < 4}
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
}
