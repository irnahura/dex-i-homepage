# DEX-I Website — Home Page Design Specification

**Product:** DEX-I  
**Brand:** DexLabs AI Education  
**Document:** Home Page UI/UX + Motion Design  
**Version:** 1.0  
**Primary implementation:** Next.js / React  
**Primary visual asset:** `next.mp4`  
**Design direction:** Minimal, premium, technical, AI command-centre aesthetic

---

## 1. Design Intent

DEX-I should feel like an **AI intelligence system for real-world video**, not a conventional SaaS dashboard or generic AI landing page.

The PRD positions DEX-I as an intelligence layer over existing CCTV/IP-camera infrastructure: it detects activity, understands events, generates alerts and turns video into business intelligence.

The homepage should communicate that idea almost immediately:

> **YOUR CAMERAS ARE WATCHING.**  
> **DEX-I MAKES THEM UNDERSTAND.**

The visual language should combine:

- Matte black / deep navy background
- Very limited electric-purple accents
- Thin technical rules and grid lines
- Monospaced system metadata
- Minimal geometric typography
- Video-first storytelling
- Camera/detection overlays
- Sparse UI rather than dense SaaS cards
- Large negative space
- Subtle motion that responds to scrolling

Avoid:

- Large gradient blobs
- Excessive rounded cards
- Generic startup illustrations
- Excessive glassmorphism
- Bright neon overload
- Stock surveillance imagery
- Overly animated UI that competes with the video

The PRD explicitly asks for an AI intelligence-system / surveillance-command-centre / premium B2B technology visual identity, with matte black, deep navy, dark charcoal, limited electric purple, technical lines, grids, camera overlays and monospaced technical text. fileciteturn0file0L752-L780

---

# 2. Homepage Goal

The homepage has five primary jobs:

1. Explain DEX-I within the first few seconds.
2. Show the difference between recording video and understanding video.
3. Demonstrate the product visually.
4. Move visitors toward **Book a Demo**, **Try Our API**, or **Get Started**.
5. Establish the visual foundation for the rest of the public website.

The PRD specifically defines the homepage around a hero, problem/solution explanation, product capabilities, how DEX-I works, and conversion toward demo/subscription/account entry. fileciteturn0file0L119-L143

---

# 3. Global Layout

## Canvas

```text
BACKGROUND
#05060A / near-black

CONTENT WIDTH
1440px maximum

SIDE PADDING
Desktop: 48–64px
Tablet: 32px
Mobile: 20px

GRID
12-column desktop grid
4-column mobile grid

BORDER
1px rgba(255,255,255,0.10)

PRIMARY ACCENT
Electric purple — use sparingly

TEXT
Primary: near-white
Secondary: muted blue-grey
Technical: monospaced
```

## Visual rule

The interface should look almost black when viewed from a distance.

Purple should appear as a **signal**, not as a background colour.

Use purple for:

- Active navigation state
- Tiny status indicators
- Important labels
- Selected UI elements
- CTA hover/focus states
- Detection overlays
- Small system pulses

---

# 4. Header

## Desktop

Header is fixed/sticky.

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [minimal navigation]                                      DEX-I            │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Left side

Keep navigation extremely minimal:

```text
SOLUTIONS     DEVELOPERS     SUBSCRIPTION
```

Optional secondary links can remain inside a menu rather than occupying the main header.

### Right side

Place the product identity on the **right side**:

```text
DEX-I
```

All caps.

The `DEX-I` wordmark should be small, precise and geometric.

### Header CTA

Use one compact outlined action beside DEX-I:

```text
BOOK A DEMO →
```

On smaller screens:

```text
☰                         DEX-I
```

or

```text
DEX-I                     MENU
```

depending on the final responsive composition.

### Header behaviour

At the top of the page:

- Transparent
- No visible container
- Video visible underneath

After ~80px scroll:

- Add a subtle dark translucent background
- Add bottom 1px technical border
- Slight backdrop blur
- Keep height unchanged

Do not use a large floating pill navigation.

---

# 5. Hero — VIDEO-FIRST EXPERIENCE

## Hero concept

The first viewport should feel like entering a surveillance intelligence system.

Use `next.mp4` as the full-bleed visual background.

The supplied `next.mp4` is approximately **1080×606, 16:9, and 5 seconds long**. It is a dark, high-contrast mechanical/industrial visual, which works well as a restrained technical texture behind the DEX-I interface.

## Hero composition

```text
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER                                                               │
│                                                                      │
│                                                                      │
│                    [VIDEO / next.mp4]                                │
│                                                                      │
│     YOUR CAMERAS ARE WATCHING.                                       │
│     DEX-I MAKES THEM UNDERSTAND.                                     │
│                                                                      │
│     AI-powered video intelligence for real-world operations.         │
│                                                                      │
│     [BOOK A DEMO]     [EXPLORE DEX-I ↓]                              │
│                                                                      │
│                          LIVE                                        │
│                     CAMERA_04                                        │
└──────────────────────────────────────────────────────────────────────┘
```

## Video treatment

Video should be:

- `position: absolute`
- `inset: 0`
- `width: 100%`
- `height: 100%`
- `object-fit: cover`
- muted
- autoplay
- loop
- playsInline

Add a very subtle black overlay so text remains readable.

Suggested overlay:

```text
background:
linear-gradient(
  180deg,
  rgba(5,6,10,0.35) 0%,
  rgba(5,6,10,0.15) 45%,
  rgba(5,6,10,0.85) 100%
)
```

Do not heavily tint the video purple.

---

# 6. Hero Typography

### Eyebrow

```text
DEX-I / REAL-WORLD VIDEO INTELLIGENCE
```

Monospaced, uppercase, very small.

### Main heading

```text
YOUR CAMERAS
ARE WATCHING.

DEX-I MAKES THEM
UNDERSTAND.
```

The second statement should have the strongest visual treatment.

Possible layout:

```text
YOUR CAMERAS ARE WATCHING.

DEX-I
MAKES THEM
UNDERSTAND.
```

Keep the heading large but not excessively wide.

### Supporting copy

Use the PRD language as the foundation:

```text
Transform existing surveillance infrastructure into an
AI-powered intelligence system that understands activity,
detects important events and delivers actionable insight.
```

The PRD defines the same core message and hero visual requirements. fileciteturn0file0L121-L142

---

# 7. Hero Technical Overlay

Add very small system labels around the video.

Example:

```text
CAMERA_04
LOBBY

LIVE 17:42:08

PERSON DETECTED
CONFIDENCE 94%

DEX-I INSIGHT
UNUSUAL ACTIVITY
```

These should feel like part of the camera system rather than conventional marketing cards.

Use:

- 10–12px monospaced text
- thin borders
- low opacity
- small purple indicators
- no large shadows

The PRD's example hero interface includes camera feed, bounding boxes, smart zones, timestamps, activity labels and a Dex-I Insight panel. fileciteturn0file0L129-L142

---

# 8. Scroll-Driven Video Zoom

## Core interaction

The homepage should use the supplied video as the beginning of a **scroll-controlled visual sequence**.

Instead of simply scrolling from one section to another:

> The user scrolls → the camera world gets closer → the visual transforms → the next video becomes visible.

This becomes the signature interaction of the site.

## Sequence

### State 01 — Entry

```text
VIDEO SCALE: 1.00
VIDEO OPACITY: 1.00
CONTENT: visible
```

### State 02 — User begins scrolling

```text
VIDEO SCALE: 1.00 → 1.12
CONTENT: slowly moves upward
TECHNICAL OVERLAYS: fade slightly
```

The zoom should feel like the visitor is moving **into the intelligence layer**.

### State 03 — Transition

```text
VIDEO SCALE: 1.12 → 1.20
CURRENT VIDEO: opacity 1 → 0
NEXT VIDEO: opacity 0 → 1
```

The transition should happen while the section is pinned.

### State 04 — Next visual

```text
NEXT VIDEO SCALE: 1.20 → 1.00
NEXT SECTION CONTENT: enters
```

This creates a continuous camera/intelligence journey.

---

# 9. Recommended Scroll Architecture

Use one pinned scene:

```text
<VideoStorySection>

    <VideoLayer />
    <OverlayLayer />
    <HeroContent />
    <TransitionLayer />

</VideoStorySection>
```

Suggested conceptual scroll timeline:

```text
0% ───────────── 30% ───────────── 60% ───────────── 100%

HERO              ZOOM               CROSSFADE        NEXT SECTION
│                 │                  │                │
1.00              1.08               1.18             1.00
scale             scale              scale            scale
```

Recommended implementation approach:

- GSAP ScrollTrigger for scroll progress
- `scrub: true`
- Pin the video scene
- Transform using GPU-friendly `scale` and `translate`
- Crossfade videos with opacity
- Avoid scroll-jacking
- Native scrolling must remain intact

The user should always feel that the animation is responding to their scroll rather than taking control of it.

---

# 10. Accessibility / Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduced-motion mode:

- Disable scroll-driven zoom
- Disable crossfade animation
- Show a static video frame or normal video
- Keep content immediately readable
- Preserve normal scrolling

Do not make the website unusable without animation.

---

# 11. Section 02 — THE PROBLEM

After the hero, transition from cinematic video into a minimal technical section.

## Heading

```text
CCTV RECORDS
WHAT HAPPENED.

DEX-I UNDERSTANDS
WHAT IS HAPPENING.
```

This directly reflects the PRD's problem/solution positioning. fileciteturn0file0L144-L156

## Layout

Two-column desktop:

```text
LEFT                         RIGHT

CCTV                         DEX-I
RECORDS                       UNDERSTANDS

Passive recording             AI video intelligence
Manual review                 Event detection
Hours of footage              Searchable events
Reactive response             Real-time alerts
```

Do not use two huge rounded cards.

Use a split technical layout with a thin vertical divider.

---

# 12. Section 03 — INTELLIGENCE LAYER

## Heading

```text
ADD INTELLIGENCE
TO THE CAMERAS
YOU ALREADY HAVE.
```

Supporting line:

```text
Connect compatible CCTV, IP cameras or RTSP streams.
Define what matters. Dex-I watches, detects and delivers
the resulting intelligence.
```

## Visual

Create a horizontal pipeline:

```text
CAMERAS
   ↓
DEX-I
   ↓
UNDERSTANDING
   ↓
EVENTS
   ↓
ALERTS / API / WEBHOOKS
```

The PRD describes the product workflow as five stages: connect cameras, define what matters, Dex-I watches, events are detected, and intelligence is delivered. fileciteturn0file0L168-L197

---

# 13. Section 04 — CAPABILITIES

Use a minimal grid, not conventional SaaS feature cards.

## Heading

```text
VIDEO
BECOMES
INTELLIGENCE.
```

Capabilities:

```text
01  PERSON DETECTION
02  PERSON TRACKING
03  SMART ZONES
04  EVENT DETECTION
05  REAL-TIME ALERTS
06  SEARCHABLE EVENT HISTORY
07  MULTI-CAMERA INTELLIGENCE
08  BUSINESS ANALYTICS
```

These capabilities are explicitly defined in the PRD. fileciteturn0file0L204-L225

### Interaction

Hovering an item should reveal:

```text
small video crop
+
detection overlay
+
one-line explanation
```

Keep the motion subtle.

---

# 14. Section 05 — LIVE EVENT STORY

Create a full-width dark video/UI scene.

Example:

```text
CAMERA_04 / LOBBY
LIVE

┌──────────────────────────────────────────┐
│                                          │
│          [CAMERA VISUAL]                 │
│                                          │
│      ┌──────────────┐                    │
│      │ PERSON       │                    │
│      │ CONF. 94%    │                    │
│      └──────────────┘                    │
│                                          │
└──────────────────────────────────────────┘

DEX-I INSIGHT

RESTRICTED ZONE ENTRY
HIGH PRIORITY
17:42:08
```

This section visually demonstrates the PRD's hero/event language instead of merely explaining it.

---

# 15. Section 06 — HOW DEX-I WORKS

Use a horizontal scroll/step interaction on desktop and vertical steps on mobile.

```text
01
CONNECT YOUR CAMERAS

02
DEFINE WHAT MATTERS

03
DEX-I WATCHES

04
EVENTS ARE DETECTED

05
INTELLIGENCE IS DELIVERED
```

The actual five-stage workflow is specified in the PRD. fileciteturn0file0L168-L197

Each active step should illuminate one part of the system diagram.

---

# 16. Section 07 — INDUSTRIES

Homepage should provide a compact gateway into Solutions.

## Heading

```text
BUILT FOR
REAL-WORLD OPERATIONS.
```

Show:

```text
HOTELS
RETAIL
SCHOOLS
FACTORIES
OFFICES
```

Interaction:

- Default: text + thin divider
- Hover: background video/image preview
- Active item: electric-purple indicator
- Arrow → opens solution detail page

The PRD identifies Hotels, Retail Stores, Schools, Factories and Offices as the initial target industries. fileciteturn0file0L72-L87

---

# 17. Section 08 — TRY OUR API

This section should be a major developer conversion point.

## Heading

```text
BUILD WITH DEX-I.
```

Supporting copy:

```text
Bring real-world video intelligence into your own
applications and business systems.
```

The PRD defines Cameras, Events, Alerts, Zones, Analytics and Webhooks API categories. fileciteturn0file0L349-L360

## UI

Left:

```text
CAMERAS API
EVENTS API
ALERTS API
ZONES API
ANALYTICS API
WEBHOOKS API
```

Right:

```json
GET /v1/events

{
  "event": "restricted_zone_entry",
  "camera": "camera_04",
  "timestamp": "2026-10-02T15:42:08",
  "confidence": 0.94
}
```

Use a monospace code block with no excessive rounded container.

### CTA

```text
TRY OUR API →
VIEW DEVELOPERS →
```

The PRD's example API request should be used as the visual reference rather than inventing unrelated API functionality. fileciteturn0file0L361-L367

---

# 18. Section 09 — ASK YOUR CAMERAS

This should be visually interesting but clearly labelled **BETA** or **COMING SOON** unless technically available.

## Heading

```text
ASK YOUR CAMERAS.
```

Example:

```text
USER
Was anyone near reception between 2:00 PM and 2:30 PM?

DEX-I

3 individuals were detected near reception.

02:07 PM  PERSON DETECTED
02:13 PM  2 PEOPLE DETECTED
02:24 PM  PERSON EXITED LOBBY
```

The PRD explicitly says this capability can be marked Beta or Coming Soon until technically ready. fileciteturn0file0L227-L243

---

# 19. Section 10 — FINAL CONTACT CTA

This is the main business conversion section.

## Heading

```text
LET'S MAKE
YOUR CAMERAS
INTELLIGENT.
```

Supporting copy:

```text
Tell us what you want Dex-I to detect, understand or monitor.
```

CTA:

```text
REQUEST DEX-I DEMO →
```

Secondary:

```text
CONTACT US
```

The PRD's Contact Us page uses the same core message and specifies a lead form covering name, business, phone, work email, industry, locations, cameras, city and requirement. fileciteturn0file0L595-L623

---

# 20. Footer

Footer should be large but extremely clean.

```text
────────────────────────────────────────────────────────────

DEX-I
REAL-WORLD INTELLIGENCE
BY DEXLABS AI

PRODUCT
Overview
Solutions
Subscription
Developers

SOLUTIONS
Hotels
Retail
Schools
Factories
Offices

DEVELOPERS
API Documentation
Webhooks
API Status

COMPANY
About Us
Contact Us
DexLabs AI

LEGAL
Privacy Policy
Terms of Service
Security

────────────────────────────────────────────────────────────

© 2026 DexLabs AI Education. ALL RIGHTS RESERVED.

```

These footer groups and links are specified in the PRD. fileciteturn0file0L721-L750

### Footer CTA strip

Before the footer links, include:

```text
READY TO MAKE YOUR CAMERAS INTELLIGENT?

[ TRY OUR API ]      [ CONTACT US ]
```

This satisfies the homepage requirement for both developer and business conversion paths without adding another heavy section.

---

# 21. Homepage Navigation Map

```text
HOME
│
├── SOLUTIONS
│   ├── Hotels
│   ├── Retail
│   ├── Schools
│   ├── Factories
│   └── Offices
│
├── SUBSCRIPTION
│
├── DEVELOPERS
│   └── API Documentation
│
├── ABOUT US
│
├── CONTACT US
│
└── LOGIN
```

The public navigation is directly specified by the PRD. fileciteturn0file0L89-L100

---

# 22. Full Page Inventory From PRD

## Public Website — Required

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Product introduction + conversion |
| `/solutions` | Solutions | Industry overview |
| `/solutions/hotels` | Hotels | Hotel use cases |
| `/solutions/retail` | Retail | Retail use cases |
| `/solutions/schools` | Schools | School use cases |
| `/solutions/factories` | Factories | Factory use cases |
| `/solutions/offices` | Offices | Office use cases |
| `/subscription` | Subscription | Starter / Professional / Enterprise |
| `/developers` | Developers | API integration overview |
| `/about` | About Us | Company/product story |
| `/contact` | Contact Us | Demo/lead form |
| `/login` | Login | Platform entry |

## Authenticated Platform

The PRD defines a separate application dashboard after login. fileciteturn0file0L102-L117

```text
/dashboard
/cameras
/cameras/[id]
/events
/events/[id]
/alerts
/zones
/rules
/analytics
/api-keys
/settings
```

### Settings subsections

```text
/profile
/organization
/team
/notifications
/api
/billing
/security
/locations
```

The dashboard requirements cover overview metrics, cameras, camera details, events, event details, alerts, zones, rules, analytics and API keys. fileciteturn0file0L416-L454 fileciteturn0file0L464-L499

---

# 23. Authentication Pages

Build:

```text
/sign-up
/login
/forgot-password
/reset-password
/verify-email
```

The PRD specifies sign up, login, forgot password, reset password, email verification and logout as the initial authentication requirements. fileciteturn0file0L671-L683

Future:

```text
2FA
Google/Microsoft login
Enterprise SSO
```

---

# 24. Future / Conditional Pages

These should not be treated as mandatory homepage/MVP pages until the underlying capability is ready.

### Security

The PRD says to add the Security page once infrastructure policies are finalized.

Potential content:

- Data encryption
- Authentication
- Camera stream security
- API security
- Access controls
- Audit logs
- Data retention
- User permissions
- Deployment infrastructure
- Cloud deployment
- Edge deployment

Do not advertise certifications until officially obtained. fileciteturn0file0L654-L669

### Developer Portal

Future API documentation can expand into:

```text
Authentication
Quick Start
Cameras
Events
Alerts
Zones
Analytics
Webhooks
Errors
Rate Limits
SDKs
Changelog
```

This is explicitly described as a future developer portal in the PRD. fileciteturn0file0L391-L392

---

# 25. Typography

## Headline

Use a futuristic/geometric sans-serif.

Characteristics:

- Bold
- Tight tracking
- High x-height
- Clean geometric shapes
- Minimal stylistic decoration

## Body

Modern neutral sans-serif.

## Technical

Monospace.

Examples:

```text
CAMERA_04
EVENT_ID
CONFIDENCE 94%
LIVE
ONLINE
DETECTING
ALERT
```

The PRD explicitly separates futuristic/geometric headline typography, modern body typography and monospaced technical information. fileciteturn0file0L774-L780

---

# 26. UI Component Language

Buttons should use the PRD's terminology wherever possible:

```text
BOOK DEMO
START MONITORING
VIEW CAMERA
REVIEW EVENT
CREATE RULE
ADD CAMERA
GENERATE API KEY
```

Status language:

```text
LIVE
ONLINE
DETECTING
ALERT
OFFLINE
```

These labels are defined in the PRD. fileciteturn0file0L791-L805

---

# 27. Responsive Behaviour

Desktop should receive the full cinematic experience.

Tablet:

- Reduce video zoom distance
- Reduce heading size
- Convert multi-column sections to 2 columns
- Keep technical overlays sparse

Mobile:

```text
HEADER
↓
VIDEO HERO
↓
HEADLINE
↓
CTA
↓
PROBLEM / SOLUTION
↓
CAPABILITIES
↓
HOW IT WORKS
↓
INDUSTRIES
↓
TRY OUR API
↓
CONTACT
↓
FOOTER
```

On mobile, do not force large horizontal animations.

The PRD requires desktop, laptop, tablet and mobile support while preserving readable content hierarchy, CTA clarity, usable forms/navigation and readable technical overlays. fileciteturn0file0L807-L814

---

# 28. Motion System

Use a restrained motion language.

### Micro

```text
150–250ms
```

For:

- hover
- opacity
- border state
- button movement

### Standard

```text
400–700ms
```

For:

- section reveals
- text transitions
- image/video transitions

### Cinematic

```text
1.2–2.5s
```

For:

- hero zoom
- video crossfade
- major scene transitions

Use:

```text
ease-out
expo.out
power3.out
```

Avoid constant bouncing or elastic effects.

---

# 29. Visual Grid

A subtle grid can appear behind selected sections:

```text
│       │       │       │       │
────────┼───────┼───────┼───────┼────
│       │       │       │       │
────────┼───────┼───────┼───────┼────
│       │       │       │       │
```

Opacity should remain very low.

Grid is a structural layer, not decoration.

---

# 30. Image / Video Rules

Primary homepage visual:

```text
/assets/video/next.mp4
```

Additional future scenes:

```text
/assets/video/camera-intelligence.mp4
/assets/video/event-detection.mp4
/assets/video/analytics.mp4
```

The actual future video files should replace these placeholders when supplied.

Use the supplied `next.mp4` as the first cinematic scene; do not alter its content unless a separate edit is requested.

---

# 31. Homepage Component Structure

Recommended Next.js structure:

```text
app/
└── page.tsx

components/
└── home/
    ├── Header.tsx
    ├── HeroVideo.tsx
    ├── VideoScrollScene.tsx
    ├── ProblemSolution.tsx
    ├── IntelligenceLayer.tsx
    ├── Capabilities.tsx
    ├── EventShowcase.tsx
    ├── HowItWorks.tsx
    ├── Industries.tsx
    ├── ApiPreview.tsx
    ├── AskYourCameras.tsx
    ├── ContactCTA.tsx
    └── Footer.tsx

public/
└── video/
    └── next.mp4
```

---

# 32. Core Homepage Experience

The complete narrative should feel like:

```text
WATCH
  ↓
UNDERSTAND
  ↓
DETECT
  ↓
ALERT
  ↓
ANALYZE
  ↓
INTEGRATE
  ↓
ACT
```

The user should leave the homepage understanding one central concept:

> **DEX-I turns existing camera infrastructure into an intelligence system.**

That is the core product positioning established by the PRD. fileciteturn0file0L39-L45

---

# 33. Final Homepage Order

```text
01  FIXED HEADER

02  HERO
    next.mp4
    YOUR CAMERAS ARE WATCHING.
    DEX-I MAKES THEM UNDERSTAND.
    BOOK A DEMO / EXPLORE DEX-I

03  VIDEO SCROLL TRANSITION
    zoom + cinematic transition

04  PROBLEM / SOLUTION
    CCTV records
    DEX-I understands

05  INTELLIGENCE LAYER
    Camera → Dex-I → Events → Alerts/API

06  CAPABILITIES
    8 core capabilities

07  LIVE EVENT SHOWCASE
    Camera feed + detection + insight

08  HOW DEX-I WORKS
    5-stage workflow

09  INDUSTRIES
    Hotels / Retail / Schools / Factories / Offices

10  TRY OUR API
    API categories + request example

11  ASK YOUR CAMERAS
    Beta / Coming Soon

12  CONTACT CTA
    Let's Make Your Cameras Intelligent.

13  FOOTER
    Product / Solutions / Developers /
    Company / Legal
```

---

# 34. Design Principle

The website should **feel like the camera feed itself is becoming intelligent as the user scrolls**.

The animation is therefore not decoration.

The scroll interaction represents the product concept:

```text
CAMERA
   ↓
VIDEO
   ↓
UNDERSTANDING
   ↓
EVENT
   ↓
INTELLIGENCE
```

The homepage should remain minimal enough that the video, typography and technical overlays carry most of the experience.

**Do not turn DEX-I into a generic dark SaaS dashboard.**

It should feel like a premium AI command system that happens to have a web interface.
