'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABlock from '@/components/ui/CTABlock';
import {
  SparkleIcon,
  StarIcon,
  CheckCircleIcon,
  FlowerIcon,
  MicroscopeIcon,
  EyeIcon,
  LeafIcon,
  ShieldIcon,
} from '@/components/ui/Icons';
import React from 'react';

function LaserProceduresContent() {
  const lang = useLang();
  const t = i18n[lang];
  const lp = t.laserProcedures;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const concerns: { icon: React.ReactNode; text: string }[] = [
    { icon: <FlowerIcon className="w-6 h-6" />, text: lp.concern1 },
    { icon: <SparkleIcon className="w-6 h-6" />, text: lp.concern2 },
    { icon: <LeafIcon className="w-6 h-6" />, text: lp.concern3 },
    { icon: <CheckCircleIcon className="w-6 h-6" />, text: lp.concern4 },
    { icon: <EyeIcon className="w-6 h-6" />, text: lp.concern5 },
    { icon: <ShieldIcon className="w-6 h-6" />, text: lp.concern6 },
  ];

  const treatmentBlocks: { icon: React.ReactNode; title: string; desc: string; results: string }[] = [
    { icon: <FlowerIcon className="w-8 h-8" />, title: lp.rosaceaTitle, desc: lp.rosaceaDesc, results: lp.rosaceaResults },
    { icon: <SparkleIcon className="w-8 h-8" />, title: lp.scarsTitle, desc: lp.scarsDesc, results: lp.scarsResults },
    { icon: <LeafIcon className="w-8 h-8" />, title: lp.pigmentationTitle, desc: lp.pigmentationDesc, results: lp.pigmentationResults },
    { icon: <CheckCircleIcon className="w-8 h-8" />, title: lp.vesselTitle, desc: lp.vesselDesc, results: lp.vesselResults },
    { icon: <SparkleIcon className="w-8 h-8" />, title: lp.rejuvTitle, desc: lp.rejuvDesc, results: lp.rejuvResults },
    { icon: <MicroscopeIcon className="w-8 h-8" />, title: lp.erbiumTitle, desc: lp.erbiumDesc, results: lp.erbiumResults },
  ];

  return (
    <>
      <SectionHero
        tag={lp.heroTag}
        title={lp.heroTitle}
        subtitle={lp.heroSubtitle}
        bgColor="secondary"
        cta={{ text: t.common.bookBtn, href: buildHref('/contact') }}
      />

      {/* Skin concerns — white */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Показания' : 'בעיות שאנחנו מטפלים'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {lp.concernsTitle}
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {lp.concernsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {concerns.map((c) => (
              <div
                key={c.text}
                className="card-hover flex flex-col items-center p-5 rounded-2xl text-center"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <span className="mb-3" style={{ color: 'var(--color-accent)' }}>{c.icon}</span>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment blocks — alternating */}
      {treatmentBlocks.map((block, idx) => (
        <section
          key={block.title}
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-secondary-bg)' : 'var(--color-white)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: 'var(--color-accent)' }}>{block.icon}</span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                      >
                        {block.title}
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--color-text-secondary)' }}>
                      {block.desc}
                    </p>
                    <div
                      className="flex items-start gap-3 p-5 rounded-2xl"
                      style={{ backgroundColor: 'var(--color-white)' }}
                    >
                      <StarIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--color-accent-dark)' }}>
                        {block.results}
                      </p>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      aspectRatio: '4/3',
                      backgroundColor: 'var(--color-accent-light)',
                      opacity: 0.65,
                    }}
                  >
                    <span className="w-16 h-16 flex items-center justify-center" style={{ color: 'var(--color-accent-dark)', opacity: 0.7 }}>{block.icon}</span>
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
                    <span className="w-16 h-16 flex items-center justify-center" style={{ color: 'var(--color-accent-light)' }}>{block.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: 'var(--color-accent)' }}>{block.icon}</span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                      >
                        {block.title}
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--color-text-secondary)' }}>
                      {block.desc}
                    </p>
                    <div
                      className="flex items-start gap-3 p-5 rounded-2xl"
                      style={{ backgroundColor: 'var(--color-bg)' }}
                    >
                      <StarIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--color-accent-dark)' }}>
                        {block.results}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Technology — secondary-bg */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-white)', boxShadow: '0 4px 16px rgba(168,98,104,0.12)' }}
            >
              <MicroscopeIcon className="w-8 h-8" style={{ color: 'var(--color-accent-dark)' }} />
            </div>
          </div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            {lp.techSubtitle}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
          >
            {lp.techTitle}
          </h2>
          <span className="section-divider mb-6 block" />
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {lp.techDesc}
          </p>
        </div>
      </section>

      {/* FAQ — white */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
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
              {lp.faqTitle}
            </h2>
          </div>
          <FAQAccordion items={lp.faqItems} />
        </div>
      </section>

      <CTABlock
        title={lp.ctaTitle}
        subtitle={lp.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function LaserProceduresPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <LaserProceduresContent />
    </Suspense>
  );
}
