# Projet : Portfolio freelance international — Tahiana Lova

> Document de référence pour le projet de portfolio personnel et stratégie freelance.
> **À consulter systématiquement avant toute recommandation technique ou stratégique.**

---

## 1. Contexte personnel et professionnel

### Profil

| Champ | Valeur |
|---|---|
| Nom | Tahiana Lova (Andrianomenjanahary Fitahiana Lova) |
| Localisation | Madagascar (GMT+3) |
| Expérience | **~2 ans en développement backend professionnel** (BFM + Maki Office + Pulse), précédés de stages |
| Stack maîtrisée | Symfony, PHP, Node.js, Twig |
| Statut actuel | **CDI chez Pulse (ESN du groupe Axian)** depuis janvier 2026 |
| Langues | Malgache (natif), Français (natif), Anglais (opérationnel) |
| Diplôme | Master II / Ingénieur en Informatique — **ENI (École Nationale d'Informatique)** |
| Portfolio | portfolio-lova.vercel.app |
| GitHub | github.com/Mukkun007|

### Parcours professionnel

| Période | Rôle | Entreprise | Tech / Projet |
|---|---|---|---|
| Mars-Mai 2021 | Stagiaire | Ministère de l'Éducation Nationale | Node.js / Express / WebRTC (visioconférence web) |
| Juillet-Oct 2023 | Stagiaire | BAKANTIMO | Node.js / Express + Unity / C# (mini-jeu mobile) |
| **Fév 2024 – Fév 2025** | **Prestataire** | **BFM (Banky Foiben'i Madagasikara)** | **Migration Symfony 3.4 → 6.4 du système intranet** + app web métier |
| **Avril 2025 – Janvier 2026** | **Développeur Backend (CDI)** | **Maki Office** | Backend (architecture, perf, sécurité) |
| **Janvier 2026 – présent** | **Ingénieur d'études et développement** | **Pulse (groupe Axian)** | PHP / Symfony / Twig |

### Atouts différenciants identifiés

- **BFM (banque centrale de Madagascar)** : référence forte, secteur fintech/banque, projet flagship = migration Symfony 3.4 → 6.4 (saut majeur ~7 ans d'écart de versions)
- **Pulse (groupe Axian)** : poste actuel dans une ESN reconnue à Madagascar (200+ collaborateurs)
- **Diplôme ENI** : école reconnue, crédibilité formelle
- **Français natif + anglais opérationnel** : avantage net sur le marché francophone (Malt notamment) et capacité de collaboration internationale
- **GMT+3** : fuseau compatible avec l'Europe (chevauchement horaire utile pour équipes distribuées)

### Objectif principal

Décrocher des missions freelance internationales en parallèle du CDI, à raison de **5-10h/semaine**.

### Délai cible

Portfolio prêt à candidater à l'international : **1-2 semaines** (à partir du début du projet).

---

## 2. État du portfolio (point de départ)

### Diagnostic initial

- **Site** : Portfolio Next.js
- **Problème critique** : invisible aux crawlers (Google, LinkedIn, plateformes freelance)
  - Cause : rendu 100% client-side
  - Conséquence : les bots ne voyaient que `Loading...`
- **Autres problèmes** :
  - Positionnement vague
  - GitHub sous-développé
  - CV décalé par rapport au niveau réel

### Verdict initial

Potentiel réel mais vitrine cassée → **non-recommandable** en l'état.

---

## 3. Corrections techniques déjà effectuées ✅

### Migration SSR (Server-Side Rendering)

- ✅ Problème racine résolu
- ✅ Séparation appliquée :
  - `page.tsx` → Server Component minimal
  - `PageContent.tsx` → Client Component
- ✅ Validation : test `Ctrl+U` confirme que tout le contenu est dans le HTML pré-rendu
- ✅ Résultat : portfolio désormais visible pour Google, LinkedIn, plateformes freelance

### Métadonnées SEO enrichies (`layout.tsx`)

- ✅ Open Graph
- ✅ Twitter Card
- ✅ Keywords
- ✅ Description métier orientée "Backend Developer Symfony & Node.js"

### Autres tâches confirmées faites

- ✅ SSR
- ✅ Métadonnées SEO
- ✅ Hero retravaillé : "Backend Developer Symfony & Node.js"
- ✅ Images Next.js optimisées
- ✅ Correction du texte projet BFM
- ✅ Section About recentrée sur le backend
- ✅ **Badge "Disponible pour freelance"** : intégré et déployé (composant `AvailabilityDot.tsx`)
  - Point vert "en ligne" sur la photo de profil
  - Tooltip bilingue FR/EN au survol
  - Signal "🟢 Available" dans la navigation
  - Correction post-déploiement : suppression d'une variable `pingClass` non utilisée qui cassait le build Vercel

### Décision volontaire

- ❌ **Refusé** : liens GitHub publics sur les projets (les repos restent privés)

---

## 4. Tâche en attente (bloquée temporairement)

### Bio business — RÉDIGÉE ET VALIDÉE, en attente d'intégration

- **Format** : 3 paragraphes, version FR + EN
- **Structure** : Pulse (poste actuel) → BFM (flagship migration Symfony) → CTA freelance
- **Statut** : ⏸️ **intégration suspendue tant que la clause de non-concurrence Pulse n'est pas clarifiée**
- **Versions finales** : voir section 11 ci-dessous

---

## 5. Tâches restantes à vérifier / faire

### À vérifier (technique)

- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] Dépendances inutiles à nettoyer
- [ ] Persistance de la langue (FR/EN via `next-intl`)
- [ ] Fautes de frappe résiduelles

### À faire (contenu et stratégie)

- [ ] Intégration de la bio business **(bloqué : attente clarification clause Pulse)**
- [ ] Section Services concrète axée sur migrations Symfony (~2-3h)
- [ ] Audit technique final des tâches non vérifiées (~1-2h)
- [ ] Demander un témoignage au manager Pulse (en parallèle)
- [ ] Refonte du CV pour l'international (le CV actuel sonne junior)

---

## 6. Stratégie freelance

### Tarification cible

- **Démarrage** : 15-25 USD/h
- **Équivalent Malt** : 200-280 €/jour
- **Règle d'or** : ⚠️ **NE PAS casser les prix au démarrage**
  - Piège classique des freelances de pays à faible coût de vie
  - Sous-tarifer = signal négatif sur la qualité + bloque la montée en gamme

### Plateformes ciblées (par ordre de priorité)

1. **Malt** — Francophone, exploiter l'avantage langue
2. **LinkedIn** — Approche directe, prospection
3. **Lemon.io / Arc.dev** — Plateformes avec sélection (qualité > volume)
4. **Upwork** — Saturé mais permet du volume au démarrage

### Points juridiques à vérifier

#### Clause de non-concurrence Pulse ⚠️ EN COURS DE CLARIFICATION

- **Statut** : Pulse est une ESN du groupe Axian. Une clause existe dans le contrat.
- **Formulation exacte** : à vérifier (Tahiana doit relire le contrat)
- **Risques spécifiques aux ESN** :
  - Clauses d'exclusivité fréquentes (interdiction d'activité rémunérée en parallèle)
  - Non-concurrence visant les clients de l'ESN
  - Idée fausse à éviter : "hors heures de travail = libre" — souvent faux dans les ESN
- **Tant que ce point n'est pas tranché** :
  - ⏸️ Pas d'intégration de la bio "Available for freelance" sur le portfolio public
  - ⏸️ Pas de création de profil sur Malt, Upwork, Lemon.io
  - ⏸️ Pas de prospection active
- **Scénarios possibles** selon le résultat :
  - Interdiction totale → repenser la stratégie (autorisation écrite, attente, changement d'employeur)
  - Accord préalable nécessaire → rédiger une demande à la hiérarchie
  - Autorisé sauf concurrents/clients Pulse → adapter le ciblage des missions
  - Pas de clause spécifique → marge de manœuvre avec devoir de loyauté générique

#### Statut juridique freelance à Madagascar ⚠️ À CLARIFIER

- Forme légale à choisir (EI, auto-entrepreneur, autre)
- Fiscalité (IBS, TVA, déclarations)
- Facturation internationale (Wise, Payoneer, virement SWIFT)

---

## 7. Positionnement et messaging

### Titre actuel (hero portfolio)

`Backend Developer · Symfony & Node.js`

### Spécialisation à mettre en avant

**Migrations Symfony** — légitimée par le projet BFM (migration 3.4 → 6.4 sur système intranet en environnement bancaire critique).

### Déclinaisons selon le canal

| Canal | Titre conseillé |
|---|---|
| Hero portfolio | `Backend Developer · Symfony & Node.js` |
| Bio (sous-titre) | `Specialized in Symfony migrations` |
| Malt | `Backend Symfony — Migrations & Modernisation` |
| LinkedIn | `Backend Developer \| Symfony Migrations & Node.js` |

**Règle :** *positionnement large en surface, spécialisation profonde au scroll.*

### Tonalité à privilégier

- Business / professionnel (pas dev junior modeste)
- Mise en avant des résultats et impacts métier
- Crédibilité internationale (ne pas se survendre, ne pas se sous-vendre)

### Sur la mention de BFM

| Aspect | Règle |
|---|---|
| Nommer BFM publiquement | ✅ OUI (Tahiana a confirmé que c'est autorisé) |
| Décrire le contexte général (banque centrale, environnement critique) | ✅ OUI |
| Mentionner la migration Symfony 3.4 → 6.4 | ✅ OUI (technique générique, pas confidentiel) |
| Citer des chiffres internes / noms de systèmes / données | ❌ NON (NDA bancaire) |
| Décrire l'architecture précise ou les flux métiers | ❌ NON |

---

## 8. Workflow de travail adopté

### Outils

- **VS Code + Claude Code** comme exécuteur technique
- **Claude (chat)** comme stratège / réviseur / rédacteur

### Règles de travail strictes

- ✅ **Une tâche à la fois** — pas de modifications en cascade
- ✅ **Validation explicite avant chaque modif** — rien n'est appliqué sans accord
- ✅ **Pas de commit automatique** — l'utilisateur garde le contrôle git
- ✅ **Audit avant modifications** — comprendre l'existant avant de toucher
- ✅ **Prompts précis pour Claude Code**, préparés en amont
- ✅ **Build local (`npm run build`) systématique avant chaque push** — réflexe pris après l'incident `pingClass`

---

## 9. Verdict actuel et trajectoire

### Évolution

| État | Verdict portfolio |
|---|---|
| Avant | Non-recommandable (invisible aux crawlers) |
| Maintenant | Passable (positionnement clair, SEO bon, design pro, badge dispo en place) |
| Cible | Compétitif à l'international |

### Ce qui manque encore pour atteindre "compétitif"

- ⏸️ Bio business (rédigée, en attente de clarification clause Pulse)
- ⏳ Section Services concrète
- ⏳ Témoignages clients/managers
- ⏳ Audit technique final

---

## 10. Objectifs au-delà du portfolio

Le projet global inclut aussi :

- 📝 Refonte du CV aligné sur le niveau réel et la cible freelance
- 💼 Optimisation du profil LinkedIn
- 🚀 Stratégie de prospection (templates de messages, ciblage clients)
- 💰 Setup juridique et financier (statut, facturation, paiement international)
- 📊 Plan d'action séquentiel sur les 1-2 semaines

---

## 11. Bio business — versions validées (en attente d'intégration)

### 🇫🇷 Version française

> Je suis ingénieur d'études et développement chez **Pulse**, ESN du groupe Axian à Madagascar, où je travaille principalement sur des projets **PHP / Symfony**. Diplômé de l'École Nationale d'Informatique (ENI), je me spécialise dans les **migrations Symfony** et la modernisation de bases de code legacy.
>
> Mon projet le plus marquant : la **migration de la plateforme intranet de BFM (Banky Foiben'i Madagasikara, banque centrale de Madagascar)** de Symfony 3.4 vers Symfony 6.4. Une migration majeure, en environnement bancaire critique, avec exigence forte de continuité de service et de fiabilité. J'ai également développé une application web métier sur la même stack pour la même institution.
>
> Basé à Madagascar (GMT+3), je collabore en français et en anglais avec des équipes distribuées. **Disponible pour des missions freelance ponctuelles, 5 à 10 heures par semaine**, principalement sur des migrations Symfony, des refontes backend ou de la maintenance évolutive de projets PHP.

### 🇬🇧 English version

> I'm a software engineer at **Pulse**, an Axian Group IT services company based in Madagascar, where I work mainly on **PHP / Symfony** projects. Graduated from the École Nationale d'Informatique (ENI), I specialize in **Symfony migrations** and the modernization of legacy codebases.
>
> My flagship project: the **migration of the intranet platform of BFM (Banky Foiben'i Madagasikara, Central Bank of Madagascar)** from Symfony 3.4 to Symfony 6.4. A major migration, in a critical banking environment, with strong requirements for service continuity and reliability. I also built a custom internal web application on the same stack for the institution.
>
> Based in Madagascar (GMT+3), I collaborate in French and English with distributed teams. **Available for freelance engagements, 5 to 10 hours per week**, mainly on Symfony migrations, backend refactors, or maintenance of PHP projects.

---

## Statut de l'analyse

✅ **Analyse réalisée sur :** profil réel (CV à jour), parcours pro corrigé, état du portfolio, corrections déjà faites, tâches restantes, stratégie freelance, positionnement, bio business validée.

🔄 **À compléter au fur et à mesure :** retours utilisateur après chaque tâche, décisions stratégiques nouvelles, plateformes testées, résultats de prospection, clarification clause Pulse.

📅 **Dernière mise à jour :** 21 mai 2026