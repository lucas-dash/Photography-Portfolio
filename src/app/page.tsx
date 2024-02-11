import Hero from '@/components/Hero';
import Main from '@/components/Main';
import { Suspense, lazy } from 'react';
import ImageColumn from '@/components/ImageColumn';
import Loading from '@/components/ui/loading';

export default function Home() {
  const ContactLazy = lazy(() => import('@/components/Contact'));
  return (
    <>
      <Hero />
      <main className="bg-secondary">
        <ImageColumn />
        <Main />
        <Suspense fallback={<Loading />}>
          <ContactLazy />
        </Suspense>
      </main>
    </>
  );
}
