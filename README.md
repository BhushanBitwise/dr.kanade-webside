# Dr. Pranita Kanade's Homeopathic Clinic Website

A production-ready React 18 + Vite web application built with clean, industry-standard architecture, Tailwind CSS, custom botanical design system, and full React Router DOM client-side routing.

## Technology Stack
- **Framework:** React 18 with Vite
- **Routing:** React Router DOM (v7) with dedicated page views, dynamic parameters (`useParams`), and scroll restoration
- **Styling:** Tailwind CSS 3.4 + Custom Botanical CSS design tokens (Cormorant Garamond & Manrope typography)
- **Icons & Motion:** Lucide React & Framer Motion
- **Deployment:** Vercel SPA rewrite ready (`vercel.json`)

---

## Project Structure (Industry-Standard Architecture)

```
dr-kanade-site/
├── public/                     # Static media assets (Dr-Pranita.webp, hero images, sitemap)
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI primitives
│   │   │   ├── SectionHeading.jsx
│   │   │   └── SeoHead.jsx     # Dynamic document title & meta tags
│   │   ├── layout/             # Global layout & structural wrappers
│   │   │   ├── MainLayout.jsx  # Primary wrapper (Navbar, Outlet, Footer, WhatsApp)
│   │   │   ├── Navbar.jsx      # Sticky navbar with desktop & mobile drawer
│   │   │   ├── Footer.jsx      # Comprehensive footer with all route links & clinic info
│   │   │   ├── FloatingWhatsApp.jsx # Quick access WhatsApp consultation button
│   │   │   └── ScrollToTop.jsx # Smooth hash jumping & page route scroll restoration
│   │   ├── home/               # Modular landing page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrustStrip.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── TreatmentsSection.jsx
│   │   │   ├── ApproachSection.jsx
│   │   │   ├── PhilosophySection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── LocalitySection.jsx
│   │   │   ├── LocationSection.jsx
│   │   │   ├── AppointmentSection.jsx
│   │   │   └── FAQSection.jsx
│   │   ├── booking/            # Interactive Booking & Appointment components
│   │   │   ├── BookingWizard.jsx   # 4-step multi-step appointment wizard
│   │   │   └── AppointmentForm.jsx # Direct inquiry form with WhatsApp integration
│   │   └── locality/           # Pune locality directory & card components
│   │       ├── LocalityDirectory.jsx
│   │       └── LocalityCard.jsx
│   ├── data/                   # Centralized, strongly-typed domain datasets
│   │   ├── siteData.js         # Clinic address, timings, doctor credentials
│   │   ├── treatmentsData.js   # 14+ conditions with category tags & descriptions
│   │   ├── testimonialsData.js # Verified patient reviews & ratings
│   │   ├── localitiesData.js   # 18+ Pune localities with commute advice & distance
│   │   ├── faqData.js          # Patient FAQs & categories
│   │   ├── site.js             # Backward-compatible unified export
│   │   └── index.js            # Module barrel export
│   ├── pages/                  # Dedicated page views for each route
│   │   ├── HomePage.jsx        # Landing showcase
│   │   ├── AboutPage.jsx       # Doctor bio, MD credentials, and philosophy
│   │   ├── TreatmentsPage.jsx  # Full condition catalog with category filters & search
│   │   ├── ApproachPage.jsx    # Clinical methodology & 4-stage patient journey
│   │   ├── TestimonialsPage.jsx# Verified community experiences & ratings
│   │   ├── BookingPage.jsx     # Full interactive booking portal
│   │   ├── ContactPage.jsx     # Katraj clinic address, consultation hours & live map
│   │   ├── LocationsIndexPage.jsx # Directory of all Pune areas served
│   │   ├── LocalityDetailPage.jsx # Individual SEO locality page with route params
│   │   ├── FAQPage.jsx         # Searchable FAQ knowledgebase
│   │   └── NotFoundPage.jsx    # 404 handler with return navigation
│   ├── routes/
│   │   └── AppRoutes.jsx       # Central router definitions & layout nesting
│   ├── styles/
│   │   ├── localities.css      # Locality directory and SEO page styles
│   │   └── booking.css         # Booking wizard multi-step styling
│   ├── App.jsx                 # Top-level Router provider
│   ├── main.jsx                # Application entrypoint & stylesheet loader
│   └── index.css               # Tailwind directives & core botanical design tokens
├── index.html                  # HTML template with Cormorant Garamond & Manrope fonts
├── tailwind.config.js          # Tailwind theme extensions (forest, sage, cream, stone)
├── vercel.json                 # SPA fallback rewrites for Vercel deployment
└── package.json
```

---

## Available Routes

| Route | Description |
|---|---|
| `/` | Comprehensive Homepage landing experience |
| `/about` | Dedicated About Dr. Pranita Kanade (MD Homoeopathy) page |
| `/treatments` | Full catalog of 14+ chronic treatments with category search |
| `/approach` | Clinical 4-stage methodology & constitutional case taking |
| `/testimonials` | Verified patient feedback & reviews across Pune |
| `/booking` | Dedicated multi-step interactive booking wizard |
| `/contact` | Clinic address, hours, live Google Map, and commute guides |
| `/locations` | Complete directory of 18+ Pune localities with distance notes |
| `/homeopathy-clinic-in-pune/:slug` | Dedicated locality SEO page (e.g. `/baner`, `/kothrud`) |
| `/locations/:slug` | Alias for individual locality pages |
| `/faq` | Frequently asked questions & guidance |
| `*` | Custom 404 Not Found page |

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
