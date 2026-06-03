export type Lang = "en" | "ar";

const en = {
  nav: {
    services: "Services",
    restoration: "Restoration",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    blog: "Blog",
    bookNow: "Book Now",
    bookService: "Book a Service",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langSwitch: "عربي",
  },
  hero: {
    tagline: ["Get.", "Fix.", "Repair."],
    sub1: "Cairo's",
    sub2: " trusted piano specialists — rental, home visits, and full restoration for instruments that deserve to be heard.",
    bookService: "Book a Service",
    exploreServices: "Explore Services",
    scroll: "Scroll",
  },
  services: {
    label: "What We Do",
    heading: "Three pillars of piano care",
    items: [
      {
        subtitle: "Get",
        title: "Piano Rental",
        description:
          "Looking for a piano without the full commitment? We offer flexible rental plans for students, events, and professionals. From upright to grand — the right instrument for the right moment.",
        features: ["Flexible terms", "All piano types", "Delivery included", "Event & long-term plans"],
        cta: "Rent a Piano",
      },
      {
        subtitle: "Fix",
        title: "Home Visits",
        description:
          "We come to you. Our technicians visit your home across Cairo to tune, adjust, and maintain your piano in the comfort of your own space. No moving. No hassle.",
        features: ["On-site service", "All Cairo districts", "Tuning & regulation", "Expert technicians"],
        cta: "Book a Visit",
      },
      {
        subtitle: "Repair",
        title: "Restoration",
        description:
          "Every piano has a story. We specialize in bringing vintage and worn instruments back to their full voice — from structural repairs to complete rebuilds. Your piano deserves its best sound.",
        features: ["Full rebuilds", "Structural repair", "Key restoration", "Vintage specialists"],
        cta: "See Our Work",
      },
    ],
  },
  restoration: {
    label: "The Process",
    heading: "From silent to singing — our restoration process",
    yearsLabel: "Years of craft experience",
    steps: [
      {
        title: "Assessment",
        desc: "Every piano tells its own story of wear. We begin with a thorough inspection — strings, soundboard, action, hammers, and cabinet — to understand exactly what your instrument needs.",
      },
      {
        title: "Disassembly & Repair",
        desc: "Our craftsmen carefully disassemble the piano, replacing worn strings, repairing or rebuilding the action mechanism, and addressing any structural damage with precision.",
      },
      {
        title: "Voicing & Finishing",
        desc: "Once mechanically sound, we voice the piano — shaping the hammers and balancing tone across all 88 keys until the instrument sings exactly as it should.",
      },
      {
        title: "Final Tuning",
        desc: "A meticulous pitch raise and fine tuning ensures your restored piano is concert-ready. We don't leave until it sounds right.",
      },
    ],
    quote:
      "We've restored over 1,000 pianos across Cairo — from century-old uprights found in estates to beloved family grands passed down through generations.",
    quoteAuthor: "EMAD — PIANOMAN Team.",
  },
  stats: {
    labels: ["Pianos Restored", "Years Experience", "Client Satisfaction", "Assessment Turnaround"],
  },
  beforeAfter: {
    label: "Project Showcase",
    swipeHint: "Swipe to explore →",
    ctaText: "Have a piano that needs restoring? We'd love to hear its story.",
    ctaBtn: "Get a Quote",
    projects: [
      {
        heading: "Schimmel — LED Rebuild",
        description:
          "A Schimmel upright arrived without front lighting. Our team handcrafted a bespoke LED system from scratch and completed a full restoration.",
        steps: [
          { label: "Before", caption: "The Schimmel arrived without front lighting" },
          { label: "LED Craft", caption: "Handmade LED strip designed and fitted by our team" },
          { label: "After — Workshop", caption: "Schimmel with bespoke green lamps, fresh out of the workshop" },
          { label: "After — Final", caption: "Delivered and placed — ready to be played" },
        ],
      },
      {
        heading: "Krüger Berlin — Full Restoration",
        description:
          "A century-old Krüger Berlin upright arrived in pieces. Our team rebuilt it from the ground up — repairing the frame and refinishing the cabinet to a mirror-black lacquer.",
        steps: [
          { label: "Before — Detail", caption: "Legs detached and frame damaged on arrival" },
          { label: "Before — Full", caption: "The Krüger Berlin fully dismantled in our workshop" },
          { label: "Before — Side", caption: "Structural damage visible from all angles" },
          { label: "After — Front", caption: "Fully restored with fresh mirror-black lacquer" },
          { label: "After — Side", caption: "Side profile showing the flawless finish achieved" },
          { label: "Delivered", caption: "Krüger Berlin delivered to its new home, ready to play" },
        ],
      },
    ],
  },
  gallery: {
    label: "Our Work",
    heading: "Captured moments",
    sub: "From restoration workshops to home visits — a glimpse into our world of pianos.",
  },
  about: {
    label: "Who We Are",
    heading: "Cairo's piano people",
    paras: [
      "Pianoman was born from a simple belief: every piano deserves to be heard at its best, and every musician deserves access to the right instrument without barriers.",
      "Based in Cairo, we've built our reputation through years of hands-on craftsmanship — tuning, restoring, and renting pianos to students, performers, and families across Egypt.",
      "We don't just fix pianos. We understand them. Each instrument that passes through our hands gets the attention it deserves, whether it's a quick home visit or a full restoration project.",
    ],
    promise: "Get, Fix, Repair — that's our promise.",
  },
  testimonials: {
    label: "Testimonials",
    heading: "What our clients say",
    items: [
      {
        name: "Sara M.",
        role: "Piano Student, Zamalek",
        text: "Pianoman delivered a beautiful upright to my apartment and came back twice to tune it. Exceptional service — I never had to worry about a thing. The rental process was seamless.",
      },
      {
        name: "Ahmed K.",
        role: "Music Producer, Maadi",
        text: "I had a 1940s Bechstein that was completely silent. Pianoman's restoration team spent three weeks on it and the result was beyond anything I expected. Absolutely incredible craftsmanship.",
      },
      {
        name: "Layla N.",
        role: "Event Planner, Heliopolis",
        text: "We needed a grand piano for a corporate event on very short notice. Pianoman delivered, set it up, and even tuned it on site. Professional, punctual, and reasonably priced.",
      },
    ],
  },
  contact: {
    label: "Get in Touch",
    heading: "Let's talk about your piano",
    subtext:
      "Whether you're looking to rent, need a home visit, or have a piano that needs restoring — we'd love to hear from you. Reach out and we'll get back to you within 24 hours.",
    contactItems: {
      email: "Email",
      phone: "Phone",
      website: "Website",
      location: "Location",
    },
    form: {
      fullName: "Full Name *",
      phone: "Phone",
      email: "Email *",
      service: "Service",
      message: "Message *",
      namePlaceholder: "Your name",
      phonePlaceholder: "Your number",
      messagePlaceholder: "Tell us about your piano and what you need...",
      selectService: "Select a service...",
      services: ["Piano Rental", "Home Visit & Tuning", "Piano Restoration", "General Enquiry"],
      send: "Send Message",
      sending: "Sending...",
      whatsapp: "Chat on WhatsApp",
    },
    success: {
      heading: "Message Sent",
      text: "Thank you for reaching out. We'll get back to you within 24 hours.",
      again: "Send Another",
    },
    error: "Something went wrong. Please try WhatsApp below or email us directly.",
  },
  footer: {
    brand:
      "Cairo's trusted piano specialists. We rent, tune, visit your home, and restore instruments that deserve to be heard.",
    tagline: "Get, Fix, Repair.",
    servicesLabel: "Services",
    services: ["Piano Rental", "Home Visits", "Restoration", "Tuning & Repair"],
    contactLabel: "Contact",
    location: "Cairo, Egypt",
    copyright: (year: number) => `© ${year} Pianoman. All rights reserved.`,
    bottomLocation: "Cairo, Egypt",
  },
  blog: {
    sidebarCtaLabel: "Pianoman Egypt",
    sidebarSub: "Same-day response. All Cairo districts.",
    sidebarBookNow: "Book Now",
    sidebarWhatsapp: "WhatsApp",
    sidebarCtas: {
      Restoration: "Free assessment — we come to you",
      Tuning: "Book a home tuning visit",
      Events: "Get an event quote today",
      default: "Get a same-day rental quote",
    },
    backToSite: "Back to Pianoman",
    backToBlog: "All articles",
    readArticle: "Read article",
    moreIn: "More in",
    ctaHeading: "Ready to give your piano the care it deserves?",
    ctaSub: "We serve all Cairo districts. Same-day quotes on WhatsApp. Free assessment for restoration.",
    bookNow: "Book Now",
    whatsapp: "WhatsApp",
    readyHeading: "Ready to talk about your piano?",
  },
  authorCard: {
    title: "Co-Founder, Pianoman Egypt",
    bio: "Piano specialist in Cairo. I run Pianoman Egypt — rental, tuning, and restoration.",
  },
};

const ar: typeof en = {
  nav: {
    services: "الخدمات",
    restoration: "الترميم",
    gallery: "المعرض",
    about: "من نحن",
    contact: "تواصل معنا",
    blog: "المدونة",
    bookNow: "احجز الآن",
    bookService: "احجز خدمة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    langSwitch: "EN",
  },
  hero: {
    tagline: ["تأجير.", "دوزان.", "ترميم."],
    sub1: "القاهرة",
    sub2: " — متخصصو البيانو الموثوق بهم: تأجير وزيارات منزلية وترميم كامل للآلات التي تستحق أن تُسمع.",
    bookService: "احجز خدمة",
    exploreServices: "استكشف خدماتنا",
    scroll: "مرر",
  },
  services: {
    label: "ما نقدمه",
    heading: "ثلاثة محاور لرعاية البيانو",
    items: [
      {
        subtitle: "اقتني ",
        title: "تأجير البيانو",
        description:
          "هل تبحث عن بيانو بدون الالتزام الكامل؟ نقدم خطط تأجير مرنة للطلاب والفعاليات والمحترفين. من البيانو الحائطي إلى الجراند — الآلة المناسبة في اللحظة المناسبة.",
        features: ["شروط مرنة", "جميع أنواع البيانو", "توصيل مجاني", "خطط للفعاليات والمدى الطويل"],
        cta: "استأجر بيانو",
      },
      {
        subtitle: "صلح",
        title: "زيارات منزلية",
        description:
          "نحن نأتي إليك. يزور متخصصين منزلك في جميع أنحاء القاهرة لضبط البيانو وتعديله وصيانته في راحة منزلك. بدون نقل. بدون متاعب.",
        features: ["خدمة في الموقع", "جميع أحياء القاهرة", "ضبط وتنظيم", "تقنيون متخصصون"],
        cta: "احجز زيارة",
      },
      {
        subtitle: "عدل",
        title: "ترميم البيانو",
        description:
          "لكل بيانو قصة. نتخصص في إعادة البيانوهات القديمةإلى رونقها الكامل — من الإصلاحات الهيكلية إلى إعادة البناء الكاملة. البيانو يستحق أفضل صوت.",
        features: ["إعادة بناء كاملة", "إصلاح هيكلي", "ترميم المفاتيح", "متخصصون في الآلات القديمة"],
        cta: "شاهد أعمالنا",
      },
    ],
  },
  restoration: {
    label: "العملية",
    heading: "من الصمت إلى الغناء — عملية الترميم لدينا",
    yearsLabel: "سنة من الخبرة الحرفية",
    steps: [
      {
        title: "التقييم",
        desc: "كل بيانو يحكي قصته الخاصة من التآكل. نبدأ بفحص شامل — الأوتار ولوح الصوت وميكانيكية العمل والمطارق والهيكل — لفهم ما تحتاجه آلتك بالضبط.",
      },
      {
        title: "التفكيك والإصلاح",
        desc: "يقوم محترف بتفكيك البيانو بعناية، مع استبدال الأوتار البالية وإصلاح أو إعادة بناء آلية التشغيل ومعالجة أي أضرار هيكلية بدقة.",
      },
      {
        title: "الصوت والتشطيب",
        desc: "بمجرد أن يكون البيانو سليماً ميكانيكياً، نضبط صوته — نشكّل المطارق ونوازن النبرة عبر جميع المفاتيح الـ88 حتى يكون صوت الآلة كما ينبغي.",
      },
      {
        title: "الضبط النهائي",
        desc: "ضبط دقيق للطبقة الموسيقية يضمن أن يكون بيانو المُرمَّم جاهزاً للحفلات. لن نغادر حتى يصدر صوتاً مثالياً.",
      },
    ],
    quote:
      "رممنا أكثر من 1000 بيانو في أنحاء القاهرة — من البيانوهات القديمة اللي عمره قرن للبيانو العائلي اللي تناقلته الأجيال.",
    quoteAuthor: "عماد — فريق بيانو مان.",
  },
  stats: {
    labels: ["بيانو مُرمَّم", "سنة خبرة", "رضا العملاء", "وقت التقييم"],
  },
  beforeAfter: {
    label: "عرض المشاريع",
    swipeHint: "← مرر للاستكشاف",
    ctaText: "هل لديك بيانو يحتاج إلى ترميم؟ يسعدنا سماع قصته.",
    ctaBtn: "احصل على عرض سعر",
    projects: [
      {
        heading: "shimmel — إعادة بناء الغطاء الامامي",
        description:
          "وصل بيانو شيميل المستقيم بدون غطاء أمامي. قام فريقنا بتصميم وتركيب الغطاء LED مخصص من الصفر وأجرى ترميماً كاملاً.",
        steps: [
          { label: "قبل", caption: "وصل الشيميل بدون غطاء أمامي" },
          { label: "أثناء العمل", caption: " مصنوع يدوياً صممه وركّبه فريقنا" },
          { label: "بعد — الورشة", caption: " خرج حديثاً من الورشة" },
          { label: "بعد — النهائي", caption: "تم التسليم والتركيب — جاهز للعزف" },
        ],
      },
      {
        heading: "كروغر برلين — ترميم كامل",
        description:
          "وصل بيانو كروغر برلين العمودي ذو القرن الماضي وهو في قطع. أعاد فريقنا بناءه من الصفر — إصلاح الإطار وإعادة طلاء الهيكل بلمسة سوداء مرآوية.",
        steps: [
          { label: "قبل — تفاصيل", caption: "الأرجل منفصلة والإطار تالف عند الوصول" },
          { label: "قبل — كامل", caption: "بيانو كروغر برلين مفككاً بالكامل في ورشتنا" },
          { label: "قبل — جانبي", caption: "الأضرار الهيكلية واضحة من جميع الزوايا" },
          { label: "بعد — أمامي", caption: "مُرمَّم بالكامل بطلاء أسود مرآوي جديد" },
          { label: "بعد — جانبي", caption: "الجانب يُظهر اللمسة النهائية المثالية" },
          { label: "تم التسليم", caption: "تسليم كروغر برلين لمنزله الجديد، جاهز للعزف" },
        ],
      },
    ],
  },
  gallery: {
    label: "أعمالنا",
    heading: "لحظات مُلتقطة",
    sub: "من ورش الترميم إلى الزيارات المنزلية — نظرة على عالمنا من البيانو.",
  },
  about: {
    label: "من نحن",
    heading: "أهل البيانو في القاهرة",
    paras: [
      "نشأ بيانو مان من إيمان بسيط: كل بيانو يستحق أن يُسمع بأفضل حالاته، وكل موسيقي يستحق الوصول إلى الآلة المناسبة دون عوائق.",
      "من مقرنا في القاهرة، بنينا سمعتنا على سنوات من العمل اليدوي الدقيق — دوزان وترميم وتأجير البيانو للطلاب والمؤدين والعائلات في جميع أنحاء مصر.",
      "نحن لا نُصلح البيانو فحسب. نحن نفهمه. كل آلة تمر بين أيدينا تحظى بالاهتمام الذي تستحقه، سواء كانت زيارة منزلية سريعة أو مشروع ترميم كامل.",
    ],
    promise: "اقتني، صلح، عدل — هذا وعدنا.",
  },
  testimonials: {
    label: "آراء العملاء",
    heading: "ماذا يقول عملاؤنا",
    items: [
      {
        name: "سارة م.",
        role: "طالبة بيانو، الزمالك",
        text: "سلّم بيانو مان بيانو حائطي جميل في شقتي وجم مرتين لضبطه. خدمة استثنائية — لم أضطر للقلق أبداً. كانت عملية الإيجار سلسة تماماً.",
      },
      {
        name: "أحمد ك.",
        role: "منتج موسيقى، المعادي",
        text: "كان لدي بيانو bechstain من أربعينيات القرن الماضي صامتاً تماماً. أستغرق فريق ترميم بيانو مان ثلاثة أسابيع عليه والنتيجة فاقت كل توقعاتي. حرفية لا تُصدق.",
      },
      {
        name: "ليلى ن.",
        role: "منظمة فعاليات، مصر الجديدة",
        text: "احتجنا إلى بيانو جراند لحفل شركات في وقت قريب. سلّم بيانو مان وثبّته وحتى ضبطه في الموقع. احترافي ودقيق وبسعر معقول.",
      },
    ],
  },
  contact: {
    label: "تواصل معنا",
    heading: "دعنا نتحدث عن البيانو الخاص بك",
    subtext:
      "سواء كنت تبحث عن الإيجار أو تحتاج إلى زيارة منزلية أو لديك بيانو يحتاج إلى ترميم — يسعدنا سماعك. تواصل معنا وسنرد عليك خلال 24 ساعة.",
    contactItems: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      website: "الموقع",
      location: "الموقع الجغرافي",
    },
    form: {
      fullName: "الاسم الكامل *",
      phone: "الهاتف",
      email: "البريد الإلكتروني *",
      service: "الخدمة",
      message: "الرسالة *",
      namePlaceholder: "اسمك",
      phonePlaceholder: "رقمك",
      messagePlaceholder: "أخبرنا عن بيانو العائلة وما تحتاجه...",
      selectService: "اختر خدمة...",
      services: ["تأجير بيانو", "زيارة منزلية وضبط", "ترميم بيانو", "استفسار عام"],
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      whatsapp: "تواصل عبر واتساب",
    },
    success: {
      heading: "تم إرسال الرسالة",
      text: "شكراً لتواصلك. سنرد عليك خلال 24 ساعة.",
      again: "إرسال رسالة أخرى",
    },
    error: "حدث خطأ ما. يرجى التواصل عبر واتساب أو إرسال بريد إلكتروني مباشرة.",
  },
  footer: {
    brand:
      "متخصصو البيانو الموثوق بهم في القاهرة. نؤجر ونضبط ونزور منزلك ونرمم الآلات التي تستحق أن تُسمع.",
    tagline: "احصل، صلح، عدل.",
    servicesLabel: "الخدمات",
    services: ["تأجير البيانو", "زيارات منزلية", "الترميم", "الضبط والإصلاح"],
    contactLabel: "تواصل",
    location: "القاهرة، مصر",
    copyright: (year: number) => `© ${year} بيانو مان. جميع الحقوق محفوظة.`,
    bottomLocation: "القاهرة، مصر",
  },
  blog: {
    sidebarCtaLabel: "بيانو مان مصر",
    sidebarSub: "رد في نفس اليوم. جميع أحياء القاهرة.",
    sidebarBookNow: "احجز الآن",
    sidebarWhatsapp: "واتساب",
    sidebarCtas: {
      Restoration: "تقييم مجاني — نأتي إليك",
      Tuning: "احجز زيارة ضبط منزلية",
      Events: "احصل على عرض سعر للفعالية اليوم",
      default: "احصل على عرض إيجار في نفس اليوم",
    },
    backToSite: "العودة إلى بيانو مان",
    backToBlog: "جميع المقالات",
    readArticle: "اقرأ المقال",
    moreIn: "المزيد في",
    ctaHeading: "هل أنت مستعد لمنح بيانو العائلةالرعاية التي يستحقها؟",
    ctaSub: "نخدم جميع أحياء القاهرة. عروض أسعار فورية على واتساب. تقييم مجاني للترميم.",
    bookNow: "احجز الآن",
    whatsapp: "واتساب",
    readyHeading: "هل أنت مستعد للحديث عن بيانوك؟",
  },
  authorCard: {
    title: "المؤسس المشارك، بيانومان مصر",
    bio: "متخصص بيانو في القاهرة. أدير بيانومان مصر — تأجير وضبط وترميم.",
  },
};

export const translations = { en, ar };
export type Translations = typeof en;
