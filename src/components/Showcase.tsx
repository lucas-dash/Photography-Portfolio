import { CloudinaryResponseType } from '@/Types/cloudinary';
import cloudinary from 'cloudinary';
import CldImage from './ui/CldImage';

export default async function Showcase() {
  const results = (await cloudinary.v2.search
    .expression('folder:Showcase AND resource_type:image')
    .max_results(10)
    .execute()) as CloudinaryResponseType;

  return (
    <section
      className="min-h-screen columns-2 lg:columns-4 pt-4 px-2 -mb-10 space-y-4"
      id="showcase"
    >
      {results.resources.map((data) => {
        return (
          <CldImage
            key={data.public_id}
            src={data.public_id}
            alt={'showcase image'}
            width={data.width}
            height={data.height}
            aspectRatio={data.aspect_ratio}
            className="rounded-xl object-cover"
          />
        );
      })}
    </section>
  );
}
