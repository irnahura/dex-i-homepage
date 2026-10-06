# DEX-I Homepage Prototype

DEX-I is a real-world video intelligence platform prototype. It transforms existing CCTV, IP camera, and RTSP infrastructure into an intelligent operational layer.

## Runnable application

The active Next.js application is located in [`dex-i-next`](./dex-i-next/).

See the complete application documentation in [`dex-i-next/README.md`](./dex-i-next/README.md).

## Run locally

```powershell
cd dex-i-next
npm install
npm run dev -- -p 3101
```

Open [http://localhost:3101](http://localhost:3101).

## Verify the build

```powershell
cd dex-i-next
npm run build
```

## Routes

The application includes public routes for Solutions, Subscription, Documentation, and Contact, plus product routes for Products, Dashboard, Analytics, and API Keys.

## Production

Production deployment: [dex-i-next.vercel.app](https://dex-i-next.vercel.app)
