# Remi Website

Marketing landing page + privacy policy for the Remi app, built with Next.js.

## Port

**This site ALWAYS runs on port `1027`. Do not change this port under any circumstance.**

The port is hardcoded in `package.json` (`dev` and `start` scripts).

## Develop

```bash
npm install
npm run dev      # http://localhost:1027
```

## Build & run production

```bash
npm run build
npm start        # http://localhost:1027
```

## Pages

- `/` — hero landing page
- `/privacy` — privacy policy (required for the Google Play Store listing)

## Deploy

Hosted on Vercel. Production URL is set in the Play Console store listing as the
Privacy Policy URL (`<vercel-domain>/privacy`).
