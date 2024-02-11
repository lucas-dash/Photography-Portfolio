import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60dvh]">
      <Loader2 className="animate-spin" size={22} />
    </div>
  );
}
