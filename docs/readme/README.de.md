# 💖 Helden-Zuneigungslevel-Rechner

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | **Deutsch** | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Ein kostenloser Web-Rechner für **Pixel Brave Idle**: Gib deine Geschenke ein, wähle die gewünschten Zuneigungsbelohnungen und erfahre, wie viele Geschenke jeder Sorte mindestens nötig sind.

Läuft vollständig im Browser. Kein Konto, kein Server, es wird nichts hochgeladen.

**Online nutzen:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Inoffizielles Fan-Tool. Nicht mit dem Entwickler des Spiels verbunden und nicht von ihm unterstützt.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Funktionen

- Geschenkzähler für die drei Stufen (grün / lila / gold) mit Favoriten.
- Belohnungsziele: eingebaute Meilensteinlisten, eigene Ziele und ein Endziel.
- Mehrere Kombinationen (Pläne), jede mit eigener Ausgleichsregel: welche Farbe mehr hat und ein Abstand, der **innerhalb eines Bereichs** bleibt (mit Schnellwerten wie 0–25 oder 0–200), so **groß** wie möglich oder so **klein** wie möglich ist.
- Planung ab der aktuellen Zuneigung: schätzt bereits verbrauchte Geschenke und berechnet nur die verbleibenden Meilensteine.
- Ergebnisse: exakte Treffer, Überschuss und Fehlbetrag je Meilenstein, benötigte Geschenke je Stufe (mit Symbolen der verwendeten Geschenke), Abstandsdiagramm und Fortschrittsbalken. Ergebnisse ändern sich nur, wenn du **Alle Kombinationen berechnen** drückst; eine Leiste zeigt an, wenn sie veraltet sind.
- Erweiterte Optionen (standardmäßig ausgeblendet): Start des Abstandslimits, Limit „Max. Punkte über Ziel“, Nicht-Favoriten, Gesamtlimit je Farbe, Limits je Geschenk (mit „Alle Limits löschen“) und eine eigene Verbrauchsreihenfolge.
- KI-gestütztes Ausfüllen: Prompt kopieren, mit Screenshot an einen **neuen** KI-Chat senden und die JSON-Antwort einfügen (oder aus einer Datei importieren). KI kann Zahlen falsch lesen – immer mit dem Spiel vergleichen. Dazu: Daten speichern/laden, 18 Sprachen, heller/dunkler Modus und 11 Farbthemen.

## So geht’s

1. **Geschenke**: Anzahl je Geschenk eingeben, Favorit mit dem Stern markieren.
2. **Ziele**: aktuelle Zuneigung (optional) eingeben und Belohnungslisten ankreuzen.
3. **Kombinationen**: Standardwerte behalten oder die Abstandsregel (Bereich, größter oder kleinster Abstand) wählen und *Erweiterte Einstellungen* öffnen.
4. **Ergebnisse**: **Alle Kombinationen berechnen** drücken und ablesen, wie viele Geschenke jeder Sorte zu verwenden sind.

## Lokal ausführen

- `download/combo_calculator_single.html` herunterladen und doppelklicken.
- Oder das ganze Repository herunterladen, die Ordner `css`, `js` und `lang` neben `index.html` lassen und `index.html` öffnen.

## Auf GitHub Pages veröffentlichen

1. **Den gesamten Inhalt** des Ordners im Stammverzeichnis des Repositorys hochladen (Ordnerstruktur beibehalten).
2. Unter **Settings → Pages** den Branch main und den Stammordner wählen.
3. Nach einem Update hart neu laden (Strg/Cmd + Umschalt + R).

## Hinweise für Entwickler

Projektstruktur, Übersetzungsbeiträge und Änderungsprotokoll stehen in der [englischen README](../../README.md).

## Lizenz

MIT-Lizenz (nur Code).
