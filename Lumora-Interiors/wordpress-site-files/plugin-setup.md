# Plugin Setup

## Required Plugins

- Elementor
- Essential Addons for Elementor
- Royal Elementor Addons
- WPForms
- LiteSpeed Cache
- Smush

## Theme

Use Hello Elementor for clean output. Astra is acceptable, but Hello Elementor gives stronger control and avoids theme styling conflicts.

## Elementor Settings

- Disable default colors: No, keep Elementor global colors for quick reuse.
- Disable default fonts: No, define Playfair Display and Inter globally.
- Container layout: Enable Flexbox Containers.
- Optimized DOM Output: Enable.
- Improved Asset Loading: Enable.
- Inline Font Icons: Enable if compatible.

## Essential Addons Usage

- Advanced Accordion for FAQ.
- Filterable Gallery for Portfolio.
- Testimonial Carousel if Royal carousel is not used.

## Royal Elementor Addons Usage

- Before/After Comparison.
- Advanced Slider or Carousel.
- Masonry Gallery.
- Sticky Header if Elementor Pro is unavailable.

## WPForms

Forms:

- Contact Form
- Book Consultation Form
- Newsletter Signup

Book Consultation fields:

- Full Name
- Email
- Phone
- Project Type
- Property Size
- City
- Budget Range
- Preferred Timeline
- Message

## LiteSpeed Cache

Enable:

- CSS minify
- JS minify
- HTML minify
- Browser cache
- Lazy load images
- WebP replacement
- Guest mode if hosting supports LiteSpeed

Do not enable aggressive JS delay until forms, sliders, and menus are tested.

## Smush

- Bulk compress all images.
- Resize original images to max width 2200px.
- Enable lazy loading only in one plugin. Prefer LiteSpeed lazy loading if using LiteSpeed Cache.
