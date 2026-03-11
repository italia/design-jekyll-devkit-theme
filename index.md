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

<div class="alert alert-info mb-5" role="alert">
  <it-icon name="it-info-circle" class="alert-icon"></it-icon>
  <strong>Nota:</strong> Dev Kit Italia è in fase alpha.
  Non tutti i componenti BSI hanno un equivalente web component.
</div>

## Componenti misti

Puoi mischiare web component e HTML classico nella stessa pagina:

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
