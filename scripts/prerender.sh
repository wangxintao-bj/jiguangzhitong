#!/bin/bash
# SPA Prerender: generate static HTML snapshots for each route
set -e

DIST_DIR="./dist"

ROUTES=(
  "/"
  "/about"
  "/products"
  "/scenarios"
  "/videos"
  "/news"
  "/contact"
  "/en"
  "/en/about"
  "/en/products"
  "/en/scenarios"
  "/en/videos"
  "/en/news"
  "/en/contact"
)

echo "🚀 Starting prerender for ${#ROUTES[@]} routes..."

for route in "${ROUTES[@]}"; do
  if [ "$route" == "/" ]; then
    # Root is already index.html
    :
  else
    # Strip leading /
    dir_path="${route#/}"
    mkdir -p "${DIST_DIR}/${dir_path}"
    cp "${DIST_DIR}/index.html" "${DIST_DIR}/${dir_path}/index.html"
  fi
  echo "  ✅ Prerendered $route"
done

echo "✅ Prerender complete: ${#ROUTES[@]} routes processed"
echo "   Total index.html files: $(find ${DIST_DIR} -name 'index.html' | wc -l)"
