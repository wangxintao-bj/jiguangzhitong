#!/bin/bash
# Post-build script for SEO: copy 404.html and generate sitemap.xml
set -e

DIST_DIR="./dist"
SITE_URL="https://www.jgzt.cn"

# Copy 404.html for SPA fallback on GitHub Pages
cp public/404.html "$DIST_DIR/404.html"
echo "✅ 404.html copied to dist"

# Generate sitemap.xml with real paths (no #)
cat > "$DIST_DIR/sitemap.xml" << SITEMAP_EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE_URL}/</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/about" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/about" />
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/products</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/products" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/products" />
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/scenarios</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/scenarios" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/scenarios" />
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/videos</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/videos" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/videos" />
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/news</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/news" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/news" />
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/contact" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/contact" />
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
SITEMAP_EOF
echo "✅ sitemap.xml generated in dist"

# Generate Baidu-specific sitemap
cat > "$DIST_DIR/sitemap_baidu.xml" << SITEMAP_BAIDU_EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url>
    <loc>${SITE_URL}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/products</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/scenarios</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/news</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <priority>0.7</priority>
  </url>
</urlset>
SITEMAP_BAIDU_EOF
echo "✅ sitemap_baidu.xml generated in dist"

# Generate robots.txt
cat > "$DIST_DIR/robots.txt" << ROBOTS_EOF
# www.jgzt.cn
User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap_baidu.xml
ROBOTS_EOF
echo "✅ robots.txt generated in dist"
