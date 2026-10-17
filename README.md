# Personal Professional Portfolio (FUTURE_FS_01)

**Live site:** https://portfolio-website-phi-nine-72.vercel.app

Full-stack portfolio by Ashwinkumar M S. Static HTML/CSS/JavaScript frontend plus a Node.js contact API that sends email notifications with Nodemailer, deployed on Vercel.

## Run locally
```bash
npm install
cp .env.example .env   # add SMTP details
npm start              # http://localhost:3000
```

## Structure
- `public/` frontend (index.html, style.css, script.js, SEO files)
- `api/contact.js` Vercel serverless contact endpoint
- `server.js` Express server for local use

## Features
Projects, skills and education sections, validated contact form with spam protection, email notifications, SEO meta tags and sitemap, responsive layout, dark mode.
