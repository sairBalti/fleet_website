# Fleet Website

React + Vite frontend for FleetMind AI.

## Setup

1. Install dependencies:
   - `npm install`
2. Copy `.env.example` to `.env` and set (use your deployed URLs on Vercel):
   - `VITE_API_BASE_URL` — backend origin only (no `/api`), e.g. `http://localhost:5002` or `https://your-api.example.com`
   - `VITE_PORTAL_ORIGIN` — portal app origin for “Log in”, e.g. `https://your-portal.vercel.app`
3. Start dev server:
   - `npm run dev`

The Request Demo page submits to `{VITE_API_BASE_URL}/api/demo-requests`.
