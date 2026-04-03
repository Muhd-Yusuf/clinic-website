'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import { Bars3Icon, XMarkIcon } from '@/components/ui/Icons';

export default function Nav() {
  const lang = useLang();
  const t = i18n[lang];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRu = lang === 'ru';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <>
      {/* Luxury top bar */}
      <div className="nav-top-bar" />

      <nav
        className="sticky top-0 z-50 bg-white"
        style={{
          borderBottom: '1px solid var(--color-border)',
          boxShadow: scrolled ? '0 2px 16px 0 rgba(168,98,104,0.08)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href={buildHref('/')}
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--color-accent-dark)',
                  letterSpacing: '0.02em',
                }}
              >
                {t.common.clinicName}
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium pb-0.5"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side: lang switcher + book CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language switcher */}
              <div className="flex items-center gap-1 text-xs font-semibold tracking-wider uppercase">
                <button
                  onClick={() => switchLang('he')}
                  className="px-2.5 py-1 rounded-full transition-all"
                  style={
                    !isRu
                      ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                      : { color: 'var(--color-text-secondary)' }
                  }
                >
                  {t.nav.langSwitch.he}
                </button>
                <span style={{ color: 'var(--color-border)' }}>·</span>
                <button
                  onClick={() => switchLang('ru')}
                  className="px-2.5 py-1 rounded-full transition-all"
                  style={
                    isRu
                      ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                      : { color: 'var(--color-text-secondary)' }
                  }
                >
                  {t.nav.langSwitch.ru}
                </button>
              </div>

              {/* Book CTA — pill shape */}
              <Link
                href={buildHref('/contact')}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
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
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
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
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all hover:text-[color:var(--color-accent)]"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t flex items-center gap-3 flex-wrap" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  onClick={() => { switchLang('he'); setMobileOpen(false); }}
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={
                    !isRu
                      ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                      : { color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }
                  }
                >
                  HE
                </button>
                <button
                  onClick={() => { switchLang('ru'); setMobileOpen(false); }}
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={
                    isRu
                      ? { backgroundColor: 'var(--color-accent)', color: 'white' }
                      : { color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }
                  }
                >
                  RU
                </button>
                <Link
                  href={buildHref('/contact')}
                  className="px-5 py-2 rounded-full text-sm font-semibold text-white"
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
    </>
  );
}
