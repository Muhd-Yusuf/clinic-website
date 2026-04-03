'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';
import Link from 'next/link';

function HomeContent() {
  const lang = useLang();
  const t = i18n[lang];
  const h = t.home;
  const isRu = lang === 'ru';

  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-text-primary)',
              }}
            >
              {h.heroHeadline}
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {h.heroSubheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href={buildHref('/contact')}
                className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {h.heroBookBtn}
              </Link>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold border-2 transition-colors hover:bg-[color:var(--color-secondary-bg)]"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                {h.heroWhatsappBtn}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: '🏅', text: h.trustCertified },
                { icon: '⭐', text: h.trustYears },
                { icon: '✨', text: h.trustNatural },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="text-xl">{badge.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image placeholder */}
          <div
            className="w-full h-72 sm:h-96 rounded-2xl flex items-center justify-center text-center p-8"
            style={{ backgroundColor: 'var(--color-accent-light)' }}
          >
            <div>
              <div className="text-5xl mb-4">💆‍♀️</div>
              <p
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-accent-dark)' }}
              >
                {t.common.clinicName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.servicesTitle}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {h.servicesSubtitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🩺"
              title={t.nav.veinTreatments}
              description={t.veinTreatments.heroSubtitle}
              href={buildHref('/vein-treatments')}
              learnMoreLabel={t.common.learnMore}
            />
            <ServiceCard
              icon="💉"
              title={t.nav.beautyInjections}
              description={t.beautyInjections.heroSubtitle}
              href={buildHref('/beauty-injections')}
              learnMoreLabel={t.common.learnMore}
            />
            <ServiceCard
              icon="⚡"
              title={t.nav.laserProcedures}
              description={t.laserProcedures.heroSubtitle}
              href={buildHref('/laser-procedures')}
              learnMoreLabel={t.common.learnMore}
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {h.whyUsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {h.whyUsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎓', title: h.whyUs1Title, desc: h.whyUs1Desc },
              { icon: '🔬', title: h.whyUs2Title, desc: h.whyUs2Desc },
              { icon: '🤝', title: h.whyUs3Title, desc: h.whyUs3Desc },
              { icon: '🌸', title: h.whyUs4Title, desc: h.whyUs4Desc },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)' }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialist Preview ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div
            className="w-full h-80 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-secondary-bg)' }}
          >
            <div className="text-center">
              <div className="text-6xl mb-3">👩‍⚕️</div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                {t.about.heroTitle}
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.specialistTitle}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {h.specialistSubtitle}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              {h.specialistBio}
            </p>
            <Link
              href={buildHref('/about')}
              className="font-semibold transition-colors hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.specialistLink}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {h.testimonialsTitle}
            </h2>
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              {h.testimonialsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lang === 'he' ? (
              <>
                <TestimonialCard
                  name="מיכל כ."
                  text="הטיפול היה מדהים! ד&quot;ר [שם] הסבירה לי את כל התהליך ותוצאות הסקלרותרפיה היו מעל הציפיות."
                  treatment="סקלרותרפיה"
                  rating={5}
                />
                <TestimonialCard
                  name="רחל ש."
                  text="קיבלתי בוטוקס ומיד הרגשתי שינוי! הגישה הטבעית של הרופאה הפתיעה אותי לטובה."
                  treatment="בוטוקס"
                  rating={5}
                />
                <TestimonialCard
                  name="נועה ב."
                  text="טיפולי הלייזר שיפרו את הרוזציאה שלי בצורה משמעותית. מאוד מרוצה מהשירות."
                  treatment="לייזר לרוזציאה"
                  rating={5}
                />
              </>
            ) : (
              <>
                <TestimonialCard
                  name="Анна М."
                  text="Процедура была потрясающей! Врач объяснила весь процесс, и результаты склеротерапии превзошли мои ожидания."
                  treatment="Склеротерапия"
                  rating={5}
                />
                <TestimonialCard
                  name="Елена К."
                  text="Получила ботокс и сразу почувствовала разницу! Естественный подход врача приятно удивил."
                  treatment="Ботокс"
                  rating={5}
                />
                <TestimonialCard
                  name="Ирина Б."
                  text="Лазерные процедуры значительно улучшили мою розацеа. Очень довольна сервисом."
                  treatment="Лазер от розацеа"
                  rating={5}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Consultation Process ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {h.processTitle}
          </h2>
          <p className="text-base mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            {h.processSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: '01', title: h.step1Title, desc: h.step1Desc, icon: '📅' },
              { step: '02', title: h.step2Title, desc: h.step2Desc, icon: '💬' },
              { step: '03', title: h.step3Title, desc: h.step3Desc, icon: '✅' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 relative"
                  style={{ backgroundColor: 'var(--color-secondary-bg)' }}
                >
                  {item.icon}
                  <span
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Block ── */}
      <CTABlock
        title={h.ctaTitle}
        subtitle={h.ctaSubtitle}
        primaryBtn={{ text: h.ctaPrimary, href: buildHref('/contact') }}
        secondaryBtn={{ text: h.ctaSecondary, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <HomeContent />
    </Suspense>
  );
}
