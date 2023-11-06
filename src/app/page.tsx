import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Main from '@/components/Main';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-secondary">
        <Showcase />
        <Main />
      </main>
    </>
  );
}
