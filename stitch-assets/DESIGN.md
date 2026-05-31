---
name: Luminous Depth
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#343536'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#bcc6e6'
  on-secondary: '#263049'
  secondary-container: '#3c4661'
  on-secondary-container: '#aab4d4'
  tertiary: '#e7bf99'
  on-tertiary: '#432b10'
  tertiary-container: '#281400'
  on-tertiary-container: '#9d7b5a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#bcc6e6'
  on-secondary-fixed: '#101b33'
  on-secondary-fixed-variant: '#3c4661'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#e7bf99'
  on-tertiary-fixed: '#2b1701'
  on-tertiary-fixed-variant: '#5d4124'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#343536'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 160px
  section-gap-mobile: 80px
---

## Brand & Style

The design system is engineered for high-end creative developers and designers who operate at the intersection of technical precision and artistic vision. The brand personality is **sophisticated, intentional, and avant-garde**, moving away from "template-style" portfolios toward a bespoke, editorial digital experience.

The visual style is a curated mix of **Glassmorphism** and **High-Contrast Minimalism**. It utilizes deep layers of "Midnight" space to create an infinite canvas, where interactive elements feel like luminous physical objects floating within a high-precision interface. The emotional response should be one of quiet confidence—professional enough for enterprise clients, yet experimental enough for creative studios.

## Colors

The palette is rooted in a deep-space **Midnight Navy** (#0A192F) to provide maximum contrast for typography and effects. 

- **Primary Background:** Used for the base layer and large sections.
- **Secondary Text (Slate Gray):** Provides hierarchy, used for body descriptions and metadata to keep the focus on headlines.
- **Teal Accent:** The primary interactive signifier. Used for links, primary buttons, and successful states. It evokes a "cyber-modern" feel.
- **Gold Accent:** Reserved for high-value highlights, featured projects, and awards. It adds the "premium" editorial layer.
- **Glass Surfaces:** Semi-transparent layers that use a slightly lighter navy tint with backdrop blurs to create depth without breaking the dark-mode immersion.

## Typography

The typography system relies on **Inter** for its neutral, highly-legible characteristics that scale beautifully from massive display headers to compact body text. **JetBrains Mono** is introduced for technical metadata, "over-eyebrow" labels, and code snippets, grounding the creative visuals with a developer's precision.

Headlines should utilize tight letter-spacing and heavy weights to create a "blocky" editorial feel. Body text should maintain generous line heights (1.6x) to ensure readability against the dark background. All monospaced labels should be set in Uppercase to distinguish them from functional UI text.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain editorial control over whitespace, transitioning to a **Fluid Grid** for mobile devices.

- **Desktop (1200px+):** A 12-column grid with wide 24px gutters. Use asymmetrical layouts (e.g., content spanning columns 2-10) to create a custom, non-template look.
- **Section Spacing:** Generous vertical rhythm is critical. Use 160px gaps between major sections to allow the glassmorphic elements "room to breathe."
- **Component Spacing:** Use an 8px base unit. Internal card padding should be a minimum of 32px to emphasize luxury through negative space.

## Elevation & Depth

Depth is not communicated through traditional drop shadows, but through **Tonal Stacking** and **Backdrop Blurs**.

1.  **Level 0 (Base):** #0A192F. Solid, no blur.
2.  **Level 1 (Cards/Navigation):** `rgba(17, 34, 64, 0.7)` with a `20px` backdrop-filter blur. A thin `1px` border using `rgba(100, 255, 218, 0.1)` (Teal at low opacity) defines the edges.
3.  **Level 2 (Hover/Floating):** Higher transparency with a subtle glow. Use a "box-shadow" that mimics a teal or gold ambient light source rather than a black shadow (e.g., `0 20px 40px rgba(0,0,0,0.4), 0 0 10px rgba(100, 255, 218, 0.05)`).

All elevated elements should feature a **Subtle Linear Gradient** border (top-left to bottom-right) to catch "light" as the user scrolls.

## Shapes

The design system uses a **Soft (Level 1)** roundedness approach. This 4px–12px range maintains a professional, architectural feel—sharp enough to feel precise, but rounded enough to feel modern.

- **Standard Elements (Inputs/Buttons):** 4px (rounded-sm).
- **Cards & Sections:** 12px (rounded-lg).
- **Interactive Accents:** Small circular elements or pills are permitted only for status indicators or tags to provide visual variety.

## Components

### Buttons
- **Primary:** Outline style using the Teal (#64FFDA) color. On hover, a subtle Teal outer glow and a 10% opacity Teal background fill. No solid fills except for critical CTAs.
- **Ghost:** Monospaced text with an arrow icon. Transition the icon position on hover.

### Cards (Project Cards)
- Utilize the Glassmorphism effect. The background should be a subtle gradient. 
- **Interaction:** On hover, the 1px border should transition from the muted Teal to the vibrant Gold accent. Images inside cards should have a grayscale filter by default, bursting into full color on hover.

### Inputs & Forms
- Minimalist bottom-border only or a very dark, inset-shadow background. 
- Focus state: The bottom border scales from the center using the Teal accent.

### Chips/Tags
- Small monospaced labels. Background: `rgba(100, 255, 218, 0.05)`. Border: `1px solid rgba(100, 255, 218, 0.2)`.

### Navigation
- Sticky, blurred glass header. 
- Use a "numbered" navigation style (e.g., 01. Work, 02. About) using the Gold accent for the numbers and Teal for the text.
