import { AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between items-center container py-2">
      <div className="flex items-center gap-10">
        <Image
          src={'/logo.svg'}
          alt="Lucie Homolková Logo"
          width={44}
          height={44}
        />

        <ul className="hidden sm:flex gap-6 font-medium">
          <li>
            <Link href={''}>About</Link>
          </li>
          <li>
            <Link href={''}>Gallery</Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden">
        <AlignRight />
      </div>

      <Button className="max-sm:hidden rounded-xl">Contact</Button>
    </nav>
  );
}
