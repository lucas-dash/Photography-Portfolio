import Image from 'next/image';
import Navbar from './Navbar';
import Testimonials from './Testimonials';

export default function Hero() {
  return (
    <header className="bg-primary min-h-screen h-full flex flex-col justify-between pb-10">
      <Navbar />

      <div className="h-full grid grid-rows-[150px_1fr] md:grid-cols-2 md:grid-rows-1 py-5 px-5 sm:px-10 text-center md:text-left mt-3">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Beautiful Moments Is Everything
        </h1>

        <section className="flex items-center justify-center relative">
          <div className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25">
            <Image
              src={'/photos/kids/2-1683468197705.jpg'}
              alt="boy kid photo"
              width={168}
              height={227}
              className="rounded-sm object-cover"
            />
          </div>
          <div className="bg-text-light rounded-md p-3 pb-5 w-max h-max shadow-[0_4px_29px_0] shadow-black/25">
            <Image
              src={'/photos/materniny/2-1652277556499.jpg'}
              alt="newborn photo"
              width={168}
              height={221}
              className="rounded-sm object-cover"
            />
          </div>
        </section>
      </div>
      <Testimonials />
    </header>
  );
}
