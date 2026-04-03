'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import ContactForm from '@/components/ui/ContactForm';
import CTABlock from '@/components/ui/CTABlock';

function ContactContent() {
  const lang = useLang();
  const t = i18n[lang];
  const ct = t.contact;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  return (
    <>
      <SectionHero
        tag={ct.heroTag}
        title={ct.heroTitle}
        subtitle={ct.heroSubtitle}
        bgColor="secondary"
      />

      {/* Two columns: form + info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {ct.formTitle}
            </h2>
            <ContactForm />
          </div>

          {/* Right: Contact info */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
            >
              {ct.infoTitle}
            </h2>
            <ul className="space-y-5 mb-8">
              {/* Phone */}
              <li className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-secondary-bg)' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    style={{ color: 'var(--color-accent)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                    {t.nav.contact}
                  </p>
                  <a
                    href="tel:+972501234567"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {ct.phoneInfo}
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-secondary-bg)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ fill: 'var(--color-accent)' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {ct.whatsappInfo}
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-secondary-bg)' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    style={{ color: 'var(--color-accent)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {ct.addressInfo}
                </p>
              </li>
            </ul>

            {/* Hours */}
            <div
              className="p-6 rounded-xl border mb-6"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
            >
              <h3
                className="text-base font-bold mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-text-primary)' }}
              >
                {ct.hoursTitle}
              </h3>
              <ul className="space-y-2">
                {[ct.hours1, ct.hours2, ct.hours3].map((h) => (
                  <li key={h} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp prompt */}
            <div
              className="p-5 rounded-xl flex items-start gap-4"
              style={{ backgroundColor: '#e8f8f0', borderLeft: '4px solid #25D366' }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ fill: '#25D366' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <p className="text-sm" style={{ color: '#1A6B3A' }}>
                {ct.whatsappPrompt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0 px-4 sm:px-6 lg:px-8 pb-16" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="w-full h-56 rounded-2xl flex items-center justify-center text-lg font-medium"
            style={{ backgroundColor: 'var(--color-secondary-bg)', color: 'var(--color-text-secondary)' }}
          >
            🗺️ {ct.mapPlaceholder}
          </div>
        </div>
      </section>

      <CTABlock
        title={ct.ctaTitle}
        subtitle={ct.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <ContactContent />
    </Suspense>
  );
}
