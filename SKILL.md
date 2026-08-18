---
name: topic-site-builder
description: Research and build a polished educational website, cited notes, and a compact printable guide for any topic.
---

# Topic Site Builder

Use this skill when someone wants a beginner-friendly educational microsite for
a specific topic, especially when they also want visuals, research notes, and a
printable quick guide.

## Required input

- Topic
- Intended audience and current knowledge
- Desired outcome
- Relevant version, edition, model, region, or date
- Explicit preferences, exclusions, and source material

If details are missing, make conservative assumptions and state them in the
finished guide. Ask only when a choice would materially change the result.

## Workflow

1. **Inspect the starter**
   - Read `README.md`, `content-plan.md`, and the existing website/print files.
   - Preserve the no-build, direct-file-opening structure.

2. **Research before writing**
   - Prefer current government, university, standards-body, peer-reviewed, or
     exact-product manufacturer sources.
   - Use specialist and community sources only for clearly labeled practice,
     experience, or preference.
   - Record direct URLs, dates, supported claims, limitations, conflicts, and
     version/region scope in `research-notes.md`.
   - Remove or qualify claims that lack direct support.

3. **Plan the learning path**
   - Define one audience, one useful outcome, and explicit boundaries.
   - Teach one memorable mental model before details.
   - Use 3-6 steps with observable completion checks.
   - Derive troubleshooting from the same causal model.

4. **Build the website**
   - Replace the demo content in `index.html`.
   - Use original HTML/CSS/SVG visuals; do not copy proprietary artwork.
   - Include essentials, model, steps, practical examples, alternatives where
     useful, troubleshooting, next steps, scope, and sources.
   - Keep high-impact cautions beside the affected instructions.
   - Keep terminology consistent across text, diagrams, and troubleshooting.

5. **Build the print guide**
   - Author `print-guide.html` separately rather than printing the full site.
   - Condense only verified website content into 1-3 Letter/A4 pages.
   - Include the core model, recurring steps, checks, critical cautions,
     troubleshooting, and a scope/source note.
   - Prevent clipped content, split cards/diagrams, isolated headings, blank
     overflow pages, and tiny type.

6. **Validate**
   - Open from `file://` with no server or build step.
   - Check JavaScript syntax, unique IDs, anchors, local links, and assets.
   - Check keyboard navigation, visible focus, semantic headings and landmarks,
     SVG titles/descriptions, 320px reflow, zoom, reduced motion, and contrast.
   - Preview print output on Letter and A4; keep it within 1-3 pages.
   - Confirm web and print facts, cautions, terminology, and dates agree.

## Required deliverables

- `index.html`
- `styles.css`
- `script.js`
- `print-guide.html`
- `print-guide.css`
- `research-notes.md`
- Updated `README.md`

## Guardrails

- Do not present anecdote as authority.
- Do not silently combine guidance for different versions, products, or regions.
- Do not promise fixed results when conditions vary.
- Do not rely on external assets when an original local diagram can communicate
  the idea.
- Do not add frameworks, package managers, or build tools unless explicitly
  requested.
- For medical, legal, financial, safety, or equipment-risk topics, state the
  guide's limits and direct readers to qualified help.

## Completion standard

The task is complete only when the website works offline, the research is
cited, the learning progression is coherent, the visuals are accessible, and
the dedicated print guide is readable and cutoff-free in 1-3 pages.
