import React from 'react';
import { getOptimizedImageUrl } from '../../utils/image';

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  src: string;
  alt: string;
  width?: number; // Base display width (pixels)
  height?: number; // Base display height (pixels)
  quality?: number;
  resize?: 'cover' | 'contain' | 'fill';
  /** If true, it won't render a picture tag, just a single optimized <img> */
  simpleImg?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 80,
  resize = 'cover',
  className,
  style,
  loading = 'lazy',
  fetchPriority,
  simpleImg = false,
  ...rest
}: OptimizedImageProps) {
  // Check if this image URL can be optimized dynamically
  const isOptimizable = src && (src.includes('/storage/v1/object/public/') || src.includes('images.unsplash.com'));
  const isLocalAsset = src && (src.endsWith('.svg') || src.endsWith('.avif') || src.endsWith('.webp') || src.startsWith('data:'));

  if (!isOptimizable || isLocalAsset || simpleImg) {
    const optimizedSrc = isOptimizable
      ? getOptimizedImageUrl(src, { width, height, quality, resize })
      : src;

    return (
      <img
        src={optimizedSrc}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        {...rest}
      />
    );
  }

  // Generate responsive versions (1x and 2x pixel densities)
  const width2x = width ? width * 2 : undefined;
  const height2x = height ? height * 2 : undefined;

  const avif1x = getOptimizedImageUrl(src, { width, height, quality, resize, format: 'avif' });
  const avif2x = getOptimizedImageUrl(src, { width: width2x, height: height2x, quality, resize, format: 'avif' });

  const webp1x = getOptimizedImageUrl(src, { width, height, quality, resize, format: 'webp' });
  const webp2x = getOptimizedImageUrl(src, { width: width2x, height: height2x, quality, resize, format: 'webp' });

  // Default fallback src (WebP or original format)
  const defaultSrc = getOptimizedImageUrl(src, { width, height, quality, resize });

  const avifSrcSet = width ? `${avif1x} 1x, ${avif2x} 2x` : avif1x;
  const webpSrcSet = width ? `${webp1x} 1x, ${webp2x} 2x` : webp1x;

  return (
    <picture className={className}>
      <source srcSet={avifSrcSet} type="image/avif" />
      <source srcSet={webpSrcSet} type="image/webp" />
      <img
        src={defaultSrc}
        alt={alt}
        style={style}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        {...rest}
      />
    </picture>
  );
}
