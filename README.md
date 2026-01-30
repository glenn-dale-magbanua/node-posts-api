
# node-ts-api-boilerplate

A minimal, production-ready **Node.js + TypeScript** API boilerplate using **Express** with sensible defaults:

- TypeScript, strict mode
- Express with CORS, Helmet, and request logging (morgan)
- Environment configuration (`dotenv`)
- Centralized error handling and 404 handling
- Versioned routing (e.g., `/api/v1`)
- Developer experience: `ts-node-dev`, build to `dist/`

## Quick start

```bash
# 1) Install dependencies
npm install

# 2) Copy environment and adjust if needed
cp .env.example .env

# 3) Start in development (auto-reload)
npm run dev

# 4) Build for production
npm run build

# 5) Start production build
npm start
```

## Default endpoints

- `GET /health` – liveness check
- `GET /api/v1/users` – sample list endpoint
- `POST /api/v1/users` – sample create endpoint (validates with Zod)

