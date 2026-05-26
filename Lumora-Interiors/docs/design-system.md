# Design System

## Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Matte Black | `#111111` | Primary background, hero overlays, footer |
| Warm White | `#F8F5F2` | Main page background and text on dark surfaces |
| Luxury Gold | `#C8A96B` | CTAs, dividers, icons, active states |
| Soft Gray | `#D9D9D9` | Borders, muted text, cards |

## Typography Scale

Desktop:

- Display XL: Playfair Display, 88px, line-height 0.95, weight 600
- H1: Playfair Display, 72px, line-height 1.0, weight 600
- H2: Playfair Display, 52px, line-height 1.08, weight 600
- H3: Playfair Display, 32px, line-height 1.15, weight 600
- Eyebrow: Inter, 12px, uppercase, 0.16em letter spacing, weight 600
- Body Large: Inter, 20px, line-height 1.65
- Body: Inter, 16px, line-height 1.75
- Small: Inter, 14px, line-height 1.6

Tablet:

- H1: 54px
- H2: 42px
- H3: 28px
- Body Large: 18px

Mobile:

- H1: 42px
- H2: 34px
- H3: 24px
- Body Large: 17px
- Body: 15.5px

## Spacing System

- Page max width: 1200px
- Wide media max width: 1440px
- Desktop section padding: 112px top / 112px bottom
- Dense desktop section padding: 80px top / 80px bottom
- Tablet section padding: 72px top / 72px bottom
- Mobile section padding: 48px top / 48px bottom
- Grid gap desktop: 32px
- Grid gap tablet: 24px
- Grid gap mobile: 18px
- Card padding desktop: 32px
- Card padding mobile: 22px
- Button height: 52px desktop, 48px mobile
- Border radius: 8px for cards, 999px for pill buttons only

## Components

### Buttons

Primary: Warm White background on dark sections or Matte Black on light sections. Gold hover border. Use Inter 13px uppercase with 0.12em letter spacing.

Secondary: Transparent background, 1px gold border, gold text. Hover to gold fill and matte black text.

### Cards

Cards use 8px radius, subtle 1px border, soft shadow only on hover. Avoid heavy glass effects except on dark hero overlays and testimonial cards.

### Imagery

Use cinematic interiors with strong architectural lines. Favor warm shadows, textured stone, walnut, brushed brass, linen, travertine, natural light, and wide-angle premium rooms.

Avoid generic smiling team stock photos, over-saturated living rooms, and low-resolution images.

### Motion

Motion should feel quiet:

- Fade in: 500ms ease-out
- Y offset reveal: 24px maximum
- Image hover zoom: scale 1.04 over 600ms
- Button hover: 220ms
- Parallax: subtle, 8-12% movement only
