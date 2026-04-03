import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: {
      style: {
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-white)',
      },
      className: 'hover:opacity-90 focus:ring-[color:var(--color-accent)]',
    },
    outline: {
      style: {
        borderColor: 'var(--color-accent)',
        color: 'var(--color-accent)',
        border: '2px solid var(--color-accent)',
      },
      className:
        'hover:bg-[color:var(--color-accent)] hover:text-white focus:ring-[color:var(--color-accent)]',
    },
    ghost: {
      style: { color: 'var(--color-accent)' },
      className: 'hover:underline focus:ring-[color:var(--color-accent)]',
    },
  };

  const v = variantStyles[variant];
  const classes = `${base} ${sizeClasses[size]} ${v.className} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={v.style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={v.style}>
      {children}
    </button>
  );
}
