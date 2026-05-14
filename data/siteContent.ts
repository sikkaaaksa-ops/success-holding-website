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
  phone: "+966500000000",
  email: "info@successgroup.com.sa",
  addressEn: "Riyadh, Saudi Arabia",
  addressAr: "الرياض، المملكة العربية السعودية",
  whatsapp: "966500000000",
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
  { id: "stat-1", value: 15, suffix: "+", labelEn: "Years of Experience", labelAr: "سنة خبرة" },
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
    { key: "structure", href: "/structure" },
    { key: "projects", href: "/projects" },
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
    { key: "structure", href: "/structure" },
    { key: "projects", href: "/projects" },
    { key: "partners", href: "/partners" },
    { key: "news", href: "/news" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ],
};
