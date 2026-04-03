'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';

export default function Nav() {
  const lang = useLang();
  const t = i18n[lang];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isRu = lang === 'ru';

  const buildHref = useCallback(
    (path: string) => {
      if (isRu) {
        return `${path}?lang=ru`;
      }
      return path;
    },
    [isRu]
  );

  const switchLang = (newLang: 'he' | 'ru') => {
    const params = new URLSearchParams(searchParams.toString());
    if (newLang === 'ru') {
      params.set('lang', 'ru');
    } else {
      params.delete('lang');
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  };

  const navLinks = [
    { label: t.nav.home, href: buildHref('/') },
    { label: t.nav.veinTreatments, href: buildHref('/vein-treatments') },
    { label: t.nav.beautyInjections, href: buildHref('/beauty-injections') },
    { label: t.nav.laserProcedures, href: buildHref('/laser-procedures') },
    { label: t.nav.about, href: buildHref('/about') },
    { label: t.nav.results, href: buildHref('/results') },
    { label: t.nav.contact, href: buildHref('/contact') },
    { label: t.nav.faq, href: buildHref('/faq') },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={buildHref('/')}
              className="text-xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-accent-dark)',
              }}
            >
              {t.common.clinicName}
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[color:var(--color-accent)]"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + book CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => switchLang('he')}
                className={`px-2 py-1 rounded transition-colors ${
                  !isRu
                    ? 'text-white rounded'
                    : 'hover:text-[color:var(--color-accent)]'
                }`}
                style={
                  !isRu
                    ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                    : { color: 'var(--color-text-secondary)' }
                }
              >
                {t.nav.langSwitch.he}
              </button>
              <span style={{ color: 'var(--color-border)' }}>|</span>
              <button
                onClick={() => switchLang('ru')}
                className={`px-2 py-1 rounded transition-colors`}
                style={
                  isRu
                    ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                    : { color: 'var(--color-text-secondary)' }
                }
              >
                {t.nav.langSwitch.ru}
              </button>
            </div>

            {/* Book CTA */}
            <Link
              href={buildHref('/contact')}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              {t.nav.bookCta}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: 'var(--color-text-primary)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-[color:var(--color-accent)]"
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t flex items-center gap-3" style={{ borderColor: 'var(--color-border)' }}>
              <button
                onClick={() => { switchLang('he'); setMobileOpen(false); }}
                className="px-3 py-1 rounded text-sm font-medium"
                style={
                  !isRu
                    ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                    : { color: 'var(--color-text-secondary)' }
                }
              >
                HE
              </button>
              <button
                onClick={() => { switchLang('ru'); setMobileOpen(false); }}
                className="px-3 py-1 rounded text-sm font-medium"
                style={
                  isRu
                    ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                    : { color: 'var(--color-text-secondary)' }
                }
              >
                RU
              </button>
              <Link
                href={buildHref('/contact')}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.bookCta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
