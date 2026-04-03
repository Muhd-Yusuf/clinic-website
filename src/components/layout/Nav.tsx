'use client';
import { useState, useEffect, useCallback } from 'react';
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRu = lang === 'ru';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const buildHref = useCallback(
    (path: string) => (isRu ? `${path}?lang=ru` : path),
    [isRu]
  );

  const switchLang = (l: 'he' | 'ru') => {
    const p = new URLSearchParams(searchParams.toString());
    l === 'ru' ? p.set('lang', 'ru') : p.delete('lang');
    const q = p.toString();
    router.replace(q ? `${pathname}?${q}` : pathname);
  };

  const links = [
    { label: t.nav.veinTreatments, href: buildHref('/vein-treatments') },
    { label: t.nav.beautyInjections, href: buildHref('/beauty-injections') },
    { label: t.nav.laserProcedures, href: buildHref('/laser-procedures') },
    { label: t.nav.about, href: buildHref('/about') },
    { label: t.nav.results, href: buildHref('/results') },
    { label: t.nav.faq, href: buildHref('/faq') },
  ];

  return (
    <>
      {/* Accent top strip */}
      <div style={{ height: 3, backgroundColor: 'var(--color-accent)' }} />

      <nav
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(250,247,247,0.95)' : 'var(--color-white)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
          boxShadow: scrolled ? '0 2px 24px rgba(196,132,138,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={buildHref('/')}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.35rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: 'var(--color-accent-dark)',
            }}
          >
            {t.common.clinicName}
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-xs font-medium hover:text-[color:var(--color-accent)] transition-colors"
                style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: lang + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="flex items-center gap-1 text-xs tracking-widest"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <button
                onClick={() => switchLang('he')}
                className="px-2 py-1 transition-colors"
                style={!isRu ? { color: 'var(--color-accent)', fontWeight: 600 } : {}}
              >
                HE
              </button>
              <span style={{ color: 'var(--color-border)' }}>·</span>
              <button
                onClick={() => switchLang('ru')}
                className="px-2 py-1 transition-colors"
                style={isRu ? { color: 'var(--color-accent)', fontWeight: 600 } : {}}
              >
                RU
              </button>
            </div>
            <Link
              href={buildHref('/contact')}
              className="text-xs font-semibold text-white px-6 py-3 transition-opacity hover:opacity-85"
              style={{
                backgroundColor: 'var(--color-accent)',
                borderRadius: 2,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {t.nav.bookCta}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            style={{ color: 'var(--color-text-primary)' }}
            aria-label="Toggle menu"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="lg:hidden border-t px-6 py-6 space-y-4"
            style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm py-2"
                style={{
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {l.label}
              </Link>
            ))}
            <div
              className="flex items-center gap-4 pt-4 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <button
                onClick={() => { switchLang('he'); setOpen(false); }}
                className="text-xs tracking-widest"
                style={!isRu ? { color: 'var(--color-accent)', fontWeight: 600 } : { color: 'var(--color-text-secondary)' }}
              >
                HE
              </button>
              <button
                onClick={() => { switchLang('ru'); setOpen(false); }}
                className="text-xs tracking-widest"
                style={isRu ? { color: 'var(--color-accent)', fontWeight: 600 } : { color: 'var(--color-text-secondary)' }}
              >
                RU
              </button>
              <Link
                href={buildHref('/contact')}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold text-white px-5 py-2.5"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 2,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {t.nav.bookCta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
