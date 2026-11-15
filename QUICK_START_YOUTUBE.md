# 🎥 Quick Start: Adding YouTube Videos

## Super Simple - 3 Steps

### 1. Get Video ID from YouTube URL

```
https://www.youtube.com/watch?v=JMOkQ8ZGtCI
                                ↑↑↑↑↑↑↑↑↑↑↑
                               This is the ID
```

### 2. Add to Your Page

```tsx
import YouTubeGrid from '@/app/components/YouTubeGrid';

<YouTubeGrid
  videos={[
    { 
      id: 'JMOkQ8ZGtCI',
      title: 'Video Title',
      badge: 'NEW'  // Optional
    }
  ]}
/>
```

### 3. That's It!

✅ Thumbnail loads automatically from YouTube  
✅ Click to play  
✅ Fully responsive  
✅ No manual downloads needed  

---

## Examples

### Simple (No Titles)

```tsx
<YouTubeGrid
  videos={[
    { id: 'G_aHzZN_XUI' },
    { id: 'HV-nNBbfW_g' },
  ]}
/>
```

### With Titles and Badges

```tsx
<YouTubeGrid
  videos={[
    {
      id: 'JMOkQ8ZGtCI',
      title: 'レバノンでイスラエル─神の中東の平和',
      badge: 'NEW',
    },
    {
      id: 'sNnZ3VaJGD8',
      title: 'なぜどこは破壊され、シメオンは？',
      badge: '教育コンテンツ',
    },
  ]}
/>
```

### Single Video

```tsx
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  title="Featured Video"
  badge="速報"
/>
```

---

## Full Documentation

See `YOUTUBE_COMPONENT_GUIDE.md` for complete guide with all features and options.

---

**That's all you need!** The component handles everything else automatically. 🎉
