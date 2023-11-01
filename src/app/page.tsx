import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Main from '@/components/Main';

export default function Home() {
  return (
    <main className="bg-secondary">
      <Hero />
      <Showcase />
      <Main />
    </main>
  );
}
