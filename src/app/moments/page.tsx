import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Gallery from '@/components/Gallery';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';

export const metadata: Metadata = {
  title: 'Moments Gallery',
  description: 'Moments photoshooting',
};

export default async function Moments() {
  const results = (await cloudinary.v2.search
    .expression('folder:Moments AND resource_type:image')
    .max_results(10)
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Moments Gallery" />
      <Gallery result={results.resources} alt="Moments Images" />
    </main>
  );
}
