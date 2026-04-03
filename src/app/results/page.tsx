'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';
import { ShieldIcon, CheckCircleIcon, ChatIcon, EyeIcon } from '@/components/ui/Icons';
import React from 'react';

function ResultsContent() {
  const lang = useLang();
  const t = i18n[lang];
  const res = t.results;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const galleryItems: { treatment: string; icon: React.ReactNode }[] =
    lang === 'he'
      ? [
          { treatment: 'סקלרותרפיה', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'בוטוקס', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'עיצוב שפתיים', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'לייזר לפיגמנטציה', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'קונטור פנים', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'ביוריביטליזציה', icon: <EyeIcon className="w-8 h-8" /> },
        ]
      : [
          { treatment: 'Склеротерапия', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'Ботокс', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'Коррекция губ', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'Лазер от пигментации', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'Контур лица', icon: <EyeIcon className="w-8 h-8" /> },
          { treatment: 'Биоревитализация', icon: <EyeIcon className="w-8 h-8" /> },
        ];

  const testimonials =
    lang === 'he'
      ? [
          { name: 'דנה מ.', text: 'שינוי עצום! הסקלרותרפיה עזרה לי כבר אחרי הטיפול הראשון. ממליצה בחום!', treatment: 'סקלרותרפיה', rating: 5 as const },
          { name: 'לימור כ.', text: 'הבוטוקס נראה כל כך טבעי! ד"ר הסבירה לי הכל לפני הטיפול ואני מרוצה מאוד.', treatment: 'בוטוקס', rating: 5 as const },
          { name: 'אורית ש.', text: 'הלייזר שיפר את עורי באופן דרמטי. השיפור בפיגמנטציה מדהים.', treatment: 'לייזר פיגמנטציה', rating: 5 as const },
          { name: 'שרה ל.', text: 'קיבלתי הזרקות שפתיים לראשונה ואני כל כך שמחה עם התוצאה. מאוד מקצועי!', treatment: 'עיצוב שפתיים', rating: 5 as const },
          { name: 'מיכל ג.', text: 'הביוריביטליזציה נתנה לעורי ברק ולחות שלא הרגשתי שנים. תוצאות מיידיות!', treatment: 'ביוריביטליזציה', rating: 5 as const },
        ]
      : [
          { name: 'Наталья В.', text: 'Огромная разница! Склеротерапия помогла мне уже после первой процедуры. Горячо рекомендую!', treatment: 'Склеротерапия', rating: 5 as const },
          { name: 'Людмила К.', text: 'Ботокс выглядит так естественно! Врач всё объяснила до процедуры — очень довольна.', treatment: 'Ботокс', rating: 5 as const },
          { name: 'Ольга Ш.', text: 'Лазер dramatically улучшил мою кожу. Улучшение пигментации просто потрясающее.', treatment: 'Лазер от пигментации', rating: 5 as const },
          { name: 'Светлана Л.', text: 'Впервые делала инъекции губ и так рада результату. Очень профессионально!', treatment: 'Коррекция губ', rating: 5 as const },
          { name: 'Марина Г.', text: 'Биоревитализация придала коже блеск и увлажнение, которого я не чувствовала годами!', treatment: 'Биоревитализация', rating: 5 as const },
        ];

  return (
    <>
      <SectionHero
        tag={res.heroTag}
        title={res.heroTitle}
        subtitle={res.heroSubtitle}
        bgColor="secondary"
      />

      {/* Before/After Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {res.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.treatment}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Before / After panels */}
                <div className="grid grid-cols-2 h-48">
                  <div
                    className="flex flex-col items-center justify-center gap-2 text-sm font-medium"
                    style={{ backgroundColor: 'var(--color-secondary-bg)', color: 'var(--color-text-secondary)' }}
                  >
                    <span className="opacity-50">{item.icon}</span>
                    <span>{res.beforeLabel}</span>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center gap-2 text-sm font-medium"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}
                  >
                    <span>{item.icon}</span>
                    <span>{res.afterLabel}</span>
                  </div>
                </div>
                <div
                  className="p-3 text-center text-xs font-medium"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-secondary)' }}
                >
                  {res.galleryLabel}: {item.treatment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {res.testimonialsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {res.testimonialsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((tm) => (
              <TestimonialCard
                key={tm.name}
                name={tm.name}
                text={tm.text}
                treatment={tm.treatment}
                rating={tm.rating}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {testimonials.slice(3).map((tm) => (
              <TestimonialCard
                key={tm.name}
                name={tm.name}
                text={tm.text}
                treatment={tm.treatment}
                rating={tm.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {res.trustTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <ShieldIcon className="w-10 h-10" />, text: res.trust1 },
              { icon: <CheckCircleIcon className="w-10 h-10" />, text: res.trust2 },
              { icon: <ChatIcon className="w-10 h-10" />, text: res.trust3 },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-3">
                <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section
        className="py-10 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs leading-relaxed text-center"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            * {res.disclaimer}
          </p>
        </div>
      </section>

      <CTABlock
        title={res.ctaTitle}
        subtitle={res.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <ResultsContent />
    </Suspense>
  );
}
