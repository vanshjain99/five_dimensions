export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'origin';
  resize?: 'cover' | 'contain' | 'fill';
}

/**
 * Transforms standard image URLs (Supabase storage or Unsplash) into optimized, resized, and compressed URLs.
 */
export function getOptimizedImageUrl(url: string, options: ImageOptimizationOptions = {}): string {
  if (!url) return '';

  const { width, height, quality = 80, format, resize = 'cover' } = options;

  // 1. Supabase Storage URLs
  if (url.includes('/storage/v1/object/public/')) {
    // Convert object retrieval to image rendering endpoint
    const optimizedUrl = url.replace('/storage/v1/object/public/', '/storage/v1/render/image/public/');
    
    const params = new URLSearchParams();
    if (width) params.set('width', width.toString());
    if (height) params.set('height', height.toString());
    if (quality) params.set('quality', quality.toString());
    if (resize) params.set('resize', resize);
    if (format && format !== 'origin') {
      params.set('format', format);
    }

    const queryString = params.toString();
    return queryString ? `${optimizedUrl}?${queryString}` : optimizedUrl;
  }

  // 2. Unsplash URLs
  if (url.includes('images.unsplash.com')) {
    try {
      const parsedUrl = new URL(url);
      
      if (width) parsedUrl.searchParams.set('w', width.toString());
      if (height) parsedUrl.searchParams.set('h', height.toString());
      if (quality) parsedUrl.searchParams.set('q', quality.toString());
      
      if (format) {
        if (format === 'webp') parsedUrl.searchParams.set('fm', 'webp');
        else if (format === 'avif') parsedUrl.searchParams.set('fm', 'avif');
        else parsedUrl.searchParams.delete('fm');
      }
      
      if (resize) {
        if (resize === 'cover') parsedUrl.searchParams.set('fit', 'crop');
        else if (resize === 'contain') parsedUrl.searchParams.set('fit', 'clip');
        else parsedUrl.searchParams.set('fit', 'scale');
      }

      // If format is explicitly set to webp or avif, remove auto=format to avoid conflicts
      if (format && format !== 'origin') {
        parsedUrl.searchParams.delete('auto');
      } else {
        parsedUrl.searchParams.set('auto', 'format');
      }

      return parsedUrl.toString();
    } catch (e) {
      return url;
    }
  }

  // 3. Fallback for all other URLs
  return url;
}
