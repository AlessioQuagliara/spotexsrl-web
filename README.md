# Spotex S.r.l. — Sito istituzionale

Sito web istituzionale statico di **Spotex S.r.l.**, realizzato con [Astro](https://astro.build) e pensato per essere pubblicato su GitHub Pages con dominio personalizzato `spotexsrl.com`.

Il sito non ha backend, non ha database, non usa framework UI di terze parti e non carica font esterni: solo HTML, CSS e un minimo di JavaScript per il menu mobile.

> **Nota importante:** Spotex S.r.l. è in liquidazione. Questa informazione è riportata in un banner permanente su tutte le pagine del sito.

## Struttura del progetto

```
.
├── src/
│   ├── components/      # Header, Footer, banner, card riutilizzabili
│   ├── data/company.js  # Unica fonte dei dati societari approvati
│   ├── layouts/          # Layout base (SEO, JSON-LD, banner, header, footer)
│   ├── pages/             # Home, Servizi, Azienda, Contatti, Privacy, Cookie, 404
│   └── styles/global.css # Design tokens e stili globali
├── public/                # Asset statici serviti da root (favicon, CNAME, robots, sitemap, immagini)
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## Requisiti

- Node.js 18.17+ (consigliato 20 LTS, come usato in CI)
- npm

## Comandi

Installazione dipendenze:

```bash
npm install
```

Sviluppo locale (con hot reload), disponibile su `http://localhost:4321`:

```bash
npm run dev
```

Build di produzione (genera la cartella `dist/`):

```bash
npm run build
```

Anteprima locale della build di produzione:

```bash
npm run preview
```

## Pubblicazione su GitHub Pages

Il repository include un workflow GitHub Actions (`.github/workflows/deploy.yml`) che, ad ogni push su `main`:

1. installa le dipendenze con `npm ci`;
2. esegue `npm run build`;
3. pubblica il contenuto di `dist/` su GitHub Pages tramite le azioni ufficiali (`actions/upload-pages-artifact` + `actions/deploy-pages`).

### Impostazioni da configurare su GitHub

1. Vai su **Settings → Pages**.
2. In **Build and deployment → Source**, seleziona **GitHub Actions**.
3. In **Custom domain**, inserisci `spotexsrl.com` e salva.
4. Attendi la verifica del DNS (vedi sezione successiva).
5. Una volta verificato il dominio, seleziona **Enforce HTTPS**.

Il file `public/CNAME` (contenente `spotexsrl.com`) e il file `public/.nojekyll` sono già presenti nel progetto e vengono copiati automaticamente in `dist/` ad ogni build.

## Configurazione DNS per `spotexsrl.com`

Per il dominio principale (**root**) `spotexsrl.com`, configura **quattro record A** presso il provider DNS del dominio, puntati agli IP di GitHub Pages:

```
A    spotexsrl.com    185.199.108.153
A    spotexsrl.com    185.199.109.153
A    spotexsrl.com    185.199.110.153
A    spotexsrl.com    185.199.111.153
```

Per il sottodominio `www.spotexsrl.com`, configura un record **CNAME**:

```
CNAME    www    TUO_USERNAME.github.io
```

Sostituisci `TUO_USERNAME` con il nome utente o organizzazione GitHub che ospita il repository.

**Note:**

- Non usare `https://` (né alcun protocollo) nel valore dei record DNS: solo l'indirizzo IP o l'hostname.
- Dopo aver impostato i record, la propagazione DNS può richiedere da alcuni minuti fino a 24-48 ore.
- Su GitHub, in **Settings → Pages → Custom domain**, imposta `spotexsrl.com` e attendi che il controllo DNS risulti verificato.
- Una volta verificato il dominio, attiva **Enforce HTTPS** in **Settings → Pages**.
- Verifica che il sito sia raggiungibile correttamente sia su `https://spotexsrl.com` sia su `https://www.spotexsrl.com`.
- Non pubblicare mai segreti, token o credenziali nel repository.

## Contenuti e dati

Tutti i dati societari mostrati nel sito (ragione sociale, sede legale, PEC, P. IVA/C.F., REA) sono centralizzati in `src/data/company.js`, unica fonte da aggiornare in caso di variazioni. Il logo aziendale (file forniti in `assets/`) non viene mai ricreato, deformato o alterato: sono utilizzate solo le varianti raster originali, in `public/images/`.

Il banner relativo allo stato di liquidazione è implementato nel componente `src/components/LiquidationBanner.astro` ed è incluso in `src/layouts/BaseLayout.astro`, quindi presente automaticamente su ogni pagina.

## Contenuti legali

Le pagine `/privacy/` e `/cookie/` contengono un testo informativo preliminare e prudente, scritto sulla base della configurazione tecnica attuale del sito (nessun cookie non tecnico, nessun tracciamento di terze parti). Il testo va comunque **sottoposto a verifica legale** prima della pubblicazione definitiva, come indicato nelle pagine stesse.
