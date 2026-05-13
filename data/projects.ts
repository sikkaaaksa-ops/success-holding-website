import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'al-waha-residential-towers',
    name: {
      en: 'Al Waha Residential Towers',
      ar: 'أبراج الواحة السكنية',
    },
    sector: 'real-estate',
    year: 2023,
    description: {
      en: 'A landmark twin-tower residential complex in northern Riyadh featuring 420 luxury apartments, rooftop amenities, and ground-level retail, designed with sustainability at its core.',
      ar: 'مجمع سكني بارز مكون من برجين في شمال الرياض يضم 420 شقة فاخرة ومرافق على السطح ومتاجر في الطابق الأرضي، مصمم مع التركيز على الاستدامة.',
    },
    imageUrl: '/images/projects/al-waha-towers.jpg',
    status: 'completed',
  },
  {
    id: 'proj-2',
    slug: 'smart-city-platform',
    name: {
      en: 'Neom Smart City Platform',
      ar: 'منصة المدينة الذكية نيوم',
    },
    sector: 'technology',
    year: 2025,
    description: {
      en: 'Development of an integrated IoT and AI platform for smart urban management, covering traffic optimization, energy monitoring, and citizen services for a new district.',
      ar: 'تطوير منصة متكاملة لإنترنت الأشياء والذكاء الاصطناعي لإدارة المدن الذكية، تشمل تحسين حركة المرور ومراقبة الطاقة وخدمات المواطنين لحي جديد.',
    },
    imageUrl: '/images/projects/smart-city.jpg',
    status: 'ongoing',
  },
  {
    id: 'proj-3',
    slug: 'king-abdulaziz-road-expansion',
    name: {
      en: 'King Abdulaziz Road Expansion',
      ar: 'توسعة طريق الملك عبدالعزيز',
    },
    sector: 'contracting',
    year: 2022,
    description: {
      en: 'A major 45km road expansion and infrastructure upgrade project in Jeddah, including bridge construction, drainage systems, and smart traffic signals.',
      ar: 'مشروع توسعة طريق رئيسي بطول 45 كم وتحديث البنية التحتية في جدة، يشمل بناء الجسور وأنظمة الصرف وإشارات المرور الذكية.',
    },
    imageUrl: '/images/projects/road-expansion.jpg',
    status: 'completed',
  },
  {
    id: 'proj-4',
    slug: 'the-pearl-resort',
    name: {
      en: 'The Pearl Resort & Spa',
      ar: 'منتجع وسبا اللؤلؤة',
    },
    sector: 'hospitality',
    year: 2026,
    description: {
      en: 'An ultra-luxury beachfront resort on the Red Sea coast with 200 rooms, private villas, an underwater restaurant, and a championship golf course.',
      ar: 'منتجع فائق الفخامة على ساحل البحر الأحمر يضم 200 غرفة وفيلات خاصة ومطعمًا تحت الماء وملعب غولف بمواصفات البطولات.',
    },
    imageUrl: '/images/projects/pearl-resort.jpg',
    status: 'upcoming',
  },
  {
    id: 'proj-5',
    slug: 'riyadh-logistics-hub',
    name: {
      en: 'Riyadh Central Logistics Hub',
      ar: 'مركز الرياض اللوجستي المركزي',
    },
    sector: 'logistics',
    year: 2024,
    description: {
      en: 'A 120,000 sqm state-of-the-art logistics and distribution center south of Riyadh, equipped with automated sorting, cold storage, and direct rail access.',
      ar: 'مركز لوجستي وتوزيع متطور بمساحة 120,000 متر مربع جنوب الرياض، مجهز بالفرز الآلي والتخزين البارد ووصول مباشر للسكك الحديدية.',
    },
    imageUrl: '/images/projects/logistics-hub.jpg',
    status: 'ongoing',
  },
  {
    id: 'proj-6',
    slug: 'industrial-materials-complex',
    name: {
      en: 'Jubail Industrial Materials Complex',
      ar: 'مجمع الجبيل للمواد الصناعية',
    },
    sector: 'trading',
    year: 2021,
    description: {
      en: 'A specialized import and distribution facility in the Jubail industrial zone handling construction materials, steel, and petrochemical derivatives for the Eastern Province.',
      ar: 'منشأة متخصصة للاستيراد والتوزيع في منطقة الجبيل الصناعية تتعامل مع مواد البناء والصلب ومشتقات البتروكيماويات للمنطقة الشرقية.',
    },
    imageUrl: '/images/projects/jubail-complex.jpg',
    status: 'completed',
  },
]
