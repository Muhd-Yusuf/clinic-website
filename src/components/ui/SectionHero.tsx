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
}: SectionHeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Dark overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(28,20,16,0.92) 0%, rgba(28,20,16,0.5) 50%, transparent 100%)',
        }}
      />

      {/* Ghost page title as enormous background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          fontStyle: 'italic',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        {title}
      </div>

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 60%, rgba(196,132,138,0.1) 0%, transparent 55%)',
        }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Thin accent rule */}
        <div
          className="mb-5"
          style={{ width: 48, height: 1, backgroundColor: 'var(--color-accent)' }}
        />

        {tag && (
          <span
            style={{
              display: 'block',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '0.75rem',
            }}
          >
            {tag}
          </span>
        )}

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--color-white)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: '28rem',
            marginBottom: subtitle ? '1rem' : 0,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              maxWidth: '26rem',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
