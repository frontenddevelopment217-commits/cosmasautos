'use client';

import * as React from 'react';

import Image from 'next/image';

export interface VehicleImageProps {
  src?: string | null;
  alt: string;
  priority?: boolean;
  className?: string;
}

const FALLBACK_SRC = '/images/placeholders/car-placeholder.png';

export function VehicleImage({ src, alt, priority, className }: VehicleImageProps) {
  const resolvedSrc = src && src.trim().length > 0 ? src : FALLBACK_SRC;

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      className={className}
      style={{ objectFit: 'cover' }}
      sizes="(max-width: 768px) 100vw, 33vw"
      loading={priority ? undefined : 'lazy'}
      priority={priority}
    />
  );
}
