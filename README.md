# 🍌 MAS Fruits

A single-folder full-stack website for MAS Fruits.

## Project structure

```text
M.A.S-Fruits/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
├── mailer.js
├── routes/
│   └── contact.js
├── index.html
├── vite.config.js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── styles/
└── README.md
```

There are **no separate `frontend/` or `backend/` folders**. Everything is inside the `M.A.S-Fruits` project folder.

## 1. Install dependencies

Open a terminal inside the `M.A.S-Fruits` folder:

```bash
npm install
```

## 2. Configure Gmail SMTP

The `.env` file is in the **same root folder** as `server.js`.

Set these values:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173

GMAIL_USER=youraddress@gmail.com
GMAIL_APP_PASSWORD=your16charapppassword
CONTACT_RECEIVER=youraddress@gmail.com

VITE_API_URL=http://localhost:5000/api/contact
```

### Gmail App Password

Do not use your normal Gmail password.

1. Enable 2-Step Verification on the Gmail/Google account.
2. Open Google's App Passwords page.
3. Create an App Password for Mail.
4. Put the generated 16-character App Password in `GMAIL_APP_PASSWORD`.

## 3. Run the complete project

Use:

```bash
npm run dev
```

This starts:

- React + Vite frontend: `http://localhost:5173`
- Express backend/API: `http://localhost:5000`
- Contact form email: Gmail SMTP through Nodemailer

You can also run them separately:

```bash
npm run client
```

and:

```bash
npm run server
```

## 4. Production build

Create the React build:

```bash
npm run build
```

Then start Express:

```bash
npm start
```

The Express server serves the generated `dist` folder.

## 5. Contact form flow

```text
React Contact Form
       ↓
POST /api/contact
       ↓
Express + Nodemailer
       ↓
Gmail SMTP
       ↓
CONTACT_RECEIVER
```

## Security

- `.env` is ignored by Git.
- Never commit the real Gmail App Password.
- Use a Gmail App Password instead of your normal Gmail password.
