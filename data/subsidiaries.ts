import type { Subsidiary } from '@/types'

export const subsidiaries: Subsidiary[] = [
  {
    id: 'sub-1',
    slug: 'success-real-estate-development',
    name: {
      en: 'SUCCESS Real Estate Development',
      ar: 'نجاح للتطوير العقاري',
    },
    sector: 'real-estate',
    logoUrl: '/images/subsidiaries/success-real-estate.svg',
    description: {
      en: 'A leading real estate developer shaping the urban landscape of Saudi Arabia with world-class residential, commercial, and mixed-use developments aligned with Vision 2030.',
      ar: 'شركة رائدة في التطوير العقاري تُشكّل المشهد الحضري في المملكة العربية السعودية من خلال مشاريع سكنية وتجارية ومتعددة الاستخدامات تتوافق مع رؤية 2030.',
    },
    founded: 2003,
    website: 'https://success-realestate.sa',
    highlights: {
      en: [
        'Over 15 landmark projects delivered across Riyadh and Jeddah',
        'SAR 2.5B+ portfolio value under management',
        'Strategic partnerships with international design firms',
      ],
      ar: [
        'أكثر من 15 مشروعًا بارزًا تم تسليمه في الرياض وجدة',
        'قيمة محفظة تتجاوز 2.5 مليار ريال سعودي تحت الإدارة',
        'شراكات استراتيجية مع شركات تصميم دولية',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/real-estate-cover.jpg',
  },
  {
    id: 'sub-2',
    slug: 'success-digital-solutions',
    name: {
      en: 'SUCCESS Digital Solutions',
      ar: 'نجاح للحلول الرقمية',
    },
    sector: 'technology',
    logoUrl: '/images/subsidiaries/success-digital.svg',
    description: {
      en: 'Driving digital transformation across the Kingdom through enterprise software, AI-powered analytics, and smart city infrastructure solutions.',
      ar: 'قيادة التحول الرقمي في المملكة من خلال البرمجيات المؤسسية والتحليلات المدعومة بالذكاء الاصطناعي وحلول البنية التحتية للمدن الذكية.',
    },
    founded: 2015,
    website: 'https://success-digital.sa',
    highlights: {
      en: [
        'Deployed smart building systems across 40+ government facilities',
        'Certified SAP and Oracle implementation partner',
        'AI Center of Excellence established in 2022',
      ],
      ar: [
        'نشر أنظمة المباني الذكية في أكثر من 40 منشأة حكومية',
        'شريك معتمد لتنفيذ SAP و Oracle',
        'تأسيس مركز التميز للذكاء الاصطناعي في عام 2022',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/digital-cover.jpg',
  },
  {
    id: 'sub-3',
    slug: 'success-contracting',
    name: {
      en: 'SUCCESS Contracting & Construction',
      ar: 'نجاح للمقاولات والبناء',
    },
    sector: 'contracting',
    logoUrl: '/images/subsidiaries/success-contracting.svg',
    description: {
      en: 'Full-service construction and contracting firm specializing in mega-projects, infrastructure, and industrial facilities across the GCC region.',
      ar: 'شركة مقاولات وبناء متكاملة الخدمات متخصصة في المشاريع الكبرى والبنية التحتية والمنشآت الصناعية في منطقة الخليج.',
    },
    founded: 1999,
    website: 'https://success-contracting.sa',
    highlights: {
      en: [
        'Grade 1 classified contractor with the Saudi Ministry',
        'Delivered 50+ mega infrastructure projects',
        'Fleet of 500+ heavy equipment units',
      ],
      ar: [
        'مقاول مصنف من الدرجة الأولى لدى وزارة الشؤون البلدية',
        'تسليم أكثر من 50 مشروع بنية تحتية كبير',
        'أسطول يتجاوز 500 وحدة معدات ثقيلة',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/contracting-cover.jpg',
  },
  {
    id: 'sub-4',
    slug: 'success-hospitality-group',
    name: {
      en: 'SUCCESS Hospitality Group',
      ar: 'مجموعة نجاح للضيافة',
    },
    sector: 'hospitality',
    logoUrl: '/images/subsidiaries/success-hospitality.svg',
    description: {
      en: 'Premium hospitality management operating luxury hotels, resorts, and dining experiences that define Saudi Arabian elegance and world-class service.',
      ar: 'إدارة ضيافة متميزة تدير فنادق ومنتجعات فاخرة وتجارب طعام تعكس الأناقة السعودية والخدمة العالمية.',
    },
    founded: 2008,
    website: 'https://success-hospitality.sa',
    highlights: {
      en: [
        'Operating 8 luxury properties across the Kingdom',
        'Awarded Best Hospitality Group in Saudi Arabia 2024',
        'Over 2,000 rooms under management',
      ],
      ar: [
        'تشغيل 8 منشآت فاخرة في أنحاء المملكة',
        'حائزة على جائزة أفضل مجموعة ضيافة في السعودية 2024',
        'أكثر من 2000 غرفة تحت الإدارة',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/hospitality-cover.jpg',
  },
  {
    id: 'sub-5',
    slug: 'success-trading-international',
    name: {
      en: 'SUCCESS Trading International',
      ar: 'نجاح للتجارة الدولية',
    },
    sector: 'trading',
    logoUrl: '/images/subsidiaries/success-trading.svg',
    description: {
      en: 'Import-export and commodity trading firm managing supply chains for construction materials, industrial equipment, and consumer goods across MENA.',
      ar: 'شركة استيراد وتصدير وتجارة سلع تدير سلاسل التوريد لمواد البناء والمعدات الصناعية والسلع الاستهلاكية في منطقة الشرق الأوسط وشمال أفريقيا.',
    },
    founded: 2001,
    website: 'https://success-trading.sa',
    highlights: {
      en: [
        'Trade partnerships spanning 30+ countries',
        'Exclusive distribution rights for 12 international brands',
        'SAR 800M+ annual trade volume',
      ],
      ar: [
        'شراكات تجارية تمتد لأكثر من 30 دولة',
        'حقوق توزيع حصرية لـ 12 علامة تجارية دولية',
        'حجم تجارة سنوي يتجاوز 800 مليون ريال',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/trading-cover.jpg',
  },
  {
    id: 'sub-6',
    slug: 'success-logistics',
    name: {
      en: 'SUCCESS Logistics & Supply Chain',
      ar: 'نجاح للخدمات اللوجستية وسلاسل الإمداد',
    },
    sector: 'logistics',
    logoUrl: '/images/subsidiaries/success-logistics.svg',
    description: {
      en: 'End-to-end logistics solutions provider offering warehousing, freight forwarding, last-mile delivery, and cold chain management across the GCC.',
      ar: 'مزود حلول لوجستية متكاملة يقدم خدمات التخزين والشحن والتوصيل وإدارة سلسلة التبريد في منطقة الخليج.',
    },
    founded: 2010,
    website: 'https://success-logistics.sa',
    highlights: {
      en: [
        '12 strategically located warehouses totaling 250,000 sqm',
        'Fleet of 300+ transport vehicles including refrigerated units',
        'Real-time shipment tracking and IoT-enabled inventory',
      ],
      ar: [
        '12 مستودعًا في مواقع استراتيجية بمساحة إجمالية 250,000 متر مربع',
        'أسطول يتجاوز 300 مركبة نقل تشمل وحدات مبردة',
        'تتبع الشحنات في الوقت الفعلي ومخزون مدعوم بإنترنت الأشياء',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/logistics-cover.jpg',
  },
  {
    id: 'sub-7',
    slug: 'success-property-management',
    name: {
      en: 'SUCCESS Property Management',
      ar: 'نجاح لإدارة الأملاك',
    },
    sector: 'real-estate',
    logoUrl: '/images/subsidiaries/success-property.svg',
    description: {
      en: 'Comprehensive property and facility management services for commercial towers, residential compounds, and mixed-use developments.',
      ar: 'خدمات شاملة لإدارة الأملاك والمرافق للأبراج التجارية والمجمعات السكنية والمشاريع متعددة الاستخدامات.',
    },
    founded: 2006,
    website: 'https://success-property.sa',
    highlights: {
      en: [
        'Managing 3M+ sqm of prime commercial and residential space',
        '98% tenant satisfaction rate across the portfolio',
        'Integrated smart building management systems',
      ],
      ar: [
        'إدارة أكثر من 3 ملايين متر مربع من المساحات التجارية والسكنية المتميزة',
        'معدل رضا المستأجرين 98% في جميع العقارات',
        'أنظمة إدارة المباني الذكية المتكاملة',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/property-cover.jpg',
  },
  {
    id: 'sub-8',
    slug: 'success-cybersecurity',
    name: {
      en: 'SUCCESS Cybersecurity',
      ar: 'نجاح للأمن السيبراني',
    },
    sector: 'technology',
    logoUrl: '/images/subsidiaries/success-cyber.svg',
    description: {
      en: 'Specialized cybersecurity firm providing threat intelligence, security operations, compliance consulting, and managed detection and response services.',
      ar: 'شركة متخصصة في الأمن السيبراني تقدم خدمات استخبارات التهديدات وعمليات الأمن واستشارات الامتثال والكشف والاستجابة المُدارة.',
    },
    founded: 2019,
    website: 'https://success-cyber.sa',
    highlights: {
      en: [
        'NCA-certified cybersecurity provider',
        'Protecting 60+ enterprise clients across financial and government sectors',
        '24/7 Security Operations Center (SOC)',
      ],
      ar: [
        'مزود أمن سيبراني معتمد من الهيئة الوطنية للأمن السيبراني',
        'حماية أكثر من 60 عميلًا في القطاعين المالي والحكومي',
        'مركز عمليات أمنية يعمل على مدار الساعة',
      ],
    },
    coverImageUrl: '/images/subsidiaries/covers/cyber-cover.jpg',
  },
]
