# Agent Instructions: SabiQuant Documentation

## Single Source of Truth (SSoT) Policy

> **CRITICAL DIRECTIVE FOR ALL AI AGENTS & CONTRIBUTORS:**
> **The English documentation (`root` / `en`) is the SOLE Canonical Single Source of Truth (SSoT) for SabiQuant.**

### Rules for Documentation Maintenance:

1. **English First (Authoritative Origin):**
   - All technical specifications, mathematical equations (KaTeX), financial conventions (ISDA, ICMA, day-count, compounding), API signatures, and Rust code examples **MUST** be authored and verified in the English documentation (`src/content/docs/...`) first.
   - The English documentation is the legal and technical reference for all numerical parity comparisons against QuantLib.

2. **Role of Thai Translation (`th`):**
   - The Thai documentation in `src/content/docs/th/...` is a localized mirror for Thai-speaking quantitative practitioners.
   - If any discrepancy arises between the Thai translation and the English documentation, the **English documentation prevails unconditionally**.
   - If a page has not been translated into Thai yet, Astro Starlight's fallback mechanism automatically displays the English version. Do not rush inaccurate machine translations.

3. **Mathematical & Code Integrity:**
   - KaTeX formulas ($inline$ and $$display$$) and Rust code snippets must remain identical across English and Thai documents to prevent numerical discrepancies.
   - Standard quantitative finance terms (e.g., *Modified Duration*, *Macaulay Duration*, *Convexity*, *DV01*, *Brent's Solver*, *PCHIP Hermite*, *Settlement Boundary*) should always include their English names to prevent ambiguity.

