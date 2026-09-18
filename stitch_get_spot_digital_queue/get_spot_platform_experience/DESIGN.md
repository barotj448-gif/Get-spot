---
name: Get Spot Platform Experience
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#bb0112'
  on-secondary: '#ffffff'
  secondary-container: '#e02928'
  on-secondary-container: '#fffbff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  queue-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 75rem
---

## Brand & Style

This design system targets urbanites, diners, and active patrons seeking friction-free access to sought-after local businesses, paired with local venue operators managing high-throughput door operations. 

The emotional tone balances high-velocity precision with serene convenience: liberating consumers from physical queues ("Wait anywhere, live your life") while preserving absolute clarity regarding queue position, transit urgency, and verification.

The visual style is **Modern Startup Minimalism with Tactile Precision**:
- Absolute rejection of muddy gradients, heavy glassmorphism, or purely decorative embellishments.
- Hyper-disciplined structural hierarchy relying on sharp typographic contrast, balanced whitespace, and crisp, physical-feeling interactive states.
- Utilitarian urgency reserved exclusively for queue triggers, while navigation and venue curation remain cool, calm, and navigational.

## Colors

The color system operates under strict semantic division. Color functions as communication, never decoration.

### Primary (Interactive Blue: `#2563EB`, Deep: `#1D4ED8`)
- Anchors the platform interface, category exploration, location pills, selected filters, followed businesses, and navigational metadata.
- Interactive outlines use `#3B82F6` and container backgrounds use `#EFF6FF`.

### Secondary (Spot Red: `#DC2626`, Bright: `#EF4444`, Surface: `#FEF2F2`)
- **Strict Reservation Rule**: Used exclusively for high-stakes queue lifecycle events:
  - The core action trigger ("GET SPOT" / "Hold Spot").
  - Real-time queue counters, live wait times, urgent proximity notifications ("Your spot is coming! Leave now.").
  - Physical token check-in badges and queue cancellation warnings.
- It must never be used for casual navigation, regular badges, or decorative icons.

### Surface & Background Tokens
- Canvas Base: `#FFFFFF`
- Surface Subdued: `#FAFAFA`
- Neutral Canvas / App Backing: `#F5F5F7`
- Crisp Borders: `#E2E8F0` (Default), `#BFDBFE` (Selected/Focus Blue Tint), `#FECACA` (Queue Active Tint)

### Text Hierarchy
- Primary Text: `#0F172A` (Slate 900)
- Secondary / Supporting: `#475569` (Slate 600)
- Muted / Placeholders: `#64748B` (Slate 500)
- Inverse: `#FFFFFF`

## Typography

The platform utilizes a dual-engine typographic hierarchy:
- **Plus Jakarta Sans** provides geometric energy and crisp impact for brand moments, venue headers, hero discovery phrases, and quantitative queue metrics.
- **Inter** ensures legibility across dense data tables, operation metadata, queue estimates, distance tags, and user inputs.

Numerical indicators inside live tracking panels use tabular figures (`font-variant-numeric: tabular-nums`) to prevent horizontal jitter during real-time queue position countdowns.

## Layout & Spacing

The layout is built on an **8pt fluid-responsive grid system**:
- **Mobile (<768px):** 4-column layout, 16px lateral page margins, 12px card gutters. Critical queue status anchors persistently to the bottom safe area via a sticky docked drawer (`z-index: 50`).
- **Tablet (768px - 1024px):** 8-column layout, 24px margins, 16px gutters.
- **Desktop (>1024px):** 12-column layout maxed at 1200px (75rem) width with 24px gutters. Discovery lists and venue maps adopt a dual-pane split view (45% scrollable feed, 55% pinned interactive map viewport).

Vertical flow relies strictly on unified spacing tokens to ensure high visual discipline: elements within a component card sit on 8px/12px offsets, while top-level structural modules are separated by 32px or 48px.

## Elevation & Depth

Visual hierarchy uses **crisp outlines paired with ultra-subtle, clean ambient drop shadows**. No muddy dark shadows or blur-heavy skeuomorphism.

- **Level 0 (Flat Ground):** `#FFFFFF` or `#FAFAFA` surfaces with a 1px solid border (`#E2E8F0`). Used for inactive containers, inputs, and inline listing blocks.
- **Level 1 (Interactive Cards & Discovery Items):** 1px border `#E2E8F0`, with `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`. Elevates slightly on hover with a border transition to `#CBD5E1`.
- **Level 2 (Popovers, Sticky Queue Bars & Select Menus):** 1px border `#E2E8F0`, with `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modal Confirmation & Urgency Alerts):** 1px border `#FECACA` (for queue alerts) or `#BFDBFE` (for spot selections), elevated by `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.

## Shapes

The geometric architecture uses balanced medium rounding to bridge modern digital fluidity with utilitarian software structure:
- **Base Components (Inputs, Default Buttons, Cards):** `rounded-md` (0.5rem / 8px) to `rounded-lg` (1rem / 16px).
- **Interactive Selectors & Tag Pills:** Full pill-shapes (`rounded-full` / 9999px) for city/state/area selectors, category chips, and live badges.
- **Queue Tokens & Badges:** `rounded-lg` (12px) featuring clean 1.5px structural borders for a tangible, physical voucher feel.

## Components

### 1. Location & Territory Selection Pills (State / City / Area)
- **Unselected State:** 
  - Background: `#FFFFFF`
  - Border: 1.5px solid `#3B82F6` (border-blue-500)
  - Typography: `#2563EB`, `label-md`
  - Hover: Background `#EFF6FF`
- **Selected State:** 
  - Background: `#2563EB` (bg-blue-600)
  - Border: 1.5px solid `#2563EB`
  - Typography: `#FFFFFF`, `label-md`
  - Shadow: `0 1px 2px rgba(37, 99, 235, 0.2)`

### 2. Action Buttons
- **Primary Platform Button ("Explore", "Confirm", "Filter"):** 
  - Background: `#2563EB`, Hover: `#1D4ED8`, Active: `#1E40AF`
  - Text: `#FFFFFF`, `font-semibold`
  - Padding: 10px 20px, Border Radius: 8px (0.5rem)
- **The "GET SPOT" Queue Button (Exclusive Red Variant):**
  - Background: `#DC2626` (Red 600), Hover: `#B91C1C`, Active: `#991B1B`
  - Text: `#FFFFFF`, `title-sm`, uppercase tracking, letter-spacing: 0.05em
  - Elevation: 1px subtle red perimeter highlight (`box-shadow: 0 2px 4px rgba(220, 38, 38, 0.25)`)
  - Reserved strictly for queue ingress.

### 3. Live Queue Tracking Card & Proximity Alerts
- Surface: `#FFFFFF`
- Border: 1.5px solid `#F87171` (Red 400)
- Active Queue Indicator: Pulsing 8px dot `#DC2626`
- Large Digit Display: `queue-metric` typography in `#0F172A` with immediate label `#DC2626` ("People ahead of you")
- Urgency Notice Banner: `#FEF2F2` background, `#DC2626` text with 1px border `#FECACA` ("Your Spot is coming! Leave now.")

### 4. Discovery Venue Cards
- Surface: `#FFFFFF`, Border: 1px solid `#E2E8F0`, Radius: 12px
- Hover: Border color transitions to `#93C5FD`, translate-y: -1px
- Header: Venue name in `headline-md` (`#0F172A`) paired with live wait-time pill:
  - If wait > 0: `#FEF2F2` background, `#DC2626` text, border 1px solid `#FECACA`
  - If walk-in available: `#F0FDF4` background, `#16A34A` text, border 1px solid `#BBF7D0`

### 5. Input Fields
- Surface: `#FFFFFF`, Border: 1px solid `#CBD5E1`, Radius: 8px, Text: `#0F172A`
- Focus State: Border 2px solid `#2563EB`, Outline: none, Shadow: `0 0 0 3px rgba(37, 99, 235, 0.12)`
- Placeholder: `#64748B`