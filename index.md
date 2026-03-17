---
layout: page
title: "Benvenuto"
nav_title: "Home"
nav_order: 1
lead: "Tema Jekyll minimale con web component Dev Kit Italia e Bootstrap Italia."
---

<p class="lead">{{ page.lead }}</p>

Questo è un tema Jekyll minimale che usa i **web component di Dev Kit Italia**
(`<it-*>`) per l'interfaccia, con gli stili di Bootstrap Italia. 

<div class="alert alert-warning mb-5" role="alert">
  <h4 class="alert-heading">PoC - Alpha</h4>
  <p>Questo tema usa
    <a href="https://github.com/italia/bootstrap-italia" class="alert-link">Bootstrap Italia {{ site.bsi_version }}</a> e
    <a href="https://github.com/italia/dev-kit-italia" class="alert-link">Dev Kit Italia {{ site.devkit_version }}</a>,
  </p>
  <hr>
  <p class="mb-0">Componenti e API possono cambiare prima della release stabile. Non usare in produzione senza verificare lo stato upstream.</p>
</div>

## Accordion — web component

I tag `<it-accordion>` funzionano direttamente nell'HTML di Jekyll,
senza bisogno di JavaScript custom:

<it-accordion>
  <it-accordion-item default-open>
    <span slot="heading">Come funziona?</span>
    <div slot="content">
      <p>Jekyll genera HTML statico. Dev Kit Italia registra i custom element
      tramite <code>elements.js</code>. Il browser li attiva automaticamente
      quando il DOM è pronto.</p>
    </div>
  </it-accordion-item>
  <it-accordion-item>
    <span slot="heading">Serve un build step?</span>
    <div slot="content">
      <p>Solo <code>npm run vendor</code> una volta per copiare gli asset
      da <code>node_modules</code> nella cartella <code>assets/</code>.
      Dopo, Jekyll funziona come sempre.</p>
    </div>
  </it-accordion-item>
  <it-accordion-item>
    <span slot="heading">Posso usarlo su GitHub Pages?</span>
    <div slot="content">
      <p>Sì — gli asset vendored sono file statici. Basta committarli
      nella repo e GitHub Pages li servirà normalmente.</p>
    </div>
  </it-accordion-item>
</it-accordion>

## Alert — BSI HTML classico

I componenti che non hanno un web component `<it-*>` si usano
con il markup HTML classico di Bootstrap Italia:

<div class="alert alert-warning mb-5" role="alert">
  <it-icon name="it-warning-circle" class="alert-icon"></it-icon>
  <strong>Nota:</strong> Dev Kit Italia è in fase alpha.
  Non tutti i componenti BSI hanno un equivalente web component.
</div>

## Componenti misti

Puoi mischiare web component e HTML classico nella stessa pagina. 

### Card semplici

<div class="row mt-4">
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    {%- comment -%} Card BSI 3.x — markup HTML classico {%- endcomment -%}
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title">
        <a href="#">Card BSI classica</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa usa il markup HTML di Bootstrap Italia 3.x.</p>
      </div>
    </article>
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    {%- comment -%} Card Dev Kit — web component {%- endcomment -%}
    <it-card>
      <a slot="title" href="#">Card web component</a>
      <span slot="text">Questa usa il web component &lt;it-card&gt; di Dev Kit Italia.</span>
      <time slot="footer" class="it-card-date" datetime="2026-03-11">11 marzo 2026</time>
    </it-card>
  </div>
</div>

### Card con immagini

<div class="row mt-4">
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    {%- comment -%} Card con immagine BSI 3.x — markup HTML classico {%- endcomment -%}
    <article class="it-card it-card-image rounded shadow-sm border">
      <h3 class="it-card-title">
        <a href="#">Card BSI con immagine</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Città">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-text">Markup HTML classico Bootstrap Italia 3.x con immagine in rapporto 16x9.</p>
      </div>
      <footer class="it-card-footer">
        <time class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
      </footer>
    </article>
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    {%- comment -%} Card con immagine Dev Kit — web component {%- endcomment -%}
    <it-card>
      <a slot="title" href="#">Card web component con immagine</a>
      <figure slot="image" class="figure img-full">
        <img src="https://placeholderimage.eu/api/nature/800/600" alt="Natura" />
      </figure>
      <span slot="text">Web component &lt;it-card&gt; con immagine via slot dedicato.</span>
      <time slot="footer" class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
    </it-card>
  </div>
</div>

### Card miste - layout 3 colonne come lista

<ul class="it-card-list row" aria-label="Esempi di card miste BSI e web component:">

  {%- comment -%} 1 — BSI con immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <h3 class="it-card-title">
        <a href="#">Card BSI con immagine</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Città">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-text">Markup HTML classico Bootstrap Italia 3.x con immagine e altezza uniforme.</p>
      </div>
      <footer class="it-card-footer">
        <time class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
      </footer>
    </article>
  </li>

  {%- comment -%} 2 — DevKit senza immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <it-card full-height="">
      <a slot="title" href="#">Card web component</a>
      <span slot="text">Web component <code>&lt;it-card&gt;</code> senza immagine, con <code>full-height</code> per allineamento riga.</span>
      <time slot="footer" class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
    </it-card>
  </li>

  {%- comment -%} 3 — BSI senza immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <h3 class="it-card-title">
        <a href="#">Card BSI senza immagine</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Markup HTML classico senza immagine. La classe <code>it-card-height-full</code> allinea le card alla stessa altezza.</p>
      </div>
      <footer class="it-card-footer">
        <time class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
      </footer>
    </article>
  </li>

  {%- comment -%} 4 — DevKit con immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <it-card full-height="">
      <a slot="title" href="#">Card web component con immagine</a>
      <figure slot="image" class="figure img-full">
        <img src="https://placeholderimage.eu/api/nature/800/600" alt="Natura" />
      </figure>
      <span slot="text">Web component <code>&lt;it-card&gt;</code> con immagine via <code>slot="image"</code>.</span>
      <time slot="footer" class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
    </it-card>
  </li>

  {%- comment -%} 5 — BSI con immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <h3 class="it-card-title">
        <a href="#">Card BSI — altra immagine</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/architecture/800/600" alt="Architettura">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-text">Seconda card BSI con immagine per completare la griglia a 3 colonne.</p>
      </div>
      <footer class="it-card-footer">
        <time class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
      </footer>
    </article>
  </li>

  {%- comment -%} 6 — DevKit senza immagine {%- endcomment -%}
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <it-card full-height="">
      <a slot="title" href="#">Card web component — variante</a>
      <span slot="text">Seconda card <code>&lt;it-card&gt;</code> senza immagine. Mescolare BSI e web component nella stessa lista funziona senza configurazioni aggiuntive.</span>
      <time slot="footer" class="it-card-date" datetime="2026-03-17">17 marzo 2026</time>
    </it-card>
  </li>

</ul>