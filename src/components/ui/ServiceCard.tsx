import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  learnMoreLabel: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  learnMoreLabel,
}: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-xl border p-6 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-lg"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {/* Icon circle */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
        style={{ backgroundColor: 'var(--color-accent-light)' }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold leading-snug"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {description}
      </p>

      {/* Learn more link */}
      <Link
        href={href}
        className="text-sm font-semibold transition-colors hover:underline"
        style={{ color: 'var(--color-accent)' }}
      >
        {learnMoreLabel}
      </Link>
    </div>
  );
}
