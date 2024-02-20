import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
};
export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className=" py-8 flex items-center justify-between gap-2">
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      <Button asChild size={'icon'} className="rounded-xl flex-shrink-0">
        <Link
          href={'/'}
          aria-label="Homepage"
          aria-describedby="Link to homepage"
        >
          <ChevronLeft />
        </Link>
      </Button>
    </section>
  );
}
