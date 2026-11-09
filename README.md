# Access Lab — Signal Workshop

A small, framework-free student demo for practicing accessibility review and targeted fixes. The site includes semantic page structure, a keyboard-operable FAQ, responsive layout, an original illustration, and a feedback form with field-specific errors and an error summary.

Public repository: [Jowens2028/accessibility-audit-demo](https://github.com/Jowens2028/accessibility-audit-demo).

## Run locally

Requires Node.js 20 or newer. From this directory, run:

```sh
npm start
```

Open `http://localhost:3000`. The site is static; the feedback form validates in the browser and does not transmit or store entered information.

## Audit with WAVE

The initial WAVE scan of a pre-fix baseline is recorded in `ACCESSIBILITY_AUDIT.md`. WAVE reported two errors, one contrast error, and one related alert. The current page was scanned again after remediation; the before-and-after findings and limitations are documented there. WAVE is a useful automated aid, not a complete accessibility evaluation.

## Targeted findings and fixes

The baseline findings were: (1) **Missing alternative text** on an image, fixed with descriptive alternative text; (2) **Missing form label** on a text input, fixed with an associated visible label and matching `for`/`id`; and (3) **Very low contrast** on muted text, fixed with a darker foreground. WAVE also flagged the standalone label as **Orphaned form label**; the final form uses correctly associated labels. See `ACCESSIBILITY_AUDIT.md` for exact report counts and impact explanations.

The final page also includes a skip link, heading hierarchy, landmarks, visible focus styling, native `details`/`summary` disclosure controls, reduced-motion support, and accessible form validation feedback.

## Suggested remediation workflow

1. Run an automated scan and save the findings before editing.
2. Reproduce each issue and identify the affected markup or style.
3. Explain the impact in terms of the person and task, then make the smallest semantic fix.
4. Re-run the scan, confirm the issue is resolved, and test by keyboard and at mobile width.
5. Record any limitations that automation cannot assess.

## Reflection draft (150–200 words)

This accessibility exercise changed the way I think about a “small” interface problem. A missing image description or form label may look like a minor markup detail, but it can remove context from someone using a screen reader and make a basic task harder or impossible. I learned to connect each automated finding to a person and a moment in the experience, rather than treating a checker’s warning as a box to clear. Adding descriptive alternative text, explicit labels, and stronger text contrast improved more than the scan: the page became easier to understand and navigate for everyone. I also saw why the follow-up matters. A fix is not complete just because the code looks right; the page needs another scan and hands-on checks, including keyboard navigation and readable behavior on a small screen. WAVE is useful for discovering common issues, but it cannot judge every interaction or decide whether an image description is meaningful in context. Accessibility is therefore an ongoing design and testing practice, not a one-time score or certification.

## Project files

- `index.html` — semantic page content and accessible controls
- `styles.css` — visual system, responsive layouts, focus, and reduced-motion styles
- `script.js` — local-only feedback validation and announcements
- `server.js` — tiny static file server for local review
- `accessibility-workshop.svg` — portable, text-alternative-backed illustration
- `manus-routes.json` — declared site route for preview tooling
- `brand-mark.svg` — site mark and favicon
