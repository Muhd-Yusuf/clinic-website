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
      className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 50%, #CF9095 0%, var(--color-accent) 55%, var(--color-accent-dark) 100%)',
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: '1.15' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mb-10 text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {subtitle}
          </p>
        )}

        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {primaryBtn && (
              <Link
                href={primaryBtn.href}
                className="px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-accent-dark)',
                }}
              >
                {primaryBtn.text}
              </Link>
            )}
            {secondaryBtn && (
              <Link
                href={secondaryBtn.href}
                className="px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base border border-white text-white transition-all hover:bg-white/15"
              >
                {secondaryBtn.text}
              </Link>
            )}
          </div>
        )}

        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className="text-white/80 text-sm font-medium hover:text-white transition-colors tracking-wide"
          >
            {phone}
          </a>
        )}
      </div>
    </section>
  );
}
