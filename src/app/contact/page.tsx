'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import ContactForm from '@/components/ui/ContactForm';
import CTABlock from '@/components/ui/CTABlock';
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from '@/components/ui/Icons';

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
                  <PhoneIcon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
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
                  <WhatsAppIcon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
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
                  <MapPinIcon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
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
              <WhatsAppIcon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#25D366' }} />
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
            className="w-full h-56 rounded-2xl flex items-center justify-center gap-2 text-lg font-medium"
            style={{ backgroundColor: 'var(--color-secondary-bg)', color: 'var(--color-text-secondary)' }}
          >
            <MapPinIcon className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
            {ct.mapPlaceholder}
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
