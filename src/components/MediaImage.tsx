import { useState } from 'react';
import { Tv } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function MediaImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Sistema Android TV Box',
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-neutral-100 text-neutral-500 border border-neutral-200 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Tv className="w-10 h-10 text-emerald-600 mb-3" strokeWidth={1.75} />
        <span className="text-sm font-semibold text-neutral-800">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
