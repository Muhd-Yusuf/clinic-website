'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABlock from '@/components/ui/CTABlock';
import { CheckCircleIcon, SparkleIcon, SyringeIcon } from '@/components/ui/Icons';

function VeinTreatmentsContent() {
  const lang = useLang();
  const t = i18n[lang];
  const vt = t.veinTreatments;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const symptoms = [
    { icon: <SyringeIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom1 },
    { icon: <SyringeIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom2 },
    { icon: <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom3 },
    { icon: <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom4 },
    { icon: <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom5 },
    { icon: <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />, text: vt.symptom6 },
  ];

  return (
    <>
      <SectionHero
        tag={vt.heroTag}
        title={vt.heroTitle}
        subtitle={vt.heroSubtitle}
        bgColor="secondary"
        cta={{ text: t.common.bookBtn, href: buildHref('/contact') }}
      />

      {/* Symptoms — white band */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Когда обратиться' : 'מתי לפנות לטיפול'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {vt.symptomsTitle}
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {vt.symptomsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((s) => (
              <div
                key={s.text}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>{s.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sclerotherapy — secondary-bg band */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Основной метод' : 'שיטת הטיפול העיקרית'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {vt.sclerotherapyTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
              {vt.sclerotherapyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
              >
                {vt.sclerotherapyHowTitle}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {vt.sclerotherapyHow}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <h3
                className="text-xl font-bold mb-4"
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

      {/* Laser vessel removal — white band */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder — rounded-2xl */}
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{
                aspectRatio: '4/3',
                backgroundColor: 'var(--color-secondary-bg)',
                border: '1px solid var(--color-border)',
              }}
            >
              <SparkleIcon className="w-16 h-16" style={{ color: 'var(--color-accent-light)' }} />
            </div>
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                {isRu ? 'Лазерный метод' : 'לייזר לוריד'}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-5"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
              >
                {vt.laserVesselTitle}
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: 'var(--color-text-secondary)' }}>
                {vt.laserVesselDesc}
              </p>
              <ul className="space-y-4">
                {[vt.laserVesselBenefit1, vt.laserVesselBenefit2, vt.laserVesselBenefit3].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates — secondary-bg band */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Показания' : 'מי מתאים לטיפול'}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {vt.candidateTitle}
            </h2>
            <p className="text-base mb-7 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
              {vt.candidateDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[vt.candidate1, vt.candidate2, vt.candidate3, vt.candidate4].map((c) => (
              <div key={c} className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm">
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — white bg */}
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
              {vt.faqTitle}
            </h2>
          </div>
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
