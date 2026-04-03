interface SectionHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  bgColor?: 'secondary' | 'white';
  cta?: { text: string; href: string };
}

export default function SectionHero({
  tag,
  title,
  subtitle,
  bgColor = 'secondary',
  cta,
}: SectionHeroProps) {
  const bg =
    bgColor === 'secondary'
      ? 'var(--color-secondary-bg)'
      : 'var(--color-white)';

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 text-center"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-3xl mx-auto">
        {tag && (
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'var(--color-accent)' }}
          >
            {tag}
          </span>
        )}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: 'var(--color-text-primary)',
            lineHeight: '1.1',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <a
              href={cta.href}
              className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              {cta.text}
            </a>
          </div>
        )}
        <div className="mt-8">
          <span className="section-divider" />
        </div>
      </div>
    </section>
  );
}
