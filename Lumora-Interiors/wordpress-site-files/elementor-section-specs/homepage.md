# Homepage Elementor Build Spec

## Global Page Settings

- Template: Elementor Full Width
- Body background: `#F8F5F2`
- Content width: 1200px
- Default section padding: desktop 112px top/bottom, tablet 72px, mobile 48px
- Motion rule: use fade-up only, 500ms duration, 80ms stagger between nearby elements

## Sticky Header

Elementor container:

- Height: 78px desktop, 68px mobile
- Position: sticky top 0
- Background: `rgba(17,17,17,0.72)` after scroll, transparent over hero
- Backdrop blur: 18px
- Border bottom: `1px solid rgba(248,245,242,0.12)`
- Logo: LUMORA, Playfair Display 24px, Warm White
- Nav: Home, About, Services, Portfolio, Testimonials, Blog, Contact
- CTA: Book Consultation

Mobile:

- Hamburger menu with full-screen dark panel
- CTA remains visible inside menu

## Section 1: Cinematic Hero

Purpose: recruiter wow moment and emotional brand positioning.

Container:

- Min height: 100vh
- Background: premium interior image or muted video
- Overlay: `linear-gradient(90deg, rgba(17,17,17,.78), rgba(17,17,17,.42), rgba(17,17,17,.14))`
- Content max width: 860px
- Padding top: 160px desktop, 120px tablet, 104px mobile
- Align: left, vertically centered

Content:

- Eyebrow: `Luxury Interior Design Studio`
- H1: `Designing Spaces That Inspire.`
- Body: `Lumora Interiors creates refined residential and commercial environments shaped by architecture, atmosphere, and the quiet confidence of timeless materials.`
- Primary CTA: `View Portfolio`
- Secondary CTA: `Book Consultation`
- Scroll indicator: slim gold vertical line with `Scroll` label

Animation:

- Eyebrow fade-up delay 100ms
- H1 fade-up delay 220ms
- Body fade-up delay 340ms
- Buttons fade-up delay 460ms
- Background parallax: 10% movement

Responsive:

- Mobile hero content width: 100%
- H1 max: 3 lines
- Buttons stack full width with 12px gap

## Section 2: Trust + Stats

Layout:

- Dark background `#111111`
- 4-column desktop, 2-column tablet, 1-column mobile
- Padding: 72px desktop, 48px mobile
- Top border: `1px solid rgba(248,245,242,.12)`

Stats:

- `12+` Years of Experience
- `180+` Projects Completed
- `45+` Luxury Clients
- `18` Design Awards

Widget:

- Elementor Counter
- Number color: Gold
- Label: Warm White at 15px
- Counter duration: 1600ms

## Section 3: Featured Projects

Header:

- Eyebrow: `Selected Work`
- H2: `Interiors with presence, restraint, and soul.`
- Body: `A curated look at homes and workspaces designed with atmosphere, function, and long-term elegance.`

Grid:

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 32px desktop, 18px mobile

Cards:

1. Modern Villa
2. Smart Penthouse
3. Scandinavian Apartment

Card structure:

- Image ratio: 4:5
- Category label overlay
- Title below image
- Meta: Location / Scope
- Hover: image scale 1.045, title gold

CTA: `Explore Portfolio`

## Section 4: Services

Background: Warm White.

Grid:

- 3 columns desktop
- 2 columns tablet
- 1 column mobile

Services:

- Residential Interiors: `Tailored homes composed around light, flow, and the rituals of daily living.`
- Commercial Spaces: `Workplaces and hospitality environments designed for focus, comfort, and brand memory.`
- Smart Home Design: `Integrated technology made invisible, intuitive, and beautifully aligned with the interior.`
- Luxury Renovation: `Elevated transformations for villas, apartments, and legacy properties.`
- Modular Kitchen: `High-performance kitchens with refined materials, precision storage, and seamless detailing.`
- 3D Visualization: `Photoreal concepts that help clients experience the final atmosphere before execution.`

Card:

- Icon: thin-line architectural icon from Elementor/Royal icons
- Padding: 32px
- Border: `1px solid rgba(17,17,17,.12)`
- Hover background: `#111111`
- Hover text: Warm White
- CTA: `Discover Service`

## Section 5: Before / After

Widget:

- Use Royal Elementor Addons Before After Image Comparison.

Content:

- Eyebrow: `Transformation`
- H2: `From unused volume to a composed living experience.`
- Body: `The strongest interiors do not simply decorate. They reveal potential, improve movement, and make every material decision feel inevitable.`

Settings:

- Image ratio: 16:10 desktop, 4:5 mobile
- Handle color: Gold
- Label background: Matte Black
- Animation: fade-up only

## Section 6: Design Process

Timeline items:

1. Consultation: `We uncover lifestyle, constraints, ambitions, and the emotional brief behind the space.`
2. Concept: `Mood, palette, spatial rhythm, and material direction become a cohesive design language.`
3. Visualization: `3D views and layout studies make every key decision clear before execution.`
4. Execution: `Vendors, materials, timelines, and detailing are coordinated with disciplined precision.`
5. Final Reveal: `The completed space is styled, reviewed, and handed over with care.`

Layout:

- Desktop horizontal timeline with gold line
- Mobile vertical timeline
- Number style: Playfair Display 44px in Gold

## Section 7: Testimonials

Carousel cards:

- Background: `#111111`
- Text: Warm White
- Quote mark: Gold
- Card radius: 8px
- Padding: 36px

Testimonials:

- `Lumora gave our villa the calm, gallery-like feeling we wanted without making it feel cold. Every detail felt deeply considered.` - Anika Rao
- `The process was clearer than any renovation experience we have had. The 3D previews made decisions effortless.` - Rohan Mehta
- `Our workspace finally feels like our brand: focused, warm, and quietly premium.` - Mira Kapoor

Settings:

- Autoplay: yes
- Speed: 600ms
- Delay: 4500ms
- Navigation: gold dots only

## Section 8: Gallery

Masonry:

- 8 images
- Mix wide rooms and close-up material details
- Gap: 14px desktop, 10px mobile
- Hover overlay: `View Detail`
- Hover: slight zoom and gold outline

## Section 9: FAQ

Accordion questions:

- `How long does a typical interior project take?`
- `Do you provide 3D visualizations before execution?`
- `Can Lumora handle end-to-end renovation?`
- `Do you work on commercial interiors?`
- `How do consultations work?`

Style:

- No heavy boxes
- Bottom border only
- Gold active icon
- Body text max width 760px

## Section 10: Consultation CTA

Background:

- Matte Black with subtle interior image overlay
- Padding: 96px desktop, 56px mobile

Copy:

- Eyebrow: `Begin With A Conversation`
- H2: `Let us shape a space that feels unmistakably yours.`
- Body: `Book a private consultation and receive a refined direction for layout, mood, budget, and next steps.`
- CTA: `Book Consultation`

## Section 11: Footer

Columns:

- Brand and newsletter
- Navigation
- Services
- Contact

Footer copy:

- Newsletter headline: `Design notes for elevated living.`
- Email placeholder: `Email address`
- Contact: `hello@lumorainteriors.com`, `+91 98765 43210`, `Bengaluru, India`

Bottom bar:

- `© 2026 Lumora Interiors. Designed with restraint and intention.`
