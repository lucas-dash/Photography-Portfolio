import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newborn Gallery',
  description: 'Newborn photoshooting',
};

export default function Newborn() {
  return (
    <main className="container">
      <SectionHeader title="Newborn Gallery" />
    </main>
  );
}
