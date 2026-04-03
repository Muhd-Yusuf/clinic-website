'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';
import Link from 'next/link';
import {
  ShieldIcon,
  StarIcon,
  LeafIcon,
  SyringeIcon,
  SparkleIcon,
  AcademicCapIcon,
  MicroscopeIcon,
  HeartIcon,
  FlowerIcon,
  UserIcon,
  CalendarIcon,
  ChatIcon,
  CheckCircleIcon,
} from '@/components/ui/Icons';

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
        className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        {/* Soft radial gradient blob — top right */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[55%] h-[80%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, #DBADB1 0%, rgba(219,173,177,0.18) 55%, transparent 80%)',
            borderRadius: '0 0 0 60%',
            opacity: 0.45,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left: text */}
          <div>
            {/* Thin accent tag */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.servicesTitle}
            </span>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-7"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.05',
              }}
            >
              {h.heroHeadline}
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {h.heroSubheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href={buildHref('/contact')}
                className="px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-base transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {h.heroBookBtn}
              </Link>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-sm sm:text-base border transition-all hover:bg-[color:var(--color-secondary-bg)]"
                style={{
                  borderColor: '#25D366',
                  color: '#25D366',
                }}
              >
                {h.heroWhatsappBtn}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-0">
              {[
                { icon: <ShieldIcon className="w-4 h-4" />, text: h.trustCertified },
                { icon: <StarIcon className="w-4 h-4" />, text: h.trustYears },
                { icon: <LeafIcon className="w-4 h-4" />, text: h.trustNatural },
              ].map((badge, i) => (
                <div key={badge.text} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="mx-4 h-4 w-px flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-border)' }}
                    />
                  )}
                  <div className="flex items-center gap-2">
                    <span style={{ color: 'var(--color-accent)' }}>{badge.icon}</span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {badge.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: refined image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Frame / photo placeholder — tall, aspect-[3/4] */}
            <div
              className="relative w-full max-w-[420px] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: '3/4',
                backgroundColor: 'var(--color-secondary-bg)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 20px 60px rgba(168,98,104,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              {/* Subtle inner frame detail */}
              <div
                className="absolute inset-3 rounded-xl pointer-events-none"
                style={{ border: '1px solid var(--color-accent-light)', opacity: 0.4 }}
              />

              <div className="flex flex-col items-center gap-4 p-8 text-center relative z-10">
                {/* Decorative circle */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-2"
                  style={{
                    background: 'radial-gradient(circle, #DBADB1 0%, #C4848A 100%)',
                    boxShadow: '0 8px 24px rgba(168,98,104,0.25)',
                  }}
                >
                  <UserIcon className="w-12 h-12" style={{ color: 'white' }} />
                </div>
                <p
                  className="text-base font-bold"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-accent-dark)' }}
                >
                  {t.common.clinicName}
                </p>
                <p className="text-xs tracking-wide" style={{ color: 'var(--color-text-secondary)' }}>
                  {isRu ? 'Премиум эстетика' : 'אסתטיקה פרימיום'}
                </p>
              </div>
            </div>

            {/* Floating credential badge — bottom-left of photo */}
            <div
              className="absolute bottom-8 -left-4 sm:-left-8 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg"
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-secondary-bg)' }}
              >
                <StarIcon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-playfair)' }}>
                  {isRu ? '10+ лет опыта' : '10+ שנות ניסיון'}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  {isRu ? 'Сертифицированный специалист' : 'מומחית מוסמכת'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className="py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.servicesTitle}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-2 mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {h.servicesSubtitle}
            </h2>
            <span className="section-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<SyringeIcon className="w-7 h-7" />}
              title={t.nav.veinTreatments}
              description={t.veinTreatments.heroSubtitle}
              href={buildHref('/vein-treatments')}
              learnMoreLabel={t.common.learnMore}
            />
            <ServiceCard
              icon={<HeartIcon className="w-7 h-7" />}
              title={t.nav.beautyInjections}
              description={t.beautyInjections.heroSubtitle}
              href={buildHref('/beauty-injections')}
              learnMoreLabel={t.common.learnMore}
            />
            <ServiceCard
              icon={<SparkleIcon className="w-7 h-7" />}
              title={t.nav.laserProcedures}
              description={t.laserProcedures.heroSubtitle}
              href={buildHref('/laser-procedures')}
              learnMoreLabel={t.common.learnMore}
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── full bleed secondary-bg ── */}
      <section
        className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        {/* Large decorative quote mark in background */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          style={{
            fontSize: '320px',
            lineHeight: '1',
            color: 'rgba(168,98,104,0.06)',
            fontFamily: 'Georgia, serif',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Наши преимущества' : 'למה לבחור בנו'}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {h.whyUsTitle}
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {h.whyUsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <AcademicCapIcon className="w-8 h-8" />, title: h.whyUs1Title, desc: h.whyUs1Desc },
              { icon: <MicroscopeIcon className="w-8 h-8" />, title: h.whyUs2Title, desc: h.whyUs2Desc },
              { icon: <HeartIcon className="w-8 h-8" />, title: h.whyUs3Title, desc: h.whyUs3Desc },
              { icon: <FlowerIcon className="w-8 h-8" />, title: h.whyUs4Title, desc: h.whyUs4Desc },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    boxShadow: '0 4px 16px rgba(168,98,104,0.12)',
                  }}
                >
                  <span style={{ color: 'var(--color-accent-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
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
        className="py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder: tall, rounded-2xl, with floating badge */}
          <div className="relative flex justify-center">
            <div
              className="w-full max-w-[400px] rounded-2xl flex items-center justify-center"
              style={{
                aspectRatio: '3/4',
                backgroundColor: 'var(--color-secondary-bg)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 16px 48px rgba(168,98,104,0.10)',
              }}
            >
              <div className="flex flex-col items-center gap-4 text-center px-8">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle, #DBADB1 0%, #C4848A 100%)',
                    boxShadow: '0 8px 24px rgba(168,98,104,0.25)',
                  }}
                >
                  <UserIcon className="w-14 h-14" style={{ color: 'white' }} />
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {t.about.heroTitle}
                </p>
              </div>
            </div>

            {/* Floating specialty badge */}
            <div
              className="absolute bottom-8 left-4 sm:left-0 z-10 px-5 py-2 rounded-full shadow-lg text-sm font-semibold"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-accent-dark)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                fontFamily: 'var(--font-playfair)',
              }}
            >
              MD · Aesthetic Medicine
            </div>
          </div>

          {/* Text side */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.specialistTitle}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {h.specialistSubtitle}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              {h.specialistBio}
            </p>

            {/* Credentials list */}
            <ul className="space-y-3 mb-8">
              {[
                isRu ? 'Сертифицированный врач-дерматолог' : 'רופאה מוסמכת ברפואה אסתטית',
                isRu ? '10+ лет клинического опыта' : '10+ שנות ניסיון קליני',
                isRu ? 'Специалист по лазерным технологиям' : 'מומחית בטיפולי לייזר',
                isRu ? 'Международное обучение' : 'הכשרה בינלאומית',
              ].map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-accent)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{cred}</span>
                </li>
              ))}
            </ul>

            <Link
              href={buildHref('/about')}
              className="inline-block font-semibold text-sm tracking-wide transition-colors hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              {h.specialistLink} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Отзывы клиентов' : 'לקוחות ממליצים'}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {h.testimonialsTitle}
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {h.testimonialsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lang === 'he' ? (
              <>
                <TestimonialCard
                  name="מיכל כ."
                  text="הטיפול היה מדהים! ד&quot;ר הסבירה לי את כל התהליך ותוצאות הסקלרותרפיה היו מעל הציפיות."
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
        className="py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {isRu ? 'Как это работает' : 'תהליך הטיפול'}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)', lineHeight: '1.1' }}
            >
              {h.processTitle}
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {h.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting dotted line on desktop */}
            <div
              className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px"
              style={{
                backgroundImage: 'repeating-linear-gradient(to right, var(--color-accent-light) 0, var(--color-accent-light) 6px, transparent 6px, transparent 14px)',
              }}
              aria-hidden="true"
            />

            {[
              { step: '01', title: h.step1Title, desc: h.step1Desc, icon: <CalendarIcon className="w-7 h-7" /> },
              { step: '02', title: h.step2Title, desc: h.step2Desc, icon: <ChatIcon className="w-7 h-7" /> },
              { step: '03', title: h.step3Title, desc: h.step3Desc, icon: <CheckCircleIcon className="w-7 h-7" /> },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                {/* Large ghost step number behind */}
                <div className="relative mb-5">
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-6xl font-bold select-none pointer-events-none"
                    style={{ color: 'var(--color-accent-light)', opacity: 0.35, fontFamily: 'var(--font-playfair)', zIndex: 0 }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-secondary-bg)',
                      boxShadow: '0 4px 16px rgba(168,98,104,0.12)',
                    }}
                  >
                    <span style={{ color: 'var(--color-accent-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
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
