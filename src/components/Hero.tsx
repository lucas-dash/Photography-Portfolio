'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="bg-primary min-h-screen h-full flex flex-col justify-between pb-10 2xl:container">
      <Navbar />

      <div className="h-full w-full grid grid-rows-[150px_1fr] md:grid-cols-2 md:grid-rows-1 py-5 px-2 sm:px-5 lg:px-10 text-center md:text-left ">
        <motion.h1
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl z-50 font-normal"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Beautiful Moments Is Everything
        </motion.h1>

        <section className="flex items-center justify-center relative">
          <motion.div
            initial={{ x: 12, y: -25, rotate: '5deg' }}
            animate={{ x: 12, y: -25, rotate: '-8deg' }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: 'spring',
            }}
            className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25 z-20"
          >
            <Image
              src={'/photos/kids/2.webp'}
              alt="boy kid photo"
              width={168}
              height={227}
              priority
              className="rounded-sm object-cover h-[180px] w-[125px] min-[370px]:h-[200px] min-[370px]:w-[150px] sm:h-[260px] sm:w-[200px] "
            />
          </motion.div>
          <motion.div
            initial={{ x: -18, y: 25, rotate: '-8deg' }}
            animate={{ x: -18, y: 25, rotate: '14deg' }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: 'spring',
            }}
            className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25 z-10"
          >
            <Image
              src={'/photos/materniny/4.jpg'}
              alt="newborn photo"
              width={168}
              height={221}
              priority
              className="rounded-sm object-cover h-[180px] w-[125px] min-[370px]:h-[200px] min-[370px]:w-[150px] sm:h-[260px] sm:w-[200px]"
            />
          </motion.div>
        </section>
      </div>
      <Testimonials />
    </header>
  );
}
