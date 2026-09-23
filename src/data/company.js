// Dati societari approvati — unica fonte per tutte le pagine.
// Non aggiungere campi non esplicitamente approvati (vedi istruzioni di progetto).
export const company = {
  legalName: "Spotex S.r.l.",
  payoff: "< make IT easier and simple />",
  address: {
    street: "Via dei Gelsi 3",
    postalCode: "22020",
    city: "Faloppio",
    province: "CO",
    country: "Italia",
  },
  pec: "spotexsrl@pec.it",
  vatTaxId: "04071030136",
  rea: "CO-417613",
  mainActivity: "Sviluppo software e programmazione informatica",
  secondaryActivity: "Campagne di marketing e servizi pubblicitari",
  site: "https://spotexsrl.com",
};

export const addressFull = `${company.address.street}, ${company.address.postalCode} ${company.address.city} (${company.address.province}), ${company.address.country}`;

export const pecMailto = `mailto:${company.pec}`;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.legalName}, ${addressFull}`
)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi/" },
  { label: "Azienda", href: "/azienda/" },
  { label: "Contatti", href: "/contatti/" },
];
