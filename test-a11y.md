---
layout: page
title: "Test accessibilità"
nav_order: 99
---

Pagina di test per verificare il comportamento dell'accessibility tree e dei tool di verifica automatica sui web component Dev Kit Italia.

## Contesto e scopo

Questa pagina fa parte di un'analisi esplorativa sulla **verificabilità dell'accessibilità dei web component Dev Kit Italia**. I componenti `<it-*>` usano shadow DOM per incapsulare markup e stili, e slot per ricevere contenuto dal light DOM. Questo approccio funziona bene per screen reader e browser moderni, ma mette in difficoltà diversi tool di verifica automatica.

La pagina raccoglie casi di test pensati per **forzare errori controllati** e confrontare come diversi tool (axe-core, Siteimprove, ARC Toolkit, WAVE, pa11y, MAUVE++) li rilevano o non li rilevano.

**Gli errori in questa pagina sono intenzionali** — servono a misurare la copertura dei tool, non a suggerire pattern di uso corretto dei componenti.

## Come leggere la pagina

Ogni sezione include un **🔴 errore intenzionale** su un web component Dev Kit e lo **stesso errore** su HTML classico come controllo. Se il tool segnala entrambi, e riconosce anche i casi **🟢 controllo**, è possibile dedurre che stia verificando dentro il shadow DOM, salvo verificare in ogni caso i risultati.

Legenda:
- 🟢 **Controllo OK** — componente corretto, un tool accurato deve passarlo senza segnalazioni
- 🔴 **Errore intenzionale** — errore controllato, un tool accurato deve segnalarlo
- 🟡 **Verifica comportamentale** — da osservare manualmente (focus, form submit, screen reader)

## Test con pa11y da CLI

La pagina è direttamente testabile ad esempio con pa11y:

```bashEngine HTML_CodeSniffer (default)
npx pa11y https://italia.github.io/design-jekyll-devkit-theme/test-a11y/ --standard WCAG2AA --runner axe
```

---

## A. Slot vuoti — elementi semantici fantasma

Quando uno slot obbligatorio non viene popolato, il componente Dev Kit genera comunque l'elemento semantico nel shadow DOM (heading, label, button), producendo un nodo accessibile con nome vuoto. Dev Kit segnala il problema in console ma il DOM non reagisce.

### Card

#### Card completa (🟢 controllo ok)

<it-card>
  <a slot="title" href="#">Titolo card presente</a>
  <span slot="text">Testo card di esempio.</span>
</it-card>

#### Card senza slot title (🔴 errore intenzionale)

<it-card>
  <span slot="text">Testo presente ma nessun titolo.</span>
</it-card>

#### Card completamente vuota (🔴 errore intenzionale)

<it-card></it-card>

#### Card senza slot title con immagine (🔴 errore intenzionale)

<it-card>
  <figure slot="image" class="figure img-full">
    <img src="https://placehold.co/400x300" alt="Placeholder">
  </figure>
  <span slot="text">Card con immagine ma senza titolo.</span>
</it-card>

#### Card con slot title vuoto (🔴 errore intenzionale)

<it-card>
  <span slot="title"></span>
  <span slot="text">Testo presente ma title vuoto.</span>
</it-card>

#### Card full-height senza title (🔴 errore intenzionale)

<it-card full-height="">
  <span slot="text">Full height senza titolo.</span>
</it-card>

### Accordion

#### Accordion completo (🟢 controllo ok)

<it-accordion mode="multiple">
  <it-accordion-item default-open="">
    <span slot="heading">Heading presente</span>
    <div slot="content">Contenuto presente.</div>
  </it-accordion-item>
</it-accordion>

#### Accordion senza slot heading (🔴 errore intenzionale)

<it-accordion mode="multiple">
  <it-accordion-item>
    <div slot="content">Contenuto senza heading.</div>
  </it-accordion-item>
</it-accordion>

#### Accordion item vuoto (🔴 errore intenzionale)

<it-accordion mode="multiple">
  <it-accordion-item></it-accordion-item>
</it-accordion>

### Input

#### Input con label (🟢 controllo ok)

<it-input id="test-input-ok" type="text" name="testo">
  <span slot="label">Campo di testo</span>
</it-input>

#### Input senza label (🔴 errore intenzionale)

<it-input id="test-input-nolabel" type="text" name="testo"></it-input>

### Button

#### Button con testo (🟢 controllo ok)

<it-button variant="primary" type="button">Testo del pulsante</it-button>

#### Button senza testo (🔴 errore intenzionale)

<it-button variant="primary" type="button"></it-button>

### Callout

#### Callout completo (🟢 controllo ok)

<it-callout variant="" heading-level="h2">
  <it-icon slot="icon" size="md" name="it-info-circle"></it-icon>
  <span slot="title">Titolo callout</span>
  <p>Testo del callout di esempio.</p>
</it-callout>

#### Callout senza slot title (🔴 errore intenzionale)

<it-callout variant="" heading-level="h2">
  <it-icon slot="icon" size="md" name="it-info-circle"></it-icon>
  <p>Testo del callout senza titolo.</p>
</it-callout>

### Modal

#### Modal completa (🟢 controllo ok)

<it-modal
  close-label="Chiudi finestra modale"
  modal-title="Titolo modale"
  modal-description="Descrizione della modale"
>
  <it-button variant="primary" slot="trigger">Apri modale completa</it-button>
  <span slot="header">Titolo modale</span>
  <span slot="description">Descrizione della modale</span>
  <p slot="content">Contenuto della modale.</p>
  <it-button slot="footer" variant="primary">Conferma</it-button>
</it-modal>

#### Modal senza slot header (🔴 errore intenzionale)

<it-modal close-label="Chiudi finestra modale">
  <it-button variant="primary" slot="trigger">Apri modale senza header</it-button>
  <p slot="content">Contenuto senza titolo.</p>
</it-modal>

### Dropdown

#### Dropdown completo (🟢 controllo ok)

<it-dropdown label="Apri dropdown" variant="primary">
  <it-dropdown-item href="#">Azione 1</it-dropdown-item>
  <it-dropdown-item href="#">Azione 2</it-dropdown-item>
</it-dropdown>

#### Dropdown senza label (🔴 errore intenzionale)

<it-dropdown variant="primary">
  <it-dropdown-item href="#">Azione 1</it-dropdown-item>
</it-dropdown>

### Select

#### Select con label (🟢 controllo ok)

<it-select name="test-select-ok" placeholder="Seleziona un'opzione">
  <span slot="label">Etichetta</span>
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</it-select>

#### Select senza label (🔴 errore intenzionale)

<it-select name="test-select-nolabel" placeholder="Seleziona un'opzione">
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</it-select>

### Checkbox

#### Checkbox con label (🟢 controllo ok)

<it-checkbox name="test-check-ok">
  <span slot="label">Checkbox di esempio</span>
</it-checkbox>

#### Checkbox senza label (🔴 errore intenzionale)

<it-checkbox name="test-check-nolabel"></it-checkbox>

### Radio button

#### Radio group completo (🟢 controllo ok)

<it-radio-group name="test-radio-ok">
  <span slot="label">Gruppo radio</span>
  <it-radio id="test-r1" value="opzione1">
    <span slot="label">Radio 1</span>
  </it-radio>
  <it-radio id="test-r2" value="opzione2">
    <span slot="label">Radio 2</span>
  </it-radio>
</it-radio-group>

#### Radio group senza label (🔴 errore intenzionale)

<it-radio-group name="test-radio-nolabel">
  <it-radio id="test-r3" value="opzione1"></it-radio>
  <it-radio id="test-r4" value="opzione2"></it-radio>
</it-radio-group>

### Breadcrumbs

#### Breadcrumbs completo (🟢 controllo ok)

<it-breadcrumbs it-aria-label="Percorso di navigazione">
  <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
  <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
</it-breadcrumbs>

#### Breadcrumbs vuoto (🔴 errore intenzionale)

<it-breadcrumbs it-aria-label="Percorso di navigazione"></it-breadcrumbs>

### Chip

#### Chip con label (🟢 controllo ok)

<it-chip label="Test" size="sm" variant="primary"></it-chip>

#### Chip senza label (🔴 errore intenzionale)

<it-chip size="sm" variant="primary"></it-chip>

### Hero

#### Hero con contenuto (🟢 controllo ok)

<it-hero it-aria-label="In evidenza">
  <img slot="background" src="https://placehold.co/1200x400" alt="Immagine hero">
</it-hero>

#### Hero vuoto (🔴 errore intenzionale)

<it-hero></it-hero>

---

## B. Contrasto colori nel shadow DOM

Verifica se i tool calcolano il contrasto sui testi renderizzati nel shadow DOM dei componenti, confrontando lo stesso errore applicato in due modi diversi:

- **Via style sugli slot** (light DOM): il tool deve solo leggere lo style inline
- **Via `::part()`** (shadow DOM): il tool deve attraversare il shadow DOM per calcolare il contrasto

La seconda forma è il vero banco di prova — un tool che non entra nel shadow DOM non può calcolare il contrasto corretto.

### Card Dev Kit con contrasto 🔴 errato (via style sugli slot)

<it-card>
  <a slot="title" href="#" style="color: #aaaaaa;">Titolo con contrasto insufficiente</a>
  <span slot="text" style="color: #aaaaaa;">Testo con contrasto insufficiente — grigio chiaro su bianco (#aaa su #fff = ratio 2.32:1).</span>
</it-card>

### HTML classico con stesso contrasto 🔴 errato (controllo)

<div class="p-3 border rounded mb-3">
  <h3><a href="#" style="color: #aaaaaa;">Titolo con contrasto insufficiente</a></h3>
  <p style="color: #aaaaaa;">Testo con contrasto insufficiente — grigio chiaro su bianco (#aaa su #fff = ratio 2.32:1).</p>
</div>

### Card Dev Kit con contrasto corretto (🟢 controllo ok)

<it-card>
  <a slot="title" href="#">Titolo con contrasto corretto</a>
  <span slot="text">Testo con contrasto corretto — colori default.</span>
</it-card>

### Callout con testo su sfondo colorato

<it-callout variant="warning" heading-level="h3">
  <it-icon slot="icon" size="md" name="it-warning-circle"></it-icon>
  <span slot="title">Callout warning</span>
  <p>Testo su sfondo colorato — il contrasto è verificato dai tool?</p>
</it-callout>

### Chip varianti colore

<div class="d-flex flex-wrap mb-3" style="gap: .5rem">
  <it-chip label="Primary" size="sm" variant="primary"></it-chip>
  <it-chip label="Secondary" size="sm" variant="secondary"></it-chip>
  <it-chip label="Success" size="sm" variant="success"></it-chip>
  <it-chip label="Warning" size="sm" variant="warning"></it-chip>
  <it-chip label="Danger" size="sm" variant="danger"></it-chip>
</div>

## B. Contrasto colori test con parts

Verifica se i tool calcolano il contrasto sui testi renderizzati nel shadow DOM.
Il test usa il selettore `::part()` per forzare un colore a basso contrasto
sugli elementi dentro il shadow DOM dei web component.

<style>
  .test-bad-contrast it-card::part(text) {
    color: #aaaaaa;
  }
  .test-bad-contrast it-card::part(title) {
    color: #aaaaaa;
  }
  .test-bad-contrast it-button::part(button) {
    color: #aaaaaa;
  }
</style>

### Card Dev Kit con contrasto 🔴 errato (via ::part nel shadow DOM)

<div class="test-bad-contrast">
<it-card>
  <a slot="title" href="#">Titolo con contrasto insufficiente</a>
  <span slot="text">Testo con contrasto insufficiente nel shadow DOM (#aaa su #fff = ratio 2.32:1).</span>
</it-card>
</div>

### HTML classico con stesso contrasto 🔴 errato (controllo)

<div class="p-3 border rounded mb-3">
  <h3><a href="#" style="color: #aaaaaa;">Titolo con contrasto insufficiente</a></h3>
  <p style="color: #aaaaaa;">Testo con contrasto insufficiente — grigio chiaro su bianco (#aaa su #fff = ratio 2.32:1).</p>
</div>

### Card Dev Kit con contrasto corretto (🟢 controllo ok)

<it-card>
  <a slot="title" href="#">Titolo con contrasto corretto</a>
  <span slot="text">Testo con contrasto corretto — colori default.</span>
</it-card>

### Button Dev Kit con contrasto 🔴 errato (via ::part nel shadow DOM)

<div class="test-bad-contrast">
<it-button variant="primary" type="button">Testo button con contrasto insufficiente</it-button>
</div>

### Button HTML classico con stesso contrasto 🔴 errato (controllo)

<button type="button" class="btn btn-primary" style="color: #aaaaaa;">Testo button con contrasto insufficiente</button>

---

## C. Form association cross-shadow-root

Verifica se un `<form>` nel light DOM riceve i valori degli input Dev Kit (che hanno l'`<input>` reale dentro il shadow DOM). Per gli utenti, è la differenza tra "il form funziona" e "il form invia dati vuoti".

Compilare i campi e cliccare "Invia form" — se il riquadro mostra i dati, la form association funziona.

### Form Dev Kit dentro form nativo

<form id="test-form" onsubmit="event.preventDefault(); var fd = new FormData(this); var out = ''; for(var p of fd.entries()) out += p[0]+': '+p[1]+'\n'; document.getElementById('form-output').textContent = out || 'Nessun dato ricevuto dal form.';">

  <it-input id="form-input-text" type="text" name="nome" value="">
    <span slot="label">Nome</span>
  </it-input>

  <it-input id="form-input-email" type="email" name="email" value="">
    <span slot="label">Email</span>
  </it-input>

  <it-select name="ruolo" placeholder="Seleziona ruolo">
    <span slot="label">Ruolo</span>
    <option value="dev">Sviluppatore</option>
    <option value="design">Designer</option>
    <option value="pm">Project Manager</option>
  </it-select>

  <it-checkbox name="privacy">
    <span slot="label">Accetto la privacy policy</span>
  </it-checkbox>

  <div class="mt-3">
    <it-button variant="primary" type="submit">Invia form</it-button>
  </div>

</form>

<pre id="form-output" class="mt-3 p-3 bg-light border">Clicca "Invia form" per verificare i dati ricevuti dal form nativo.</pre>

### Form HTML classico (🟢 controllo)

<form id="test-form-classic" onsubmit="event.preventDefault(); var fd = new FormData(this); var out = ''; for(var p of fd.entries()) out += p[0]+': '+p[1]+'\n'; document.getElementById('form-output-classic').textContent = out || 'Nessun dato ricevuto dal form.';">

  <div class="form-group">
    <label for="classic-nome">Nome</label>
    <input type="text" class="form-control" id="classic-nome" name="nome-classic">
  </div>

  <div class="form-group">
    <label for="classic-email">Email</label>
    <input type="email" class="form-control" id="classic-email" name="email-classic">
  </div>

  <div class="form-check">
    <input id="classic-privacy" type="checkbox" name="privacy-classic">
    <label for="classic-privacy">Accetto la privacy policy</label>
  </div>

  <div class="mt-3">
    <button type="submit" class="btn btn-primary">Invia form classico</button>
  </div>

</form>

<pre id="form-output-classic" class="mt-3 p-3 bg-light border">Clicca "Invia form classico" per verificare i dati.</pre>

---

## D. ARIA relationships cross-shadow-root

Per spec W3C, `aria-describedby` e `aria-labelledby` non funzionano attraverso i confini del shadow DOM: un ID nel light DOM non è risolvibile da un elemento nel shadow DOM.

Dev Kit espone `it-aria-describedby` e `it-aria-labelledby` che vengono applicati all'input generato nel shadow DOM. Il test verifica se il riferimento cross-shadow-root funziona in pratica.

**Risultato atteso**: non funziona (verificato con VoiceOver). Dev Kit fornisce alternative interne (`support-text`, `validity-message`) per i casi d'uso standard.

### Input Dev Kit con aria-describedby che punta a ID esterno (🔴 errore atteso)

<p id="external-description">Questa descrizione è nel light DOM, fuori dal web component.</p>

<it-input id="test-aria-describedby" type="text" name="test-described" it-aria-describedby="external-description">
  <span slot="label">Campo con aria-describedby esterno</span>
</it-input>

### Input HTML classico con aria-describedby (🟢 controllo — deve funzionare)

<p id="external-description-classic">Questa descrizione è nel light DOM.</p>

<div class="form-group">
  <label for="classic-described">Campo con aria-describedby</label>
  <input type="text" class="form-control" id="classic-described" name="test-described-classic" aria-describedby="external-description-classic">
</div>

### Input Dev Kit con aria-labelledby che punta a ID esterno (🔴 errore atteso)

<p id="external-label">Etichetta esterna nel light DOM</p>

<it-input id="test-aria-labelledby" type="text" name="test-labelled" it-aria-labelledby="external-label">
  <span slot="label">Campo con aria-labelledby esterno (dovrebbe usare l'etichetta esterna)</span>
</it-input>

### Input HTML classico con aria-labelledby (🟢 controllo — deve funzionare)

<p id="external-label-classic">Etichetta esterna nel light DOM</p>

<div class="form-group">
  <label for="classic-labelled">Campo originale</label>
  <input type="text" class="form-control" id="classic-labelled" name="test-labelled-classic" aria-labelledby="external-label-classic">
</div>

---

## E. Focus management

Verifica l'ordine di tabulazione attraverso shadow DOM boundaries.

Posizionarsi sul link "1. Link nativo" e premere Tab ripetutamente. L'ordine atteso è 1→2→3→4→5→6. Shift+Tab per l'ordine inverso.

<div class="p-3 border mb-3">

  <a href="#" id="focus-start">1. Link nativo (inizio sequenza)</a>

  <it-input id="focus-input" type="text" name="focus-test">
    <span slot="label">2. Input Dev Kit</span>
  </it-input>

  <button type="button" class="btn btn-outline-primary my-2">3. Button BSI nativo</button>

  <it-accordion mode="multiple">
    <it-accordion-item>
      <span slot="heading">4. Accordion Dev Kit</span>
      <div slot="content">
        <a href="#">5. Link dentro accordion</a>
      </div>
    </it-accordion-item>
  </it-accordion>

  <it-button variant="primary" type="button">6. Button Dev Kit (fine sequenza)</it-button>

</div>

---

## F. Modal: focus trap e ARIA

Verifica che la modal intrappoli il focus e che gli attributi ARIA siano impostati correttamente.

Aprire la modal, premere Tab ripetutamente — il focus deve ciclare solo tra gli elementi interni. Premere Escape — la modal si chiude e il focus torna sul trigger.

### Modal con focus trap

Aprire la modal, premere Tab ripetutamente.
Il focus deve ciclare solo tra gli elementi interni della modale.
Premere Escape — la modal deve chiudersi e il focus tornare sul trigger.

<it-modal
  close-label="Chiudi finestra modale"
  modal-title="Test focus trap"
  modal-description="Verifica che Tab cicli solo tra gli elementi della modale"
>
  <it-button variant="primary" slot="trigger">Apri modal focus test</it-button>
  <span slot="header">Test focus trap</span>
  <span slot="description">Verifica che Tab cicli solo tra gli elementi della modale</span>
  <div slot="content">
    <it-input type="text" name="modal-input">
      <span slot="label">Campo nella modale</span>
    </it-input>
    <a href="#">Link nella modale</a>
  </div>
  <it-button slot="footer" variant="outline-primary">Annulla</it-button>
  <it-button slot="footer" variant="primary">Conferma</it-button>
</it-modal>

### Modal con form (form association dentro modal)

<it-modal close-label="Chiudi finestra modale">
  <it-button variant="primary" slot="trigger">Apri modal con form</it-button>
  <span slot="header">Form nella modale</span>
  <div slot="content">
    <it-radio-group name="modal-radio">
      <span slot="label">Seleziona un'opzione</span>
      <it-radio id="modal-r1" value="opzione1">
        <span slot="label">Opzione 1</span>
      </it-radio>
      <it-radio id="modal-r2" value="opzione2">
        <span slot="label">Opzione 2</span>
      </it-radio>
    </it-radio-group>
  </div>
  <it-button slot="footer" variant="primary">Conferma</it-button>
</it-modal>

---

## G. Gerarchia heading mista light DOM + shadow DOM

Verifica se i tool vedono la gerarchia heading completa quando heading nativi e heading nel shadow DOM sono mischiati.

**Nota sulla struttura di questa sezione**: contrariamente alle altre, qui usiamo deliberatamente heading di livello non convenzionale (h1 nel corpo della pagina) per costruire i casi di test sulla gerarchia. Gli h1 ripetuti e i salti h1→h3 sono parte del test stesso, non errori di impaginazione della pagina. I tool che calcolano la struttura heading dovrebbero segnalarli.


### Gerarchia corretta (🟢 controllo)

<h2>Sezione con heading nativo h2</h2>

<it-card>
  <a slot="title" href="#">Card con h3 nel shadow DOM — gerarchia corretta</a>
  <span slot="text">Questa card genera un h3, che segue l'h2 nativo.</span>
</it-card>

# Gerarchia con salto h1 > h3 (🔴 errore intenzionale)
(test)

<it-card>
  <a slot="title" href="#">Card con h3 subito dopo h1 — salta h2</a>
  <span slot="text">Questa card genera un h3 direttamente dopo l'h1 della pagina, saltando h2.</span>
</it-card>

# Heading nativo dopo heading shadow DOM
(test)

<it-callout variant="" heading-level="h2">
  <it-icon slot="icon" size="md" name="it-info-circle"></it-icon>
  <span slot="title">Callout con h2 nel shadow DOM</span>
  <p>Il callout genera un h2. Il prossimo heading nativo è un h3 — la gerarchia è corretta?</p>
</it-callout>

<h3>Heading h3 nativo dopo callout h2 shadow DOM</h3>

<p>I tool vedono la sequenza h2 (shadow DOM) → h3 (nativo) come gerarchia valida?</p>