import { ImageOff } from 'lucide-react';

export default function EmptyImage() {
  return (
    <div className="flex items-center justify-center w-full flex-col gap-3">
      <ImageOff size={30} />
      <h1 className="text-3xl">No Images yet.</h1>
    </div>
  );
}
