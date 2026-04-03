import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from '@/components/ui/Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
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
      className="card-hover bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-lg"
    >
      {/* Icon circle */}
      <div
        className="w-15 h-15 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'var(--color-secondary-bg)',
        }}
      >
        <span
          style={{ color: 'var(--color-accent-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}
        >
          {icon}
        </span>
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

      {/* Learn more — pill link at bottom */}
      <div className="flex items-center justify-between mt-2">
        <Link
          href={href}
          className="text-sm font-semibold transition-colors hover:underline"
          style={{ color: 'var(--color-accent)' }}
        >
          {learnMoreLabel}
        </Link>
        <span style={{ color: 'var(--color-accent-light)' }}>
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
