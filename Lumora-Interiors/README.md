# LUMORA INTERIORS

Luxury WordPress + Elementor website handoff package for an internship submission that needs to feel production-ready, cinematic, and recruiter-impressive within the first five seconds.

## Brand

- Brand: Lumora Interiors
- Tagline: Designing Spaces That Inspire.
- Category: Luxury interior design studio
- Mood: architectural, minimal, cinematic, warm, refined
- Stack: WordPress, Hello Elementor, Elementor, Essential Addons, Royal Elementor Addons, WPForms, LiteSpeed Cache, Smush

## Package Contents

```text
Lumora-Interiors/
  wordpress-site-files/
    custom-css/lumora-global.css
    elementor-section-specs/homepage.md
    elementor-section-specs/all-pages.md
    plugin-setup.md
  working-site/
    index.html
    about.html
    services.html
    portfolio.html
    project-modern-villa.html
    project-smart-penthouse.html
    project-scandinavian-apartment.html
    project-luxury-workspace.html
    project-minimal-studio.html
    testimonials.html
    blog.html
    contact.html
    consultation.html
    styles.css
    script.js
    server.mjs
  screenshots/
    README.md
  assets/
    asset-direction.md
    demo-video-link.txt
  docs/
    design-system.md
    execution-roadmap.md
    seo-performance-guide.md
    deployment-guide.md
    recruiter-presentation.md
    setup-guide.md
    performance-report.md
```

## Build Philosophy

The site should not feel like an Elementor template. It should feel like a small luxury product studio built a digital showroom: restrained typography, cinematic imagery, quiet motion, strong rhythm, and sharp conversion paths.

The winning strategy is not adding every possible widget. It is making every section feel expensive: fewer elements, more negative space, premium image direction, consistent spacing, and copy that sounds like a confident design studio.

## Fast Setup Order

### Working Website Preview

The fully functional website is inside `working-site/`.

Run it locally:

```bash
cd Lumora-Interiors/working-site
node server.mjs
```

Open:

```text
http://localhost:4173
```

Included working features:

- 13 HTML pages.
- Cinematic homepage.
- Sticky navigation.
- Mobile menu.
- Portfolio category filters.
- Five individual project showcase pages.
- Before/after comparison slider.
- Animated counters.
- Testimonial carousel.
- Masonry gallery.
- FAQ accordion.
- Contact and consultation forms with success states.
- Floating WhatsApp button.
- Back-to-top button.
- Scroll progress indicator.
- Responsive layouts for desktop, tablet, and mobile.

### WordPress Build Order

1. Install WordPress and Hello Elementor.
2. Install Elementor, Essential Addons, Royal Elementor Addons, WPForms, LiteSpeed Cache, and Smush.
3. Configure global fonts and colors from `docs/design-system.md`.
4. Add the global CSS from `wordpress-site-files/custom-css/lumora-global.css`.
5. Build the homepage from `wordpress-site-files/elementor-section-specs/homepage.md`.
6. Build the remaining pages from `wordpress-site-files/elementor-section-specs/all-pages.md`.
7. Apply SEO and performance settings from `docs/seo-performance-guide.md`.
8. Capture screenshots and record the demo walkthrough.

## Quality Bar

- Mobile-first responsive QA across 390px, 768px, 1024px, 1440px.
- Lighthouse target: 90+ Performance, 95+ Accessibility, 95+ Best Practices, 95+ SEO.
- No low-resolution images, weak stock-photo crops, inconsistent button styles, or cramped mobile sections.
- All CTAs must lead to either Portfolio, Contact, or Book Consultation.
