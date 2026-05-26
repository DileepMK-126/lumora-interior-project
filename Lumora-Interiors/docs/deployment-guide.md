# Deployment Guide

## Local Build

1. Install WordPress locally using LocalWP, XAMPP, or a hosting staging site.
2. Install Hello Elementor.
3. Install required plugins from `wordpress-site-files/plugin-setup.md`.
4. Configure global colors and fonts.
5. Build pages using the Elementor specs.
6. Add global CSS in Elementor Site Settings or WordPress Customizer.
7. Add forms through WPForms.
8. Optimize images and cache.

## Hosting Recommendation

Use a fast WordPress host with LiteSpeed or strong caching support. For a portfolio submission, a staging URL is acceptable if it loads quickly and has no admin bars, placeholder text, or broken links.

## Pre-Launch QA

- Check desktop, tablet, and mobile.
- Test every CTA.
- Submit every form once.
- Verify sticky header and mobile menu.
- Verify before/after slider.
- Verify gallery filters.
- Run Lighthouse on Home, Portfolio, and Book Consultation.
- Remove unused pages, draft templates, and demo content.

## Migration

Use one of these:

- All-in-One WP Migration
- Duplicator
- Hosting migration tool

Before migration:

- Clear cache.
- Export Elementor settings.
- Export WPForms.
- Backup database.

After migration:

- Regenerate Elementor CSS.
- Flush permalinks.
- Re-save LiteSpeed settings.
- Check image URLs.
- Run final Lighthouse test.
