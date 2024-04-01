import Gallery from '@/components/Gallery';
import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';
import EmptyImage from '@/components/ui/EmptyImage';

export const metadata: Metadata = {
  title: 'Newborn Gallery',
  description: 'Newborn photoshooting',
  keywords: ['Newborn Gallery', 'Photoshooting'],
};

export default async function Newborn() {
  const results = (await cloudinary.v2.search
    .expression('folder:Newborn AND resource_type:image')
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Newborn Gallery" />
      <Gallery alt="Newborn Gallery" result={results.resources} />
      {results.resources.length === 0 && <EmptyImage />}
    </main>
  );
}
