# Hawks Baseball Photos

A photo sharing platform for Hawks Baseball team.

## About

This is a React-based web application for sharing and viewing baseball photos. The app is built as a single-page application (SPA) and deployed on Netlify.

## Files

- `index.html` - Main HTML entry point
- `manifest.json` - Web app manifest for PWA features
- `static/` - Contains compiled CSS and JavaScript files
- `logo.png` - Main application logo
- `logo192.png` - 192x192 app icon
- `favicon.ico` - Browser favicon
- `sample_players.csv` - Sample player data
- `netlify.toml` - Netlify deployment configuration
- `_redirects` - SPA routing configuration
- `_headers` - Security and caching headers
- `health.html` - Deployment health check page

## Deployment Status

✅ **DEPLOYMENT HEALTHY**

The application is properly configured for production deployment on Netlify with:

- ✅ SPA routing (all routes redirect to index.html)
- ✅ Security headers enabled
- ✅ Static asset caching optimized
- ✅ HTTPS enforced
- ✅ All static assets accessible

## Deployment Configuration

### Netlify Configuration (`netlify.toml`)
- Static file serving from root directory
- SPA routing support with proper redirects
- Security headers for XSS protection
- Optimized caching for static assets
- Node.js version specification

### SPA Routing (`_redirects`)
- All routes redirect to index.html for client-side routing
- Status 200 to prevent 404 errors

### Security Headers (`_headers`)
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Optimized caching for static assets

## Local Development

To run this site locally:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (if you have serve installed)
npx serve .

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080`

## Health Check

Visit `/health.html` to verify deployment status and configuration.

## Troubleshooting

### Common Issues and Solutions

1. **404 Errors on Direct Routes**
   - Ensure `_redirects` file is present
   - Verify `netlify.toml` has proper redirect configuration

2. **Static Assets Not Loading**
   - Check file paths in `index.html`
   - Verify all files are in the correct directories
   - Ensure proper MIME types are served

3. **JavaScript Errors**
   - Check browser console for specific errors
   - Verify all dependencies are included in the build
   - Ensure no CORS issues with external resources

4. **Performance Issues**
   - Static assets are cached for 1 year
   - Images and fonts are optimized
   - CSS and JS are minified

### Deployment Verification

1. Check main page loads: `https://hawks2025dev.netlify.app/`
2. Verify health check: `https://hawks2025dev.netlify.app/health.html`
3. Test static assets:
   - CSS: `https://hawks2025dev.netlify.app/static/css/main.e827fc07.css`
   - JS: `https://hawks2025dev.netlify.app/static/js/main.822604f0.js`
   - Images: `https://hawks2025dev.netlify.app/logo.png`

## Notes

- This is a production build of a React application
- All static assets are included in the repository
- No build process required (pre-built static files)
- Optimized for performance and security
- Mobile-responsive design with Tailwind CSS 