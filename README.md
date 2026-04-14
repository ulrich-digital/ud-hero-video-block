# UD Block: Hero Video

Ein Hero-Block mit Hintergrundvideo, Posterbild und Overlay-Text für den Einsatz im Header- oder Einstiegsbereich.

## Screenshots

### Frontend
![Hero Video Block im Editor](./assets/ud-hero-video-block-frontend.png)
Screenshot der fertigen Ausgabe im Frontend mit Video, Posterbild und Text-Overlay.

### Editor
![Hero Video Block im Editor](./assets/ud-hero-video-block-editor.png)
Screenshot des Blocks im Editor. Eyebrow und Titel werden direkt im Block bearbeitet.


## Kontext

Der Block ist für den Einsatz im Block-Editor bzw. im FSE-Kontext gedacht und dient als visueller Einstieg einer Seite, Startseite oder eines Templates.

## Logik

Die Ausgabe erfolgt serverseitig über `render.php`.

Zentrale Logik:

- Videoquelle über `videoId` oder `videoUrl`
- Posterbild über `posterId` oder `posterUrl`
- Optionales Looping des Videos
- Optional kann das Video auf mobilen Geräten vollständig deaktiviert werden
  → In diesem Fall wird nur das Posterbild ausgegeben
- Ausgabe von Eyebrow und Headline nur wenn befüllt

## Editor

Im Editor können folgende Inhalte bzw. Optionen gepflegt werden:

- Eyebrow
- Headline
- Video
- Posterbild
- Loop aktivieren
- Video auf mobilen Geräten anzeigen

Die Medien lassen sich sowohl über die Mediathek als auch über URL-Felder steuern.

## Frontend

Im Frontend wird ein Hero-Bereich mit Video, Posterbild, Overlay und Textbox ausgegeben.

Das Video wird ohne Controls ausgegeben und ist auf eine ruhige Hero-Darstellung ausgelegt.

## Hinweise

Der Block verwendet serverseitiges Rendering über `render_callback`.
Zusätzliche Frontend-Logik ist aktuell nicht erforderlich.
Die visuelle Ausgestaltung erfolgt primär über CSS.

## Autor

[ulrich.digital gmbh](https://ulrich.digital)

## Lizenz

GPL v2 or later
[https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)