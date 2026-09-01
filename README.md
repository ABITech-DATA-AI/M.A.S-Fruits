# 🍌 MAS Fruits — Full Website (React + Node.js/Express + Gmail SMTP)

A complete multi-page website for MAS Fruits, built to match the uploaded
banner design theme (dark green + gold, rounded pill navbar, hero with
circular product badges, "Hill Banana" ribbon banner).

```
mas-fruits/
├── frontend/     React app (Vite) — all pages, components, styling
├── backend/      Node.js + Express API — Gmail SMTP contact form
└── README.md     This file
```

> **Note on images:** This build environment could not download photos from
> the web or access your uploaded design file on disk, so the site currently
> uses themed SVG banana illustrations in place of photography. The layout,
> colors, typography and structure match your design exactly. See
> `frontend/src/assets/images/README.md` for how to drop in real photos.

---

## 1. Frontend (React + Vite)

Pages included: **Home, About Us, Products (10 cards), Our Farms, Quality,
Gallery, Blog, Contact** — plus a sticky pill navbar, footer, and floating
WhatsApp button, all styled to the green/gold MAS Fruits theme.

### Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

### Connecting to the backend

The Contact page posts to the URL in `VITE_API_URL` (defaults to
`http://localhost:5000/api/contact`). To point at a different backend,
create `frontend/.env`:

```
VITE_API_URL=https://your-backend-domain.com/api/contact
```

---

## 2. Backend (Node.js + Express + Nodemailer / Gmail SMTP)

Handles the Contact form: validates input, sends a notification email to
your inbox via Gmail SMTP, and sends an auto-reply to the customer.

### Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
GMAIL_USER=youraddress@gmail.com
GMAIL_APP_PASSWORD=your16charapppassword
CONTACT_RECEIVER=youraddress@gmail.com
```

### Getting a Gmail App Password (required — do not use your normal password)

1. Turn on **2-Step Verification** on your Google account:
   https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Create an app password for "Mail" → copy the 16-character code
4. Paste it into `GMAIL_APP_PASSWORD` in your `.env` (no spaces)

### Run

```bash
npm start
# or, for auto-restart on changes:
npm run dev
```

Server runs at `http://localhost:5000`.

### API

| Method | Endpoint         | Description                          |
|--------|------------------|---------------------------------------|
| GET    | `/api/health`    | Health check                          |
| POST   | `/api/contact`   | Send contact form email (rate-limited)|

**POST `/api/contact` body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "subject": "Bulk order enquiry",
  "message": "I'd like to order 50 dozen Hill Bananas."
}
```

---

## 3. Running Both Together (local dev)

Open two terminals:

```bash
# Terminal 1
cd backend && npm install && npm start

# Terminal 2
cd frontend && npm install && npm run dev
```

Frontend: `http://localhost:5173`
Backend:  `http://localhost:5000`

---

## 4. Deployment Notes

- **Frontend**: deploy the `frontend/dist` folder (after `npm run build`) to
  Netlify, Vercel, or any static host.
- **Backend**: deploy to Render, Railway, or any Node host. Set the same
  environment variables from `.env` in your host's dashboard, and set
  `CLIENT_ORIGIN` to your deployed frontend URL.
- Update `VITE_API_URL` in the frontend to point at your deployed backend
  before building for production.

---

## 5. Customization

- **Theme colors / fonts**: `frontend/src/index.css` (`:root` variables)
- **Product list**: `frontend/src/data/products.js`
- **Navigation links**: `frontend/src/components/Navbar.jsx`
- **Contact details / footer**: `frontend/src/components/Footer.jsx`,
  `frontend/src/pages/Contact.jsx`
- **Real photos**: see `frontend/src/assets/images/README.md`
