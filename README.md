# Jekyll + Dev Kit Italia — Skeleton Theme

> ⚠️ **Proof of concept** — Dev Kit Italia e Bootstrap Italia v3 sono in alpha.
> Non usare in produzione senza verificare lo stato upstream. Componenti e API possono cambiare prima della release stabile.

Tema Jekyll minimale che usa i **web component di Dev Kit Italia** (`<it-*>`) con gli stili di **Bootstrap Italia**.

## Come funziona

```
Jekyll (static HTML) + Dev Kit Italia (web components via ES modules)
```

1. `npm install` scarica `@italia/dev-kit-italia` da npm
2. `npm run vendor` copia `dist/` → `assets/vendor/devkit/`
3. Il layout Jekyll carica CSS + JS come file statici
4. I tag `<it-accordion>`, `<it-icon>`, ecc. funzionano direttamente in Markdown/HTML

**Nessun bundler, nessun build JS.** Solo file statici serviti da Jekyll.

**Nota bene: In questo primo PoC carica CSS + JS anche di Bootstrap Italia.**

## Setup

```bash
# Prerequisiti: Node.js ≥ 22, Ruby, Bundler

npm run setup        # npm install + vendor assets
bundle install       # install Jekyll gems
bundle exec jekyll serve --livereload
```

Oppure tutto in un comando:
```bash
npm run dev
```

## Struttura

```
├── _config.yml              # Config Jekyll
├── _layouts/
│   ├── default.html         # Layout base — carica CSS/JS Dev Kit
│   ├── page.html
│   └── post.html
├── _includes/
│   ├── header.html          # Header PA semplificato (it-icon)
│   └── footer.html          # Footer PA semplificato (it-icon)
├── assets/
│   ├── vendor/devkit/       # ← generato da `npm run vendor`
│   │   ├── fonts.css
│   │   ├── styles.css
│   │   ├── elements.js
│   │   └── ...
│   ├── vendor/bsi/          # ← generato da `npm run vendor`
│   │   ├── bootstrap-italia.bundle.min.js
│   │   └── ...
│   ├── css/site.css         # Override custom (quasi vuoto)
│   └── js/site.js           # JS custom (vuoto)
├── index.md                 # Homepage con esempi
├── componenti.md            # Pagina componenti
├── _posts/                  # Blog posts
├── package.json             # Dev Kit Italia dependency
├── scripts/vendor.mjs       # Script di vendoring
└── Gemfile                  # Jekyll gems
```

## Come usare i web component nei contenuti

In qualsiasi file Markdown o HTML di Jekyll:

```html
<it-accordion>
  <it-accordion-item default-open="">
    <span slot="heading">Titolo sezione</span>
    <div slot="content">
      Contenuto con **Markdown** che Jekyll ha già processato.
    </div>
  </it-accordion-item>
</it-accordion>
```

I tag `<it-*>` passano invariati attraverso Kramdown e vengono
attivati dal browser quando `elements.js` si carica.

## Cosa funziona e cosa no

**Funziona:**
- Web component (`<it-accordion>`, `<it-icon>`, `<it-back-to-top>`, ...)
- Markup BSI classico (card, alert, grid, typography, ...)
- Mix di web component e HTML classico nella stessa pagina
- Post e pagine Markdown con tag `<it-*>` inline

**Limitazioni:**
- SSR: i web component renderizzano client-side (FOUC possibile)
- Non tutti i ~55 componenti BSI hanno un equivalente `<it-*>`
- Dev Kit Italia è alpha — breaking changes possibili
- `elements.js` carica TUTTI i componenti (no tree-shaking in questo PoC)
- GitHub Pages: servire `assets/vendor/` richiede di committare i file