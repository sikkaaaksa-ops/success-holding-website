/**
 * CMS-READY CONTENT LAYER
 * All editable content lives here — NOT inside components.
 * TO CONNECT SANITY CMS: Replace exported objects with GROQ queries
 * TO CONNECT SUPABASE: Replace exported objects with supabase queries
 * Components remain untouched during CMS migration.
 */

export const siteConfig = {
  brandName: "SUCCESS",
  taglineEn: "Building Tomorrow's Saudi Economy",
  taglineAr: "نبني اقتصاد الغد في المملكة",
  phone: "+966555433164",
  email: "info@successes.info",
  whatsapp: "966555433164",
  workingHoursEn: "Sunday – Thursday, 8:00 AM – 9:00 PM",
  workingHoursAr: "الأحد – الخميس، 8:00 صباحًا – 9:00 مساءً",
  addresses: [
    {
      addressEn: "Saudi Arabia – Jeddah – Al-Naeem District – Prince Sultan Street",
      addressAr: "السعودية – جدة – حي النعيم – شارع الأمير سلطان",
      mapUrl: "https://share.google/LIA4Yg0KnaD32STKn",
    },
    {
      addressEn: "Saudi Arabia – Jeddah – Al-Rawda District – Saud Al-Faisal Street",
      addressAr: "السعودية – جدة – حي الروضة – شارع سعود الفيصل",
      mapUrl: "https://maps.app.goo.gl/baMud45wsjooFFGq5",
    },
  ],
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "#",
    youtube: "#",
  },
  cr: "",
};

export const heroContent = {
  labelEn: "SUCCESS GROUP",
  labelAr: "مجموعة نجاح",
  taglineKey: "hero.tagline",
  subtextKey: "hero.subtext",
  ctaExploreKey: "hero.ctaExplore",
  ctaAboutKey: "hero.ctaAbout",
};

export const statsContent = [
  { id: "stat-1", value: 25, suffix: "+", labelEn: "Years of Experience", labelAr: "سنة خبرة" },
  { id: "stat-2", value: 25, suffix: "+", labelEn: "Strategic Partners", labelAr: "شريك استراتيجي" },
  { id: "stat-3", value: 11, labelEn: "Business Sectors", labelAr: "قطاعات أعمال" },
  { id: "stat-4", value: 300, suffix: "+", labelEn: "Outstanding Employees", labelAr: "موظف مميز" },
];

export const aboutContent = {
  labelKey: "aboutSnippet.label",
  titleKey: "aboutSnippet.title",
  descriptionKey: "aboutSnippet.description",
  ctaKey: "aboutSnippet.cta",
};

export const navContent = {
  items: [
    { key: "home", href: "" },
    { key: "about", href: "/about" },
    { key: "sectors", href: "/sectors" },
    { key: "companies", href: "/subsidiaries" },
    { key: "partners", href: "/partners" },
    { key: "news", href: "/news" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ],
};

export const footerContent = {
  navItems: [
    { key: "home", href: "" },
    { key: "about", href: "/about" },
    { key: "sectors", href: "/sectors" },
    { key: "companies", href: "/companies" },
    { key: "partners", href: "/partners" },
    { key: "news", href: "/news" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ],
};
