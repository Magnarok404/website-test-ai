# Bytes & Beyond — website demo

Een responsive, statische demo op basis van de aangeleverde mock-up. Geen buildstap of betaalde afhankelijkheden nodig.

## Lokaal bekijken

Open `dist/index.html` rechtstreeks in je browser, of start in deze map:

```bash
python3 -m http.server 8000 --directory dist
```

Ga daarna naar `http://localhost:8000`.

## Publiceren via GitHub Pages

1. Maak een nieuwe lege GitHub-repository.
2. Kopieer alle bestanden uit deze map naar de repository.
3. Commit en push naar de branch `main`.
4. Open op GitHub **Settings → Pages**.
5. Kies onder **Build and deployment** voor **GitHub Actions**.
6. De meegeleverde workflow publiceert de inhoud van `dist` automatisch.

## Wat je later moet aanpassen

- Vervang het demo-telefoonnummer en e-mailadres in `dist/index.html`.
- Koppel het contactformulier aan Webflow, Formspree, Basin of een eigen endpoint.
- Vervang fictieve cases en resultaten door echte referenties.
- De gegenereerde beelden staan in `dist/assets` en zijn geoptimaliseerd als WebP.

## Structuur

```text
dist/
├── assets/
├── index.html
├── script.js
└── styles.css
.github/workflows/pages.yml
```
