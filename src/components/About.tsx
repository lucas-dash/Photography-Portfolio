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
    <section className="py-5 container" ref={scope}>
      <motion.h3
        className="font-medium text-3xl sm:text-4xl md:text-5xl sm:text-left text-center px-10 lg:px-40 py-10 "
        initial={{ x: -100, opacity: 0 }}
      >
        About me
      </motion.h3>

      <motion.p
        className="w-4/5 mx-auto lg:px-40 "
        initial={{ opacity: 0, y: 50 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est itaque
        officia sapiente sed adipisci culpa consectetur architecto ipsa nihil
        perspiciatis at voluptatibus molestias in facere doloribus, vero
        assumenda. Dolores, incidunt.
      </motion.p>
    </section>
  );
}
