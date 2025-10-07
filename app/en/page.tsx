import { Landing } from "../_shared/Landing";
export default function PageEN() {
  return (
    <Landing
      current="en"
      dict={{
        siteTitle: "VeganActivists.nl",
        siteTag: "Together for animal rights • Netherlands",
        heroTitleA: "Join the",
        heroTitleB: "Signal group",
        heroBody: "We coordinate actions, share materials, and support each other to accelerate compassionate change. Access is via Signal for privacy and safety.",
        joinCta: "Join the Signal group",
        copyLabel: "Copy link",
        copySuccess: "Link copied!",
        bullets1: "End-to-end encrypted via Signal",
        bullets2: "Peaceful, legal actions only",
        bullets3: "Everyone committed to animal rights is welcome.",
        qrTitle: "Scan the QR code",
        qrBody: "Open your camera or Signal and scan to join instantly.",
        whyTitle: "Why Signal?",
        whyBody: "Signal is open-source, independent and end-to-end encrypted. Your phone number is invisible to members.",
        admissionTitle: "Admission",
        admissionBody: "New members get a short welcome. Keep it respectful and on-topic.",
        safetyTitle: "Safety",
        safetyBody: "Don’t share private info without consent. When in doubt, ask a mod.",
        footer: "Free to use. No rights reserved. With love from Vegan Future 💚"
      }}
    />
  );
}
