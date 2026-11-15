# YouTube Component Guide

## 🎥 Dynamic YouTube Embed with Auto Thumbnails

Your project now includes reusable YouTube components that automatically fetch thumbnails from YouTube - no manual downloads needed!

---

## 📦 Components

### 1. `YouTubeEmbed` - Single Video Player

Displays a single YouTube video with automatic thumbnail loading and lite-embed performance optimization.

#### Features
- ✅ **Auto-fetches thumbnail** from YouTube's servers
- ✅ **Click-to-play** (lite embed for faster page load)
- ✅ **Play button overlay** (YouTube-style)
- ✅ **Responsive sizing**
- ✅ **Optional title and badge**
- ✅ **Fallback to lower quality** if high-res unavailable

#### Basic Usage

```tsx
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  title="レバノンでイスラエル─神の中東の平和"
  badge="NEW"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | required | YouTube video ID (from URL) |
| `title` | `string` | `''` | Video title to display |
| `badge` | `string` | `''` | Badge text (e.g., "NEW", "教育") |
| `autoplay` | `boolean` | `true` | Autoplay when clicked |
| `showTitle` | `boolean` | `true` | Show title section |

#### How to Get Video ID

From YouTube URL: `https://www.youtube.com/watch?v=JMOkQ8ZGtCI`
                                                    ↑↑↑↑↑↑↑↑↑↑↑
                                                   Video ID

---

### 2. `YouTubeGrid` - Multiple Videos in Grid

Displays multiple YouTube videos in a responsive grid layout.

#### Usage

```tsx
import YouTubeGrid from '@/app/components/YouTubeGrid';

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

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videos` | `Video[]` | required | Array of video objects |
| `columns` | `1 \| 2 \| 3 \| 4` | `2` | Number of grid columns |

#### Video Object

```typescript
{
  id: string;        // YouTube video ID (required)
  title?: string;    // Video title (optional)
  badge?: string;    // Badge text (optional)
}
```

---

## 🎯 How It Works

### 1. Thumbnail Auto-Fetch

```typescript
// Component automatically builds YouTube thumbnail URL
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

// With automatic fallback to lower quality
const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
```

### 2. Click-to-Play (Performance Optimization)

Instead of loading full YouTube player immediately:

**Before Click:**
- Shows static thumbnail image
- Lightweight play button overlay
- Fast page load

**After Click:**
- Loads full YouTube iframe player
- Video starts playing
- User gets immediate feedback

### 3. Responsive Design

The component is already styled with CSS that adapts to:
- Mobile phones (single column)
- Tablets (responsive grid)
- Desktop (multi-column grid)

---

## 📝 Real-World Examples

### Example 1: Simple Video List

```tsx
// Original page - no titles, just videos
<YouTubeGrid
  videos={[
    { id: 'G_aHzZN_XUI' },
    { id: 'HV-nNBbfW_g' },
  ]}
/>
```

### Example 2: Featured Videos with Badges

```tsx
// Modern page - with titles and badges
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

### Example 3: Single Featured Video

```tsx
<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  title="最新ニュース：中東和平について"
  badge="速報"
/>
```

### Example 4: Full Section with Header

```tsx
<section className="youtube-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">最新動画</h2>
      <p className="section-subtitle">
        イスラエルの最新情報を動画でお届けします
      </p>
    </div>
    
    <YouTubeGrid
      videos={[
        { id: 'VIDEO_ID_1', title: 'タイトル1', badge: 'NEW' },
        { id: 'VIDEO_ID_2', title: 'タイトル2' },
        { id: 'VIDEO_ID_3', title: 'タイトル3' },
        { id: 'VIDEO_ID_4', title: 'タイトル4' },
      ]}
    />
  </div>
</section>
```

---

## 🎨 Customization

### Styling

The component uses your existing CSS classes:
- `.video-card` - Card container
- `.video-wrapper` - Video aspect ratio container
- `.video-info` - Title and badge section
- `.video-badge` - Badge styling
- `.video-title` - Title styling

You can customize these in your CSS files.

### Different Grid Layouts

```tsx
// Single column (mobile-style)
<YouTubeGrid videos={videos} columns={1} />

// Two columns (default)
<YouTubeGrid videos={videos} columns={2} />

// Three columns
<YouTubeGrid videos={videos} columns={3} />

// Four columns (large screens)
<YouTubeGrid videos={videos} columns={4} />
```

---

## ⚡ Performance Benefits

### Before (Manual Thumbnails)
```
❌ Download thumbnail images manually
❌ Store in /public folder (~300 KB each)
❌ Manual updates when adding videos
❌ Extra build size
```

### After (Dynamic Component)
```
✅ Thumbnails loaded directly from YouTube
✅ Cached by YouTube's CDN
✅ Zero manual maintenance
✅ Smaller build size
✅ Always up-to-date thumbnails
✅ Lite-embed (click-to-play) saves bandwidth
```

### Load Time Comparison

**Traditional Iframe:**
- Loads full YouTube player immediately
- ~500 KB of JavaScript
- Slower page load

**Lite Embed (Our Component):**
- Shows thumbnail only (~50 KB)
- Loads player on click
- Much faster page load
- Better Core Web Vitals

---

## 🔧 Configuration

The component is already configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'img.youtube.com',
      pathname: '/vi/**',
    },
    {
      protocol: 'https',
      hostname: 'i.ytimg.com',
      pathname: '/vi/**',
    },
  ],
}
```

This allows Next.js to optimize YouTube thumbnails.

---

## 🚀 Adding New Videos

### Step 1: Get Video ID from URL

YouTube URL: `https://www.youtube.com/watch?v=abc123XYZ`

Video ID: `abc123XYZ`

### Step 2: Add to Your Page

```tsx
const videos = [
  // Existing videos
  { id: 'JMOkQ8ZGtCI', title: 'Existing Video' },
  
  // Add new video
  { id: 'abc123XYZ', title: 'New Video Title', badge: 'NEW' },
];

<YouTubeGrid videos={videos} />
```

### Step 3: Deploy

That's it! The thumbnail will automatically load from YouTube.

---

## 🎯 Best Practices

### 1. Always Provide Video ID
```tsx
// ✅ Good
<YouTubeEmbed videoId="JMOkQ8ZGtCI" />

// ❌ Bad - don't use full URL
<YouTubeEmbed videoId="https://www.youtube.com/watch?v=..." />
```

### 2. Add Titles for Accessibility
```tsx
// ✅ Better
<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  title="Clear descriptive title"
/>

// ⚠️ Works but not ideal
<YouTubeEmbed videoId="JMOkQ8ZGtCI" />
```

### 3. Use Badges to Highlight Content
```tsx
<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  badge="NEW"  // or "速報" or "人気" or "教育"
/>
```

### 4. Grid vs Single Video
```tsx
// Use Grid for multiple videos
<YouTubeGrid videos={[...]} />

// Use Single for featured/hero video
<YouTubeEmbed videoId="..." />
```

---

## 📊 Migration from Old Code

### Before (Hardcoded Iframes)

```tsx
<div className="video-card">
  <div className="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/JMOkQ8ZGtCI"
      // ... lots of attributes
    />
  </div>
  <div className="video-info">
    <span className="video-badge">NEW</span>
    <h3 className="video-title">Title here</h3>
  </div>
</div>
```

### After (Component)

```tsx
<YouTubeEmbed
  videoId="JMOkQ8ZGtCI"
  title="Title here"
  badge="NEW"
/>
```

**Benefits:**
- 🎯 Cleaner code
- 🚀 Better performance (lite-embed)
- 🎨 Consistent styling
- 🔧 Easy to maintain

---

## 🆘 Troubleshooting

### Video Thumbnail Not Loading?

1. **Check Video ID** - Make sure it's just the ID, not the full URL
2. **Check Video Privacy** - Private videos don't have public thumbnails
3. **Wait a moment** - YouTube generates thumbnails after upload

### Video Not Playing on Click?

1. **Check Browser Console** - Look for errors
2. **Check Network Tab** - Ensure YouTube isn't blocked
3. **Try Different Browser** - Rule out browser-specific issues

### Thumbnail Quality Low?

The component tries `maxresdefault.jpg` first (1920x1080), then falls back to `hqdefault.jpg` (480x360) if unavailable. Some older videos don't have high-res thumbnails.

---

## 📚 Related Files

- `/app/components/YouTubeEmbed.tsx` - Single video component
- `/app/components/YouTubeGrid.tsx` - Grid layout component
- `/app/modern/page.tsx` - Usage example (modern version)
- `/app/original/page.tsx` - Usage example (original version)
- `/next.config.ts` - Image domain configuration

---

## ✅ Summary

✅ No manual thumbnail downloads needed  
✅ Thumbnails auto-fetched from YouTube  
✅ Click-to-play for better performance  
✅ Reusable component for consistency  
✅ Easy to add new videos  
✅ Responsive and accessible  
✅ Build verified and production-ready  

Just pass a video ID and you're done! 🎉
