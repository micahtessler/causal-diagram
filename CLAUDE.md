# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200/
npm test           # Run unit tests (Karma/Jasmine, watch mode)
npm run lint       # ESLint check
npm run lint-fix   # ESLint auto-fix
npm run build      # Production build to docs/ (for GitHub Pages)
```

To run a single test file, use Karma's `--include` flag:
```bash
npm test -- --include='**/diagram.service.spec.ts'
```

## Architecture

Angular 16 SPA for visualizing causal diagrams of juggling patterns using SVG.

**Data flow:**
1. `PatternService` holds the active `Pattern` (selected from 17 built-in JSON files in `src/app/patterns/` or uploaded by the user)
2. `NavbarComponent` lets users select patterns via dropdown or upload/download JSON
3. `DiagramComponent` watches for pattern changes and triggers re-rendering
4. `DiagramService` computes SVG geometry and draws the diagram using `@svgdotjs/svg.js`

**Data model** (`src/app/model/`):
- `Pattern`: `{ name, jugglerCount, beats[] }`
- `Beat`: `{ throws[] }`
- `Throw`: `{ sourceJuggler, sourceHand (R|L), targetJuggler, throwHeight, zip? }`

**DiagramService** is the most complex piece — it handles all geometry math for positioning throws as arcs/lines between juggler "hands" on a timeline grid. Zip throws (hand-to-hand exchanges) are rendered differently from regular throws.

**Build note:** `npm run build` outputs to `docs/` and the `postbuild` script copies `index.html` → `404.html` for GitHub Pages SPA routing.
