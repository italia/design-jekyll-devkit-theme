---
layout: page
title: "Test accessibilità slot vuoti"
nav_order: 99
---

Pagina di test per verificare il comportamento dell'accessibility tree
quando gli slot dei web component Dev Kit Italia non sono popolati.

## Card

### Con slot (controllo)

<it-card>
  <a slot="title" href="#">Titolo presente</a>
  <span slot="text">Testo card di esempio.</span>
</it-card>

### Senza slot title

<it-card>
  <span slot="text">Testo presente ma nessun titolo.</span>
</it-card>

### Completamente vuota

<it-card></it-card>

## Accordion

### Con slot (controllo)

<it-accordion mode="multiple">
  <it-accordion-item default-open="">
    <span slot="heading">Heading presente</span>
    <div slot="content">Contenuto presente.</div>
  </it-accordion-item>
</it-accordion>

### Senza slot heading

<it-accordion mode="multiple">
  <it-accordion-item>
    <div slot="content">Contenuto senza heading.</div>
  </it-accordion-item>
</it-accordion>

### Item completamente vuoto

<it-accordion mode="multiple">
  <it-accordion-item></it-accordion-item>
</it-accordion>

## Input

### Con slot label (controllo)

<it-input id="test-input-ok" type="text" name="testo">
  <span slot="label">Campo di testo</span>
</it-input>

### Senza slot label

<it-input id="test-input-nolabel" type="text" name="testo"></it-input>

## Button

### Con testo (controllo)

<it-button variant="primary" type="button">Testo del pulsante</it-button>

### Senza testo

<it-button variant="primary" type="button"></it-button>

## Callout

### Con slot title (controllo)

<it-callout variant="" heading-level="h2">
  <it-icon slot="icon" size="md" name="it-info-circle"></it-icon>
  <span slot="title">Titolo callout</span>
  <p>Testo del callout di esempio.</p>
</it-callout>

### Senza slot title

<it-callout variant="" heading-level="h2">
  <it-icon slot="icon" size="md" name="it-info-circle"></it-icon>
  <p>Testo del callout senza titolo.</p>
</it-callout>

## Modal

### Con slot header (controllo)

<it-modal
  close-label="Chiudi finestra modale"
  modal-title="Titolo modale"
  modal-description="Descrizione della modale"
>
  <it-button variant="primary" slot="trigger">Apri modale</it-button>
  <span slot="header">Titolo modale</span>
  <span slot="description">Descrizione della modale</span>
  <p slot="content">Contenuto della modale.</p>
  <it-button slot="footer" variant="primary">Conferma</it-button>
</it-modal>

### Senza slot header

<it-modal
  close-label="Chiudi finestra modale"
>
  <it-button variant="primary" slot="trigger">Apri modale vuota</it-button>
  <p slot="content">Contenuto senza titolo.</p>
</it-modal>

## Dropdown

### Con contenuto (controllo)

<it-dropdown label="Apri dropdown" variant="primary">
  <it-dropdown-item href="#">Azione 1</it-dropdown-item>
  <it-dropdown-item href="#">Azione 2</it-dropdown-item>
</it-dropdown>

### Senza label

<it-dropdown variant="primary">
  <it-dropdown-item href="#">Azione 1</it-dropdown-item>
</it-dropdown>

## Select

### Con slot label (controllo)

<it-select name="test-select" placeholder="Seleziona un'opzione">
  <span slot="label">Etichetta</span>
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</it-select>

### Senza slot label

<it-select name="test-select-nolabel" placeholder="Seleziona un'opzione">
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</it-select>

## Checkbox

### Con slot label (controllo)

<it-checkbox name="test-check">
  <span slot="label">Checkbox di esempio</span>
</it-checkbox>

### Senza slot label

<it-checkbox name="test-check-nolabel"></it-checkbox>

## Radio button

### Con slot label (controllo)

<it-radio-group name="test-radio">
  <span slot="label">Gruppo radio</span>
  <it-radio id="test-r1" value="opzione1">
    <span slot="label">Radio 1</span>
  </it-radio>
  <it-radio id="test-r2" value="opzione2">
    <span slot="label">Radio 2</span>
  </it-radio>
</it-radio-group>

### Senza slot label (gruppo e singoli)

<it-radio-group name="test-radio-nolabel">
  <it-radio id="test-r3" value="opzione1"></it-radio>
  <it-radio id="test-r4" value="opzione2"></it-radio>
</it-radio-group>

## Breadcrumbs

### Con item (controllo)

<it-breadcrumbs it-aria-label="Percorso di navigazione">
  <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
  <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
</it-breadcrumbs>

### Vuoto

<it-breadcrumbs it-aria-label="Percorso di navigazione"></it-breadcrumbs>

## Chip

### Con label (controllo)

<it-chip label="Test" size="sm" variant="primary"></it-chip>

### Senza label

<it-chip size="sm" variant="primary"></it-chip>

## Hero

### Con contenuto (controllo)

<it-hero it-aria-label="In evidenza">
  <img slot="background" src="https://placehold.co/1200x400" alt="Immagine hero">
</it-hero>

### Vuoto

<it-hero></it-hero>

## Card — test dettagliato

### Card completa (controllo)

<it-card>
  <a slot="title" href="#">Titolo card</a>
  <span slot="text">Testo card di esempio.</span>
  <time slot="footer" class="it-card-date" datetime="2026-04-10">10 aprile 2026</time>
</it-card>

### Card senza slot title (solo text)

<it-card>
  <span slot="text">Solo testo, nessun titolo.</span>
</it-card>

### Card senza slot title (text + footer)

<it-card>
  <span slot="text">Testo presente.</span>
  <time slot="footer" class="it-card-date" datetime="2026-04-10">10 aprile 2026</time>
</it-card>

### Card con slot title vuoto (span senza testo)

<it-card>
  <span slot="title"></span>
  <span slot="text">Testo presente ma title vuoto.</span>
</it-card>

### Card con slot title solo testo (senza link)

<it-card>
  <span slot="title">Titolo senza link</span>
  <span slot="text">Testo card.</span>
</it-card>

### Card completamente vuota

<it-card></it-card>

### Card con immagine senza title

<it-card>
  <figure slot="image" class="figure img-full">
    <img src="https://placehold.co/400x300" alt="Placeholder">
  </figure>
  <span slot="text">Card con immagine ma senza titolo.</span>
</it-card>

### Card full-height senza title

<it-card full-height="">
  <span slot="text">Full height senza titolo.</span>
</it-card>