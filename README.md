# aplite

Payment information repository

# Set up instructions

Clone the repository:
git clone https://github.com/Seyi27/aplite.git
cd aplite

Install dependencies:
npm install

Run the development server:
npm run dev

Open http://localhost:3000 in your browser.

# Technologies used

Next.js 15 – React framework for server-side rendering & routing

React – UI library

Tailwind CSS – Utility-first CSS framework

TypeScript – Static typing

MockAPI – Fake REST API for testing

# Architectural Decisions

**App Router (Next.js)**: Used the app/ directory for routing, allowing server components by default.

**Client Components**: Marked with "use client" where interactivity (e.g., useRouter, useState, useEffect) was required.

**Data Fetching**: fetch used in server components for SSR where possible.

A custom useConnectionsList hook created for client-side data fetching and reuse.

**Styling**: Tailwind for utility-first styling; global styles configured via globals.css.

# Assumptions & Trade-offs

**API Limitations**: Since only a single endpoint was provided, searching/filtering was done client-side (trade-off: potentially slower for large datasets).

**Mock Data**: For testing and development, data comes from mockapi.io. In production, this would be replaced with a real API.

**Navigation**: Used useRouter for client-side navigation between pages; server-side rendering chosen for static lists for performance.

**Optimization**: To avoid duplicated fetching logic across multiple components, a reusable custom hook (useConnectionsList) was implemented.
