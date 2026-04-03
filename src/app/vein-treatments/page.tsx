'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABlock from '@/components/ui/CTABlock';

function VeinTreatmentsContent() {
  const lang = useLang();
  const t = i18n[lang];
  const vt = t.veinTreatments;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const symptoms = [
    { icon: '🔴', text: vt.symptom1 },
    { icon: '🦵', text: vt.symptom2 },
    { icon: '😣', text: vt.symptom3 },
    { icon: '💧', text: vt.symptom4 },
    { icon: '🌀', text: vt.symptom5 },
    { icon: '🎨', text: vt.symptom6 },
  ];

  return (
    <>
      <SectionHero
        tag={vt.heroTag}
        title={vt.heroTitle}
        subtitle={vt.heroSubtitle}
        bgColor="secondary"
      />

      {/* Symptoms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {vt.symptomsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {vt.symptomsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((s) => (
              <div
                key={s.text}
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
              >
                <span className="text-2xl mt-0.5">{s.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sclerotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {vt.sclerotherapyTitle}
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            {vt.sclerotherapyDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)' }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
              >
                {vt.sclerotherapyHowTitle}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {vt.sclerotherapyHow}
              </p>
            </div>
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)' }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
              >
                {vt.sclerotherapyResultsTitle}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {vt.sclerotherapyResults}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laser vessel removal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* placeholder image */}
            <div
              className="h-64 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent-light)' }}
            >
              <span className="text-5xl">⚡</span>
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
              >
                {vt.laserVesselTitle}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {vt.laserVesselDesc}
              </p>
              <ul className="space-y-3">
                {[vt.laserVesselBenefit1, vt.laserVesselBenefit2, vt.laserVesselBenefit3].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs"
                      style={{ backgroundColor: 'var(--color-accent)' }}>
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {vt.candidateTitle}
          </h2>
          <p className="text-base mb-6" style={{ color: 'var(--color-text-secondary)' }}>{vt.candidateDesc}</p>
          <ul className="space-y-3">
            {[vt.candidate1, vt.candidate2, vt.candidate3, vt.candidate4].map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {vt.faqTitle}
          </h2>
          <FAQAccordion items={vt.faqItems} />
        </div>
      </section>

      <CTABlock
        title={vt.ctaTitle}
        subtitle={vt.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function VeinTreatmentsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <VeinTreatmentsContent />
    </Suspense>
  );
}
