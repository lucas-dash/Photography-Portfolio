import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Main from '@/components/Main';
import { Suspense, lazy } from 'react';
import Loading from '@/components/ui/loading';

export default function Home() {
  const ContactLazy = lazy(() => import('@/components/Contact'));

  return (
    <>
      <Hero />
      <main className="bg-secondary">
        <Showcase />
        <Main />
        <Suspense fallback={<Loading />}>
          <ContactLazy />
        </Suspense>
      </main>
    </>
  );
}
