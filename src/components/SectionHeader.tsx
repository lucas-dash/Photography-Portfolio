import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
};
export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className="max-sm:text-center py-8 flex items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      <Button size={'icon'} asChild className="rounded-xl">
        <Link
          href={'/'}
          aria-label="back to homepage"
          aria-describedby="Link to homepage"
        >
          <ChevronLeft />
        </Link>
      </Button>
    </section>
  );
}
