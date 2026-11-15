# Current Zion Website Technical Analysis

## Executive Summary

**Platform:** Static HTML Website (No CMS)

The current Zion website at `https://www.zion-jpn.or.jp/` is **NOT built on WordPress or any CMS platform**. It's a traditional static HTML website with manually coded pages.

---

## Technical Details

### 🔍 Key Evidence

#### 1. **Static HTML Files**
- URL structure: `index.html` (static file, not dynamic)
- No CMS-specific URL patterns
- Traditional file-based navigation (`israel_news.html`, `about_us.html`, etc.)

#### 2. **Character Encoding**
```html
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis">
```
- Uses **Shift-JIS** encoding (common in older Japanese websites)
- Not UTF-8, which modern CMSes typically use

#### 3. **No CMS Signatures Found**
**WordPress Indicators (ABSENT):**
- ❌ No `<meta name="generator" content="WordPress">` tag
- ❌ No `/wp-content/` or `/wp-includes/` paths
- ❌ No WordPress-specific CSS classes (`wp-`, `post-`, etc.)
- ❌ No REST API endpoints (`/wp-json/`)
- ❌ No WordPress admin paths

**Other CMS Indicators (ABSENT):**
- ❌ No Movable Type signatures
- ❌ No Wix/Jimdo/Squarespace patterns
- ❌ No Joomla/Drupal indicators
- ❌ No Japanese builders (ホームページビルダー, BiND, etc.)

#### 4. **Technology Stack**
```html
<!-- CSS Framework -->
<link href="css/zerogrid.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/FlexSlider.css" rel="stylesheet">
<link href="css/UniversalMegaMenu.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">

<!-- JavaScript Libraries -->
<script src="js/1.9.0jquery.min.js"></script>
<script src="js/universalMegaMenu.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script src="js/jquery.mobile-menu.js"></script>
<script src="js/jquery.colorbox.js"></script>
```

**Stack Components:**
- **Grid System:** Zerogrid (free CSS grid framework)
- **JavaScript:** jQuery 1.9.0 (older version, from ~2013)
- **Slider:** FlexSlider
- **Menu:** Universal Mega Menu + Mobile Menu jQuery plugins
- **Lightbox:** Colorbox jQuery plugin
- **Analytics:** Google Analytics (UA-6961879-5)

---

## Architecture Type

### **Hand-Coded Static HTML**
This is a traditional website built with:
1. **Manual HTML coding** for each page
2. **Separate CSS files** for styling
3. **jQuery plugins** for interactivity
4. **Static file hosting** (no server-side processing)

### Typical Workflow
```
Content Update Process:
1. Edit HTML files directly (index.html, about.html, etc.)
2. Upload via FTP to web server
3. No database or content management interface
```

---

## Implications for Migration

### ✅ Advantages
1. **Clean Migration:** No CMS database to migrate, just content to extract
2. **Full Control:** Complete freedom to redesign without CMS constraints
3. **No Licensing:** No WordPress licensing or plugin dependencies to worry about

### ⚠️ Challenges
1. **Manual Content Management:** All updates currently require HTML editing and FTP upload
2. **No Version Control:** Likely no git history of content changes
3. **No Content Structure:** Content is embedded in HTML, not structured data
4. **Maintenance Burden:** Adding new articles/videos requires manual HTML editing

### 📋 Migration Strategy

#### Content Extraction
- Parse HTML files to extract:
  - Article content and metadata
  - Menu structure
  - Embedded YouTube videos
  - Newsletter signup forms
  - Event announcements

#### Recommended Next Steps
1. **Inventory all HTML pages** via site crawl
2. **Extract structured content** from HTML
3. **Map content types:**
   - News articles → Headless CMS "Article" content type
   - Video links → "Video" content type
   - Events → "Event" content type
   - Static pages → "Page" content type
4. **Set up Headless CMS** (microCMS or Newt as previously evaluated)
5. **Build Next.js frontend** with modern design
6. **Migrate content** to new system

---

## Maintenance Reality

### Current Method (Before Migration)
```
Non-technical user wants to publish article:
1. Send content to technical person via email
2. Technical person edits HTML file
3. Technical person uploads via FTP
4. Manual testing in browser
⏱️ Time: 30-60 minutes per article
```

### After Headless CMS Migration
```
Non-technical user publishes article:
1. Log into microCMS/Newt dashboard
2. Click "Create New Article"
3. Paste content, add images, set metadata
4. Click "Publish"
⏱️ Time: 5-10 minutes per article
✅ No technical skills required
✅ Automatic responsive layout
✅ SEO metadata built-in
✅ Preview before publish
```

---

## Hosting Environment

Based on the `.or.jp` domain and technical patterns, likely hosted on:
- Japanese shared hosting (Xserver, Sakura, Lolipop, etc.)
- Simple FTP access
- Static file serving (no server-side scripting visible)

---

## Recommendation

**Proceed with Headless CMS migration as planned.**

The current static HTML architecture makes this site an **ideal candidate for modernization** to a Headless CMS + Next.js stack:

1. ✅ No CMS migration complexity
2. ✅ Clean content extraction possible
3. ✅ Dramatic improvement in content management workflow
4. ✅ Modern, responsive, maintainable codebase
5. ✅ Japanese-language CMS options available (microCMS/Newt)

The cost comparison in `docs/CMS_COMPARISON.md` becomes even more relevant: moving from manual HTML editing to a managed headless CMS will provide **enormous workflow improvements** for content creators.

---

*Analysis completed: November 15, 2026*
