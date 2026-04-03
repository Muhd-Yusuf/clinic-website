export type Lang = 'he' | 'ru';

export interface Translations {
  nav: {
    home: string;
    veinTreatments: string;
    beautyInjections: string;
    laserProcedures: string;
    about: string;
    results: string;
    contact: string;
    faq: string;
    bookCta: string;
    langSwitch: {
      he: string;
      ru: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
    contactUs: string;
    phone: string;
    whatsapp: string;
    address: string;
    clinicName: string;
  };
  common: {
    bookBtn: string;
    whatsappBtn: string;
    callBtn: string;
    learnMore: string;
    readMore: string;
    clinicName: string;
  };
  home: {
    heroHeadline: string;
    heroSubheadline: string;
    heroBookBtn: string;
    heroWhatsappBtn: string;
    trustCertified: string;
    trustYears: string;
    trustNatural: string;
    servicesTitle: string;
    servicesSubtitle: string;
    whyUsTitle: string;
    whyUsSubtitle: string;
    whyUs1Title: string;
    whyUs1Desc: string;
    whyUs2Title: string;
    whyUs2Desc: string;
    whyUs3Title: string;
    whyUs3Desc: string;
    whyUs4Title: string;
    whyUs4Desc: string;
    specialistTitle: string;
    specialistSubtitle: string;
    specialistBio: string;
    specialistLink: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    processTitle: string;
    processSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  veinTreatments: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    symptomsTitle: string;
    symptomsSubtitle: string;
    symptom1: string;
    symptom2: string;
    symptom3: string;
    symptom4: string;
    symptom5: string;
    symptom6: string;
    sclerotherapyTitle: string;
    sclerotherapyDesc: string;
    sclerotherapyHowTitle: string;
    sclerotherapyHow: string;
    sclerotherapyResultsTitle: string;
    sclerotherapyResults: string;
    laserVesselTitle: string;
    laserVesselDesc: string;
    laserVesselBenefit1: string;
    laserVesselBenefit2: string;
    laserVesselBenefit3: string;
    candidateTitle: string;
    candidateDesc: string;
    candidate1: string;
    candidate2: string;
    candidate3: string;
    candidate4: string;
    faqTitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  beautyInjections: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    treatmentsTitle: string;
    treatmentsSubtitle: string;
    lipTitle: string;
    lipDesc: string;
    lipBenefits: string[];
    botoxTitle: string;
    botoxDesc: string;
    botoxBenefits: string[];
    contourTitle: string;
    contourDesc: string;
    contourBenefits: string[];
    mesotherapyTitle: string;
    mesotherapyDesc: string;
    mesotherapyBenefits: string[];
    radiessTitle: string;
    radiessDesc: string;
    radiessBenefits: string[];
    polynucleotidesTitle: string;
    polynucleotidesDesc: string;
    polynucleotidesBenefits: string[];
    biorevitTitle: string;
    biorevitDesc: string;
    biorevitBenefits: string[];
    philosophyTitle: string;
    philosophySubtitle: string;
    philosophyText: string;
    safetyTitle: string;
    safetySubtitle: string;
    safety1: string;
    safety2: string;
    safety3: string;
    safety4: string;
    faqTitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  laserProcedures: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    concernsTitle: string;
    concernsSubtitle: string;
    concern1: string;
    concern2: string;
    concern3: string;
    concern4: string;
    concern5: string;
    concern6: string;
    rosaceaTitle: string;
    rosaceaDesc: string;
    rosaceaResults: string;
    scarsTitle: string;
    scarsDesc: string;
    scarsResults: string;
    pigmentationTitle: string;
    pigmentationDesc: string;
    pigmentationResults: string;
    vesselTitle: string;
    vesselDesc: string;
    vesselResults: string;
    rejuvTitle: string;
    rejuvDesc: string;
    rejuvResults: string;
    erbiumTitle: string;
    erbiumDesc: string;
    erbiumResults: string;
    techTitle: string;
    techSubtitle: string;
    techDesc: string;
    faqTitle: string;
    faqItems: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  about: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    bioTitle: string;
    bioText1: string;
    bioText2: string;
    bioText3: string;
    credentialsTitle: string;
    credential1: string;
    credential2: string;
    credential3: string;
    credential4: string;
    credential5: string;
    philosophyTitle: string;
    philosophyText: string;
    galleryTitle: string;
    gallery1: string;
    gallery2: string;
    gallery3: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  results: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    galleryTitle: string;
    galleryLabel: string;
    beforeLabel: string;
    afterLabel: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    trustTitle: string;
    trust1: string;
    trust2: string;
    trust3: string;
    disclaimer: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  contact: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    treatmentLabel: string;
    treatmentVein: string;
    treatmentBeauty: string;
    treatmentLaser: string;
    treatmentOther: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successMessage: string;
    infoTitle: string;
    phoneInfo: string;
    whatsappInfo: string;
    addressInfo: string;
    hoursTitle: string;
    hours1: string;
    hours2: string;
    hours3: string;
    whatsappPrompt: string;
    mapPlaceholder: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  faq: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

const he: Translations = {
  nav: {
    home: 'דף הבית',
    veinTreatments: 'טיפולי ורידים',
    beautyInjections: 'הזרקות יופי',
    laserProcedures: 'טיפולי לייזר',
    about: 'אודות המומחית',
    results: 'תוצאות וביקורות',
    contact: 'צור קשר',
    faq: 'שאלות נפוצות',
    bookCta: 'קבעי תור',
    langSwitch: {
      he: 'HE',
      ru: 'RU',
    },
  },
  footer: {
    tagline: 'יופי טבעי, תוצאות מקצועיות — בטיפול אישי ומסור',
    rights: 'כל הזכויות שמורות',
    quickLinks: 'קישורים מהירים',
    contactUs: 'צור קשר',
    phone: '+972-50-123-4567',
    whatsapp: 'WhatsApp: +972-50-123-4567',
    address: 'תל אביב, ישראל',
    clinicName: '[שם המרפאה]',
  },
  common: {
    bookBtn: 'קבעי תור עכשיו',
    whatsappBtn: 'שלחי הודעה ב-WhatsApp',
    callBtn: 'התקשרי אלינו',
    learnMore: 'למידע נוסף ←',
    readMore: 'קראי עוד',
    clinicName: '[שם המרפאה]',
  },
  home: {
    heroHeadline: 'יופי טבעי מתחיל בטיפול הנכון',
    heroSubheadline: 'מומחית מוסמכת לרפואה אסתטית — טיפולי ורידים, הזרקות יופי וניתוחי לייזר בתל אביב',
    heroBookBtn: 'קבעי ייעוץ חינם',
    heroWhatsappBtn: 'WhatsApp',
    trustCertified: 'מוסמכת ומורשית',
    trustYears: '+10 שנות ניסיון',
    trustNatural: 'תוצאות טבעיות',
    servicesTitle: 'תחומי הטיפול שלנו',
    servicesSubtitle: 'פתרונות מקצועיים לכל צורך אסתטי',
    whyUsTitle: 'למה לבחור בנו',
    whyUsSubtitle: 'אנחנו מחויבים לתת לך את הטיפול הטוב ביותר',
    whyUs1Title: 'ניסיון ומומחיות',
    whyUs1Desc: 'מעל עשר שנות ניסיון ברפואה אסתטית עם אלפי מטופלות מרוצות',
    whyUs2Title: 'טכנולוגיה מתקדמת',
    whyUs2Desc: 'ציוד לייזר ומכשור רפואי מהדור האחרון לתוצאות מיטביות',
    whyUs3Title: 'גישה אישית',
    whyUs3Desc: 'כל טיפול מותאם אישית לצרכים ולמאפיינים הייחודיים שלך',
    whyUs4Title: 'תוצאות טבעיות',
    whyUs4Desc: 'גישה עדינה ושמרנית המדגישה יופי טבעי ואותנטי',
    specialistTitle: 'אודות המומחית',
    specialistSubtitle: 'היכרות עם הרופאה המובילה',
    specialistBio: 'בעלת תואר מומחית ברפואה אסתטית עם ניסיון של למעלה מ-10 שנים. מתמחה בטיפולי ורידים, הזרקות לעיצוב הפנים ולייזר. גישה אישית ומדויקת לכל מטופלת.',
    specialistLink: 'קרא עוד אודותי',
    testimonialsTitle: 'מה אומרות המטופלות שלנו',
    testimonialsSubtitle: 'ביקורות אמיתיות מנשים מרוצות',
    processTitle: 'תהליך הטיפול',
    processSubtitle: 'שלושה צעדים פשוטים לדרך לתוצאות',
    step1Title: 'קביעת תור',
    step1Desc: 'צרי קשר בטלפון, WhatsApp או דרך הטופס ונקבע לך זמן נוח',
    step2Title: 'ייעוץ אישי',
    step2Desc: 'פגישת ייעוץ ראשונית לאבחון הצרכים שלך ותכנון תוכנית הטיפול',
    step3Title: 'טיפול מקצועי',
    step3Desc: 'ביצוע הטיפול בסביבה נעימה ומקצועית עם מעקב שוטף',
    ctaTitle: 'מוכנה להתחיל את המסע שלך?',
    ctaSubtitle: 'צרי קשר היום לייעוץ ראשוני חינם ללא התחייבות',
    ctaPrimary: 'קבעי תור',
    ctaSecondary: 'שלחי הודעה',
  },
  veinTreatments: {
    heroTag: 'טיפולי ורידים',
    heroTitle: 'פתרון מקצועי לורידים בולטים',
    heroSubtitle: 'טיפולים מתקדמים לסקלרותרפיה וסילוק ורידים בלייזר — תוצאות בטוחות ואפקטיביות',
    symptomsTitle: 'סימנים שדורשים טיפול',
    symptomsSubtitle: 'האם את סובלת מאחד מהסימנים הבאים?',
    symptom1: 'ורידי עכביש ורידים קטנים בגוון סגול/כחול',
    symptom2: 'ורידים בולטים ברגליים',
    symptom3: 'כאב ועייפות ברגליים',
    symptom4: 'נפיחות ברגליים בסוף היום',
    symptom5: 'גרד סביב לורידים',
    symptom6: 'שינוי צבע העור סביב לורידים',
    sclerotherapyTitle: 'סקלרותרפיה',
    sclerotherapyDesc: 'הסקלרותרפיה היא הטיפול המוביל בעולם לורידי עכביש וורידים קטנים. הטיפול כולל הזרקת חומר סקלרוסנטי לתוך הוריד, הגורם לו להצטמק ולהיספג בגוף.',
    sclerotherapyHowTitle: 'כיצד הטיפול עובד',
    sclerotherapyHow: 'במהלך הטיפול מוזרק חומר מיוחד ישירות לוריד הבעייתי באמצעות מחט דקה. החומר גורם לדפנות הוריד להתרגש ולהידבק יחד, עד שהוריד נסגר ונספג בגוף לאורך מספר שבועות.',
    sclerotherapyResultsTitle: 'תוצאות צפויות',
    sclerotherapyResults: 'שיפור ניכר נראה לאחר 3-6 שבועות. רוב המטופלות זקוקות ל-1-3 טיפולים לתוצאות מיטביות. הורידים המטופלים נעלמים לצמיתות.',
    laserVesselTitle: 'הסרת ורידים בלייזר',
    laserVesselDesc: 'טיפול לייזר מתקדם לסגירת ורידים ללא הזרקות, מתאים במיוחד לורידים קטנים מאוד ולאזורים רגישים כמו הפנים.',
    laserVesselBenefit1: 'ללא מחטים ומינימום אי נוחות',
    laserVesselBenefit2: 'מתאים לורידים קטנים בפנים ובגוף',
    laserVesselBenefit3: 'תוצאות מהירות ועמידות',
    candidateTitle: 'מי מתאימה לטיפול?',
    candidateDesc: 'הטיפול מתאים לנשים וגברים הסובלים מ:',
    candidate1: 'ורידי עכביש וורידים קטנים בגוון אדום, כחול או סגול',
    candidate2: 'ורידים בולטים שמפריעים מבחינה אסתטית',
    candidate3: 'כאבים ואי נוחות ברגליים הנגרמים מבעיות ורידים',
    candidate4: 'שינויים עוריים באזור הורידים',
    faqTitle: 'שאלות נפוצות על טיפולי ורידים',
    faqItems: [
      {
        question: 'האם הטיפול כואב?',
        answer: 'הטיפול כרוך באי נוחות קלה בלבד. הסקלרותרפיה מתבצעת עם מחטים דקות מאוד, ורוב המטופלות מתארות תחושת עקצוץ קלה. טיפול הלייזר יוצר תחושת חמימות קלה.',
      },
      {
        question: 'כמה טיפולים נדרשים?',
        answer: 'מספר הטיפולים תלוי בחומרת הבעיה. בדרך כלל נדרשים 1-3 טיפולים לתוצאות מיטביות, עם הפרשי זמן של 4-8 שבועות בין טיפול לטיפול.',
      },
      {
        question: 'מתי נראות התוצאות?',
        answer: 'שיפור ראשוני נראה לאחר 2-3 שבועות מהטיפול. תוצאות מלאות מתקבלות לאחר 2-3 חודשים, כאשר הורידים נספגים לחלוטין בגוף.',
      },
      {
        question: 'האם יש זמן התאוששות?',
        answer: 'לאחר הסקלרותרפיה ניתן לחזור לפעילות יומיומית רגילה כמעט מיד. מומלץ להימנע מפעילות גופנית אינטנסיבית ומחשיפה לשמש ישירה למשך 48 שעות.',
      },
      {
        question: 'האם הטיפול קבוע?',
        answer: 'ורידים שטופלו נעלמים לצמיתות. עם זאת, ניתן להופיע ורידים חדשים עם הזמן עקב גורמים גנטיים, הריון או אורח חיים. טיפולי תחזוקה תקופתיים מומלצים.',
      },
      {
        question: 'האם יש הגבלות לפני הטיפול?',
        answer: 'יש להימנע מנטילת אספירין ותרופות נוגדות קרישה 48 שעות לפני הטיפול. כמו כן, יש להגיע עם לבוש נוח ולהימנע ממריחת קרם על אזור הטיפול.',
      },
    ],
    ctaTitle: 'רוצה לסיים עם הורידים הבעייתיים?',
    ctaSubtitle: 'צרי קשר לייעוץ ראשוני חינם',
  },
  beautyInjections: {
    heroTag: 'הזרקות יופי',
    heroTitle: 'עיצוב פנים טבעי ומדויק',
    heroSubtitle: 'טיפולים מתקדמים לחידוש עור הפנים, עיצוב קווי הפנים ונעורים טבעיים',
    treatmentsTitle: 'מגוון טיפולי הזרקה',
    treatmentsSubtitle: 'פתרון אישי לכל צורך',
    lipTitle: 'הגדלה ועיצוב שפתיים',
    lipDesc: 'הגדלה ועיצוב שפתיים בחומצה היאלורונית לנפח טבעי ומוגדר. הטיפול מתאים לנשים המעוניינות בשפתיים מלאות ומוגדרות יותר תוך שמירה על מראה טבעי.',
    lipBenefits: ['נפח טבעי ומאוזן', 'הגדרת קו שפתיים', 'לחות ורכות מוגברת', 'תוצאות עד שנה'],
    botoxTitle: 'בוטוקס',
    botoxDesc: 'טיפול בוטוקס מקצועי להחלקת קמטים ביטויים במצח, בין הגבות ומסביב לעיניים. גישה עדינה לתוצאות טבעיות שמשמרות את הבעות הפנים.',
    botoxBenefits: ['החלקת קמטים ביטויים', 'שמירה על הבעות טבעיות', 'תוצאות מהירות', 'ללא זמן התאוששות'],
    contourTitle: 'קונטור ועיצוב פנים',
    contourDesc: 'שימוש בחומצה היאלורונית לעיצוב קווי הפנים, הדגשת לחיים, הוספת נפח ושיקום אובדן נפח הקשור לגיל.',
    contourBenefits: ['עיצוב לחיים ולסת', 'שיקום נפח שאבד', 'מראה רענן ונוער', 'תוצאות עד 18 חודשים'],
    mesotherapyTitle: 'מזותרפיה לשיער',
    mesotherapyDesc: 'הזרקת קוקטייל ויטמינים, מינרלים וחומרים פעילים ישירות לקרקפת לחיזוק שיער דליל, מניעת נשירה וגירוי צמיחת שיער חדש.',
    mesotherapyBenefits: ['הפחתת נשירת שיער', 'חיזוק שורשי שיער', 'גירוי צמיחה', 'שיפור מרקם השיער'],
    radiessTitle: 'רדיס',
    radiessDesc: 'ממלא נפח עם אפקט הרמה טבעי. Radiesse מכיל כדוריות סידן שמגרות ייצור קולגן טבעי, לתוצאות ארוכות טווח של עד שנתיים.',
    radiessBenefits: ['הרמה טבעית', 'גירוי קולגן', 'תוצאות ארוכות טווח', 'מתאים לפנים וגוף'],
    polynucleotidesTitle: 'פולינוקלאוטידים (PDRN)',
    polynucleotidesDesc: 'טיפול ביולוגי מתקדם המשתמש בפולינוקלאוטידים מדג סלמון לחידוש, לחות ושיקום תאי העור. מתאים במיוחד לעור עייף, פגום ומיובש.',
    polynucleotidesBenefits: ['חידוש תאי עור', 'לחות עמוקה', 'שיקום נזקי שמש', 'מרקם עור חלק'],
    biorevitTitle: 'ביוריביטליזציה',
    biorevitDesc: 'הזרקת חומצה היאלורונית בריכוז גבוה לחידוש ולחות עמוקה של העור. הטיפול מתאים לכל סוגי העור ומביא לזוהר ורכות מיידית.',
    biorevitBenefits: ['לחות עמוקה ומתמשכת', 'שיפור גמישות העור', 'הפחתת קמטים עדינים', 'זוהר ורענון'],
    philosophyTitle: 'הפילוסופיה שלנו: תוצאות טבעיות',
    philosophySubtitle: 'פחות זה יותר',
    philosophyText: 'אנחנו מאמינות שטיפולים אסתטיים צריכים לשפר את היופי הטבעי שלך, לא להחליף אותו. גישתנו שמרנית ומדויקת — כל טיפול מתוכנן להשיג תוצאות עדינות ואותנטיות שמחמיאות למראה הטבעי שלך.',
    safetyTitle: 'בטיחות ואיכות',
    safetySubtitle: 'הבטיחות שלך בראש סדר העדיפויות',
    safety1: 'שימוש אך ורק בחומרים רשומים ומאושרים',
    safety2: 'עמידה בפרוטוקולי עבודה קפדניים',
    safety3: 'ייעוץ מפורט לפני כל טיפול',
    safety4: 'מעקב לאחר הטיפול ותמיכה מלאה',
    faqTitle: 'שאלות נפוצות על הזרקות יופי',
    faqItems: [
      {
        question: 'האם ההזרקות כואבות?',
        answer: 'אנו מורחים קרם הרדמה מקומית לפני הטיפול כדי למזער אי נוחות. רוב המטופלות מדווחות על תחושת עקצוץ קלה בלבד.',
      },
      {
        question: 'כמה זמן נמשכות תוצאות הבוטוקס?',
        answer: 'תוצאות הבוטוקס נמשכות בדרך כלל 3-6 חודשים. עם טיפולי חזרה קבועים, ניתן להאריך את משך ההשפעה.',
      },
      {
        question: 'האם ניתן לשלב מספר טיפולים?',
        answer: 'כן, לעיתים קרובות אנו ממליצות על שילוב טיפולים לתוצאות מיטביות. נתכנן יחד את תוכנית הטיפול המתאימה לך.',
      },
      {
        question: 'מה זמן ההתאוששות לאחר הזרקות?',
        answer: 'לרוב ניתן לחזור לפעילות רגילה מיד לאחר הטיפול. ייתכנו אדמומיות וצבירת דם קלה שחולפות תוך 24-48 שעות.',
      },
      {
        question: 'האם ניתן לקבל הזרקות בזמן הריון?',
        answer: 'הזרקות יופי אינן מומלצות בזמן הריון ובתקופת ההנקה. נשמח לייעץ על טיפולים חלופיים בתקופה זו.',
      },
      {
        question: 'מה ההבדל בין חומצה היאלורונית לבוטוקס?',
        answer: 'בוטוקס מרפה שרירים להחלקת קמטי ביטוי, בעוד חומצה היאלורונית ממלאת נפח וחלל. לרוב משתמשים בשניהם לתוצאות מיטביות.',
      },
    ],
    ctaTitle: 'רוצה להבריק מיד?',
    ctaSubtitle: 'קבעי ייעוץ חינם ותגלי איזה טיפול הכי מתאים לך',
  },
  laserProcedures: {
    heroTag: 'טיפולי לייזר',
    heroTitle: 'טכנולוגיית לייזר מתקדמת לעור מושלם',
    heroSubtitle: 'פתרונות לייזר לטיפול בבעיות עור מגוונות — רוזציאה, צלקות, פיגמנטציה, כלי דם ועוד',
    concernsTitle: 'בעיות עור שאנו מטפלות בהן',
    concernsSubtitle: 'לייזר מתקדם לכל אתגר עורי',
    concern1: 'רוזציאה',
    concern2: 'צלקות',
    concern3: 'פיגמנטציה',
    concern4: 'כלי דם',
    concern5: 'הזדקנות',
    concern6: 'מרקם עור',
    rosaceaTitle: 'טיפול ברוזציאה',
    rosaceaDesc: 'טיפול לייזר יעיל לרוזציאה, אדמומיות כרונית וכלי דם גלויים בפנים. הלייזר מכוון ספציפית לכלי הדם האחראים לאדמומיות מבלי לפגוע בעור הסביב.',
    rosaceaResults: 'שיפור משמעותי באדמומיות לאחר 2-4 טיפולים',
    scarsTitle: 'טיפול בצלקות',
    scarsDesc: 'טיפולי לייזר שבריר לשיפור מראה צלקות מגיל מקנה ועד צלקות כירורגיות. הלייזר מגרה ייצור קולגן חדש ומשפר את מרקם ומראה הצלקת.',
    scarsResults: 'הפחתה של 60-80% בנראות הצלקת לאחר סדרת טיפולים',
    pigmentationTitle: 'הסרת פיגמנטציה',
    pigmentationDesc: 'טיפול לייזר ממוקד להסרת כתמי שמש, מלאסמה וצבירות פיגמנט אחרות. הלייזר מפרק את פיגמנט המלנין ומשאיר עור אחיד וברור.',
    pigmentationResults: 'עור אחיד ובהיר יותר לאחר 1-3 טיפולים',
    vesselTitle: 'הסרת כלי דם',
    vesselDesc: 'טיפול לייזר לסגירת ורידים קטנים וכלי דם גלויים בפנים ובגוף. הטיפול מתאים לנימים שבורים, ורידים אדומים קטנים ועוד.',
    vesselResults: 'סגירת כלי דם גלויים לאחר 1-2 טיפולים',
    rejuvTitle: 'התחדשות ויסוד העור',
    rejuvDesc: 'טיפול לייזר לשיפור מרקם, הברקת העור ועיסוי עמוק לחידוש תאים. מתאים לאנשים המחפשים שיפור כללי במראה ובאיכות העור.',
    rejuvResults: 'עור רענן וזורח עם שיפור ניכר במרקם',
    erbiumTitle: 'פילינג ארביום 360°',
    erbiumDesc: 'פילינג לייזר ארביום מתקדם המטפל בכל שכבות העור בו זמנית. הטיפול מסיר תאי עור מתים, מחליק קמטים עדינים ומחדש את העור לעומק.',
    erbiumResults: 'עור חלק ומחודש עם שיפור דרמטי לאחר טיפול אחד',
    techTitle: 'הטכנולוגיה שלנו',
    techSubtitle: 'ציוד לייזר מהדור האחרון',
    techDesc: 'אנו עובדות עם מכשירי לייזר מהמתקדמים ביותר בעולם, המאושרים על ידי ה-FDA ועומדים בתקנים רפואיים קפדניים. הטכנולוגיה שלנו מאפשרת לנו לטפל בדיוק מרבי תוך הגנה על העור הבריא.',
    faqTitle: 'שאלות נפוצות על טיפולי לייזר',
    faqItems: [
      {
        question: 'האם טיפולי לייזר מתאימים לכל גוון עור?',
        answer: 'ישנם לייזרים המתאימים לכל גוון עור. בפגישת הייעוץ נבדוק את סוג עורך ונמליץ על הטיפול המתאים ביותר עבורך.',
      },
      {
        question: 'האם הטיפול כואב?',
        answer: 'רמת אי הנוחות שונה בין טיפולים שונים. לרוב מרגישים חמימות קלה ועקצוץ. אנו משתמשות בשיטות הרגעה שונות להפחתת אי הנוחות.',
      },
      {
        question: 'מה קורה אחרי הטיפול?',
        answer: 'לאחר טיפולי לייזר אינטנסיביים ייתכן אודם ותחושת חמימות שחולפים תוך יום-יומיים. יש להגן על העור מהשמש ולהשתמש בקרם הגנה גבוה.',
      },
      {
        question: 'כמה טיפולים נדרשים לתוצאות?',
        answer: 'מספר הטיפולים תלוי בבעיה ובסוג הלייזר. בדרך כלל 3-6 טיפולים בהפרש של 4-6 שבועות.',
      },
      {
        question: 'מתי נראות תוצאות ראשונות?',
        answer: 'שיפור ראשוני לרוב נראה לאחר הטיפול הראשון, אך תוצאות מלאות מתפתחות לאורך 3-6 חודשים עם ייצור קולגן חדש.',
      },
      {
        question: 'מה צריך לעשות לפני טיפול לייזר?',
        answer: 'יש להימנע מחשיפה לשמש 2-4 שבועות לפני הטיפול, להפסיק תרופות מדללות דם לפי הנחיות, ולא להשתמש בקרמים ריטינול שבוע לפני.',
      },
    ],
    ctaTitle: 'רוצה עור חלק ובריא?',
    ctaSubtitle: 'צרי קשר לייעוץ לייזר חינם',
  },
  about: {
    heroTag: 'אודות המומחית',
    heroTitle: 'ד"ר [שם הרופאה]',
    heroSubtitle: 'מומחית ברפואה אסתטית ובטיפולי ורידים — מחויבת לתוצאות טבעיות ומקצועיות',
    bioTitle: 'הסיפור שלי',
    bioText1: 'בוגרת הפקולטה לרפואה עם התמחות ברפואה אסתטית ונוסתטית. במהלך שנות עבודתי הרחבות, צברתי ניסיון עשיר בטיפולי ורידים מתקדמים, הזרקות יופי ומגוון רחב של טיפולי לייזר.',
    bioText2: 'הפילוסופיה הטיפולית שלי מבוססת על ההבנה שכל מטופלת ייחודית. אני מתמחה ביצירת תוצאות טבעיות ואותנטיות שמשפרות את הביטחון העצמי מבלי לשנות את המהות.',
    bioText3: 'לאורך השנים, טיפלתי באלפי מטופלות ובניתי שם של מקצועיות, אמינות וקשב. כל מטופלת מקבלת אצלי תשומת לב מלאה, ייעוץ כנה ותוכנית טיפול מותאמת אישית.',
    credentialsTitle: 'הסמכות ותעודות',
    credential1: 'מוסמכת ברפואה, אוניברסיטה מובילה',
    credential2: 'הסמכה בינלאומית בסקלרותרפיה',
    credential3: 'קורס מתקדם בהזרקות חומצה היאלורונית ובוטוקס',
    credential4: 'הסמכה בטיפולי לייזר — פלטפורמות מובילות',
    credential5: 'חברה בלשכת הרופאים הישראלית',
    philosophyTitle: 'הגישה שלי',
    philosophyText: 'אני מאמינה שטיפול אסתטי מוצלח הוא כזה שלא ניכר — שמביא לשיפור עדין ומחמיא מבלי לסגת מהמראה הטבעי. גישתי שמרנית, מדויקת ותמיד ממוקדת בצרכים האמיתיים של המטופלת.',
    galleryTitle: 'המרפאה שלנו',
    gallery1: 'חדר הייעוץ',
    gallery2: 'חדר הטיפולים',
    gallery3: 'לובי המרפאה',
    ctaTitle: 'בואי להכיר',
    ctaSubtitle: 'קבעי פגישת ייעוץ ראשונית ללא עלות',
  },
  results: {
    heroTag: 'תוצאות וביקורות',
    heroTitle: 'תוצאות אמיתיות מנשים אמיתיות',
    heroSubtitle: 'גלריית לפני ואחרי וביקורות מנשים שחוו שינוי',
    galleryTitle: 'לפני ואחרי',
    galleryLabel: 'טיפול',
    beforeLabel: 'לפני',
    afterLabel: 'אחרי',
    testimonialsTitle: 'מה אומרות המטופלות שלנו',
    testimonialsSubtitle: 'ביקורות אמיתיות מנשים מרוצות',
    trustTitle: 'למה לסמוך עלינו',
    trust1: 'מאות מטופלות מרוצות',
    trust2: 'תוצאות ניתנות לאימות',
    trust3: 'ביקורות אמיתיות ולא ממומנות',
    disclaimer: 'תמונות לפני ואחרי מוצגות באישור המטופלות. תוצאות עשויות להשתנות בין אנשים שונים. הטיפולים מבוצעים על ידי מקצוענית מוסמכת בלבד.',
    ctaTitle: 'רוצה לראות תוצאות כאלה גם את?',
    ctaSubtitle: 'צרי קשר לייעוץ ראשוני',
  },
  contact: {
    heroTag: 'צור קשר',
    heroTitle: 'נשמח לשמוע ממך',
    heroSubtitle: 'קבעי תור, שאלי שאלה, או בואי לייעוץ חינם',
    formTitle: 'שלחי לנו הודעה',
    nameLabel: 'שם מלא',
    namePlaceholder: 'השם שלך',
    phoneLabel: 'מספר טלפון',
    phonePlaceholder: '05X-XXX-XXXX',
    treatmentLabel: 'תחום עניין',
    treatmentVein: 'טיפולי ורידים',
    treatmentBeauty: 'הזרקות יופי',
    treatmentLaser: 'טיפולי לייזר',
    treatmentOther: 'אחר',
    messageLabel: 'הודעה',
    messagePlaceholder: 'ספרי לנו במה נוכל לעזור...',
    submitBtn: 'שלחי הודעה',
    successMessage: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.',
    infoTitle: 'פרטי התקשרות',
    phoneInfo: '+972-50-123-4567',
    whatsappInfo: 'WhatsApp: +972-50-123-4567',
    addressInfo: 'תל אביב, ישראל',
    hoursTitle: 'שעות פעילות',
    hours1: 'ראשון – חמישי: 9:00–19:00',
    hours2: 'שישי: 9:00–14:00',
    hours3: 'שבת: סגור',
    whatsappPrompt: 'מעדיפה לכתוב? שלחי לנו הודעת WhatsApp ונחזור אליך תוך שעה',
    mapPlaceholder: 'מפה — בקרוב',
    ctaTitle: 'מוכנה לקחת את הצעד הראשון?',
    ctaSubtitle: 'קבעי ייעוץ חינם ללא התחייבות',
  },
  faq: {
    heroTag: 'שאלות נפוצות',
    heroTitle: 'כל השאלות שרצית לשאול',
    heroSubtitle: 'תשובות לשאלות הנפוצות ביותר על טיפולינו',
    items: [
      {
        question: 'האם הטיפולים כואבים?',
        answer: 'רמת אי הנוחות שונה בין טיפולים. בדרך כלל משתמשים בקרם הרדמה מקומית או בקירור לפני ובמהלך הטיפול. רוב המטופלות מתארות תחושת עקצוץ קלה בלבד.',
      },
      {
        question: 'כמה מפגשים נדרשים לכל טיפול?',
        answer: 'מספר המפגשים תלוי בסוג הטיפול ובבעיה שמטפלים בה. הסקלרותרפיה לרוב דורשת 1-3 מפגשים, בוטוקס מפגש אחד, ולייזר 3-6 מפגשים. נתכנן יחד את מסלול הטיפול.',
      },
      {
        question: 'מתי אראה תוצאות?',
        answer: 'חלק מהטיפולים מראים תוצאות ראשוניות מיד, אחרים לאחר מספר שבועות. לדוגמה: בוטוקס — 5-14 ימים; הזרקות חומצה היאלורונית — מיידי; לייזר — 4-12 שבועות.',
      },
      {
        question: 'מה זמן ההתאוששות?',
        answer: 'לרוב הטיפולים זמן ההתאוששות מינימלי. ניתן לחזור לעבודה ולפעילות יומיומית מיד לאחר רוב הטיפולים. לפילינגים לייזר אינטנסיביים ייתכן אודם למשך 2-5 ימים.',
      },
      {
        question: 'האם הטיפולים מתאימים לכולם?',
        answer: 'רוב הטיפולים מתאימים לגברים ולנשים מכל הגילאים. ישנם מצבים מסוימים (הריון, תרופות מסוימות, מחלות רקע) שבהם טיפולים מסוימים אינם מומלצים. נבדוק זאת יחד בפגישת הייעוץ.',
      },
      {
        question: 'האם הייעוץ הראשוני הוא חינם?',
        answer: 'כן! אנו מציעות פגישת ייעוץ ראשונית חינם וללא התחייבות. בפגישה זו נבחן את מצב עורך, נשמע את צרכיך ונמליץ על תוכנית טיפול מותאמת אישית.',
      },
      {
        question: 'כיצד לטפל בעור לאחר הטיפול?',
        answer: 'הנחיות הטיפול לאחר כל פרוצדורה ניתנות בכתב. בדרך כלל כוללות: הגנה מהשמש, שמירה על לחות, הימנעות ממוצרים מסוימים ומפעילות גופנית אינטנסיבית לזמן מוגבל.',
      },
      {
        question: 'כמה עולים הטיפולים?',
        answer: 'המחירים משתנים בהתאם לסוג הטיפול, לאזור הנדרש ולמספר המפגשים. אנחנו מציעות שקיפות מלאה לגבי עלויות בפגישת הייעוץ ומשתדלות להתאים פתרונות לכל תקציב.',
      },
    ],
    ctaTitle: 'נשארת עם שאלה?',
    ctaSubtitle: 'צרי קשר ישירות ונשמח לעזור',
  },
};

const ru: Translations = {
  nav: {
    home: 'Главная',
    veinTreatments: 'Лечение вен',
    beautyInjections: 'Инъекции красоты',
    laserProcedures: 'Лазерные процедуры',
    about: 'О специалисте',
    results: 'Результаты и отзывы',
    contact: 'Контакты',
    faq: 'Частые вопросы',
    bookCta: 'Записаться',
    langSwitch: {
      he: 'HE',
      ru: 'RU',
    },
  },
  footer: {
    tagline: 'Естественная красота, профессиональные результаты — индивидуальный подход к каждому',
    rights: 'Все права защищены',
    quickLinks: 'Быстрые ссылки',
    contactUs: 'Связаться',
    phone: '+972-50-123-4567',
    whatsapp: 'WhatsApp: +972-50-123-4567',
    address: 'Тель-Авив, Израиль',
    clinicName: '[Название клиники]',
  },
  common: {
    bookBtn: 'Записаться сейчас',
    whatsappBtn: 'Написать в WhatsApp',
    callBtn: 'Позвонить нам',
    learnMore: 'Узнать больше →',
    readMore: 'Читать далее',
    clinicName: '[Название клиники]',
  },
  home: {
    heroHeadline: 'Естественная красота начинается с правильного ухода',
    heroSubheadline: 'Сертифицированный специалист по эстетической медицине — лечение вен, инъекции красоты и лазерные процедуры в Тель-Авиве',
    heroBookBtn: 'Бесплатная консультация',
    heroWhatsappBtn: 'WhatsApp',
    trustCertified: 'Сертифицированный специалист',
    trustYears: '+10 лет опыта',
    trustNatural: 'Натуральные результаты',
    servicesTitle: 'Наши услуги',
    servicesSubtitle: 'Профессиональные решения для каждой эстетической потребности',
    whyUsTitle: 'Почему мы',
    whyUsSubtitle: 'Мы стремимся обеспечить вам лучшее лечение',
    whyUs1Title: 'Опыт и экспертиза',
    whyUs1Desc: 'Более десяти лет опыта в эстетической медицине с тысячами довольных пациенток',
    whyUs2Title: 'Передовые технологии',
    whyUs2Desc: 'Лазерное оборудование и медицинские приборы последнего поколения',
    whyUs3Title: 'Индивидуальный подход',
    whyUs3Desc: 'Каждая процедура адаптирована под ваши уникальные потребности',
    whyUs4Title: 'Натуральные результаты',
    whyUs4Desc: 'Деликатный консервативный подход, подчёркивающий естественную красоту',
    specialistTitle: 'О специалисте',
    specialistSubtitle: 'Знакомство с ведущим врачом',
    specialistBio: 'Дипломированный специалист по эстетической медицине с опытом более 10 лет. Специализация — лечение вен, инъекции для коррекции лица и лазерные процедуры. Персональный и точный подход к каждой пациентке.',
    specialistLink: 'Узнать больше обо мне',
    testimonialsTitle: 'Что говорят наши пациентки',
    testimonialsSubtitle: 'Реальные отзывы довольных женщин',
    processTitle: 'Процесс лечения',
    processSubtitle: 'Три простых шага к результату',
    step1Title: 'Запись',
    step1Desc: 'Свяжитесь по телефону, WhatsApp или через форму — назначим удобное время',
    step2Title: 'Консультация',
    step2Desc: 'Первичная консультация для диагностики ваших потребностей и планирования курса',
    step3Title: 'Лечение',
    step3Desc: 'Проведение процедуры в комфортной профессиональной атмосфере с последующим наблюдением',
    ctaTitle: 'Готовы начать ваш путь?',
    ctaSubtitle: 'Свяжитесь сегодня для бесплатной первичной консультации без обязательств',
    ctaPrimary: 'Записаться',
    ctaSecondary: 'Написать',
  },
  veinTreatments: {
    heroTag: 'Лечение вен',
    heroTitle: 'Профессиональное решение для сосудистых проблем',
    heroSubtitle: 'Современные методы склеротерапии и лазерного удаления вен — безопасные и эффективные результаты',
    symptomsTitle: 'Признаки, требующие лечения',
    symptomsSubtitle: 'Страдаете ли вы от одного из следующих симптомов?',
    symptom1: 'Сосудистые звёздочки — мелкие вены фиолетового/синего цвета',
    symptom2: 'Выступающие вены на ногах',
    symptom3: 'Боль и усталость в ногах',
    symptom4: 'Отёчность ног к концу дня',
    symptom5: 'Зуд вокруг вен',
    symptom6: 'Изменение цвета кожи вокруг вен',
    sclerotherapyTitle: 'Склеротерапия',
    sclerotherapyDesc: 'Склеротерапия — ведущий мировой метод лечения сосудистых звёздочек и мелких вен. Процедура включает введение склерозирующего раствора в вену, что вызывает её сжатие и рассасывание.',
    sclerotherapyHowTitle: 'Как работает процедура',
    sclerotherapyHow: 'Во время процедуры специальный раствор вводится непосредственно в проблемную вену тонкой иглой. Раствор вызывает раздражение стенок вены, они склеиваются, и со временем вена закрывается и рассасывается.',
    sclerotherapyResultsTitle: 'Ожидаемые результаты',
    sclerotherapyResults: 'Заметное улучшение видно через 3-6 недель. Большинству пациенток требуется 1-3 процедуры для оптимального результата. Пролеченные вены исчезают навсегда.',
    laserVesselTitle: 'Лазерное удаление вен',
    laserVesselDesc: 'Современная лазерная процедура для закрытия вен без инъекций, особенно подходящая для очень мелких сосудов и чувствительных зон, таких как лицо.',
    laserVesselBenefit1: 'Без игл, минимальный дискомфорт',
    laserVesselBenefit2: 'Подходит для мелких сосудов на лице и теле',
    laserVesselBenefit3: 'Быстрые и устойчивые результаты',
    candidateTitle: 'Кому подходит лечение?',
    candidateDesc: 'Лечение подходит мужчинам и женщинам, страдающим от:',
    candidate1: 'Сосудистых звёздочек и мелких вен красного, синего или фиолетового цвета',
    candidate2: 'Выступающих вен, доставляющих эстетический дискомфорт',
    candidate3: 'Болей и дискомфорта в ногах из-за венозных проблем',
    candidate4: 'Изменений кожи в области вен',
    faqTitle: 'Часто задаваемые вопросы о лечении вен',
    faqItems: [
      {
        question: 'Больно ли это?',
        answer: 'Процедура сопровождается лишь незначительным дискомфортом. Склеротерапия проводится с использованием очень тонких игл, большинство пациенток описывают ощущение лёгкого покалывания. Лазерная процедура создаёт лёгкое ощущение тепла.',
      },
      {
        question: 'Сколько процедур необходимо?',
        answer: 'Количество процедур зависит от тяжести проблемы. Как правило, требуется 1-3 процедуры с интервалом 4-8 недель между ними.',
      },
      {
        question: 'Когда будут видны результаты?',
        answer: 'Первое улучшение заметно через 2-3 недели после процедуры. Полные результаты формируются через 2-3 месяца, когда вены полностью рассасываются.',
      },
      {
        question: 'Есть ли период восстановления?',
        answer: 'После склеротерапии можно практически сразу вернуться к обычной деятельности. Рекомендуется избегать интенсивных физических нагрузок и прямого солнечного воздействия в течение 48 часов.',
      },
      {
        question: 'Результат постоянный?',
        answer: 'Пролеченные вены исчезают навсегда. Однако со временем могут появиться новые вены из-за генетических факторов, беременности или образа жизни. Рекомендуются периодические поддерживающие процедуры.',
      },
      {
        question: 'Есть ли ограничения перед процедурой?',
        answer: 'Необходимо воздержаться от приёма аспирина и антикоагулянтов за 48 часов до процедуры. Также следует прийти в удобной одежде и не наносить крем на область обработки.',
      },
    ],
    ctaTitle: 'Хотите избавиться от проблемных вен?',
    ctaSubtitle: 'Свяжитесь с нами для бесплатной первичной консультации',
  },
  beautyInjections: {
    heroTag: 'Инъекции красоты',
    heroTitle: 'Естественная и точная коррекция лица',
    heroSubtitle: 'Современные процедуры для обновления кожи, коррекции контуров лица и естественного омоложения',
    treatmentsTitle: 'Спектр инъекционных процедур',
    treatmentsSubtitle: 'Индивидуальное решение для каждой потребности',
    lipTitle: 'Увеличение и коррекция губ',
    lipDesc: 'Увеличение и коррекция губ гиалуроновой кислотой для естественного объёма и чёткого контура. Процедура подходит для женщин, желающих более полных и выразительных губ, сохраняя естественный вид.',
    lipBenefits: ['Естественный сбалансированный объём', 'Чёткий контур губ', 'Повышенная увлажнённость', 'Результат до 12 месяцев'],
    botoxTitle: 'Ботокс',
    botoxDesc: 'Профессиональные инъекции ботокса для сглаживания мимических морщин на лбу, межбровной области и вокруг глаз. Деликатный подход для естественных результатов с сохранением мимики.',
    botoxBenefits: ['Разглаживание мимических морщин', 'Сохранение естественной мимики', 'Быстрые результаты', 'Без периода восстановления'],
    contourTitle: 'Контурная пластика лица',
    contourDesc: 'Использование гиалуроновой кислоты для коррекции контуров лица, подчёркивания скул, восполнения объёма и коррекции возрастных изменений.',
    contourBenefits: ['Коррекция скул и нижней челюсти', 'Восполнение утраченного объёма', 'Свежий и молодой вид', 'Результат до 18 месяцев'],
    mesotherapyTitle: 'Мезотерапия для волос',
    mesotherapyDesc: 'Введение коктейля витаминов, минералов и активных веществ непосредственно в кожу головы для укрепления редких волос, предотвращения выпадения и стимуляции роста новых волос.',
    mesotherapyBenefits: ['Уменьшение выпадения волос', 'Укрепление корней волос', 'Стимуляция роста', 'Улучшение структуры волос'],
    radiessTitle: 'Radiesse',
    radiessDesc: 'Наполнитель с естественным эффектом лифтинга. Radiesse содержит кальциевые микросферы, которые стимулируют выработку собственного коллагена, обеспечивая долгосрочные результаты до двух лет.',
    radiessBenefits: ['Естественный лифтинг', 'Стимуляция коллагена', 'Долгосрочные результаты', 'Подходит для лица и тела'],
    polynucleotidesTitle: 'Полинуклеотиды (PDRN)',
    polynucleotidesDesc: 'Передовая биологическая терапия, использующая полинуклеотиды из лосося для обновления, увлажнения и восстановления клеток кожи. Особенно подходит для усталой, повреждённой и обезвоженной кожи.',
    polynucleotidesBenefits: ['Клеточное обновление кожи', 'Глубокое увлажнение', 'Восстановление после фотоповреждений', 'Гладкая текстура кожи'],
    biorevitTitle: 'Биоревитализация',
    biorevitDesc: 'Инъекции высококонцентрированной гиалуроновой кислоты для глубокого обновления и увлажнения кожи. Процедура подходит для всех типов кожи и обеспечивает мгновенное сияние и мягкость.',
    biorevitBenefits: ['Глубокое и длительное увлажнение', 'Улучшение эластичности кожи', 'Уменьшение мелких морщин', 'Сияние и свежесть'],
    philosophyTitle: 'Наша философия: естественные результаты',
    philosophySubtitle: 'Меньше — значит лучше',
    philosophyText: 'Мы убеждены, что эстетические процедуры должны улучшать вашу естественную красоту, а не заменять её. Наш подход консервативный и точный — каждая процедура направлена на достижение деликатных и аутентичных результатов, которые подчёркивают ваш естественный вид.',
    safetyTitle: 'Безопасность и качество',
    safetySubtitle: 'Ваша безопасность — наш приоритет',
    safety1: 'Использование только зарегистрированных и одобренных препаратов',
    safety2: 'Соблюдение строгих рабочих протоколов',
    safety3: 'Подробная консультация перед каждой процедурой',
    safety4: 'Наблюдение после процедуры и полная поддержка',
    faqTitle: 'Часто задаваемые вопросы об инъекциях красоты',
    faqItems: [
      {
        question: 'Болезненны ли инъекции?',
        answer: 'Перед процедурой мы наносим местный анестезирующий крем для минимизации дискомфорта. Большинство пациенток описывают лишь лёгкое покалывание.',
      },
      {
        question: 'Как долго сохраняется эффект ботокса?',
        answer: 'Результат ботокса обычно сохраняется 3-6 месяцев. При регулярных повторных процедурах эффект может продлиться дольше.',
      },
      {
        question: 'Можно ли сочетать несколько процедур?',
        answer: 'Да, нередко мы рекомендуем сочетание процедур для достижения оптимального результата. Вместе составим подходящий план лечения.',
      },
      {
        question: 'Каков период восстановления после инъекций?',
        answer: 'Как правило, можно вернуться к обычной деятельности сразу после процедуры. Возможны небольшое покраснение и синяки, которые проходят в течение 24-48 часов.',
      },
      {
        question: 'Можно ли делать инъекции во время беременности?',
        answer: 'Инъекции красоты не рекомендуются во время беременности и в период грудного вскармливания. Мы с удовольствием проконсультируем вас об альтернативных процедурах в этот период.',
      },
      {
        question: 'В чём разница между гиалуроновой кислотой и ботоксом?',
        answer: 'Ботокс расслабляет мышцы для разглаживания мимических морщин, тогда как гиалуроновая кислота восполняет объём и наполняет. Чаще всего оба препарата используются в сочетании для оптимального результата.',
      },
    ],
    ctaTitle: 'Хотите засиять прямо сейчас?',
    ctaSubtitle: 'Запишитесь на бесплатную консультацию и узнайте, какая процедура подходит именно вам',
  },
  laserProcedures: {
    heroTag: 'Лазерные процедуры',
    heroTitle: 'Передовые лазерные технологии для идеальной кожи',
    heroSubtitle: 'Лазерные решения для различных проблем кожи — розацеа, рубцы, пигментация, сосуды и многое другое',
    concernsTitle: 'Проблемы кожи, которые мы лечим',
    concernsSubtitle: 'Современный лазер для каждой задачи',
    concern1: 'Розацеа',
    concern2: 'Рубцы',
    concern3: 'Пигментация',
    concern4: 'Сосуды',
    concern5: 'Старение',
    concern6: 'Текстура кожи',
    rosaceaTitle: 'Лечение розацеа',
    rosaceaDesc: 'Эффективное лазерное лечение розацеа, хронического покраснения и видимых сосудов на лице. Лазер воздействует целенаправленно на сосуды, ответственные за покраснение, не затрагивая окружающую кожу.',
    rosaceaResults: 'Значительное улучшение покраснения после 2-4 процедур',
    scarsTitle: 'Лечение рубцов',
    scarsDesc: 'Фракционные лазерные процедуры для улучшения внешнего вида рубцов — от акне до хирургических рубцов. Лазер стимулирует выработку нового коллагена, улучшая текстуру и внешний вид рубца.',
    scarsResults: 'Снижение заметности рубца на 60-80% после курса процедур',
    pigmentationTitle: 'Удаление пигментации',
    pigmentationDesc: 'Целенаправленное лазерное лечение для удаления пятен от солнца, мелазмы и других пигментных образований. Лазер разрушает меланиновый пигмент, оставляя ровный и чистый тон кожи.',
    pigmentationResults: 'Более ровная и осветлённая кожа после 1-3 процедур',
    vesselTitle: 'Удаление сосудов',
    vesselDesc: 'Лазерное лечение для закрытия мелких вен и видимых сосудов на лице и теле. Подходит для купероза, мелких красных вен и т.д.',
    vesselResults: 'Закрытие видимых сосудов после 1-2 процедур',
    rejuvTitle: 'Обновление и омоложение кожи',
    rejuvDesc: 'Лазерная процедура для улучшения текстуры, придания сияния и глубокого массажа для клеточного обновления. Подходит для тех, кто ищет общее улучшение внешнего вида и качества кожи.',
    rejuvResults: 'Свежая и сияющая кожа с заметным улучшением текстуры',
    erbiumTitle: 'Эрбиевый пилинг 360°',
    erbiumDesc: 'Передовой эрбиевый лазерный пилинг, воздействующий на все слои кожи одновременно. Процедура удаляет отмершие клетки кожи, сглаживает мелкие морщины и глубоко обновляет кожу.',
    erbiumResults: 'Гладкая и обновлённая кожа с драматическим улучшением после одной процедуры',
    techTitle: 'Наши технологии',
    techSubtitle: 'Лазерное оборудование последнего поколения',
    techDesc: 'Мы работаем с наиболее передовыми лазерными аппаратами в мире, одобренными FDA и соответствующими строгим медицинским стандартам. Наши технологии позволяют проводить лечение с максимальной точностью, защищая здоровую кожу.',
    faqTitle: 'Часто задаваемые вопросы о лазерных процедурах',
    faqItems: [
      {
        question: 'Подходят ли лазерные процедуры для всех типов кожи?',
        answer: 'Существуют лазеры, подходящие для всех тонов кожи. На консультации мы изучим ваш тип кожи и порекомендуем наиболее подходящее лечение.',
      },
      {
        question: 'Болезненна ли процедура?',
        answer: 'Уровень дискомфорта варьируется в зависимости от процедуры. Чаще всего ощущается лёгкое тепло и покалывание. Мы используем различные методы обезболивания для снижения дискомфорта.',
      },
      {
        question: 'Что происходит после процедуры?',
        answer: 'После интенсивных лазерных процедур возможны покраснение и ощущение тепла, которые проходят в течение одного-двух дней. Необходимо защищать кожу от солнца и использовать солнцезащитный крем высокой степени защиты.',
      },
      {
        question: 'Сколько процедур нужно для результата?',
        answer: 'Количество процедур зависит от проблемы и типа лазера. Обычно 3-6 процедур с интервалом 4-6 недель.',
      },
      {
        question: 'Когда появятся первые результаты?',
        answer: 'Первоначальное улучшение обычно заметно после первой процедуры, но полные результаты развиваются в течение 3-6 месяцев по мере выработки нового коллагена.',
      },
      {
        question: 'Что нужно делать перед лазерной процедурой?',
        answer: 'Необходимо избегать пребывания на солнце за 2-4 недели до процедуры, прекратить приём препаратов, разжижающих кровь, по показаниям, и не использовать ретинол-содержащие кремы за неделю до процедуры.',
      },
    ],
    ctaTitle: 'Хотите гладкую и здоровую кожу?',
    ctaSubtitle: 'Свяжитесь с нами для бесплатной лазерной консультации',
  },
  about: {
    heroTag: 'О специалисте',
    heroTitle: 'Д-р [Имя врача]',
    heroSubtitle: 'Специалист по эстетической медицине и лечению вен — приверженность естественным и профессиональным результатам',
    bioTitle: 'Моя история',
    bioText1: 'Выпускница медицинского факультета со специализацией в области эстетической и инвазивной медицины. За годы обширной работы я накопила богатый опыт в лечении вен, инъекциях красоты и широком спектре лазерных процедур.',
    bioText2: 'Моя лечебная философия основана на понимании того, что каждая пациентка уникальна. Я специализируюсь на создании естественных и аутентичных результатов, которые повышают уверенность в себе, не меняя сути.',
    bioText3: 'На протяжении многих лет я обслуживала тысячи пациенток и завоевала репутацию профессионализма, надёжности и внимательности. Каждая пациентка получает от меня полное внимание, честную консультацию и индивидуальный план лечения.',
    credentialsTitle: 'Квалификация и сертификаты',
    credential1: 'Диплом врача, ведущий университет',
    credential2: 'Международная сертификация по склеротерапии',
    credential3: 'Курс повышения квалификации по инъекциям гиалуроновой кислоты и ботокса',
    credential4: 'Сертификация по лазерным процедурам — ведущие платформы',
    credential5: 'Член израильской медицинской ассоциации',
    philosophyTitle: 'Мой подход',
    philosophyText: 'Я убеждена, что успешное эстетическое лечение — это то, которое незаметно: оно приносит деликатное и лестное улучшение, не отступая от естественного вида. Мой подход консервативный, точный и всегда сосредоточенный на реальных потребностях пациентки.',
    galleryTitle: 'Наша клиника',
    gallery1: 'Кабинет консультаций',
    gallery2: 'Процедурный кабинет',
    gallery3: 'Холл клиники',
    ctaTitle: 'Приходите познакомиться',
    ctaSubtitle: 'Запишитесь на бесплатную первичную консультацию',
  },
  results: {
    heroTag: 'Результаты и отзывы',
    heroTitle: 'Реальные результаты реальных женщин',
    heroSubtitle: 'Галерея до и после и отзывы женщин, переживших перемены',
    galleryTitle: 'До и после',
    galleryLabel: 'Процедура',
    beforeLabel: 'До',
    afterLabel: 'После',
    testimonialsTitle: 'Что говорят наши пациентки',
    testimonialsSubtitle: 'Реальные отзывы довольных женщин',
    trustTitle: 'Почему стоит нам доверять',
    trust1: 'Сотни довольных пациенток',
    trust2: 'Проверяемые результаты',
    trust3: 'Реальные, неспонсируемые отзывы',
    disclaimer: 'Фотографии до и после представлены с согласия пациенток. Результаты могут варьироваться от человека к человеку. Все процедуры выполняются только сертифицированным специалистом.',
    ctaTitle: 'Хотите увидеть такие же результаты у себя?',
    ctaSubtitle: 'Свяжитесь с нами для первичной консультации',
  },
  contact: {
    heroTag: 'Контакты',
    heroTitle: 'Мы рады услышать вас',
    heroSubtitle: 'Запишитесь, задайте вопрос или приходите на бесплатную консультацию',
    formTitle: 'Напишите нам',
    nameLabel: 'Полное имя',
    namePlaceholder: 'Ваше имя',
    phoneLabel: 'Номер телефона',
    phonePlaceholder: '05X-XXX-XXXX',
    treatmentLabel: 'Область интереса',
    treatmentVein: 'Лечение вен',
    treatmentBeauty: 'Инъекции красоты',
    treatmentLaser: 'Лазерные процедуры',
    treatmentOther: 'Другое',
    messageLabel: 'Сообщение',
    messagePlaceholder: 'Расскажите, чем мы можем помочь...',
    submitBtn: 'Отправить сообщение',
    successMessage: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.',
    infoTitle: 'Контактная информация',
    phoneInfo: '+972-50-123-4567',
    whatsappInfo: 'WhatsApp: +972-50-123-4567',
    addressInfo: 'Тель-Авив, Израиль',
    hoursTitle: 'Часы работы',
    hours1: 'Воскресенье – четверг: 9:00–19:00',
    hours2: 'Пятница: 9:00–14:00',
    hours3: 'Суббота: закрыто',
    whatsappPrompt: 'Предпочитаете написать? Отправьте нам сообщение в WhatsApp, и мы ответим в течение часа',
    mapPlaceholder: 'Карта — скоро',
    ctaTitle: 'Готовы сделать первый шаг?',
    ctaSubtitle: 'Запишитесь на бесплатную консультацию без обязательств',
  },
  faq: {
    heroTag: 'Частые вопросы',
    heroTitle: 'Все вопросы, которые вы хотели задать',
    heroSubtitle: 'Ответы на наиболее часто задаваемые вопросы о наших процедурах',
    items: [
      {
        question: 'Болезненны ли процедуры?',
        answer: 'Уровень дискомфорта варьируется в зависимости от процедуры. Как правило, применяется местный анестезирующий крем или охлаждение до и во время процедуры. Большинство пациенток описывают лишь лёгкое покалывание.',
      },
      {
        question: 'Сколько сеансов нужно для каждой процедуры?',
        answer: 'Количество сеансов зависит от типа процедуры и проблемы. Склеротерапия обычно требует 1-3 сеанса, ботокс — один сеанс, лазер — 3-6 сеансов. Вместе спланируем курс лечения.',
      },
      {
        question: 'Когда я увижу результаты?',
        answer: 'Некоторые процедуры показывают первые результаты сразу, другие — через несколько недель. Например: ботокс — 5-14 дней; инъекции гиалуроновой кислоты — сразу; лазер — 4-12 недель.',
      },
      {
        question: 'Каков период восстановления?',
        answer: 'Для большинства процедур период восстановления минимален. После большинства процедур можно сразу вернуться к работе и повседневным делам. После интенсивных лазерных пилингов возможно покраснение в течение 2-5 дней.',
      },
      {
        question: 'Подходят ли процедуры всем?',
        answer: 'Большинство процедур подходят мужчинам и женщинам всех возрастов. Некоторые состояния (беременность, определённые лекарства, хронические заболевания) могут быть противопоказаниями. Это обсудим вместе на консультации.',
      },
      {
        question: 'Является ли первичная консультация бесплатной?',
        answer: 'Да! Мы предлагаем бесплатную первичную консультацию без каких-либо обязательств. На этой встрече мы оценим состояние вашей кожи, выслушаем ваши пожелания и предложим индивидуальный план лечения.',
      },
      {
        question: 'Как ухаживать за кожей после процедуры?',
        answer: 'Инструкции по уходу после каждой процедуры предоставляются в письменном виде. Как правило, они включают: защиту от солнца, увлажнение, отказ от определённых средств и ограничение физической нагрузки на время.',
      },
      {
        question: 'Сколько стоят процедуры?',
        answer: 'Стоимость варьируется в зависимости от типа процедуры, обрабатываемой зоны и количества сеансов. Мы полностью прозрачны в вопросах стоимости на консультации и стараемся предложить решения для любого бюджета.',
      },
    ],
    ctaTitle: 'Остались вопросы?',
    ctaSubtitle: 'Свяжитесь с нами напрямую, и мы с удовольствием поможем',
  },
};

export const i18n: Record<Lang, Translations> = { he, ru };
