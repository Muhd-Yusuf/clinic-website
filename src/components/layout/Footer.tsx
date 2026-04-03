'use client';

import Link from 'next/link';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import { useCallback } from 'react';
import { WhatsAppIcon } from '@/components/ui/Icons';

export default function Footer() {
  const lang = useLang();
  const t = i18n[lang];
  const isRu = lang === 'ru';

  const buildHref = useCallback(
    (path: string) => (isRu ? `${path}?lang=ru` : path),
    [isRu]
  );

  const treatments = [
    { label: t.nav.veinTreatments, href: buildHref('/vein-treatments') },
    { label: t.nav.beautyInjections, href: buildHref('/beauty-injections') },
    { label: t.nav.laserProcedures, href: buildHref('/laser-procedures') },
    { label: t.nav.results, href: buildHref('/results') },
  ];

  const company = [
    { label: t.nav.about, href: buildHref('/about') },
    { label: t.nav.contact, href: buildHref('/contact') },
    { label: t.nav.faq, href: buildHref('/faq') },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)', color: 'rgba(255,255,255,0.55)' }}
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 24px)',
        }}
      />

      {/* Accent top line */}
      <div style={{ height: 1, backgroundColor: 'var(--color-accent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Logo + tagline */}
        <div className="mb-14">
          <Link
            href={buildHref('/')}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '2rem',
              fontStyle: 'italic',
              fontWeight: 700,
              color: 'var(--color-white)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            {t.footer.clinicName}
          </Link>
          <p
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            {t.footer.tagline}
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
          {/* Column 1: Treatments */}
          <div>
            <h4
              style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-light)',
                marginBottom: '1.25rem',
              }}
            >
              {isRu ? 'Процедуры' : 'טיפולים'}
            </h4>
            <ul className="space-y-3">
              {treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-light)',
                marginBottom: '1.25rem',
              }}
            >
              {isRu ? 'Компания' : 'חברה'}
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4
              style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-light)',
                marginBottom: '1.25rem',
              }}
            >
              {isRu ? 'Связь' : 'יצירת קשר'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+972501234567"
                  className="transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>{t.footer.address}</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#25D366' }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)' }}
        >
          <p>
            &copy; {new Date().getFullYear()} {t.footer.clinicName} &middot; {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            {/* Placeholder social icons */}
            {['IG', 'FB', 'TW'].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.2)',
                  cursor: 'default',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
