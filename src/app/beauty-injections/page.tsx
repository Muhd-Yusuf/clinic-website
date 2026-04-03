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
      />

      {/* Treatments Grid Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {bi.treatmentsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {bi.treatmentsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((tr) => (
              <div
                key={tr.title}
                className="p-4 rounded-xl border text-center cursor-pointer transition-shadow hover:shadow-md"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
              >
                <span className="flex justify-center mb-2" style={{ color: 'var(--color-accent)' }}>{tr.icon}</span>
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

      {/* Detailed blocks for each treatment */}
      {treatments.map((tr, idx) => (
        <section
          key={tr.title}
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-secondary-bg)' : 'var(--color-white)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image placeholder (alternating sides) */}
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
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                      {tr.desc}
                    </p>
                    <ul className="space-y-2">
                      {tr.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="h-64 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}
                  >
                    <span className="w-20 h-20">{tr.icon}</span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="h-64 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}
                  >
                    <span className="w-20 h-20">{tr.icon}</span>
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
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                      {tr.desc}
                    </p>
                    <ul className="space-y-2">
                      {tr.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2">
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

      {/* Natural Results Philosophy */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-accent)' }}
          >
            {bi.philosophySubtitle}
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-2 mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {bi.philosophyTitle}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {bi.philosophyText}
          </p>
        </div>
      </section>

      {/* Safety section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {bi.safetyTitle}
            </h2>
            <p className="mt-2 text-base" style={{ color: 'var(--color-text-secondary)' }}>{bi.safetySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[bi.safety1, bi.safety2, bi.safety3, bi.safety4].map((s) => (
              <div
                key={s}
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {bi.faqTitle}
          </h2>
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
