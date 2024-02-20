'use client';

import { AlignRight, X } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  return (
    <motion.nav
      className={`flex w-full justify-between items-center container h-[60px] relative z-[60]`}
    >
      <div className="flex items-center justify-center">
        <Image
          src={'/logo.svg'}
          alt="Lucie Homolková Photography Logo"
          width={44}
          height={44}
        />
      </div>

      <ul className="hidden sm:flex sm:flex-1 pl-10 gap-5 font-medium">
        <li className='relative cursor-pointer transition-all duration-500 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-accent hover:before:w-full hover:before:opacity-100'>
          <Link
            to="about"
            spy={true}
            offset={-20}
            smooth={true}
            duration={600}
            role="button"
            className="cursor-pointer text-lg"
            aria-describedby="scroll to about me section"
          >
            About
          </Link>
        </li>
        <li className='relative cursor-pointer transition-all duration-500 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-accent hover:before:w-full hover:before:opacity-100'>
          <Link
            to="gallery"
            spy={true}
            offset={-20}
            smooth={true}
            duration={600}
            className="cursor-pointer text-lg"
            role="button"
            aria-describedby="scroll to gallery section"
          >
            Gallery
          </Link>
        </li>
      </ul>

      <Button
        variant={'ghost'}
        size={'icon'}
        className={`sm:hidden rounded-full relative z-50 ${
          open ? 'bg-primary' : ''
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={26} /> : <AlignRight size={26} />}
      </Button>

      <Button className="max-sm:hidden rounded-xl" asChild>
        <Link
          to="contact"
          spy={true}
          offset={-20}
          smooth={true}
          duration={600}
          className="cursor-pointer"
          role="button"
          aria-describedby="scroll to contact section"
        >
          Contact
        </Link>
      </Button>

      <AnimatePresence>
        {open && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: '-100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'afterChildren',
                    staggerChildren: 0.15,
                  },
                },
                show: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'beforeChildren',
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-secondary p-6 flex flex-col justify-center space-y-10 sm:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="list-none space-y-6 "
              >
                <li>
                  <Link
                    to="about"
                    spy={true}
                    offset={-20}
                    smooth={true}
                    duration={600}
                    aria-describedby="scroll to About me section"
                    onClick={() => setOpen(false)}
                    className="text-5xl font-medium font-secondary text-text-light hover:text-detail transition-all cursor-pointer"
                    role="button"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    offset={-20}
                    smooth={true}
                    duration={600}
                    aria-describedby="scroll to gallery section"
                    onClick={() => setOpen(false)}
                    className="text-5xl font-medium font-secondary text-text-light hover:text-detail transition-all cursor-pointer"
                    role="button"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    offset={-20}
                    smooth={true}
                    duration={600}
                    aria-describedby="scroll to Contact section"
                    onClick={() => setOpen(false)}
                    role="button"
                    className="text-5xl font-medium font-secondary text-text-light hover:text-detail transition-all cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
