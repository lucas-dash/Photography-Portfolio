import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Gallery from '@/components/Gallery';
import { galleryImages } from '@/lib/gallery';

export const metadata: Metadata = {
  title: 'Family Gallery',
  description: 'Family photoshooting',
};

export default function Family() {
  return (
    <main className="container">
      <SectionHeader title="Family Gallery" />
      <Gallery images={galleryImages[1].images} alt="Family Images" />
    </main>
  );
}
