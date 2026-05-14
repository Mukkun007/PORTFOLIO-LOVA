# TODO — Portfolio LOVA

Audit du 2026-05-14. Mise à jour manuelle à chaque session.

## CRITIQUES

- [x] **T1** — SSR : PageContent.tsx (Client) + page.tsx (Server) ✅ FAIT
- [x] **T2** — Metadata SEO layout.tsx — title, description, OpenGraph, Twitter card, keywords ✅ FAIT
- [x] **T3** — Créer `.env.example` avec EMAIL_USER et EMAIL_PASS ✅ FAIT

## IMPORTANTS

- [x] **T4** — Supprimer 9 dépendances inutiles (express, cors, i18next, next-i18next, react-i18next, @types/react-i18next, @mui/material, @mui/icons-material, dotenv) ✅ FAIT
- [x] **T5** — Réécrire message hero EN/FR → "Backend Developer specialized in Symfony & Node.js" ✅ FAIT
- [ ] **T6** — Ajouter liens GitHub projets (visio, CV-generator, Star Wars, Tim's assistant) — EN ATTENTE des URLs
- [x] **T7** — Remplacer `<img>` par `<Image>` (next/image) dans : Biographie.tsx, Experience.tsx, Projects.tsx, AppLoader.tsx ✅ FAIT
- [x] **T8** — Traduire formulaire Contact (placeholders, bouton, messages statut) + clés ajoutées en.json/fr.json ✅ FAIT
- [x] **T9** — Experience.tsx : supprimer min-h-screen + séparer date2 ENI / dateBakantimo ✅ FAIT
- [x] **T10** — Supprimer fichiers parasites : Code.jsx, projectBackup.js, projectBackup.txt, debug.log ✅ FAIT
- [x] **T11** — Corriger typo fr.json ligne 7 : "Acceuil" → "Accueil" ✅ FAIT
- [x] **T12** — Corriger project.desc2 EN+FR (plateforme précommandes pièce or BFM) ✅ FAIT

## NORMAUX

- [x] **T13** — next.config.ts : headers de sécurité + config image + migration ESM ✅ FAIT
- [x] **T14** — globals.css : supprimer `body { height: 30vh }` et `main { height: calc(45vh - 60px) }` ✅ FAIT (migration Google Fonts → next/font : non fait, hors scope)
- [x] **T15** — layout.tsx : supprimer Font Awesome dupliqué ✅ FAIT
- [x] **T16** — `<html lang>` dynamique via useEffect dans PageContent.tsx ✅ FAIT
- [x] **T17** — localStorage pour persister le choix de langue dans PageContent.tsx ✅ FAIT
- [x] **T18** — Créer public/robots.txt et public/sitemap.xml ✅ FAIT

## NICE-TO-HAVE

- [x] **T19** — ScrollToTop.tsx : supprimer classe `right-10` (conflit avec `right-6`) ✅ FAIT
- [x] **T20** — About : remplacer "UI/UX Developer" par "API & Backend Architecture" ✅ FAIT
