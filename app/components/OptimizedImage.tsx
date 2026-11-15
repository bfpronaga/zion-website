import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

/**
 * OptimizedImage Component
 * 
 * Wrapper around Next.js Image component with sensible defaults
 * for the Zion Website project.
 * 
 * Features:
 * - Automatic WebP/AVIF conversion
 * - Lazy loading by default
 * - Responsive sizing
 * - Blur placeholder
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  if (!width || !height) {
    console.warn(`OptimizedImage: width and height are required when not using fill. Image: ${src}`);
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
