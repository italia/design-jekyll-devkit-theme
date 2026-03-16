---
layout: page
title: "Componenti"
nav_title: "Componenti"
nav_order: 2
---

Esempi di web component Dev Kit Italia usati in una pagina Jekyll.

## Breadcrumbs

<it-breadcrumbs it-aria-label="Percorso di navigazione">
  <it-breadcrumb-item><a href="/">Home</a></it-breadcrumb-item>
  <it-breadcrumb-item><a href="/componenti/">Componenti</a></it-breadcrumb-item>
  <it-breadcrumb-item>Pagina corrente</it-breadcrumb-item>
</it-breadcrumbs>

## Chip 

<div class="d-flex flex-wrap mb-5" style="gap: .5rem">
  <it-chip label="Design" size="sm" variant="primary"></it-chip>
  <it-chip label="Sviluppo" size="sm" variant="secondary"></it-chip>
  <it-chip label="Accessibilità" size="sm" variant="success"></it-chip>
  <it-chip label="Alpha" size="sm" variant="warning"></it-chip>
</div>

## Avatar

<div class="d-flex flex-wrap mb-5" style="gap: .5rem">
  <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri" size="sm"></it-avatar>
  <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Marco Bianchi" size="md"></it-avatar>
  <it-avatar type="text" text="Mario Rossi" avatar-title="Mario Rossi" variant="primary" size="lg"></it-avatar>
  <it-avatar type="icon" icon="it-user" size="xl" avatar-title="Utente"></it-avatar>
</div>

## Video - terze parti con overlay

<it-video
  src="https://youtu.be/_0j7ZQ67KtY"
  poster=""
  translations='{"it":{"Audio Player":"Lettore audio","Video Player":"Lettore video","Play":"Play","Pause":"Pausa","Replay":"Replay","Current Time":"Orario attuale","Duration":"Durata","Remaining Time":"Tempo rimanente","Stream Type":"Tipo di streaming","LIVE":"LIVE","Loaded":"Caricato","Progress":"Stato","Progress Bar":"Barra di avanzamento","progress bar timing: currentTime={1} duration={2}":"{1} di {2}","Fullscreen":"Schermo intero","Exit Fullscreen":"Chiudi Schermo intero","Mute":"Disattiva l’audio","Unmute":"Attiva l’audio","Playback Rate":"Velocità di riproduzione","Subtitles":"Sottotitoli","subtitles off":"Senza sottotitoli","Captions":"Sottotitoli non udenti","captions off":"Senza sottotitoli non udenti","Chapters":"Capitolo","Descriptions":"Descrizioni","descriptions off":"Descrizioni disattivate","Audio Track":"Traccia audio","Volume Level":"Livello del volume","You aborted the media playback":"La riproduzione del filmato è stata interrotta.","A network error caused the media download to fail part-way.":"Il download del filmato è stato interrotto a causa di un problema rete.","The media could not be loaded, either because the server or network failed or because the format is not supported.":"Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.","No compatible source was found for this media.":"Non ci sono fonti compatibili per questo filmato.","The media is encrypted and we do not have the keys to decrypt it.":"Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.","Play Video":"Riproduci il video","Close":"Chiudi","Close Modal Dialog":"Chiudi la finestra di dialogo","Modal Window":"Finestra di dialogo","This is a modal window":"Questa è una finestra di dialogo","This modal can be closed by pressing the Escape key or activating the close button.":"Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.",", opens captions settings dialog":", aprire i parametri della trascrizione dei sottotitoli",", opens subtitles settings dialog":", aprire i parametri dei sottotitoli",", opens descriptions settings dialog":", aprire i parametri delle descrizioni",", selected":", selezionato","captions settings":"Parametri sottotitoli non udenti","subtitles settings":"Parametri sottotitoli","descriptions settings":"Parametri descrizioni","Text":"Testo","White":"Bianco","Black":"Nero","Red":"Rosso","Green":"Verde","Blue":"Blu","Yellow":"Giallo","Magenta":"Magenta","Cyan":"Ciano","Background":"Sfondo","Window":"Finestra","Transparent":"Trasparente","Semi-Transparent":"Semi-Trasparente","Opaque":"Opaco","Font Size":"Dimensione dei caratteri","Text Edge Style":"Stile dei bordi del testo","None":"Nessuno","Uniform":"Uniforme","Drop shadow":"Ombra","Font Family":"Carattere","Proportional Sans-Serif":"Sans-Serif proporzionale","Monospace Sans-Serif":"Sans-Serif monospaziato","Proportional Serif":"Serif proporzionale","Monospace Serif":"Serif monospaziato","Small Caps":"Maiuscoletto","Reset":"Reinizializza","restore all settings to the default values":"Ripristina i valori predefiniti per tutti i parametri","Done":"Fatto","Caption Settings Dialog":"Finestra di dialogo dei parametri della trascrizione dei sottotitoli","Beginning of dialog window. Escape will cancel and close the window.":"Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.","End of dialog window.":"Fine della finestra di dialogo.","{1} is loading.":"{1} in fase di caricamento.","Exit Picture-in-Picture":"Esci dalla modalità Picture-in-Picture","Picture-in-Picture":"Picture-in-Picture","Color":"Colore","Opacity":"Opacità","Text Background":"Sfondo testo","Caption Area Background":"Sfondo area sottotitoli","Skip forward {1} seconds":"Avanti {1} secondi","Skip backward {1} seconds":"Indietro {1} secondi"}}'
  lang="it"
  track="[]"
></it-video>

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
