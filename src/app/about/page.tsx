'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import CTABlock from '@/components/ui/CTABlock';
import { UserIcon, AcademicCapIcon, FlowerIcon, ShieldIcon, MicroscopeIcon } from '@/components/ui/Icons';

function AboutContent() {
  const lang = useLang();
  const t = i18n[lang];
  const ab = t.about;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const credentials = [
    ab.credential1,
    ab.credential2,
    ab.credential3,
    ab.credential4,
    ab.credential5,
  ];

  const galleryItems = [
    { label: ab.gallery1, icon: <ShieldIcon className="w-12 h-12" /> },
    { label: ab.gallery2, icon: <MicroscopeIcon className="w-12 h-12" /> },
    { label: ab.gallery3, icon: <FlowerIcon className="w-12 h-12" /> },
  ];

  return (
    <>
      <SectionHero
        tag={ab.heroTag}
        title={ab.heroTitle}
        subtitle={ab.heroSubtitle}
        bgColor="secondary"
      />

      {/* Biography */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div
            className="w-full h-96 rounded-2xl flex flex-col items-center justify-center gap-4"
            style={{ backgroundColor: 'var(--color-secondary-bg)' }}
          >
            <div className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent-light)' }}>
              <UserIcon className="w-16 h-16" style={{ color: 'var(--color-accent-dark)' }} />
            </div>
            <p
              className="text-lg font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-accent-dark)' }}
            >
              {ab.heroTitle}
            </p>
          </div>

          {/* Bio text */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {ab.bioTitle}
            </h2>
            <div className="space-y-5">
              {[ab.bioText1, ab.bioText2, ab.bioText3].map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {ab.credentialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred) => (
              <div
                key={cred}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <AcademicCapIcon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {cred}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="flex justify-center mb-6" style={{ color: 'var(--color-accent)' }}>
            <FlowerIcon className="w-14 h-14" />
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {ab.philosophyTitle}
          </h2>
          <p
            className="text-base leading-relaxed text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {ab.philosophyText}
          </p>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
          >
            {ab.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className="h-56 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: 'var(--color-accent-light)' }}
              >
                <span style={{ color: 'var(--color-accent-dark)' }}>{item.icon}</span>
                <p
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-accent-dark)' }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title={ab.ctaTitle}
        subtitle={ab.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <AboutContent />
    </Suspense>
  );
}
