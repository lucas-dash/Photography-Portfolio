import Image from 'next/image';

type Props = {
  images: string[];
  alt: string;
};
export default function Gallery({ images, alt }: Props) {
  return (
    <section className="max-[450px]:columns-1 columns-2 md:columns-3 lg:columns-4 space-y-4 my-10">
      {images.map((img) => {
        return (
          <Image
            key={img}
            src={img}
            alt={alt}
            width={400}
            height={300}
            className="object-cover rounded-xl"
          />
        );
      })}
    </section>
  );
}
