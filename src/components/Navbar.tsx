'use client';

import { AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className={`flex w-full justify-between items-center container py-2 ${
        open ? 'bg-secondary min-h-screen absolute z-[100] inset-0' : ''
      }`}
    >
      <div className="flex items-center gap-10">
        <Image
          src={'/logo.svg'}
          alt="Lucie Homolková Logo"
          width={44}
          height={44}
        />

        <ul className="hidden sm:flex gap-6 font-medium">
          <li>
            <Link href={'/#about'}>About</Link>
          </li>
          <li>
            <Link href={''}>Gallery</Link>
          </li>
        </ul>
      </div>

      <Button
        variant={'ghost'}
        size={'icon'}
        className="sm:hidden rounded-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        <AlignRight />
      </Button>

      <Button className="max-sm:hidden rounded-xl">Contact</Button>

      {/* <AnimatePresence>
        {open && (
          <motion.div className="flex flex-col items-center text-text-light">
            <motion.ul className="flex flex-col ">
              <li>
                <Link href={''}>About</Link>
              </li>
              <li>
                <Link href={''}>Gallery</Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.nav>
  );
}
