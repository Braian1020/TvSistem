import { useState } from 'react';
import { Tv } from 'lucide-react';
import tvboxHeroImg from '../assets/images/tvbox_hero_living_room_1794531370782.jpg';
import tvboxDeviceImg from '../assets/images/tvbox_device_closeup_1794531372493.jpg';
import tvboxUnboxingImg from '../assets/images/tvbox_unboxing_kit_1794531372514.jpg';

const BUNDLED_IMAGE_MAP: Record<string, string> = {
  '/src/assets/images/tvbox_hero_living_room_1794531370782.jpg': tvboxHeroImg,
  '/src/assets/images/tvbox_device_closeup_1794531372493.jpg': tvboxDeviceImg,
  '/src/assets/images/tvbox_unboxing_kit_1794531372514.jpg': tvboxUnboxingImg,
};

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Sistema Android TV Box',
  loading = 'eager',
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = BUNDLED_IMAGE_MAP[src] ?? src;

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
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
