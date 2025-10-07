export type Locale = "nl" | "en";

export const dictionaries: Record<Locale, Record<string, string>> = {
  nl: {
    siteTitle: "VeganActivists.nl",
    siteTag: "Samen voor dierenrecht • Nederland",
    heroTitleA: "Sluit je aan bij de",
    heroTitleB: "Signal-groep",
    heroBody:
      "We coördineren acties, delen materiaal en helpen elkaar om diervriendelijke verandering te versnellen. Toegang gaat via Signal voor privacy en veiligheid.",
    joinCta: "Join de Signal-groep",
    copyLabel: "Link kopiëren",
    copySuccess: "Link gekopieerd!",
    bullets1: "End‑to‑end versleuteld via Signal",
    bullets2: "Alleen voor vreedzame, legale acties",
    bullets3: "Vrijwilligers uit heel NL welkom",
    qrTitle: "Scan de QR-code",
    qrBody: "Open je camera of Signal en scan om direct te joinen.",
    qrNote:
      "Zorg dat het bestand bestaat op /public/signal-qr.png. Als het niet laadt, ververs na toevoegen.",
    openInSignal: "Open in Signal",
    downloadQr: "QR downloaden",
    whyTitle: "Waarom Signal?",
    whyBody:
      "Signal is open‑source, onafhankelijk en end‑to‑end versleuteld. Je telefoonnummer is zichtbaar voor leden; deel alleen wat je wilt.",
    admissionTitle: "Toelating",
    admissionBody:
      "Nieuwe leden worden kort welkom geheten. Houd het respectvol en on-topic.",
    safetyTitle: "Veiligheid",
    safetyBody:
      "Deel geen privégegevens zonder toestemming. Bij twijfel: vraag een mod.",
    copyright: "© {year} VeganActivists.nl",
    langHint: "English? Add ?lang=en",
  },
  en: {
    siteTitle: "VeganActivists.nl",
    siteTag: "Together for animal rights • Netherlands",
    heroTitleA: "Join the",
    heroTitleB: "Signal group",
    heroBody:
      "We coordinate actions, share materials, and support each other to accelerate compassionate change. Access is via Signal for privacy and safety.",
    joinCta: "Join the Signal group",
    copyLabel: "Copy link",
    copySuccess: "Link copied!",
    bullets1: "End-to-end encrypted via Signal",
    bullets2: "Peaceful, legal actions only",
    bullets3: "Volunteers from across NL welcome",
    qrTitle: "Scan the QR code",
    qrBody: "Open your camera or Signal and scan to join instantly.",
    qrNote:
      "Make sure the file exists at /public/signal-qr.png. If it doesn't load, refresh after adding it.",
    openInSignal: "Open in Signal",
    downloadQr: "Download QR",
    whyTitle: "Why Signal?",
    whyBody:
      "Signal is open-source, independent, and end-to-end encrypted. Your phone number is visible to members; share only what you’re comfortable with.",
    admissionTitle: "Admission",
    admissionBody:
      "New members get a short welcome. Keep it respectful and on-topic.",
    safetyTitle: "Safety",
    safetyBody:
      "Don’t share private info without consent. When in doubt, ask a mod.",
    copyright: "© {year} VeganActivists.nl",
    langHint: "Nederlands? Voeg ?lang=nl toe",
  },
};

// Resolve locale from search param ?lang=nl|en, then Accept-Language header, default to nl
export function resolveLocale(opts: { searchLang?: string | null; acceptLanguage?: string | null }): Locale {
  const param = opts.searchLang?.toLowerCase();
  if (param === "nl" || param === "en") return param;
  const header = opts.acceptLanguage?.toLowerCase() || "";
  if (header.startsWith("nl")) return "nl";
  if (header.startsWith("en")) return "en";
  return "nl";
}

export function t(locale: Locale) {
  return (key: keyof typeof dictionaries["nl"], vars: Record<string, string | number> = {}) => {
    const raw = dictionaries[locale][key as string] ?? key;
    return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), raw);
  };
}

