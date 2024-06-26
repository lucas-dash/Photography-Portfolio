import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Gallery from '@/components/Gallery';
import cloudinary from 'cloudinary';
import { CloudinaryResponseType } from '@/Types/cloudinary';
import EmptyImage from '@/components/ui/EmptyImage';

export const metadata: Metadata = {
  title: 'Kids Gallery',
  description: 'Kids photoshooting',
  keywords: ['Kids Gallery', 'Photoshooting'],
};

export default async function Kids() {
  const results = (await cloudinary.v2.search
    .expression('folder:Kids AND resource_type:image')
    .execute()) as CloudinaryResponseType;

  return (
    <main className="container">
      <SectionHeader title="Kids Gallery" />
      <Gallery result={results.resources} alt="Kids Images" />
      {results.resources.length === 0 && <EmptyImage />}
    </main>
  );
}
