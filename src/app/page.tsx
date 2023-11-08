import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Main from '@/components/Main';
import Modal from '@/components/Modal';

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.gallery;
  return (
    <>
      <Hero />
      <main className="bg-secondary">
        <Showcase />
        <Main />
        {showModal && <Modal />}
      </main>
    </>
  );
}
