interface TestimonialCardProps {
  name: string;
  text: string;
  treatment: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export default function TestimonialCard({
  name,
  text,
  treatment,
  rating,
}: TestimonialCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Large opening quote */}
      <div
        className="text-6xl font-serif leading-none select-none"
        style={{ color: 'var(--color-accent)', lineHeight: '0.8', marginBottom: '-8px' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill={i < rating ? 'var(--color-accent)' : 'var(--color-border)'}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed flex-1 italic"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {text}
      </p>

      {/* Name + treatment badge */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <span
          className="font-bold text-sm"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {name}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{
            backgroundColor: 'var(--color-secondary-bg)',
            color: 'var(--color-accent-dark)',
          }}
        >
          {treatment}
        </span>
      </div>
    </div>
  );
}
