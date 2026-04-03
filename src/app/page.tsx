'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';
import { PhoneIcon, StarIcon } from '@/components/ui/Icons';

function HomeContent() {
  const lang = useLang();
  const t = i18n[lang];
  const h = t.home;
  const isRu = lang === 'ru';

  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  const ghostWord = isRu ? 'Красота' : 'יופי';

  return (
    <>
      {/* ── HERO ── Full viewport asymmetric split */}
      <section className="relative flex min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--color-dark)' }}>
        {/* Left 55%: full-bleed image area */}
        <div
          className="relative hidden lg:block"
          style={{ width: '55%', flexShrink: 0, backgroundColor: 'var(--color-dark)' }}
        >
          {/* Radial glow overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,138,0.18) 0%, transparent 65%)',
            }}
          />
          {/* Bottom gradient fade */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(28,20,16,0.85) 0%, rgba(28,20,16,0.2) 40%, transparent 70%)',
            }}
          />
          {/* Enormous ghost word */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(120px, 18vw, 220px)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {ghostWord}
          </div>
          {/* Floating stat badge: bottom-left */}
          <div
            className="absolute bottom-10 ltr:left-8 rtl:right-8 z-20 px-5 py-3 flex items-center gap-3"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 2,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'var(--color-accent-light)',
              }}
            >
              500+
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {isRu ? 'довольных клиентов' : 'לקוחות מרוצים'}
            </span>
          </div>
          {/* Floating location badge: top-right */}
          <div
            className="absolute top-10 ltr:right-8 rtl:left-8 z-20 px-4 py-2 flex items-center gap-2"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 2,
            }}
          >
            <span style={{ color: 'var(--color-accent-light)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>✦</span>
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {isRu ? 'Тель-Авив' : 'תל אביב'}
            </span>
          </div>
        </div>

        {/* Right 45%: editorial text content */}
        <div
          className="relative flex items-center z-10 w-full lg:w-[45%]"
          style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 7rem) clamp(2rem, 5vw, 5rem)' }}
        >
          <AnimateIn className="w-full max-w-md">
            {/* Eyebrow */}
            <span className="eyebrow">
              {isRu ? 'ЭСТЕТИЧЕСКАЯ МЕДИЦИНА · ТЕЛЬ-АВИВ' : 'AESTHETIC MEDICINE · TEL AVIV'}
            </span>

            {/* H1 massive Playfair italic, split lines */}
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: 0.95,
                color: 'var(--color-text-primary)',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block">{isRu ? 'Красота' : 'יופי'}</span>
              <span
                className="block"
                style={{ marginInlineStart: '2rem', color: 'var(--color-accent-dark)' }}
              >
                {isRu ? 'без компромиссов' : 'ללא פשרות'}
              </span>
            </h1>

            {/* Hairline rule */}
            <span className="rule" />

            {/* Subtext */}
            <p
              className="text-base leading-relaxed mb-10"
              style={{
                color: 'var(--color-text-secondary)',
                maxWidth: '18rem',
                lineHeight: 1.75,
              }}
            >
              {h.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <Link
                href={buildHref('/contact')}
                className="text-sm font-semibold text-white px-8 py-4 transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 9999,
                  letterSpacing: '0.08em',
                }}
              >
                {h.heroBookBtn}
              </Link>
              <Link
                href={buildHref('/about')}
                className="text-sm font-medium transition-all"
                style={{
                  color: 'var(--color-text-secondary)',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '2px',
                }}
              >
                {isRu ? 'О враче' : 'על המומחית'}
              </Link>
            </div>

            {/* Trust micro-stats */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                isRu ? 'Лицензированный врач' : 'רופאה מורשית',
                isRu ? '10+ лет' : '10+ שנים',
                isRu ? 'Натуральный результат' : 'תוצאות טבעיות',
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" style={{ color: 'var(--color-border)', fontSize: '0.6rem' }}>·</span>
                  )}
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div
        className="overflow-hidden py-4"
        style={{ backgroundColor: 'var(--color-accent)' }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {/* Duplicate content for seamless loop */}
          {[0, 1].map((n) => (
            <span
              key={n}
              className="text-white"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                paddingInlineEnd: '4rem',
              }}
            >
              {isRu
                ? '· Лечение вен · Инъекции красоты · Лазер · Ботокс · Склеротерапия · Нитевой лифтинг · Мезотерапия · Карбокситерапия ·'
                : '· טיפולי ורידים · הזרקות יופי · לייזר · בוטוקס · סקלרותרפיה · ליפטינג חוטים · מזותרפיה · קרבוקסיתרפיה ·'}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES — Asymmetric staggered layout ── */}
      <section className="py-32" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            {/* Left-aligned heading */}
            <span className="eyebrow">{isRu ? 'Наши процедуры' : 'הטיפולים שלנו'}</span>
            <h2
              className="text-5xl mb-16"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                maxWidth: '28rem',
              }}
            >
              {h.servicesSubtitle}
            </h2>
          </AnimateIn>

          {/* Asymmetric 58/42 grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Large featured card — vein treatments */}
            <AnimateIn delay={100} className="lg:w-[58%]">
              <div
                className="card-hover flex flex-col overflow-hidden"
                style={{ border: '1px solid var(--color-border)', borderRadius: 2, height: '100%' }}
              >
                {/* Full-bleed image placeholder */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: '16/9', backgroundColor: 'var(--color-secondary-bg)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(4rem, 8vw, 7rem)',
                      fontStyle: 'italic',
                      color: 'rgba(196,132,138,0.18)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {isRu ? 'Вены' : 'ורידים'}
                  </span>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(242,234,235,0.9), transparent)' }}
                  />
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--color-text-primary)' }}
                  >
                    {t.nav.veinTreatments}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {t.veinTreatments.heroSubtitle}
                  </p>
                  <Link
                    href={buildHref('/vein-treatments')}
                    className="text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
                    style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '2px', alignSelf: 'flex-start' }}
                  >
                    {isRu ? 'Узнать больше' : 'גלו עוד'} &rarr;
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* Two stacked smaller cards */}
            <div className="lg:w-[42%] flex flex-col gap-6">
              {[
                {
                  title: t.nav.beautyInjections,
                  desc: t.beautyInjections.heroSubtitle,
                  href: buildHref('/beauty-injections'),
                  word: isRu ? 'Инъекции' : 'הזרקות',
                },
                {
                  title: t.nav.laserProcedures,
                  desc: t.laserProcedures.heroSubtitle,
                  href: buildHref('/laser-procedures'),
                  word: isRu ? 'Лазер' : 'לייזר',
                },
              ].map((card, i) => (
                <AnimateIn key={card.title} delay={200 + i * 100}>
                  <div
                    className="card-hover flex gap-4 overflow-hidden"
                    style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}
                  >
                    {/* Small square image placeholder */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ width: 100, height: 100, backgroundColor: 'var(--color-secondary-bg)' }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: '0.9rem',
                          fontStyle: 'italic',
                          color: 'rgba(196,132,138,0.4)',
                          userSelect: 'none',
                        }}
                      >
                        {card.word}
                      </span>
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-4 flex-1 min-w-0">
                      <h3
                        className="text-base mb-1"
                        style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--color-text-primary)' }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                        {card.desc}
                      </p>
                      <Link
                        href={card.href}
                        className="text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-accent)', alignSelf: 'flex-start' }}
                      >
                        {isRu ? 'Подробнее' : 'עוד'} &rarr;
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS STRIP — Dark full-bleed stats ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-dark)' }}>
        <AnimateIn>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:divide-x sm:divide-white/10">
              {[
                { num: '500+', label: isRu ? 'довольных клиентов' : 'לקוחות מרוצים' },
                { num: '10+', label: isRu ? 'лет опыта' : 'שנות ניסיון' },
                { num: '15+', label: isRu ? 'процедур' : 'טיפולים מתקדמים' },
                { num: '98%', label: isRu ? 'удовлетворённость' : 'שביעות רצון' },
              ].map((stat, i) => (
                <div
                  key={stat.num}
                  className="flex flex-col items-center px-10 py-6 sm:py-0"
                  style={i > 0 ? { borderColor: 'rgba(255,255,255,0.1)' } : {}}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-light)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── PHILOSOPHY — Full-bleed editorial ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left image column — bleeds to left edge */}
          <div
            className="relative lg:w-[45%] min-h-[400px] lg:min-h-0 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#1C1410' }}
          >
            {/* Radial glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(196,132,138,0.15) 0%, transparent 65%)' }}
            />
            {/* Ghost word decorative */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(5rem, 12vw, 10rem)',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.04)',
                userSelect: 'none',
                pointerEvents: 'none',
                position: 'absolute',
                lineHeight: 1,
              }}
            >
              {isRu ? 'Наука' : 'מדע'}
            </span>
            {/* Floating label */}
            <div
              className="absolute bottom-8 ltr:right-8 rtl:left-8 px-4 py-2"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {isRu ? 'Эстетическая медицина' : 'רפואה אסתטית'}
              </span>
            </div>
          </div>

          {/* Right content column */}
          <div
            className="lg:w-[55%] flex items-center"
            style={{ padding: 'clamp(4rem, 7vw, 8rem) clamp(2rem, 6vw, 7rem)' }}
          >
            <AnimateIn className="max-w-xl">
              <span className="eyebrow">{isRu ? 'Наша философия' : 'הפילוסופיה שלנו'}</span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                }}
              >
                {h.whyUsTitle}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
                {h.whyUsSubtitle}
              </p>
              {/* Pull quote */}
              <blockquote
                className="mb-8 ps-6"
                style={{ borderInlineStart: '2px solid var(--color-accent)' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    color: 'var(--color-accent)',
                    lineHeight: 1.5,
                  }}
                >
                  {isRu
                    ? '«Красота — это наука, а не случайность»'
                    : '«יופי הוא מדע, לא מקרה»'}
                </p>
              </blockquote>
              <Link
                href={buildHref('/about')}
                className="text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60 flex items-center gap-2"
                style={{ color: 'var(--color-accent)' }}
              >
                {isRu ? 'Узнать о враче' : 'קראו על המומחית'}
                <span>&rarr;</span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── TREATMENTS PREVIEW — Horizontal scroll mobile, 4-col desktop ── */}
      <section className="py-32 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="eyebrow">{isRu ? 'Все процедуры' : 'כל הטיפולים'}</span>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                }}
              >
                {isRu ? 'Процедуры премиум-класса' : 'טיפולים פרימיום'}
              </h2>
            </div>
          </AnimateIn>

          {/* Horizontal scroll on mobile, 4-col grid on desktop */}
          <div
            className="flex gap-6 pb-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-visible"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {[
              {
                name: isRu ? 'Склеротерапия' : 'סקלרותרפיה',
                desc: isRu ? 'Устранение варикоза' : 'טיפול בוורידים נפוחים',
                href: buildHref('/vein-treatments'),
                word: isRu ? 'Вены' : 'ורידים',
              },
              {
                name: isRu ? 'Ботокс' : 'בוטוקס',
                desc: isRu ? 'Разглаживание морщин' : 'החלקת קמטים',
                href: buildHref('/beauty-injections'),
                word: isRu ? 'Красота' : 'יופי',
              },
              {
                name: isRu ? 'Лазер IPL' : 'לייזר IPL',
                desc: isRu ? 'Выравнивание тона кожи' : 'איזון גוון העור',
                href: buildHref('/laser-procedures'),
                word: isRu ? 'Лазер' : 'לייזר',
              },
              {
                name: isRu ? 'Мезотерапия' : 'מזותרפיה',
                desc: isRu ? 'Питание и увлажнение' : 'תזונה ולחות לעור',
                href: buildHref('/beauty-injections'),
                word: isRu ? 'Мезо' : 'מזו',
              },
            ].map((tile, i) => (
              <div
                key={tile.name}
                className="flex-shrink-0 w-[260px] lg:w-auto"
                style={{ scrollSnapAlign: 'start' }}
              >
              <AnimateIn
                delay={i * 80}
              >
                <div
                  className="card-hover flex flex-col h-full"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 2,
                  }}
                >
                  {/* Image placeholder */}
                  <div
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{ aspectRatio: '4/3', backgroundColor: 'var(--color-secondary-bg)' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        color: 'rgba(196,132,138,0.25)',
                        userSelect: 'none',
                      }}
                    >
                      {tile.word}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-lg mb-2"
                      style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: 'var(--color-text-primary)' }}
                    >
                      {tile.name}
                    </h3>
                    <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                      {tile.desc}
                    </p>
                    <div
                      className="pt-4 flex items-center justify-between"
                      style={{ borderTop: '1px solid var(--color-border)' }}
                    >
                      <Link
                        href={tile.href}
                        className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {isRu ? 'Подробнее' : 'פרטים'} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — Overlapping staggered card layout ── */}
      <section className="py-32" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Right-aligned heading */}
          <AnimateIn>
            <div className="text-end mb-16">
              <span
                className="eyebrow"
                style={{ display: 'inline-block', textAlign: 'end' }}
              >
                {isRu ? 'Отзывы клиентов' : 'לקוחות ממליצים'}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                }}
              >
                {h.testimonialsTitle}
              </h2>
            </div>
          </AnimateIn>

          {/* Staggered layout: large left + two stacked right */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Large featured testimonial */}
            <AnimateIn delay={100} className="lg:w-[55%]">
              <div
                className="p-10 relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-dark)',
                  borderRadius: 2,
                  minHeight: 340,
                }}
              >
                {/* Decorative large quote */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    insetInlineStart: '1.5rem',
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '8rem',
                    lineHeight: 1,
                    color: 'var(--color-accent)',
                    opacity: 0.25,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;
                </span>
                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3" style={{ color: 'var(--color-accent-light)' }} />
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontStyle: 'italic',
                      fontSize: '1.2rem',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.65,
                      marginBottom: '2rem',
                      flex: 1,
                    }}
                  >
                    {isRu
                      ? 'Процедура была потрясающей! Врач объяснила весь процесс, и результаты склеротерапии превзошли мои ожидания. Впервые за годы я чувствую себя уверенно.'
                      : 'הטיפול היה מדהים! ד"ר הסבירה לי את כל התהליך ותוצאות הסקלרותרפיה היו מעל הציפיות. לראשונה מזה שנים אני מרגישה בטוחה בעצמי.'}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--color-white)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {isRu ? 'Анна М.' : 'מיכל כ.'}
                      </p>
                      <p
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                          color: 'var(--color-accent-light)',
                          marginTop: '0.25rem',
                        }}
                      >
                        {isRu ? 'Склеротерапия' : 'סקלרותרפיה'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Two smaller stacked cards */}
            <div className="lg:w-[45%] flex flex-col gap-6 lg:mt-12">
              {[
                {
                  name: isRu ? 'Елена К.' : 'רחל ש.',
                  text: isRu
                    ? 'Получила ботокс и сразу почувствовала разницу! Естественный подход врача приятно удивил меня.'
                    : 'קיבלתי בוטוקס ומיד הרגשתי שינוי! הגישה הטבעית של הרופאה הפתיעה אותי לטובה.',
                  treatment: isRu ? 'Ботокс' : 'בוטוקס',
                },
                {
                  name: isRu ? 'Ирина Б.' : 'נועה ב.',
                  text: isRu
                    ? 'Лазерные процедуры значительно улучшили мою розацеа. Очень довольна сервисом и вниманием.'
                    : 'טיפולי הלייזר שיפרו את הרוזציאה שלי בצורה משמעותית. מאוד מרוצה מהשירות.',
                  treatment: isRu ? 'Лазер' : 'לייזר לרוזציאה',
                },
              ].map((card, i) => (
                <AnimateIn key={card.name} delay={200 + i * 120}>
                  <div
                    className="p-7"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 2,
                    }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <StarIcon key={j} className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
                      ))}
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontStyle: 'italic',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {card.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {card.name}
                      </span>
                      <span
                        className="px-3 py-1"
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--color-accent)',
                          border: '1px solid var(--color-accent-light)',
                          borderRadius: 9999,
                        }}
                      >
                        {card.treatment}
                      </span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST CTA — Editorial with secondary-bg ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{ backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text side */}
            <AnimateIn className="lg:w-1/2">
              <span className="eyebrow">{h.specialistTitle}</span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                }}
              >
                {h.specialistSubtitle}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.9 }}>
                {h.specialistBio}
              </p>
              <Link
                href={buildHref('/about')}
                className="text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60 flex items-center gap-2"
                style={{ color: 'var(--color-accent-dark)' }}
              >
                {h.specialistLink} &rarr;
              </Link>
            </AnimateIn>

            {/* Specialist image placeholder — bleeds out of top */}
            <AnimateIn delay={150} className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    width: 'min(380px, 90vw)',
                    aspectRatio: '3/4',
                    backgroundColor: 'var(--color-dark)',
                    borderRadius: 2,
                    boxShadow: '0 24px 64px rgba(28,20,16,0.25)',
                  }}
                >
                  {/* Radial glow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(196,132,138,0.2) 0%, transparent 65%)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(4rem, 8vw, 6rem)',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.05)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {isRu ? 'Доктор' : 'דוקטור'}
                  </span>
                  {/* Floating credential */}
                  <div
                    className="absolute bottom-6 ltr:right-6 rtl:left-6 px-4 py-2"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 2,
                    }}
                  >
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-light)' }}>
                      MD · Aesthetic Medicine
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 text-center" style={{ backgroundColor: 'var(--color-white)' }}>
        <AnimateIn>
          <div className="max-w-3xl mx-auto px-6">
            <span className="eyebrow" style={{ display: 'inline-block' }}>
              {isRu ? 'Начните свой путь' : 'התחילו את המסע שלכם'}
            </span>
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              {h.ctaTitle}
            </h2>
            <p className="text-base mb-12" style={{ color: 'var(--color-text-secondary)' }}>
              {h.ctaSubtitle}
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href={buildHref('/contact')}
                className="text-sm font-semibold text-white px-10 py-4 transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 9999,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {h.ctaPrimary}
              </Link>
              <a
                href="tel:+972501234567"
                className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <PhoneIcon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                +972-50-123-4567
              </a>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  opacity: 0.6,
                }}
              >
                {isRu
                  ? 'Первичная консультация бесплатно и без обязательств'
                  : 'ייעוץ ראשוני חינם וללא התחייבות'}
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>
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
