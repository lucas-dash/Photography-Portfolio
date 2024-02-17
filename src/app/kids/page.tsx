import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Gallery from '@/components/Gallery';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';

export const metadata: Metadata = {
  title: 'Kids Gallery',
  description: 'Kids photoshooting',
};

export default async function Kids() {
  const results = (await cloudinary.v2.search
    .expression('folder:Kids AND resource_type:image')
    .max_results(10)
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Kids Gallery" />
      <Gallery result={results.resources} alt="Kids Images" />
    </main>
  );
}
