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
      />

      {/* Skin Concerns Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {lp.concernsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {lp.concernsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {concerns.map((c) => (
              <div
                key={c.text}
                className="flex flex-col items-center p-4 rounded-xl border text-center"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
              >
                <span className="mb-2" style={{ color: 'var(--color-accent)' }}>{c.icon}</span>
                <p
                  className="text-xs font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Blocks */}
      {treatmentBlocks.map((block, idx) => (
        <section
          key={block.title}
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-secondary-bg)' : 'var(--color-white)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                      {block.desc}
                    </p>
                    <div
                      className="flex items-center gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    >
                      <StarIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent-dark)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--color-accent-dark)' }}>
                        {block.results}
                      </p>
                    </div>
                  </div>
                  <div
                    className="h-64 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}
                  >
                    <span className="w-20 h-20">{block.icon}</span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="h-64 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}
                  >
                    <span className="w-20 h-20">{block.icon}</span>
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
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                      {block.desc}
                    </p>
                    <div
                      className="flex items-center gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    >
                      <StarIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent-dark)' }} />
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

      {/* Technology Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="flex justify-center mb-4" style={{ color: 'var(--color-accent)' }}>
            <MicroscopeIcon className="w-12 h-12" />
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-accent)' }}
          >
            {lp.techSubtitle}
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mt-2 mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {lp.techTitle}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {lp.techDesc}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {lp.faqTitle}
          </h2>
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
