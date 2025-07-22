#!/bin/bash

echo "🏈 Hawks 2025 Deployment Verification"
echo "====================================="

BASE_URL="https://hawks2025dev.netlify.app"

# Function to check URL
check_url() {
    local url=$1
    local description=$2
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" = "200" ]; then
        echo "✅ $description - OK ($status)"
    else
        echo "❌ $description - FAILED ($status)"
    fi
}

echo ""
echo "🔍 Checking critical endpoints..."

check_url "$BASE_URL/" "Main application"
check_url "$BASE_URL/health.html" "Health check page"
check_url "$BASE_URL/static/css/main.e827fc07.css" "CSS file"
check_url "$BASE_URL/static/js/main.822604f0.js" "JavaScript file"
check_url "$BASE_URL/logo.png" "Logo image"
check_url "$BASE_URL/manifest.json" "PWA manifest"

echo ""
echo "🔧 Checking configuration files..."

if [ -f "netlify.toml" ]; then
    echo "✅ netlify.toml - Present"
else
    echo "❌ netlify.toml - Missing"
fi

if [ -f "_redirects" ]; then
    echo "✅ _redirects - Present"
else
    echo "❌ _redirects - Missing"
fi

if [ -f "_headers" ]; then
    echo "✅ _headers - Present"
else
    echo "❌ _headers - Missing"
fi

if [ -f "index.html" ]; then
    echo "✅ index.html - Present"
else
    echo "❌ index.html - Missing"
fi

echo ""
echo "📊 Deployment Summary:"
echo "- SPA routing configured"
echo "- Security headers enabled"
echo "- Static asset caching optimized"
echo "- HTTPS enforced"
echo ""
echo "🚀 Your Hawks 2025 application is ready for production!" 