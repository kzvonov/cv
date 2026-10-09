# Kirill Zvonov

Lead Backend Engineer · Porto, Portugal (open to relocation) · [LinkedIn](https://www.linkedin.com/in/kzvonov/) · [GitHub](https://github.com/kzvonov) · <kzvonov@gmail.com>

## Summary

Backend engineer with 10 years of experience, the last 4+ at SWEAT, leading backend since 2023 for a with 1.9M peak MAU. Ruby on Rails and PostgreSQL are my main stack, but I've worked with different languages and databases throughout my career and I'm open to new tech, languages.

## Experience

### SWEAT · Lead Backend Engineer *Remote (Lisbon) · Jun 2023 – Present*

1.9M peak MAU, 220k DAU, 50M accounts, 1.3M monthly on-chain user actions. API peak 95k RPM (p95 352 ms, p99 612 ms).

- **~$100K/year saved (~2x lower infrastructure costs)** by splitting our app out of a shared monolith: one Rails backend and one PostgreSQL database served two mobile apps. I led the separation: planned it, organized the cutover to a central DB + 2 shards, kept the business informed; the cutover took 13 minutes of planned downtime
- **Led a backend team of 4–5 engineers** across 3 product teams: hired 4 engineers and our SRE, ran performance reviews, was on call (PagerDuty) for production incidents
- **One system for all NEAR chain transactions:** designed and started TRS (Transaction Request System). It is a Rails + Sidekiq (capsules) service that signs and sends every transaction in the product. Before TRS, every feature had its own sending code. Now TRS sends 200–250k transactions a day (user + system)
- **Login 15–60x faster** (up to 1 min → 1–4 s) by redesigning the wallet login flow (which needed 2 on-chain transactions). Built it full-stack: backend and mobile app

### SWEAT · Senior Backend Engineer *Remote (Lisbon) · May 2022 – Jun 2023*

- **Joined before launch, shipped in 5 months:** built the backend of our crypto wallet app for its September 2022 launch, including core API and auth, rewards and prize draws, educational quizzes with rewards, staking and community voting
- Extended the service that indexes blockchain data into PostgreSQL (transfers, mints, deposits)

### Self-employed · Full Stack Engineer *Remote (UK) · Mar 2021 – Apr 2022*

- **Ran my own small dev business:** assembled a team of 4 (including me) and found clients, one of them TopVillas (luxury villa rentals)

### Silicon Valley Insight · Backend Software Engineer *Remote (USA) · May 2018 – Feb 2021*

### Fundery · Full Stack Developer *Remote · Sep 2017 – Apr 2018*

### Fora Soft · Junior Web Developer *St Petersburg · Apr 2016 – Jun 2017*

## Skills

**Main:** Ruby on Rails · Sidekiq · PostgreSQL · Redis · NEAR\
**Additional:** Puma · Falcon · Python · Flask · PHP · Laravel · Symfony · Express.js · Vue.js · Angular · MySQL · MongoDB · PgBouncer · Nginx · AWS · Heroku · Grafana · EVM

## Education

### ITMO University · Bachelor's degree, Informatics and Computer Engineering *St Petersburg · 2014 – 2018*

## Languages

Russian (native) · English (professional) · Portuguese (basic) · Japanese (elementary)
