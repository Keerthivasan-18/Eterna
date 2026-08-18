# Eterna — Meet someone worth knowing.

A complete, futuristic React UI system for a premium relationship platform. Pink-lavender/orchid glassmorphic
design language, built with React + Vite, Tailwind CSS, Framer Motion, and lucide-react icons.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Splash** — animated glowing Eterna mark, aurora background, loading sequence
- **Landing** — cinematic welcome screen with brand pillars
- **Auth** — Sign In, Register, Forgot Password, OTP verification, social login
- **Onboarding** — 10-step wizard (name, DOB, gender, interested-in, location, intention,
  interests, lifestyle, personality, photo upload) with progress bar and animated transitions
- **Discover** — draggable swipe-card deck, like/pass/super-like/rewind, empty state
- **Discovery Filters** — futuristic bottom-sheet filter panel
- **AI Match Explanation** — "Why you two might click" with glowing compatibility rings
- **Profile Detail** — full cinematic profile, compatibility breakdown, essentials, traits
- **Match Celebration** — "It's a match!" animated overlay
- **Matches** — new/online/all matches grid with search
- **Messages** — conversation list + real-time-style chat with AI icebreakers, typing indicator
- **Notifications** — matches, likes, messages, AI recommendations, profile views
- **Likes You** — blurred profiles with premium unlock prompt
- **My Profile** — hero card, completion meter, analytics
- **Edit Profile** — photos, bio & prompts, interests, lifestyle tabs
- **Eterna AI** — holographic AI assistant hub with capability cards
- **Eterna Plus (Premium)** — feature list + monthly/6-month/yearly pricing cards
- **Settings + Safety Center** — account, privacy, safety, notifications, security, and more
- **Empty states** — no matches / no messages / no likes / no profiles nearby
- **Navigation** — floating glass nav (desktop) and floating glowing bottom nav (mobile)

## Design system

- **Color:** deep plum/violet background, pink-lavender/orchid gradients, neon pink glow accents
- **Type:** Fraunces (display serif) paired with Plus Jakarta Sans (UI sans)
- **Surfaces:** glassmorphism, soft glows, grain texture, large rounded corners, ambient orbs
- All tokens live in `tailwind.config.js` and `src/index.css` — change them once, the whole app updates.

## Project structure

```
src/
  components/   shared UI (buttons, glass panels, nav, logo mark, empty states)
  screens/      one file per screen listed above
  lib/data.js   mock profiles, matches, messages, notifications
  App.jsx       navigation/flow state machine
```

This is a self-contained prototype — data is mocked in `src/lib/data.js` and swaps
easily for real API calls.
