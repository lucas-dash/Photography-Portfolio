import useCounter from '@/Hooks/useCounter';
import { Button } from './ui/button';

export default function Testimonials() {
  const clients = useCounter(20, 1.5);
  const experience = useCounter(10, 1.5);
  const awards = useCounter(3, 0.5);

  return (
    <section className="flex flex-col items-center gap-5 md:gap-10 md:px-16 md:w-max ">
      <article className="flex items-start gap-6 w-full justify-center md:justify-start">
        <div className="flex flex-col items-center px-1">
          <p className="font-bold text-3xl md:text-4xl">{experience}+</p>
          <p className="text-text-gray text-xs text-center">
            Years of <br /> Experience
          </p>
        </div>
        <div className="flex flex-col items-center px-1">
          <p className="font-bold text-3xl md:text-4xl">{clients}</p>
          <p className="text-text-gray text-xs">Clients</p>
        </div>
        <div className="flex flex-col items-center px-1">
          <p className="font-bold text-3xl md:text-4xl">{awards}</p>
          <p className="text-text-gray text-xs">Awards</p>
        </div>
      </article>

      <Button
        variant={'ghost'}
        className="border border-secondary rounded-xl hover:bg-secondary hover:text-text-light"
      >
        Discover
      </Button>
    </section>
  );
}
