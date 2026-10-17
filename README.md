# Tiefgang — deutsches Daily-Game

Eine eigenständige Umsetzung des Genres „Daily Open-Answer / Rare-Answer Trivia“ mit eigenem Namen, eigenem visuellen Stil und eigenem deutschsprachigem Antwortkatalog.

## Spielumfang

- 7 tägliche, für alle Besucher desselben UTC-Tages identische Fragen
- 25 Sekunden pro Frage
- Freitextantworten, Synonyme/Aliase, Akzente und Zeichensetzung werden normalisiert
- 0 bis 100 redaktionell zugeordnete Punkte pro gültiger Antwort; maximale Runde: 700 Punkte / 7.000 m
- Frage überspringen; bei unbekannter Antwort weiter probieren, solange die Zeit läuft
- Ergebnisliste, Ergebnis teilen/kopieren, Tagesabschluss
- Lokale Statistik, Streak und Wiederaufnahme einer laufenden Runde
- Responsives Layout und animierte Tiefsee-Illustration ohne externe Bilddateien
- Optionale öffentliche Tagesrangliste über Supabase

## Lokal starten

Voraussetzung: Node.js 20 oder neuer.

```bash
npm install
npm run dev
```

Dann die lokale URL öffnen, die Vite anzeigt.

## Produktions-Build

```bash
npm run build
npm run preview
```

Der optimierte statische Build liegt in `dist/`.

## Öffentlich veröffentlichen (Vercel)

1. Diesen Ordner in ein neues GitHub-Repository laden.
2. Auf https://vercel.com einloggen und „Add New Project“ wählen.
3. Das Repository importieren. Vercel erkennt Vite automatisch.
4. Build Command: `npm run build`; Output Directory: `dist`.
5. Deploy drücken. Anschließend kann eine eigene Domain unter Project → Settings → Domains verbunden werden.

Ohne Supabase ist das Spiel öffentlich spielbar, aber Spielergebnisse und Streaks werden nur im Browser des jeweiligen Spielers gespeichert. Sie synchronisieren sich nicht zwischen Geräten.

## Öffentliche Rangliste aktivieren (optional)

1. Auf https://supabase.com ein Projekt anlegen.
2. Im Supabase SQL Editor den kompletten Inhalt von `supabase/schema.sql` ausführen.
3. Die Project URL und den `anon`/publishable key in Vercel unter Project → Settings → Environment Variables setzen:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Neu deployen. Danach erscheinen Tagesrangliste und Eintragungsfunktion.

Wichtig: Der öffentliche `anon` key darf clientseitig verwendet werden; niemals den Supabase `service_role` key in diese App oder in ein öffentliches Repository schreiben. Für eine ernsthafte Rangliste sollten zusätzlich Rate-Limits, Anti-Spam und serverseitige Prüfung ergänzt werden.

## Fragen und Seltenheitswertung pflegen

Alle Fragen und Antwortpunkte befinden sich in `src/questions.ts`. Jede Frage hat `category`, `prompt`, `hint` und `accepted`. Jede akzeptierte Antwort braucht `text` und `points` (0–100); optionale Schreibvarianten können unter `aliases` eingetragen werden.

Die Punkte in dieser Starterversion sind redaktionelle Seltenheitswerte und keine live aus Antworten anderer Spieler berechneten Häufigkeiten. Ergänze fehlende valide Antworten in `src/questions.ts`, damit das Spiel mit der Zeit belastbarer wird.

## Hinweise zum Daily-Reset

Die Auswahl rotiert deterministisch nach UTC-Kalendertag. Damit erhalten alle Besucher am selben UTC-Datum dieselben sieben Fragen. Der Browser speichert den Tagesabschluss lokal; die öffentliche Rangliste ist optional und wird separat in Supabase gespeichert. Bei Browserwechsel/Gerätewechsel werden lokale Streaks nicht übertragen.

## Eigene Marke und Inhalte

„Tiefgang“ und die deutsche Fragenbank sind als eigenständige Starterversion gedacht. Das Projekt kopiert keine fremden Quelltexte, Bilddateien oder Marken-Assets. Vor einer kommerziellen Veröffentlichung sollte der Name markenrechtlich geprüft und der Fragenkatalog redaktionell auf Korrektheit, ausreichende Antwortabdeckung und Herkunft geprüft werden.
