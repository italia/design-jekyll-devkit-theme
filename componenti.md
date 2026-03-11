---
layout: page
title: "Componenti"
nav_title: "Componenti"
nav_order: 2
---

Esempi di web component Dev Kit Italia usati in una pagina Jekyll.

## Accordion — modalità esclusiva

<it-accordion mode="single">
  <it-accordion-item default-open>
    <span slot="heading">Sezione uno</span>
    <div slot="content">
      Contenuto della prima sezione. In modalità <code>single</code>,
      aprire un elemento chiude automaticamente gli altri.
    </div>
  </it-accordion-item>
  <it-accordion-item>
    <span slot="heading">Sezione due</span>
    <div slot="content">
      Contenuto della seconda sezione.
    </div>
  </it-accordion-item>
</it-accordion>

## Accordion — stato attivo

<it-accordion background-active>
  <it-accordion-item default-open>
    <span slot="heading">Con sfondo attivo</span>
    <div slot="content">
      L'attributo <code>background-active</code> colora l'header quando aperto.
    </div>
  </it-accordion-item>
  <it-accordion-item>
    <span slot="heading">Secondo elemento</span>
    <div slot="content">
      Altro contenuto di esempio.
    </div>
  </it-accordion-item>
</it-accordion>

## Icone

Le icone del Design System sono disponibili tramite `<it-icon>`:

<div class="d-flex gap-3 align-items-center my-3">
  <it-icon name="it-check-circle" size="lg"></it-icon>
  <it-icon name="it-warning-circle" size="lg"></it-icon>
  <it-icon name="it-close-circle" size="lg"></it-icon>
  <it-icon name="it-info-circle" size="lg"></it-icon>
  <it-icon name="it-help-circle" size="lg"></it-icon>
</div>
