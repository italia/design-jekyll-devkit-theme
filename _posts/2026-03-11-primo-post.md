---
layout: post
title: "Primo post con Dev Kit Italia"
date: 2026-03-11
---

Questo è un post di esempio che dimostra come i web component
funzionano anche nei post Jekyll generati da Markdown.

## Un accordion nel post

<it-accordion>
  <it-accordion-item>
    <span slot="heading">Dettagli tecnici</span>
    <div slot="content">
      <p>Jekyll processa il Markdown e produce HTML.
      I tag <code>&lt;it-*&gt;</code> passano invariati
      nel markup finale perché Kramdown non li tocca.</p>
      <p>Il browser vede i custom element, e quando
      <code>elements.js</code> si carica, li attiva.</p>
    </div>
  </it-accordion-item>
</it-accordion>

I tag HTML custom passano invariati attraverso il processore Markdown
di Jekyll (Kramdown), quindi funzionano senza configurazioni speciali.
