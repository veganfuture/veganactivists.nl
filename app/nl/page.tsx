import { Landing } from "../_shared/Landing";

export default function PageNL() {
  return (
    <Landing
      current="nl"
      dict={{
        siteTitle: "VeganActivists.nl",
        siteTag: "Samen voor dierenrecht • Nederland",
        heroTitleA: "Sluit je aan bij de",
        heroTitleB: "Signal-groep",
        heroBody: "We coördineren acties, delen materiaal en helpen elkaar om diervriendelijke verandering te versnellen. Toegang gaat via Signal voor privacy en veiligheid.",
        joinCta: "Join de Signal-groep",
        copyLabel: "Link kopiëren",
        copySuccess: "Link gekopieerd!",
        bullets1: "End‑to‑end versleuteld via Signal",
        bullets2: "Alleen voor vreedzame, legale acties",
        bullets3: "Iedereen die zich inzet voor dierenrechten is welkom",
        qrTitle: "Scan de QR-code",
        qrBody: "Open je camera of Signal en scan om direct te joinen.",
        whyTitle: "Waarom Signal?",
        whyBody: "Signal is open‑source, onafhankelijk en end‑to‑end versleuteld. Je telefoonnummer is onzichtbaar voor leden.",
        admissionTitle: "Toelating",
        admissionBody: "Nieuwe leden worden kort welkom geheten. Houd het respectvol en on-topic.",
        safetyTitle: "Veiligheid",
        safetyBody: "Deel geen privégegevens zonder toestemming. Bij twijfel: vraag een mod.",
        footer: "Vrij te gebruiken. Geen rechten voorbehouden. Met liefde van Vegan Future 💚",
      }}
    />
  );
}
