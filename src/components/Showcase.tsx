'use client';

import Image from 'next/image';
import { useTransform, useScroll, MotionValue, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import useDimension from '@/Hooks/useDimension';

const images = [
  '/photos/gallery/3-17211834_411747989180200_5888476739355281183_o.jpg',
  '/photos/gallery/12-1685539545134.jpg',
  '/photos/gallery/6-18671413_444644212557244_1630118547658552211_o.jpg',
  '/photos/gallery/8-19956798_472390743115924_4058120273786721168_o.jpg',
  '/photos/gallery/9-36312387_631533480534982_9078432786288738304_n.jpg',
  '/photos/gallery/5-17218481_412894439065555_2528746551345793802_o.jpg',
  '/photos/gallery/2-17191629_411748295846836_7811704632820278789_o.jpg',
  '/photos/gallery/13-1685539609571.jpg',
  '/photos/gallery/7-33704726_609921252696205_251905720310562816_n.jpg',
  '/photos/gallery/10-45057775_723441594677503_2555626633427943424_n.jpg',
  '/photos/gallery/4-17212125_411745389180460_2890284939126064606_o.jpg',
  '/photos/gallery/1-19059605_455259884829010_308229698610999692_n.jpg',
];

export default function Showcase() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {}, []);

  return (
    <section className="">
      {/* <div className="h-screen"></div> */}
      <div
        ref={container}
        className="h-[175vh] flex flex-row gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-screen"></div>
    </section>
  );
}

type ColumnType = {
  images: string[];
  y?: MotionValue<number>;
};

const Column = ({ images, y }: ColumnType) => {
  return (
    <motion.div
      style={{ y }}
      className="w-[25%] relative h-full flex flex-col gap-[2vw] min-w-[180px] [&:nth-of-type(1)]:top-[-45%] [&:nth-of-type(2)]:top-[-95%] [&:nth-of-type(3)]:top-[-45%] [&:nth-of-type(4)]:top-[-75%]   
      "
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full rounded-xl overflow-hidden"
          >
            <Image src={src} alt="images" fill className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
