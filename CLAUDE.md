@AGENTS.md


---

# FundCo Websites — project context

This file is the standing record of this whole workspace: what it contains, what's
been built, the conventions in force, and what's still open. It's duplicated into
every individual site's own git folder (appended below any existing repo-specific
notes) so that folder can be opened and continued completely standalone, without
needing this parent folder or prior conversation history.

## What this folder is

`Fundco Websites/Fundco/` is NOT itself a git repo — it's a parent folder holding
many independent site repos side by side, one per company/subsidiary under the
FundCo group, plus one non-website sub-project (`email-signatures/`). Each site
folder listed below has its own `.git`, its own GitHub remote, and in several cases
its own commit-identity requirement (see below) — treat them as separate projects
that happen to live in the same directory tree and share brand/content continuity.

## Companies / sites in this workspace

| Folder | Real domain | Stack | Notes |
|---|---|---|---|
| `fundco` | fundco.ng | Next.js (App Router) | Parent company — FundCo Capital Managers Limited |
| `onecap` | onecapinvestment.ng | Next.js | OneCap Investment Limited |
| `agronomie` | agronomie.ng | Next.js | Finances agri-tech/cold-chain/processing/drying/logistics/inputs equipment — a FINANCIER, not an operator (matters for copy: see "Financing Agro-Tech" tagline) |
| `electrifymicrogrid` | electrifymicrogrid.ng | Next.js | EML — Electrify Microgrid Limited, rural mini-grid development |
| `horizon` | horizonenergy.org | Next.js | Horizon Energy — **Sierra Leone/Freetown-based, NOT Lagos** (see address exception below); built from confidential source PDFs, sensitive figures deliberately omitted |
| `e-mobilite` | e-mobilite.ng | Next.js | Electric mobility financing (bicycles/tricycles/4-wheel EVs) |
| `regenloop` | regenloop.ng | Next.js | Circular economy / biogas |
| `cleanenergyfund` | cleanenergyfund.ng | Vite + React (NOT Next.js — deliberately not converted) | Clean Energy Local Currency Fund (CEF), a FundCo Capital Managers-regulated climate fund. GitHub repo is still named `energy-clone-builder` (not renamed on GitHub's side) |
| `meshworks` | meshworks.ng | Next.js | MeshWorks Solar Limited — distributed solar networks. GitHub repo still named `meshworks-website`. **Do not mention on any public-facing page that Meshworks' sites/operations were transferred to EML, and do not mention FundCo group affiliation in EML's description** — user-directed, confidential detail |
| `greenkiosk` | greenkiosk.ng | Next.js | Rural solar micro-hubs. GitHub repo still named `greenkiosk-website` |
| `email-signatures` | — (not a website) | static HTML + Node/sharp/playwright tooling | Separate sub-project: Exchange Online transport-rule email-signature footers, see its own section below |
| `grosolar` | **no live site yet** | — | Pre-launch. Real logo exists at `_shared-logos/grosolar-logo.svg` (navy `#002554` wordmark + sun-icon mark, orange/gold gradient `#FF9733`→`#FCD733`). No folder of its own yet — will need one when the site is actually built |

Also present but outside the active site list: `_shared-logos/` (cross-site real logo
assets, e.g. DREEF, GroSolar), `assetco-branding/` (its own separate git repo — brand
collateral/launch-kit markdown + PDFs per company), `electrify-scrape/` (archived
scrape of the original Electrify Microgrid WordPress site, used as source material).

## Git identity — IMPORTANT, differs by repo

Most of the original 7 sites (fundco, onecap, agronomie, electrifymicrogrid, horizon,
e-mobilite, regenloop) commit under the normal identity: `Borguuh <abdrahmanadewale@gmail.com>`.

**Three repos are different** — `cleanenergyfund`, `meshworks`, `greenkiosk` — because
they were transferred/renamed from a different prior GitHub account. Their commits
must be authored as `bloomingtechie <borguuh@gmail.com>` to match pre-existing history
and keep pushes accepted. Each of those three has its own repo-specific `CLAUDE.md`
section (below the content you're reading now, or above it if this was appended)
spelling out the exact git config and what to do if a push fails on auth — **do not
change that config back**, and if a push ever fails on authentication, stop and tell
the user rather than attempting a workaround; they will log in as `bloomingtechie`
themselves if needed.

Always verify with `git log -1 --format='%an <%ae>'` before committing in any of
these repos, rather than assuming.

## Hard content rules (apply to every site)

- **Real assets only.** Never fabricate or approximate a partner/company logo. Only
  use a logo sourced from the user directly, or from the entity's own official
  site/materials. If no real logo exists, render a clean text-only badge instead.
  This rule has been enforced strictly throughout — several sub-agents across this
  project independently caught and fixed cases of mislabeled/wrong legacy logo
  assets (e.g. a file named `Stanbic.svg` that actually contained FundCo's own
  wordmark) rather than using them.
- **FundCo group HQ address**: use `Plot 1610, Adeola Hopewell Street, VI, Lagos` on
  every FundCo-affiliated site, not any older/scraped address — **except Horizon
  Energy**, which is genuinely Sierra Leone/Freetown-based and should never get the
  Lagos address.
- Avoid introducing third-party/competitor branding visible in stock photography,
  avoid derelict/"slum-ish" or poverty-porn framing, prefer real photography over
  AI-generated illustration where a choice exists.
- A `framer-motion`/GSAP `whileInView`-style scroll animation MUST have an explicit
  trigger/viewport configuration — this project has twice found genuine (not
  false-alarm) bugs where large sections of a live site were permanently invisible
  (`opacity:0`) because a stagger/reveal animation never fired. Don't assume a blank
  screenshot is a timing artifact — verify with a real scroll-through and DOM
  inspection before dismissing it.

## Major work completed in this workspace (chronological summary)

1. **Partner rollout (DREEF / CEF / InfraCredit)** — added DREEF (by virtue of its
   InfraCredit relationship) and CEF (Clean Energy Local Currency Fund) as partners
   across all sites **except FundCo, Horizon, and OneCap** (explicit exclusion list),
   while keeping InfraCredit everywhere it already existed. Added the horizontal
   partner-logo marquee animation to every site that didn't already have one.
2. **Three new sites onboarded**: `meshworks`, `energy-clone-builder` (renamed locally
   to `cleanenergyfund`), and `greenkiosk-website` (renamed locally to `greenkiosk`) —
   folders renamed, git identity reconciled to `bloomingtechie`, each given full
   SEO/OG-image/contact-form/partner-marquee parity with the rest of the group.
   `cleanenergyfund` deliberately stayed on Vite (not converted to Next.js).
3. **Advanced animations pass** — added genuinely bespoke GSAP/three.js/d3 work
   per site (not one reused template): three.js particle/network hero overlays,
   GSAP ScrollTrigger timelines, d3 charts for sites with real stats to visualize
   (Horizon's district coverage, GreenKiosk's 2030 impact targets, MeshWorks'
   women-led target gauge). Found and fixed a real GreenKiosk bug in the process
   (missing `viewport` prop leaving most page content invisible).
4. **MeshWorks partner correction** — removed REA/AfDB/GIZ (no official partnership,
   just loose relationships) and added EML instead, since MeshWorks' operations were
   transferred to EML — **but this transfer detail and any FundCo-group affiliation
   must never appear in the public-facing copy**, per explicit user instruction.
5. **Favicon/SEO bug sweep** — found and fixed leftover v0.dev placeholder favicons
   on MeshWorks and GreenKiosk (both were v0-scaffolded), a corrupted `favicon.ico`
   on GreenKiosk, missing per-page metadata on GreenKiosk's 7 sub-pages (all were
   silently inheriting the homepage's title/description), and a missing
   favicon `<link>` tag + broken `og:image` reference on CleanEnergyFund.
6. **Horizon real photography** — Horizon's own team supplied real installation
   photos (`Horizon_Pics_Onyioza/`); used for the homepage/about hero backgrounds
   and a dedicated "Our Work in the Field" photo gallery on the `/projects` page
   (not just another dim hero-overlay treatment — genuinely bright, visible photos).
7. **Email signature sub-project** (`email-signatures/`) — see its own section below.

## Working method established in this project

- For any multi-site or multi-company batch of similar work, the proven pattern is:
  dispatch one background agent per site/company with a fully self-contained brief
  (exact file paths, exact brand data, exact rules), then **personally verify** every
  result (rebuild, screenshot, visual check) before committing/pushing — don't trust
  a sub-agent's self-report at face value. This has repeatedly caught real bugs the
  agents missed or mis-stated as fixed.
- Real logos/photos are strongly preferred to be sourced from the user or the
  entity's own materials before falling back to stock imagery; Pexels search pages
  work via `WebFetch` (direct Playwright navigation gets Cloudflare-blocked).
- Windows file-lock issues on folder renames: use PowerShell
  `robocopy <src> <dst> /E /MOVE /NFL /NDL /NJH /R:2 /W:1` rather than `mv`/`Rename-Item`.

---

## Email signatures sub-project (`email-signatures/`)

Separate deliverable, own git repo (pushed to
`github.com/FundCo-Capital-Managers-Limited/email-signatures`, **public** — that's
deliberate, since it's what lets `raw.githubusercontent.com` serve the logo images
with no auth for hotlinking in Exchange Online transport-rule disclaimers). NOT a
website — table-based HTML email footers + banner images + rendered previews, one
set per company, covering the same 10 companies as the sites above (FundCo as
parent/catch-all, plus the 9 subsidiaries, plus GroSolar even though it has no
live site yet — using its real logo asset).

**Status as of last session**: all 10 companies' banner images (1x/2x PNG), HTML
footer templates, and rendered previews are built, reviewed, and refined per two
rounds of user feedback (Agronomie's tagline corrected to "Financing Agro-Tech" to
reflect its real financing role; GroSolar/Regenloop taglines refined; MeshWorks
banner spacing fixed). The legacy confidentiality/disclaimer paragraph (user-supplied
exact legal text, with a distinct longer version for EML covering its SPV status and
an environmental-friendliness line) has been added to all 10 footers. All
`[LOGO_URL_*]` placeholder tokens have been replaced with real, verified-working
`raw.githubusercontent.com` URLs (SharePoint hotlinking was tried first and
abandoned — anonymous SharePoint links redirect to a Microsoft login for anyone
without the specific share token, and per-file link generation requires an
authenticated tenant session that isn't available in this environment).

**Still open / Task 4 not started**: the README (character count per file, font
fallback stack per company, confirmation no file uses JS/forms), the MANIFEST
(placeholder token list — now mostly moot since real URLs are already in place, but
still useful as a record), and `deploy-signatures.ps1` (the Exchange Online
`New-TransportRule` PowerShell script, one rule per domain, most-specific-domain-first
priority with FundCo's domain rule last as the catch-all). See `email-signatures/SPEC.md`
for the full original brief/design spec this was built against.

**Open question for the user, not yet answered**: whether the `email-signatures`
repo being public on GitHub is acceptable long-term, or whether the images should
move to a private host with public-read only on the image objects (e.g. Azure Blob).
