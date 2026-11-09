# Accessibility audit record

## WAVE baseline scan

The temporary pre-fix baseline page was scanned with the WAVE web checker before the main page was finalized. WAVE reported **2 Errors**, **1 Contrast Error**, and **1 Alert** (AIM Score: 6.7/10).

| WAVE report label | Affected baseline element | Why it matters | Remediation in the final page |
|---|---|---|---|
| **Missing alternative text** | `<img src="/brand-mark.svg">` without an `alt` attribute | A screen-reader user receives no equivalent information for the image and may miss context available visually. | The page illustration now has concise, contextual alternative text; decorative brand marks use empty alternatives. |
| **Missing form label** | `<input type="text" placeholder="Type here">` | A placeholder is not a reliable programmatic label; assistive technology may not announce the control's purpose, and it disappears during entry. | The final form has visible `<label for>` text associated with each control's `id`, plus separate instructions. |
| **Very low contrast** (Contrast Error) | `.low-contrast` text in `#999` on white | Low-vision users or people viewing in glare may not be able to read the text reliably. | The final palette uses darker text on the light surface and high-contrast blue/yellow states. |

WAVE also reported **Orphaned form label** for the baseline's standalone “Message” label. It was corrected along with the missing form label by explicitly associating labels and controls.

## Final scan

After remediation, WAVE reported **0 Errors**, **0 Contrast Errors**, and **0 Alerts**. The page received an **AIM Score of 10/10**; WAVE listed 10 features, 18 structural elements, and 30 ARIA instances. WAVE itself notes that manual testing is still necessary. The included keyboard-friendly form and FAQ should also be checked by hand, along with zoom/reflow and assistive-technology behavior.

## Reflection draft (172 words)

This accessibility exercise changed the way I think about a “small” interface problem. A missing image description or form label may look like a minor markup detail, but it can remove context from someone using a screen reader and make a basic task harder or impossible. I learned to connect each automated finding to a person and a moment in the experience, rather than treating a checker’s warning as a box to clear. Adding descriptive alternative text, explicit labels, and stronger text contrast improved more than the scan: the page became easier to understand and navigate for everyone. I also saw why the follow-up matters. A fix is not complete just because the code looks right; the page needs another scan and hands-on checks, including keyboard navigation and readable behavior on a small screen. WAVE is useful for discovering common issues, but it cannot judge every interaction or decide whether an image description is meaningful in context. Accessibility is therefore an ongoing design and testing practice, not a one-time score or certification.
