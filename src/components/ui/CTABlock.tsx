import Link from 'next/link';

interface CTABlockProps {
  title: string;
  subtitle?: string;
  primaryBtn?: { text: string; href: string };
  secondaryBtn?: { text: string; href: string };
  phone?: string;
}

export default function CTABlock({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  phone,
}: CTABlockProps) {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Subtle diagonal texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 20px)',
        }}
      />

      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(196,132,138,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Decorative hairline rule */}
        <div
          className="mb-8"
          style={{ width: 48, height: 1, backgroundColor: 'var(--color-accent)' }}
        />

        {/* Large off-center heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: '38rem',
          }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="mb-12 text-sm sm:text-base max-w-md"
            style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}
          >
            {subtitle}
          </p>
        )}

        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {primaryBtn && (
              <Link
                href={primaryBtn.href}
                className="px-8 py-3.5 font-semibold text-sm transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-accent-dark)',
                  borderRadius: 9999,
                  letterSpacing: '0.08em',
                }}
              >
                {primaryBtn.text}
              </Link>
            )}
            {secondaryBtn && (
              <Link
                href={secondaryBtn.href}
                className="px-8 py-3.5 font-semibold text-sm text-white border border-white/30 transition-colors hover:border-white/60"
                style={{ borderRadius: 9999, letterSpacing: '0.08em' }}
              >
                {secondaryBtn.text}
              </Link>
            )}
          </div>
        )}

        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className="text-sm font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
          >
            {phone}
          </a>
        )}
      </div>
    </section>
  );
}
