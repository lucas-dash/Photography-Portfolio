import { Button } from './ui/button';

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-5 md:gap-10 md:px-16 md:w-max ">
      <article className="flex items-start gap-6 w-full justify-center md:justify-start">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl md:text-4xl">10+</p>
          <p className="text-text-gray text-xs">Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl md:text-4xl">20</p>
          <p className="text-text-gray text-xs">Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl md:text-4xl">9.8</p>
          <p className="text-text-gray text-xs">Project Rate</p>
        </div>
      </article>

      <Button variant={'ghost'} className="border border-secondary rounded-xl">
        Discover
      </Button>
    </section>
  );
}
