# DEX-I Next.js

DEX-I is a real-world video intelligence prototype built with Next.js and React. It adds an intelligence layer over existing CCTV, IP camera, and RTSP infrastructure.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Local MP4 video assets
- Responsive black-and-gold technical visual system

## Development

From this directory:

```powershell
npm install
npm run dev -- -p 3101
```

Open [http://localhost:3101](http://localhost:3101).

## Production verification

```powershell
npm run build
npm start -- -p 3101
```

## Routes

### Public

- `/` — Homepage
- `/solutions` — Industry solutions
- `/subscription` — Plans and feature comparison
- `/documentation` — API, webhook, and platform documentation
- `/contact` — Demo request form

### Product

- `/products` — Cameras, events, alerts, smart zones, and rule builder
- `/dashboard` — Infrastructure overview
- `/analytics` — Activity and operational analytics
- `/api-keys` — API key management and usage

## Assets

The homepage uses the supplied local videos:

- `public/next.mp4`
- `public/made-with-mondniles-blob-tracked.mp4`

## Deployment

The production deployment is available at:

[https://dex-i-next.vercel.app](https://dex-i-next.vercel.app)

Deploy with the Vercel CLI from the parent repository when the project is linked:

```powershell
vercel --prod --yes dex-i-next
```

## Design source

The homepage follows the supplied DEX-I prototype HTML and design documentation. Unsupported product capabilities are presented as mock or beta UI where applicable.
