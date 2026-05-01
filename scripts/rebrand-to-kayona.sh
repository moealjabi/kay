#!/bin/bash

# ============================================================
# Rebrand Strapi → Kayona
# ============================================================
# This script handles the bulk find-and-replace operations
# to rebrand the entire codebase from "Strapi" to "Kayona"
# and "@strapi" to "@kayona"
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

echo "🚀 Starting Strapi → Kayona rebranding..."
echo "Root directory: $ROOT_DIR"
echo ""

# -----------------------------------------------------------
# Phase 1: Package names in all package.json files
# -----------------------------------------------------------
echo "📦 Phase 1: Updating package names (@strapi/* → @kayona/*)..."

find packages -name "package.json" -not -path "*/node_modules/*" | while read -r file; do
  sed -i '' 's|"@strapi/|"@kayona/|g' "$file"
  sed -i '' 's|@strapi/|@kayona/|g' "$file"
  echo "  Updated: $file"
done

echo "✅ Phase 1 complete."
echo ""

# -----------------------------------------------------------
# Phase 2: Update all package.json metadata
# -----------------------------------------------------------
echo "🏷️  Phase 2: Updating package metadata..."

# Update root package.json
sed -i '' 's|"name": "strapi"|"name": "kayona"|g' package.json
sed -i '' 's|"Strapi"|"Kayona"|g' package.json
sed -i '' 's|https://github.com/strapi/strapi|https://github.com/moealjabi/kay|g' package.json
sed -i '' 's|https://strapi.io|https://kayona.io|g' package.json
sed -i '' 's|"Strapi Solutions SAS"|"Kayona LLC"|g' package.json
sed -i '' 's|hi@strapi.io|hello@kayona.io|g' package.json
sed -i '' 's|"strapi"|"kayona"|g' package.json

# Update all sub-package.json files metadata
find packages -name "package.json" -not -path "*/node_modules/*" | while read -r file; do
  sed -i '' 's|"name": "@kayona/strapi"|"name": "@kayona/kayona"|g' "$file"
  sed -i '' 's|"name": "create-strapi"|"name": "create-kayona"|g' "$file"
  sed -i '' 's|"name": "create-strapi-app"|"name": "create-kayona-app"|g' "$file"
  sed -i '' 's|Strapi Admin|Kayona Admin|g' "$file"
  sed -i '' 's|Core of Strapi|Core of Kayona|g' "$file"
  sed -i '' 's|Strapi|Kayona|g' "$file"
  sed -i '' 's|https://github.com/strapi/strapi|https://github.com/moealjabi/kay|g' "$file"
  sed -i '' 's|https://strapi.io|https://kayona.io|g' "$file"
  sed -i '' 's|hi@strapi.io|hello@kayona.io|g' "$file"
  sed -i '' 's|"Strapi Solutions SAS"|"Kayona LLC"|g' "$file"
done

echo "✅ Phase 2 complete."
echo ""

# -----------------------------------------------------------
# Phase 3: Source code - JavaScript/TypeScript files
# -----------------------------------------------------------
echo "💻 Phase 3: Updating source code references..."

# Window global
find packages/core packages/plugins packages/providers -name "*.ts" -o -name "*.tsx" -o -name "*.js" | while read -r file; do
  # window.strapi → window.kayona (but NOT window.kayona.kayona)
  sed -i '' 's/window\.strapi/window.kayona/g' "$file"
  
  # 'strapi' in CSS class names and identifiers
  sed -i '' 's/\.strapi--/\.kayona--/g' "$file"
  sed -i '' 's/#strapi/#kayona/g' "$file"
  sed -i '' 's/data-strapi-/data-kayona-/g' "$file"
  
  # Store keys
  sed -i '' 's/type: .strapi./type: .kayona./g' "$file"
  sed -i '' 's/type: .kayona./type: .kayona./g' "$file"
  
  # Hook names
  sed -i '' "s/strapi::/kayona::/g" "$file"
  
  # Environment variables
  sed -i '' 's/STRAPI_/KAYONA_/g' "$file"
  
  # analytics URLs
  sed -i '' 's/analytics\.strapi\.io/analytics.kayona.io/g' "$file"
  
  # Local storage keys
  sed -i '' 's/STRAPI_THEME/KAYONA_THEME/g' "$file"
  sed -i '' 's/strapi-admin-language/kayona-admin-language/g' "$file"
  
  # Role names in code
  sed -i '' 's/strapi-super-admin/kayona-super-admin/g' "$file"
  sed -i '' 's/strapi-editor/kayona-editor/g' "$file"
  sed -i '' 's/strapi-author/kayona-author/g' "$file"
done

echo "✅ Phase 3 complete."
echo ""

# -----------------------------------------------------------
# Phase 4: CLI binary and command files
# -----------------------------------------------------------
echo "🔧 Phase 4: Updating CLI..."

# CLI binary
sed -i '' 's|require(.\.\./dist/cli)|require(..\/dist\/cli)|g' packages/core/strapi/bin/strapi.js
# Actually we need to rename the file
echo "  CLI binary will be handled separately"

# CLI help text and descriptions
find packages/core/strapi/src/cli -name "*.ts" | while read -r file; do
  sed -i '' 's/Strapi/Kayona/g' "$file"
done

echo "✅ Phase 4 complete."
echo ""

# -----------------------------------------------------------
# Phase 5: URLs in documentation and configs
# -----------------------------------------------------------
echo "🔗 Phase 5: Updating URLs..."

find packages core -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.json" | while read -r file; do
  sed -i '' 's|https://docs\.strapi\.io|https://docs.kayona.io|g' "$file"
  sed -i '' 's|https://market\.strapi\.io|https://market.kayona.io|g' "$file"
  sed -i '' 's|https://cloud\.strapi\.io|https://cloud.kayona.io|g' "$file"
  sed -i '' 's|https://strapi\.io|https://kayona.io|g' "$file"
  sed -i '' 's|github\.com/strapi/strapi|github.com/moealjabi/kay|g' "$file"
done

echo "✅ Phase 5 complete."
echo ""

# -----------------------------------------------------------
# Phase 6: Translation files
# -----------------------------------------------------------
echo "🌐 Phase 6: Updating translation files..."

find packages -path "*/translations/*.json" | while read -r file; do
  # Replace Strapi references in translations
  sed -i '' 's/Strapi/Kayona/g' "$file"
  sed -i '' 's/strapi/kayona/g' "$file"
done

echo "✅ Phase 6 complete."
echo ""

# -----------------------------------------------------------
# Phase 7: Template files (scaffolded projects)
# -----------------------------------------------------------
echo "📋 Phase 7: Updating template files..."

find packages/cli/create-strapi-app/templates -name "*.json" -o -name "*.ts" -o -name "*.js" -o -name "*.tsx" | while read -r file; do
  sed -i '' 's/Strapi/Kayona/g' "$file"
  sed -i '' 's/@kayona\/kayona/@kayona\/kayona/g' "$file"  # Fix potential double-replace
done

echo "✅ Phase 7 complete."
echo ""

# -----------------------------------------------------------
# Phase 8: Rename directories and files
# -----------------------------------------------------------
echo "📁 Phase 8: Renaming directories and files..."

# Rename CLI binary
if [ -f "packages/core/strapi/bin/strapi.js" ]; then
  mkdir -p packages/core/kayona/bin
  cp packages/core/strapi/bin/strapi.js packages/core/kayona/bin/kayona.js
  echo "  Created: packages/core/kayona/bin/kayona.js"
fi

# Rename create-strapi-app references
sed -i '' 's/create-strapi-app/create-kayona-app/g' package.json
sed -i '' 's/create-strapi/create-kayona/g' package.json

echo "✅ Phase 8 complete."
echo ""

echo "🎉 Rebranding script completed!"
echo ""
echo "⚠️  NOTE: Some items still need manual handling:"
echo "   1. Replace logo SVG files"
echo "   2. Replace favicon PNG files"  
echo "   3. Update the startup logger messages"
echo "   4. Update themed CSS colors"
echo "   5. Update README.md"
echo "   6. Update LICENSE file"
echo "   7. Review and fix any double-replaced strings"
echo "   8. Rename packages/core/strapi directory to kayona"
echo ""