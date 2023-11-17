import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Main from '@/components/Main';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-secondary">
        <Showcase />
        <Main />
        <Contact />
      </main>
    </>
  );
}
