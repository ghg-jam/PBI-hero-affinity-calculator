# 💖 Calcolatore del Livello di Affinità dell'Eroe

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | **Italiano** | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Un calcolatore web gratuito per **Pixel Brave Idle**: inserisci i regali che possiedi, scegli le ricompense di affinità che vuoi ottenere e scopri quanti regali di ogni tipo servono al minimo.

Funziona interamente nel browser. Nessun account, nessun server, nulla viene caricato.

**Usa online:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Strumento non ufficiale realizzato da fan. Non affiliato né approvato dallo sviluppatore del gioco.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Funzionalità

- Contatore di regali per i tre livelli (verde / viola / oro) con preferiti.
- Obiettivi di ricompensa: elenchi di traguardi integrati, obiettivi personalizzati e obiettivo finale.
- Più combo (piani), ciascuno con la propria regola di equilibrio: quale colore ne ha di più e una differenza mantenuta **entro un intervallo** (con preset rapidi come 0–25 o 0–200), la **più grande** possibile o la **più piccola** possibile.
- Pianificazione dall’affinità attuale: stima i regali già usati e calcola solo i traguardi rimanenti.
- Risultati: centri esatti, eccesso e mancanza per traguardo, regali necessari per fase (con le icone dei regali usati), grafico della differenza e barre di avanzamento. I risultati cambiano solo quando premi **Calcola tutti i combo** e una barra avvisa quando sono obsoleti.
- Opzioni avanzate (nascoste di default): da dove parte il limite di differenza, limite di «punti massimi oltre l’obiettivo», regali non preferiti, limite totale per colore, limiti per regalo (azzerabili con un tocco) e ordine di spesa personalizzato.
- Compilazione con IA: copia il prompt, invialo con uno screenshot a una chat IA **nuova** e incolla la risposta JSON (o importala da file). L’IA può leggere male i numeri: confronta sempre con il gioco. Inoltre: salvataggio/caricamento dati, 18 lingue, modalità chiara/scura e 11 temi colore.

## Come si usa

1. **Regali**: inserisci quanti ne hai di ciascun tipo e segna il preferito con la stella.
2. **Obiettivi**: inserisci l’affinità attuale (facoltativo) e spunta gli elenchi di ricompense.
3. **Combo**: mantieni i valori predefiniti o scegli la regola di differenza (intervallo, massima o minima) e apri *Impostazioni avanzate*.
4. **Risultati**: premi **Calcola tutti i combo** e leggi quanti regali di ogni tipo usare.

## Eseguire in locale

- Scarica `download/combo_calculator_single.html` e fai doppio clic.
- Oppure scarica l’intero repository, tieni le cartelle `css`, `js` e `lang` accanto a `index.html` e apri `index.html`.

## Pubblicare su GitHub Pages

1. Carica **tutto il contenuto** della cartella nella radice del repository (mantenendo le cartelle).
2. In **Settings → Pages**, scegli il branch main e la cartella radice.
3. Dopo un aggiornamento, ricarica forzatamente (Ctrl/Cmd + Maiusc + R).

## Per gli sviluppatori

Struttura del progetto, contributi alle traduzioni e registro delle modifiche sono nel [README in inglese](../../README.md).

## Licenza

Licenza MIT (solo il codice).
