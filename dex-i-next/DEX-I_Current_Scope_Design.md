# DEX-I — Current Website & Product UI Design Specification

**Basis:** DEX-I Website Product Requirements Document, Version 1.0  
**Design direction:** Minimal, premium, calm and highly readable — inspired by the restraint of Google, Claude and OpenAI.  
**Current scope:** **9 pages/routes**  
**Deferred:** Authentication pages and Settings

---

## 1. Scope and Page Count

The implementation should NOT create one page for every industry.

These five industries belong inside the single `/solutions` page:

- Hotels
- Retail
- Schools
- Factories
- Offices

The API/developer experience belongs inside one `/developers` page for the current version.

Authentication is deferred, and Settings is deferred.

### Pages to build now

| # | Page | Route |
|---:|---|---|
| 1 | Home | `/` |
| 2 | Solutions | `/solutions` |
| 3 | Subscription | `/subscription` |
| 4 | Documentation | `/documentation` |
| 5 | Contact Us | `/contact` |
| 6 | Products | `/products` |
| 7 | Dashboard / Overview | `/dashboard` |
| 8 | Analytics | `/analytics` |
| 9 | API Keys | `/api-keys` |

### Deferred

- Login
- Sign Up
- Forgot Password
- Reset Password
- Email Verification
- Settings
- Security page
- Expanded Developer Portal

The PRD defines authenticated product navigation including Overview, Cameras, Events, Alerts, Zones, Rules, Analytics, API Keys and Settings; Settings is intentionally excluded from this current scope.

---

# 2. Overall Design Direction

DEX-I should not look like a generic SaaS template.

The target is:

> **Google-level simplicity + Claude-level calm + OpenAI-level product clarity + DEX-I technical intelligence.**

Use:

- Large whitespace
- Strong typography
- Minimal borders
- Very few cards
- Dark surfaces for the product application
- White/light surfaces where appropriate for marketing content
- Very restrained purple accent
- Monospace technical metadata
- Clear hierarchy
- Fast-feeling interactions
- Minimal decorative effects

Avoid:

- Excessive gradients
- Huge glowing elements
- Excessive rounded cards
- Stock surveillance imagery
- Dense dashboard decoration
- Unnecessary animations
- Marketing buzzword overload

The PRD's visual identity is an AI intelligence system / surveillance command centre / premium B2B technology platform, with matte black, deep navy, dark charcoal, limited purple, thin technical lines, grids, camera overlays and monospaced technical information.

---

# 3. Global Visual System

## Marketing background

Use primarily:

```text
#050609
#080A0F
#0B0D12
```

## Product application

```text
Background: #08090D
Surface:    #0D1016
Raised:     #12151C
Border:     rgba(255,255,255,0.09)
```

## Text

```text
Primary:   #F5F5F5
Secondary: #A5A8B0
Muted:     #6F737D
```

## Accent

Electric purple should be used only for:

- active state
- focus state
- small status indicators
- detection outlines
- important CTA states
- selected navigation

Purple should never dominate the entire interface.

---

# 4. Typography

### Headings

Clean geometric/futuristic sans-serif.

Example:

```text
YOUR CAMERAS
ARE WATCHING.

DEX-I MAKES THEM
UNDERSTAND.
```

### Body

Neutral modern sans-serif.

### Technical

Monospace:

```text
CAMERA_04
EVENT_ID
17:42:08
CONFIDENCE 94%
LIVE
ONLINE
DETECTING
```

The PRD specifically separates geometric headline typography, modern body typography and monospaced technical information.

---

# 5. Header

The marketing header should be extremely minimal.

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ SOLUTIONS   SUBSCRIPTION   DEVELOPERS   ABOUT       DEX-I   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Keep **DEX-I on the right side in uppercase**, as requested.

Optional right-side action:

```text
BOOK A DEMO →
```

At the top:

```text
transparent
```

After scrolling:

```text
rgba(5,6,9,.82)
backdrop blur
1px bottom border
```

No oversized pill navigation.

---

# 6. Page 01 — Home

## Hero

Use the supplied `next.mp4` as the full-screen hero visual.

```text
DEX-I

YOUR CAMERAS
ARE WATCHING.

DEX-I MAKES THEM
UNDERSTAND.

AI-powered video intelligence for
real-world operations.

[ BOOK A DEMO ]    [ EXPLORE DEX-I ↓ ]
```

The hero video should:

- autoplay
- loop
- remain muted
- use `playsInline`
- use `object-fit: cover`
- have a subtle dark overlay

## Signature interaction

The homepage uses scroll-driven cinematic motion:

```text
USER SCROLLS
      ↓
VIDEO ZOOMS IN
      ↓
CAMERA / DETECTION OVERLAYS APPEAR
      ↓
CURRENT SCENE FADES
      ↓
NEXT VIDEO / SECTION ENTERS
      ↓
VIDEO ZOOMS OUT
```

Use GSAP ScrollTrigger or an equivalent scroll-progress system.

Do not hijack native scrolling.

Respect:

```text
prefers-reduced-motion
```

## Home sections

```text
01 Hero
02 CCTV Records / DEX-I Understands
03 Intelligence Layer
04 Capabilities
05 Live Event Showcase
06 How DEX-I Works
07 Industries
08 Try Our API
09 Ask Your Cameras
10 Contact CTA
11 Footer
```

The homepage follows the PRD's core message that DEX-I transforms existing CCTV/IP infrastructure into an intelligent system that detects events, generates alerts and turns video into actionable business intelligence.

---

# 7. Page 02 — Solutions

## Important

Do NOT create:

```text
/solutions/hotels
/solutions/retail
/solutions/schools
/solutions/factories
/solutions/offices
```

Instead, create one page:

```text
/solutions
```

## Hero

```text
SOLUTIONS

INTELLIGENCE FOR
REAL-WORLD OPERATIONS.
```

Supporting text:

```text
DEX-I adapts camera intelligence to the
environment you're operating in.
```

## Industry selector

```text
HOTELS
RETAIL
SCHOOLS
FACTORIES
OFFICES
```

Clicking an industry changes the content in the same page.

### Hotels

```text
MAKE EVERY AREA
MORE VISIBLE.

Reception monitoring
Guest-area monitoring
Restricted-area access
Staff movement
Service-area monitoring
Crowd formation
Emergency detection
Entry / exit activity
Parking monitoring
```

### Retail

```text
UNDERSTAND
STORE ACTIVITY.

Customer movement
Entry / exit intelligence
Queue monitoring
Cash-counter activity
Restricted areas
Staff activity
Customer congregation
Store activity analytics
Security events
```

### Schools

```text
SAFETY ACROSS
THE CAMPUS.

Campus monitoring
Entry / exit monitoring
Student movement
Restricted areas
Crowd detection
Safety incidents
Corridor monitoring
Attendance-related intelligence
```

### Factories

```text
SEE WHAT IS
HAPPENING ON THE FLOOR.

Worker safety
Restricted areas
Operational zones
Safety-rule monitoring
Hazard zones
Unusual inactivity
Emergency detection
Movement monitoring
```

### Offices

```text
INTELLIGENCE
BEYOND ACCESS CONTROL.

Access monitoring
Workspace intelligence
Restricted rooms
Visitor movement
Security events
Facility utilization
Operational analytics
```

---

# 8. Page 03 — Subscription

The pricing page should feel like a modern AI product subscription page rather than a traditional enterprise pricing table.

## Hero

```text
SUBSCRIPTION

INTELLIGENCE THAT
SCALES WITH YOUR BUSINESS.
```

## Toggle

```text
MONTHLY        ANNUAL
```

## Plans

```text
STARTER

For small businesses and
single-location deployments.

[ GET STARTED ]
```

```text
PROFESSIONAL

For growing businesses.

[ START PROFESSIONAL ]
```

```text
ENTERPRISE

For large and multi-location
organizations.

[ CONTACT SALES ]
```

Professional can receive subtle emphasis.

Do not use giant gradients or excessive badges.

Pricing must remain configurable because the PRD specifies that pricing should not be hardcoded.

---

# 9. Page 04 — Documentation

The **Developers/API** and **About Us** content should be consolidated into one Documentation area rather than existing as separate top-level marketing pages.

Route:

```text
/documentation
```

## Documentation hero

```text
DOCUMENTATION

UNDERSTAND DEX-I.
BUILD WITH DEX-I.

Everything needed to understand the platform,
its intelligence layer and its APIs.
```

## Documentation navigation

Use a clean left sidebar or top documentation navigation:

```text
OVERVIEW
HOW DEX-I WORKS
CAPABILITIES
SOLUTIONS
API
CAMERAS API
EVENTS API
ALERTS API
ZONES API
ANALYTICS API
WEBHOOKS
ABOUT DEX-I
```

The page should feel like modern product documentation rather than a traditional corporate About page.

---

## Documentation — Overview

Explain the core product:

```text
DEX-I

Your Cameras Are Watching.
Dex-I Makes Them Understand.

DEX-I transforms existing CCTV and IP camera
infrastructure into an intelligent monitoring system.
```

Include the core product capabilities from the PRD:

```text
PERSON DETECTION
PERSON TRACKING
MOVEMENT ANALYSIS
SMART ZONES
EVENT DETECTION
REAL-TIME ALERTS
SEARCHABLE EVENT HISTORY
MULTI-CAMERA INTELLIGENCE
BUSINESS ANALYTICS
```

---

## Documentation — How DEX-I Works

Present the five-stage product workflow:

```text
01  CONNECT YOUR CAMERAS

02  DEFINE WHAT MATTERS

03  DEX-I WATCHES

04  EVENTS ARE DETECTED

05  INTELLIGENCE IS DELIVERED
```

Keep the presentation diagrammatic and minimal.

---

## Documentation — API

Include:

```text
CAMERAS
EVENTS
ALERTS
ZONES
ANALYTICS
WEBHOOKS
```

Example:

```text
GET /v1/events

{
  "event": "restricted_zone_entry",
  "camera": "camera_04",
  "timestamp": "2026-10-02T15:42:08",
  "confidence": 0.94
}
```

Webhook flow:

```text
CAMERA
   ↓
DEX-I
   ↓
EVENT DETECTED
   ↓
WEBHOOK
   ↓
CUSTOMER APPLICATION
```

---

## Documentation — About DEX-I

Move the previous About Us content here.

```text
WE BELIEVE CAMERAS
SHOULD DO MORE THAN RECORD.
```

```text
DEX-I is an AI intelligence platform
developed by DexLabs AI Education.

It transforms existing surveillance
infrastructure into intelligent,
actionable systems.
```

Technology positioning:

```text
COMPUTER VISION
+
REAL-TIME AI
+
BUSINESS INTELLIGENCE
+
AUTOMATION
=
DEX-I
```

Brand relationship:

```text
BUILT BY DEXLABS AI EDUCATION

VISIT DEXLABS AI →
```

---

## Documentation Design

The Documentation page should use a calmer documentation UI:

```text
┌──────────────┬─────────────────────────────────────────┐
│              │                                         │
│ DOCUMENTATION│  BUILD WITH DEX-I.                      │
│              │                                         │
│ Overview     │  Introduction text...                   │
│ How it works │                                         │
│ Capabilities │  ─────────────────────────────────      │
│ Solutions    │                                         │
│ API          │  GET /v1/events                         │
│ Cameras API  │                                         │
│ Events API   │  {                                      │
│ Alerts API   │    "event": "restricted_zone_entry"    │
│ Zones API    │  }                                      │
│ Analytics    │                                         │
│ Webhooks     │                                         │
│ About DEX-I  │                                         │
│              │                                         │
└──────────────┴─────────────────────────────────────────┘
```

Desktop:

- Fixed/minimal documentation sidebar
- Wide readable content column
- Optional right-side table of contents
- Sticky code blocks where useful

Mobile:

- Sidebar becomes a dropdown/navigation drawer
- Content becomes single column

Do not make Documentation look like the dashboard.

It should feel closer to a polished developer/product knowledge base.

---

# 11. Page 06 — Contact Us

## Hero

```text
CONTACT

LET'S MAKE YOUR
CAMERAS INTELLIGENT.
```

## Form

```text
FULL NAME
BUSINESS NAME
WORK EMAIL
PHONE NUMBER

INDUSTRY
NUMBER OF LOCATIONS
NUMBER OF CAMERAS
CITY

WHAT WOULD YOU LIKE DEX-I
TO DETECT OR UNDERSTAND?

[ REQUEST DEX-I DEMO ]
```

Desktop: two-column form.

Mobile: single-column form.

Keep labels above fields and avoid unnecessary cards.

---

# 12. Page 07 — Dashboard / Overview

Authenticated product interface.

## Main heading

```text
GOOD MORNING.

YOUR INFRASTRUCTURE
IS ONLINE.
```

## Overview metrics

```text
12
CAMERAS ONLINE

03
LOCATIONS

847
EVENTS TODAY

08
CRITICAL ALERTS
```

## Recent events

```text
RECENT EVENTS

17:42:08   Restricted zone entry
17:31:22   Person detected
17:14:06   Crowd formation
16:52:40   Door activity
```

## Alerts

```text
ACTIVE ALERTS
```

Keep the dashboard sparse and information-first.

---

# 13. Page 06 — Products

For the current version, the following capabilities are **not separate top-level routes**:

```text
Cameras
Camera Detail
Events
Event Detail
Alerts
Smart Zones
Rule Builder
```

They are consolidated into one product experience:

```text
/products
```

The Products page acts as the entry point for the operational capabilities defined in the PRD.

## Products hero

```text
PRODUCTS

SEE WHAT DEX-I
CAN UNDERSTAND.

Monitor cameras.
Review events.
Configure intelligence.
Respond to alerts.
```

Keep this page minimal and product-oriented.

---

## Internal product navigation

Use a simple selector:

```text
OVERVIEW
CAMERAS
EVENTS
ALERTS
SMART ZONES
RULES
```

These should be sections/views inside `/products`, not separate routes.

Desktop options:

- left-side product navigation
- tabs
- segmented navigation

Mobile:

```text
PRODUCTS

[ OVERVIEW ▼ ]
```

---

## Cameras

```text
CAMERAS

12 ONLINE
2 OFFLINE

[ + ADD CAMERA ]
```

Camera list:

```text
CAMERA       LOCATION       STATUS      LAST ACTIVITY

Camera 04    Reception      ONLINE      17:42:08
Camera 05    Lobby          ONLINE      17:41:33
Camera 06    Parking        OFFLINE     15:10:21
```

Actions:

```text
VIEW
EDIT
CONFIGURE
DISABLE
DELETE
```

---

## Camera Detail

Selecting a camera should open its detail state within Products.

```text
CAMERA_04
LOBBY

┌───────────────────────────────────────┐
│                                       │
│             LIVE VIDEO                │
│                                       │
│        ┌──────────────┐               │
│        │ PERSON       │               │
│        │ CONF. 94%    │               │
│        └──────────────┘               │
│                                       │
└───────────────────────────────────────┘
```

Supporting information:

```text
CAMERA INFORMATION
CURRENT ZONES
ACTIVE RULES
RECENT EVENTS
CAMERA HEALTH
TIMELINE
```

---

## Events

```text
EVENTS

847 EVENTS
```

Filters:

```text
DATE
CAMERA
LOCATION
EVENT TYPE
PRIORITY
```

Event list:

```text
TIME       CAMERA      EVENT                    PRIORITY

17:42:08   CAMERA_04   Restricted zone entry    HIGH
17:31:22   CAMERA_02   Person detected          LOW
17:14:06   CAMERA_04   Crowd formation          MEDIUM
```

---

## Event Detail

Selecting an event should transition to an event-detail state within Products.

```text
RESTRICTED ZONE ENTRY

HIGH PRIORITY

17:42:08
CAMERA_04
RECEPTION
94% CONFIDENCE
```

Main content:

```text
EVENT VIDEO / SNAPSHOT
```

Metadata:

```text
DETECTED OBJECTS
Person

ZONE
Restricted Area

EVENT DESCRIPTION
Person entered configured restricted zone.

RELATED EVENTS
NOTES
```

Actions:

```text
MARK REVIEWED
EXPORT
DOWNLOAD CLIP
ADD NOTE
```

---

## Alerts

```text
ALERTS

08 REQUIRE ATTENTION
```

Statuses:

```text
NEW
ACKNOWLEDGED
INVESTIGATING
RESOLVED
```

Priority:

```text
INFORMATIONAL
LOW
MEDIUM
HIGH
CRITICAL
```

Example:

```text
CRITICAL
Restricted zone entry
CAMERA_04
17:42:08

HIGH
Safety event
CAMERA_08
17:31:22
```

Keep alerts as a clean operational list.

---

## Smart Zones

The zone builder belongs inside Products.

Layout:

```text
┌─────────────────────────────────────────────┐
│                                             │
│              CAMERA FEED                   │
│                                             │
│       ┌───────────────────────┐             │
│       │     RESTRICTED        │             │
│       │       ZONE            │             │
│       └───────────────────────┘             │
│                                             │
└─────────────────────────────────────────────┘

ZONES

Reception
Entrance
Restricted Area
Staff Only
Emergency Exit
Custom
```

Actions:

```text
DRAW ZONE
RENAME
CHANGE TYPE
DELETE
SAVE
```

Use restrained purple outlines for configured zones.

---

## Rule Builder

The rule builder is also contained within Products.

```text
RULES

TELL DEX-I
WHAT MATTERS.
```

Example:

```text
WHEN
[ PERSON ]

[ ENTERS ]

[ RESTRICTED AREA ]

FOR
[ 10 SECONDS ]

THEN
[ SEND CRITICAL ALERT ]
```

Another example:

```text
WHEN
[ 3+ PEOPLE ]

ARE PRESENT IN

[ LOBBY ]

FOR

[ 5 MINUTES ]

THEN

[ CREATE CROWD EVENT ]
```

### Objects

```text
Person
Multiple people
Vehicle
Door
Custom supported object
```

### Actions

```text
Enter
Exit
Remain
Appear
Disappear
Gather
Move
```

### Results

```text
Create event
Send alert
Trigger webhook
Notify user
```

---

## Products navigation model

```text
PRODUCTS

├── Overview
├── Cameras
├── Events
├── Alerts
├── Smart Zones
└── Rules
```

The important distinction is that these are **product capabilities/views**, not separate public routes in the current implementation.

---

# 14. Page 08 — Analytics

## Hero

```text
ANALYTICS

SEE THE ACTIVITY
BEHIND THE VIDEO.
```

Date selector:

```text
TODAY
LAST 7 DAYS
LAST 30 DAYS
CUSTOM
```

Metrics:

```text
EVENTS OVER TIME
EVENTS BY LOCATION
EVENTS BY CAMERA
EVENTS BY CATEGORY
EVENTS BY PRIORITY
ZONE ACTIVITY
ALERT TRENDS
OCCUPANCY / ACTIVITY
```

Charts should be simple, thin and readable.

No decorative 3D charts.

---

# 15. Page 09 — API Keys

## Header

```text
API KEYS

MANAGE ACCESS TO DEX-I

[ + GENERATE API KEY ]
```

Key example:

```text
PRODUCTION KEY

dx_live_****************

CREATED
02 OCT 2026

LAST USED
2 MINUTES AGO

[COPY] [REGENERATE] [REVOKE]
```

Usage:

```text
REQUESTS TODAY
12,840

REQUESTS THIS MONTH
341,290

API LIMIT USED
68%

REMAINING
32%
```

Keys must remain masked.

---

# 16. Deferred Authentication

Do not build these now:

```text
/login
/sign-up
/forgot-password
/reset-password
/verify-email
```

When implemented, they should share one minimal authentication shell.

Example:

```text
DEX-I

Welcome back.

WORK EMAIL
────────────────────

PASSWORD
────────────────────

[ CONTINUE ]

Forgot password?

Create account
```

---

# 17. Deferred Settings

Do not build Settings now.

Future sections:

```text
PROFILE
ORGANIZATION
TEAM MEMBERS
NOTIFICATIONS
API
BILLING
SECURITY
LOCATIONS
```

These should remain sections inside Settings rather than immediately becoming separate pages.

---

# 18. Footer

Marketing footer:

```text
DEX-I
REAL-WORLD INTELLIGENCE
BY DEXLABS AI

PRODUCT
Overview
Solutions
Subscription
Documentation

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
```

Bottom:

```text
© 2026 DexLabs AI Education.
ALL RIGHTS RESERVED.
```

Before the footer:

```text
READY TO MAKE
YOUR CAMERAS INTELLIGENT?

[ TRY OUR API ]     [ CONTACT US ]
```

---

# 19. Responsive Behaviour

Desktop:

```text
1200–1280px max content width
large whitespace
multi-column layouts
```

Tablet:

```text
reduce columns
preserve hierarchy
```

Mobile:

```text
single-column content
stack CTAs
horizontal-scroll tables where required
simplified navigation
```

The PRD requires desktop, laptop, tablet and mobile support with readable technical overlays and usable navigation/forms.

---

# 20. Recommended Next.js Structure

```text
app/
├── page.tsx
├── solutions/page.tsx
├── subscription/page.tsx
├── documentation/page.tsx
├── contact/page.tsx
├── products/page.tsx
├── dashboard/page.tsx
├── analytics/page.tsx
└── api-keys/page.tsx


Shared components:

```text
components/
├── marketing/
│   ├── Header
│   ├── Footer
│   ├── VideoHero
│   ├── SectionHeading
│   └── CTA
│
├── product/
│   ├── AppShell
│   ├── Sidebar
│   ├── StatusIndicator
│   ├── EventRow
│   ├── AlertRow
│   ├── CameraTable
│   └── Metric
│
└── ui/
    ├── Button
    ├── Input
    ├── Select
    ├── Tabs
    ├── Modal
    └── CodeBlock
```

---

# 21. Final Scope

## BUILD NOW — 9 PAGES

```text
01  HOME
02  SOLUTIONS
03  SUBSCRIPTION
04  DOCUMENTATION
05  CONTACT US
06  PRODUCTS
07  DASHBOARD / OVERVIEW
08  ANALYTICS
09  API KEYS
```

## DO NOT BUILD NOW

```text
LOGIN
SIGN UP
FORGOT PASSWORD
RESET PASSWORD
EMAIL VERIFICATION
SETTINGS
SECURITY
EXPANDED DEVELOPER PORTAL
```

## INDUSTRIES

```text
NO INDIVIDUAL INDUSTRY PAGES.

HOTELS
RETAIL
SCHOOLS
FACTORIES
OFFICES

→ all inside /solutions
```

# FINAL ANSWER

**The current DEX-I implementation requires 9 pages.**

The five industries are sections within one Solutions page. Developers/API and About Us are consolidated into Documentation. Cameras, Camera Detail, Events, Event Detail, Alerts, Smart Zones and Rule Builder are consolidated into one Products page. Authentication and Settings remain deferred.
