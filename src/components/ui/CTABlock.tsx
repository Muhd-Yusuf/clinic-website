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
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
      style={{ backgroundColor: 'var(--color-accent)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/85 text-base sm:text-lg mb-8">{subtitle}</p>
        )}

        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {primaryBtn && (
              <Link
                href={primaryBtn.href}
                className="px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
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
                className="px-6 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 border-white text-white transition-colors hover:bg-white/10"
              >
                {secondaryBtn.text}
              </Link>
            )}
          </div>
        )}

        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          >
            {phone}
          </a>
        )}
      </div>
    </section>
  );
}
