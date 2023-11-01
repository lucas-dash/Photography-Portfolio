'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import { motion } from 'framer-motion';

export default function Hero() {
  const variants = {
    initial: {},
  };

  return (
    <header className="bg-primary min-h-screen h-full flex flex-col justify-between pb-10">
      <Navbar />

      <div className="h-full grid grid-rows-[150px_1fr] md:grid-cols-2 md:grid-rows-1 py-5 px-0 sm:px-5 lg:px-10 text-center md:text-left ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-50">
          Beautiful Moments Is Everything
        </h1>

        <section className="flex items-center justify-center relative">
          <motion.div
            initial={{ x: 10, y: -25, rotate: '5deg' }}
            animate={{ x: 10, y: -25, rotate: '-8deg' }}
            className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25 z-20"
          >
            <Image
              src={'/photos/kids/2-1683468197705.jpg'}
              alt="boy kid photo"
              width={168}
              height={227}
              className="rounded-sm object-cover h-[180px] w-[125px] min-[370px]:h-[200px] min-[370px]:w-[150px] sm:h-[260px] sm:w-[200px]"
            />
          </motion.div>
          <motion.div
            initial={{ x: -25, y: 25, rotate: '-8deg' }}
            animate={{ x: -25, y: 25, rotate: '14deg' }}
            className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25 z-10"
          >
            <Image
              src={'/photos/materniny/2-1652277556499.jpg'}
              alt="newborn photo"
              width={168}
              height={221}
              className="rounded-sm object-cover h-[180px] w-[125px] min-[370px]:h-[200px] min-[370px]:w-[150px] sm:h-[260px] sm:w-[200px]"
            />
          </motion.div>
        </section>
      </div>
      <Testimonials />
    </header>
  );
}
