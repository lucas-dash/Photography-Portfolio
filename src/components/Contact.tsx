'use client';

import { Mail } from 'lucide-react';
import { motion, useInView, useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function Contact() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      animate('h3', { y: 0, opacity: 1 }, { delay: 0.5, duration: 0.4 });
      animate(
        '.svgpath',
        { opacity: 1, pathLength: 1 },
        { duration: 2, ease: 'easeInOut', delay: 0.5 }
      );
    } else {
      animate('h3', { y: 20, opacity: 0 }, { delay: 0.5, duration: 0.4 });
    }
  }, [animate, isInView, scope]);

  return (
    <section
      className="text-text-light min-h-[80dvh] flex flex-col justify-evenly px-5"
      ref={scope}
      id="contact"
    >
      <motion.h3
        className="font-medium text-3xl text-center"
        initial={{ y: 20, opacity: 0 }}
      >
        Contact Me
      </motion.h3>

      <div className="flex flex-col items-center gap-10">
        <p className="text-lg text-center">
          If you have any questions please do contact me on my email.
        </p>

        <div className="flex max-[315px]:flex-col max-[315px]:items-center gap-2 text-lg ">
          <Mail />
          <p className="font-medium">lu.homolkova@gmail.com</p>
        </div>

        <p className="text-center text-lg max-w-sm">
          I&apos;m looking forward to meet anyone who is interested in family
          photo session with me. Lucie
        </p>
      </div>

      <motion.div className="w-20 relative -rotate-90 top-0 left-1/2 -translate-x-1/2 ">
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            className="svgpath"
            initial={{ opacity: 0, pathLength: 0 }}
            d="M89.1292 87.4461C70.7111 89.826 51.8337 87.5492 36.9428 75.0758C23.5021 63.8171 19.7639 47.4376 37.401 38.1651C45.7499 33.7756 58.583 34.1519 64.7975 42.0656C71.7211 50.882 58.9941 58.2316 51.5591 58.4934C34.1936 59.1051 16.7376 46.2245 14.5466 27.3117C11.9518 4.91472 35.1286 5.84043 35.0718 5.98379"
            stroke="#F1ECEA"
            strokeWidth="4"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            className="svgpath"
            initial={{ opacity: 0, pathLength: 0 }}
            d="M76.925 104.153C77.3248 102.139 78.5132 100.51 79.6156 98.8251C83.2351 93.2904 88.9025 88.4867 95.48 86.931C88.1853 86.3023 78.9264 83.0275 75.5172 76.1304"
            stroke="#F1ECEA"
            strokeWidth="4"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
