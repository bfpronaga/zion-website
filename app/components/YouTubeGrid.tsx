import YouTubeEmbed from './YouTubeEmbed';

interface Video {
  id: string;
  title?: string;
  badge?: string;
}

interface YouTubeGridProps {
  videos: Video[];
  columns?: 1 | 2 | 3 | 4;
}

/**
 * YouTubeGrid Component
 * 
 * Displays a grid of YouTube videos with automatic thumbnails.
 * Perfect for showcasing multiple videos in a section.
 * 
 * @param videos - Array of video objects with id, title, and optional badge
 * @param columns - Number of columns (default: 2)
 * 
 * @example
 * ```tsx
 * <YouTubeGrid 
 *   videos={[
 *     { id: 'JMOkQ8ZGtCI', title: 'Video title', badge: 'NEW' },
 *     { id: 'sNnZ3VaJGD8', title: 'Another video' }
 *   ]}
 * />
 * ```
 */
export default function YouTubeGrid({ videos, columns = 2 }: YouTubeGridProps) {
  const gridClass = columns === 1 ? 'video-grid-single' : 'video-grid';
  
  return (
    <div className={gridClass}>
      {videos.map((video) => (
        <YouTubeEmbed
          key={video.id}
          videoId={video.id}
          title={video.title}
          badge={video.badge}
        />
      ))}
    </div>
  );
}
