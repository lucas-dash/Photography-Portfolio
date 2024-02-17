import Image from 'next/image';

const images = [
  '/photos/gallery/3-17211834_411747989180200_5888476739355281183_o.jpg',
  '/photos/gallery/12-1685539545134.webp',
  '/photos/gallery/6-18671413_444644212557244_1630118547658552211_o.jpg',
  '/photos/gallery/8-19956798_472390743115924_4058120273786721168_o.jpg',
  '/photos/gallery/9-36312387_631533480534982_9078432786288738304_n.jpg',
  '/photos/gallery/5-17218481_412894439065555_2528746551345793802_o.jpg',
  '/photos/gallery/2-17191629_411748295846836_7811704632820278789_o.jpg',
  '/photos/gallery/13-1685539609571.jpg',
  '/photos/gallery/7-33704726_609921252696205_251905720310562816_n.jpg',
  '/photos/gallery/10-45057775_723441594677503_2555626633427943424_n.jpg',
  '/photos/gallery/4-17212125_411745389180460_2890284939126064606_o.jpg',
  '/photos/gallery/1-19059605_455259884829010_308229698610999692_n.jpg',
];

export default function ImageColumn() {
  return (
    <section
      id="showcase"
      className="min-h-screen columns-2 lg:columns-4 space-y-4 -mb-10 pt-4 px-2"
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt="images"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
        );
      })}
    </section>
  );
}
