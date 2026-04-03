'use client';

import Link from 'next/link';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import { useCallback } from 'react';

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

  const info = [
    { label: t.nav.about, href: buildHref('/about') },
    { label: t.nav.contact, href: buildHref('/contact') },
    { label: t.nav.faq, href: buildHref('/faq') },
    { label: t.nav.home, href: buildHref('/') },
  ];

  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#E8DEDE' }}>
      {/* Accent top border */}
      <div style={{ height: '2px', backgroundColor: 'var(--color-accent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3
              className="text-xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-accent-light)' }}
            >
              {t.footer.clinicName}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9A8A8A' }}>
              {t.footer.tagline}
            </p>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#25D366' }}
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Column 2: Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--color-accent-light)' }}>
              {isRu ? 'Процедуры' : 'טיפולים'}
            </h4>
            <ul className="space-y-3">
              {treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[color:var(--color-accent-light)]"
                    style={{ color: '#9A8A8A' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--color-accent-light)' }}>
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-4 text-sm" style={{ color: '#9A8A8A' }}>
              <li>
                <a href="tel:+972501234567" className="hover:text-[color:var(--color-accent-light)] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-accent-light)] transition-colors flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.footer.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--color-accent-light)' }}>
              {isRu ? 'Часы работы' : 'שעות פעילות'}
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: '#9A8A8A' }}>
              <li className="flex justify-between gap-4">
                <span>{isRu ? 'Пн – Пт' : 'ב׳–ו׳'}</span>
                <span>09:00 – 19:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{isRu ? 'Воскресенье' : 'ראשון'}</span>
                <span>10:00 – 15:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{isRu ? 'Суббота' : 'שבת'}</span>
                <span>{isRu ? 'Закрыто' : 'סגור'}</span>
              </li>
            </ul>

            {/* Info links */}
            <ul className="mt-6 space-y-3">
              {info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[color:var(--color-accent-light)]"
                    style={{ color: '#9A8A8A' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t text-center text-xs"
          style={{ borderColor: '#2A2A2A', color: '#666' }}
        >
          <p className="flex flex-wrap items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} {t.footer.clinicName}</span>
            <span aria-hidden="true" style={{ color: '#444' }}>·</span>
            <span>{t.footer.rights}</span>
            <span aria-hidden="true" style={{ color: '#444' }}>·</span>
            <Link
              href={buildHref('/contact')}
              className="hover:text-[color:var(--color-accent-light)] transition-colors"
            >
              {isRu ? 'Связаться' : 'צרו קשר'}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
