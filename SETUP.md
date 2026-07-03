# Heram Innovations — Setup Guide

## Project Structure
```
web_site/
├── frontend/   React + Vite + Tailwind CSS
├── backend/    Node.js + Express + Supabase
└── SETUP.md
```

## Quick Start

### 1. Frontend
```bash
cd frontend
npm install
cp .env.example .env        # fill in VITE_API_URL
npm run dev                 # runs on http://localhost:3000
```

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env        # fill in Supabase keys + SMTP
npm run dev                 # runs on http://localhost:5000
```

### 3. Database (Supabase)
1. Create a project at supabase.com
2. Copy your Project URL and Service Role Key into `backend/.env`
3. Open the SQL Editor in Supabase Studio
4. Paste and run `backend/supabase_schema.sql`

---

## Environment Variables

### Frontend (.env)
| Variable             | Description                        |
|----------------------|------------------------------------|
| VITE_API_URL         | Backend URL (default: localhost:5000) |
| VITE_GA_MEASUREMENT_ID | Google Analytics 4 ID             |

### Backend (.env)
| Variable             | Description                         |
|----------------------|-------------------------------------|
| PORT                 | Server port (default: 5000)         |
| SUPABASE_URL         | Your Supabase project URL           |
| SUPABASE_SERVICE_KEY | Service role key (never expose publicly) |
| SMTP_HOST/PORT/USER/PASS | Email credentials               |
| MAIL_FROM            | From address for outgoing email     |
| MAIL_TO              | Admin email for contact submissions |
| ALLOWED_ORIGINS      | CORS whitelist (comma-separated)    |

---

## Pages
| Route                     | Page              |
|---------------------------|-------------------|
| /                         | Home              |
| /about                    | About Us          |
| /products                 | All Products      |
| /products/games           | Games             |
| /products/agriculture     | Agriculture       |
| /products/education       | Education         |
| /blog                     | Blog              |
| /blog/:slug               | Blog Post         |
| /careers                  | Careers           |
| /contact                  | Contact Us        |
| /privacy-policy           | Privacy Policy    |

## API Endpoints
| Method | Endpoint                  | Description           |
|--------|---------------------------|-----------------------|
| GET    | /api/health               | Health check          |
| POST   | /api/contact              | Submit contact form   |
| POST   | /api/newsletter           | Newsletter subscribe  |
| GET    | /api/products             | List products         |
| GET    | /api/products?category=X  | Filter by category    |
| GET    | /api/products/:id         | Single product        |
| GET    | /api/blog                 | List blog posts       |
| GET    | /api/blog/:slug           | Single blog post      |

## Deployment
- **Frontend** → Vercel (`npm run build`, auto-deploy from GitHub)
- **Backend**  → Railway or Render (point to `backend/server.js`)
- **Database** → Supabase Cloud (already managed)
