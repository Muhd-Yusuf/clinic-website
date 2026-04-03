interface SectionHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  bgColor?: 'secondary' | 'white';
}

export default function SectionHero({
  tag,
  title,
  subtitle,
  bgColor = 'secondary',
}: SectionHeroProps) {
  const bg =
    bgColor === 'secondary'
      ? 'var(--color-secondary-bg)'
      : 'var(--color-white)';

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-3xl mx-auto">
        {tag && (
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            {tag}
          </span>
        )}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
