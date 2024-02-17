import Gallery from '@/components/Gallery';
import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';

export const metadata: Metadata = {
  title: 'Newborn Gallery',
  description: 'Newborn photoshooting',
};

export default async function Newborn() {
  const results = (await cloudinary.v2.search
    .expression('folder:Newborn AND resource_type:image')
    .max_results(10)
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Newborn Gallery" />
      <Gallery alt="Newborn Gallery" result={results.resources} />
    </main>
  );
}
