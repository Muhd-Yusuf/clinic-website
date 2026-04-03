'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABlock from '@/components/ui/CTABlock';
import {
  CheckCircleIcon,
  HeartIcon,
  SparkleIcon,
  FlowerIcon,
  MicroscopeIcon,
  LeafIcon,
  UserIcon,
} from '@/components/ui/Icons';
import React from 'react';

function BeautyInjectionsContent() {
  const lang = useLang();
  const t = i18n[lang];
  const bi = t.beautyInjections;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const treatments: { icon: React.ReactNode; title: string; desc: string; benefits: string[] }[] = [
    { icon: <HeartIcon className="w-8 h-8" />, title: bi.lipTitle, desc: bi.lipDesc, benefits: bi.lipBenefits },
    { icon: <SparkleIcon className="w-8 h-8" />, title: bi.botoxTitle, desc: bi.botoxDesc, benefits: bi.botoxBenefits },
    { icon: <FlowerIcon className="w-8 h-8" />, title: bi.contourTitle, desc: bi.contourDesc, benefits: bi.contourBenefits },
    { icon: <UserIcon className="w-8 h-8" />, title: bi.mesotherapyTitle, desc: bi.mesotherapyDesc, benefits: bi.mesotherapyBenefits },
    { icon: <SparkleIcon className="w-8 h-8" />, title: bi.radiessTitle, desc: bi.radiessDesc, benefits: bi.radiessBenefits },
    { icon: <MicroscopeIcon className="w-8 h-8" />, title: bi.polynucleotidesTitle, desc: bi.polynucleotidesDesc, benefits: bi.polynucleotidesBenefits },
    { icon: <LeafIcon className="w-8 h-8" />, title: bi.biorevitTitle, desc: bi.biorevitDesc, benefits: bi.biorevitBenefits },
  ];

  return (
    <>
      <SectionHero
        tag={bi.heroTag}
        title={bi.heroTitle}
        subtitle={bi.heroSubtitle}
        bgColor="secondary"
        cta={{ text: t.common.bookBtn, href: buildHref('/contact') }}
      />

      {/* Treatments overview — white */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Все процедуры' : 'כל הטיפולים'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {bi.treatmentsTitle}
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {bi.treatmentsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((tr) => (
              <div
                key={tr.title}
                className="card-hover p-5 rounded-2xl text-center"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <span className="flex justify-center mb-3" style={{ color: 'var(--color-accent)' }}>{tr.icon}</span>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                >
                  {tr.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed treatment blocks — alternating */}
      {treatments.map((tr, idx) => (
        <section
          key={tr.title}
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-secondary-bg)' : 'var(--color-white)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: 'var(--color-accent)' }}>{tr.icon}</span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                      >
                        {tr.title}
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--color-text-secondary)' }}>
                      {tr.desc}
                    </p>
                    <ul className="space-y-3">
                      {tr.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      aspectRatio: '4/3',
                      backgroundColor: 'var(--color-accent-light)',
                      opacity: 0.7,
                      color: 'var(--color-accent-dark)',
                    }}
                  >
                    <span className="w-20 h-20 flex items-center justify-center" style={{ color: 'var(--color-accent-dark)', opacity: 0.6 }}>{tr.icon}</span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      aspectRatio: '4/3',
                      backgroundColor: 'var(--color-secondary-bg)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span className="w-20 h-20 flex items-center justify-center" style={{ color: 'var(--color-accent-light)' }}>{tr.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: 'var(--color-accent)' }}>{tr.icon}</span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                      >
                        {tr.title}
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--color-text-secondary)' }}>
                      {tr.desc}
                    </p>
                    <ul className="space-y-3">
                      {tr.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Philosophy — secondary-bg */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            {bi.philosophySubtitle}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
          >
            {bi.philosophyTitle}
          </h2>
          <span className="section-divider mb-6 block" />
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {bi.philosophyText}
          </p>
        </div>
      </section>

      {/* Safety — white */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Безопасность' : 'בטיחות'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {bi.safetyTitle}
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--color-text-secondary)' }}>{bi.safetySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[bi.safety1, bi.safety2, bi.safety3, bi.safety4].map((s) => (
              <div
                key={s}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — secondary-bg */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Ответы на вопросы' : 'שאלות ותשובות'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {bi.faqTitle}
            </h2>
          </div>
          <FAQAccordion items={bi.faqItems} />
        </div>
      </section>

      <CTABlock
        title={bi.ctaTitle}
        subtitle={bi.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function BeautyInjectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <BeautyInjectionsContent />
    </Suspense>
  );
}
