# Interactive Responsive Web App Specification

Build a polished, interactive, fully responsive web application based on the visual reference provided.

The application must work beautifully on:

- Mobile phone
- Tablet
- Laptop
- Desktop

The layout must adapt automatically to every screen size without important content being cut off, hidden, overlapping, or overflowing.

---

# 1. MAIN GOAL

Create an interactive web application that:

- Matches the visual reference as closely as possible.
- Is fully responsive across mobile, tablet, laptop, and desktop.
- Keeps all important content visible.
- Has smooth, subtle animations.
- Feels modern and interactive.
- Works well with both mouse and touch.
- Does not look like a generic template.
- Maintains a clean and premium user experience.

---

# 2. TECH STACK

Use:

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

Optional when useful:

- CSS Grid
- Flexbox
- React hooks
- Intersection Observer

Do not add unnecessary libraries.

---

# 3. RESPONSIVE DESIGN REQUIREMENTS

The web application must support these screen categories.

## Mobile

Target approximately:

```text
320px - 767px
```

Requirements:

- Use a mobile-first layout.
- Content should stack vertically when necessary.
- No horizontal scrolling.
- No clipped text.
- No overlapping cards.
- Buttons must be easy to tap.
- Minimum comfortable touch target:
  - around 44px height
- Navigation should adapt into a mobile-friendly menu if necessary.
- Cards should use full available width.
- Reduce excessive padding on smaller screens.
- Keep visual hierarchy clear.
- Important information must remain visible.

Recommended spacing:

```text
Page padding: 16px
Section gap: 24px - 48px
Card padding: 16px - 20px
```

---

## Tablet

Target approximately:

```text
768px - 1023px
```

Requirements:

- Use 1-column or 2-column layouts depending on available space.
- Avoid forcing desktop layouts into tablet screens.
- Keep cards readable and balanced.
- Navigation should remain accessible.
- Images and visual elements must scale proportionally.

Recommended spacing:

```text
Page padding: 24px - 32px
Section gap: 40px - 64px
```

---

## Laptop

Target approximately:

```text
1024px - 1439px
```

Requirements:

- Use desktop-style composition where appropriate.
- Use 2-column or multi-column sections when useful.
- Keep content centered.
- Avoid making content too wide.
- Preserve good whitespace.

Recommended content width:

```text
max-width: 1200px
```

---

## Large Desktop

Target approximately:

```text
1440px+
```

Requirements:

- Keep content centered instead of stretching everything endlessly.
- Maintain the proportions of the original design.
- Increase whitespace carefully.
- Avoid oversized text or cards.

Recommended content width:

```text
max-width: 1280px - 1440px
```

---

# 4. RESPONSIVE LAYOUT RULES

Follow these rules strictly.

## Never allow:

- Horizontal page scrolling
- Text going outside cards
- Buttons being cut off
- Cards overlapping each other
- Images overflowing containers
- Navigation disappearing without an alternative
- Important content hidden outside the viewport
- Fixed widths that break smaller screens

Use responsive CSS such as:

```css
width: 100%;
max-width: 100%;
min-width: 0;
```

For images:

```css
max-width: 100%;
height: auto;
object-fit: cover;
```

Use:

```css
overflow-x: hidden;
```

only when appropriate.

Do not use it to hide broken layouts.

Fix the layout itself.

---

# 5. FLUID TYPOGRAPHY

Typography must scale naturally between mobile and desktop.

Prefer responsive typography using Tailwind or CSS clamp.

Example:

```css
font-size: clamp(2rem, 5vw, 4rem);
```

Suggested hierarchy:

## Hero Heading

Mobile:

```text
32px - 40px
```

Tablet:

```text
42px - 52px
```

Desktop:

```text
56px - 72px
```

## Section Heading

Mobile:

```text
24px - 30px
```

Desktop:

```text
36px - 48px
```

## Body

```text
15px - 18px
```

Keep line height comfortable.

---

# 6. INTERACTIVE ELEMENTS

The application should feel interactive.

Add appropriate interactions such as:

- Hover states
- Tap states
- Button feedback
- Active navigation state
- Interactive cards
- Expand/collapse sections when useful
- Modal or popup interactions if present in the reference
- Tabs if needed
- Carousel or horizontal content navigation when needed
- Dropdown interactions
- Smooth scrolling
- Scroll-triggered animations

All interactive elements must work on:

- Mouse
- Touchscreen
- Mobile browsers

Do not rely only on hover.

---

# 7. ANIMATION STYLE

Use subtle animations.

Animations should feel:

- Smooth
- Elegant
- Fast
- Natural
- Premium

Do not make animations distracting.

Preferred durations:

```text
150ms - 500ms
```

Preferred easing:

```text
ease-out
ease-in-out
spring
```

---

# 8. PAGE LOAD ANIMATION

When the page first loads:

- Fade content in gently.
- Main hero content may move slightly upward.
- Decorative elements may animate subtly.

Example behavior:

```text
Opacity: 0 → 1
Y position: 20px → 0
Duration: 0.4 - 0.7 seconds
```

Do not delay important content too long.

---

# 9. SCROLL ANIMATIONS

Use scroll animation only where appropriate.

Possible effects:

- Fade in
- Slide up slightly
- Scale from 0.98 to 1
- Stagger cards
- Reveal sections progressively

Example:

```text
opacity: 0 → 1
y: 30px → 0
```

Cards may appear with a small stagger:

```text
0.05s - 0.12s between cards
```

Avoid excessive movement.

---

# 10. HOVER ANIMATIONS

Desktop cards may use subtle hover effects.

Example:

```text
translateY: -4px
scale: 1.01
```

Buttons may:

- Slightly scale
- Change background
- Change border
- Move icon slightly

Keep hover movement subtle.

---

# 11. MOBILE INTERACTIONS

For mobile devices:

- Do not depend on hover.
- Use tap feedback.
- Buttons should provide visible pressed states.
- Interactive elements must have enough spacing.
- Avoid very small icons.
- Avoid gestures that users cannot discover easily.

Navigation may become:

```text
Hamburger menu
Bottom navigation
Compact dropdown
```

Choose the option that best matches the reference.

---

# 12. CARD RESPONSIVENESS

Example responsive card layout:

```text
Mobile:
1 card per row

Tablet:
2 cards per row

Laptop:
2-3 cards per row

Desktop:
3-4 cards per row
```

Do not force four cards onto small screens.

Cards must automatically resize.

Example Tailwind approach:

```html
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```

Adjust based on the actual reference.

---

# 13. RESPONSIVE HERO SECTION

The hero must remain visually strong across all devices.

Desktop example:

```text
Text | Visual
```

Mobile:

```text
Text
Visual
```

or

```text
Visual
Text
```

depending on the reference.

Hero content must never exceed screen width.

CTA buttons should wrap or stack on mobile.

Example:

```text
Desktop:
[ Primary CTA ] [ Secondary CTA ]

Mobile:
[ Primary CTA          ]
[ Secondary CTA        ]
```

---

# 14. IMAGES AND MEDIA

Images must be responsive.

Use suitable aspect ratios.

Never distort images.

Use:

```text
object-cover
object-contain
aspect-ratio
```

depending on context.

For decorative images:

- Reposition them on smaller screens.
- Resize them.
- Hide only truly non-essential decorative elements if necessary.

Never hide important information just to make the mobile version fit.

---

# 15. NAVIGATION

Navigation must remain accessible across screen sizes.

Desktop:

```text
Logo | Navigation links | CTA
```

Mobile:

```text
Logo | Menu button
```

If a hamburger menu is used:

- Animate it smoothly.
- Add a clear close button.
- Prevent background scrolling when the menu is open.
- Ensure menu items are easy to tap.

---

# 16. ANIMATION ACCESSIBILITY

Respect reduced-motion preferences.

Use:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or reduce non-essential animations when the user prefers reduced motion.

Animations must never prevent users from accessing content.

---

# 17. VIEWPORT REQUIREMENTS

Add proper viewport configuration.

For example:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, viewport-fit=cover"
/>
```

Support modern mobile browsers.

Take into account:

- Mobile browser UI
- Safe areas
- Notches when relevant

Use:

```css
env(safe-area-inset-top)
env(safe-area-inset-bottom)
```

when useful.

---

# 18. RESPONSIVE TESTING

Before considering the application complete, verify it at these viewport sizes.

```text
320 x 568
360 x 800
375 x 812
390 x 844
412 x 915
768 x 1024
820 x 1180
1024 x 768
1280 x 800
1366 x 768
1440 x 900
1920 x 1080
```

At every viewport confirm:

- No horizontal scroll
- No clipping
- No overlapping components
- All important text is readable
- Buttons remain visible
- Cards resize correctly
- Navigation works
- Animations remain smooth
- Images remain proportional

---

# 19. INTERACTION STATES

Every interactive component should include appropriate states.

Buttons:

```text
default
hover
active
focus
disabled
```

Inputs:

```text
default
focus
filled
error
disabled
```

Cards when interactive:

```text
default
hover
tap
selected
```

---

# 20. PERFORMANCE

Keep the app lightweight.

Optimize:

- Images
- Animation count
- Component rendering
- Font loading

Avoid:

- Heavy animation loops
- Huge image files
- Excessive JavaScript
- Unnecessary libraries

Animations should remain smooth on mobile devices.

---

# 21. DESIGN QUALITY

The final application should feel like a finished product.

Pay close attention to:

- Spacing
- Alignment
- Typography
- Responsive behavior
- Border radius
- Shadows
- Icons
- Visual hierarchy
- Button sizes
- Mobile usability
- Animation timing

Do not produce a basic wireframe.

Do not produce a generic dashboard unless the reference is actually a dashboard.

---

# 22. IMPLEMENTATION WORKFLOW

Before coding:

1. Analyze the visual reference.
2. Identify all major sections.
3. Identify reusable components.
4. Determine responsive behavior.
5. Determine interactive elements.
6. Determine which elements should animate.

Then implement in this order:

1. Global layout
2. Typography
3. Navigation
4. Hero
5. Main sections
6. Responsive grid
7. Mobile layout
8. Interactive behavior
9. Animations
10. Final visual polish

---

# 23. FINAL RESPONSIVE QA

Do not stop after the desktop version looks correct.

You must explicitly review:

```text
Mobile
Tablet
Laptop
Desktop
```

Fix any layout differences before considering the project finished.

Priority order:

```text
1. Content visibility
2. Usability
3. Responsiveness
4. Visual similarity
5. Interaction quality
6. Animation polish
```

---

# 24. FINAL INSTRUCTION

Build the complete application, not just a static mockup.

The final result must be:

- Fully interactive
- Fully responsive
- Mobile friendly
- Tablet friendly
- Laptop friendly
- Desktop friendly
- Smoothly animated
- Touch friendly
- Visually polished
- Free from layout overflow
- Ready to run

Use the supplied visual reference as the primary source of truth.

Do not redesign it into a different style unless absolutely necessary for responsiveness.

When the reference layout cannot fit on a smaller device, adapt the structure intelligently while preserving the same visual identity and content priority.
