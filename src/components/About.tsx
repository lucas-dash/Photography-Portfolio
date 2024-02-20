'use client';

import { useInView, motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('h3', { x: 0, opacity: 1 }, { delay: 0.5, duration: 0.6 });
      animate('p', { y: 0, opacity: 1 }, { delay: 0.7, duration: 0.6 });
    }
  }, [animate, isInView, scope]);

  return (
    <section className="py-5 container" ref={scope} id="about">
      <motion.h2
        className="font-medium text-3xl sm:text-4xl md:text-5xl max-sm:text-center px-10 lg:px-40 py-10 "
        initial={{ x: -100, opacity: 0 }}
      >
        About me
      </motion.h2>

      <motion.p
        className="sm:w-4/5 mx-auto lg:px-40 text-lg "
        initial={{ opacity: 0, y: 50 }}
      >
        Hi, my name is Lucie and I&apos;m 32 years old. I am currently based in
        West Sussex near Horsham but I am also a lot in Surrey around Cranleigh.
        I love photographing and capturing the moments of people&apos;s life -
        especially kids, newborns and family portraits.
        <br />
        <br />I prefer to take pictures outside with the natural light but of
        course for the newborns and family portraits I am very happy to come to
        your home. I&apos;ve started photographing as a hobby and it has quickly
        become my real passion. I&apos;ve been capturing family&apos;s pictures
        over 7 years.
      </motion.p>
    </section>
  );
}
