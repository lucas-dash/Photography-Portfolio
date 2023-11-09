import { Mail, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="text-text-light min-h-[95vh] flex flex-col justify-evenly px-5">
      <div>
        <h4 className="font-medium text-4xl text-center pb-10">
          Need Photographer?
        </h4>
        <h3 className="font-medium text-3xl text-center">Contact Me</h3>
      </div>

      <div className="w-20 relative rotate-45 lg:rotate-12 lg:top-12 left-1/2 -translate-x-1/2 md:left-1/4 2xl:left-[35%]">
        <Image
          src="/sketchArrow.svg"
          alt="sketch arrow"
          width={200}
          height={200}
        />
      </div>

      <article className="flex flex-col gap-6 items-center w-max mx-auto">
        <div className="flex gap-5 text-lg">
          <Mail />
          <p>lucie.homolkova@gmail.com</p>
        </div>
        <Link href={''} className="flex gap-5 text-lg">
          <Facebook />
          <p>Facebook</p>
        </Link>
        <Link href={''} className="flex gap-5 text-lg">
          <Instagram />
          <p>Instagram</p>
        </Link>
      </article>
    </section>
  );
}
