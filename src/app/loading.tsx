import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Loader2 className="animate-spin" size={28} />
    </section>
  );
}
