import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Gallery from '@/components/Gallery';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';

export const metadata: Metadata = {
  title: 'Family Gallery',
  description: 'Family photoshooting',
  keywords: ['Family Gallery', 'Photoshooting'],
};

export default async function Family() {
  const results = (await cloudinary.v2.search
    .expression('folder:Family AND resource_type:image')
    .max_results(10)
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Family Gallery" />
      <Gallery result={results.resources} alt="Family Images" />
    </main>
  );
}
