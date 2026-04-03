'use client';
import { useAnimateIn } from '@/hooks/useAnimateIn';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

export default function AnimateIn({ children, className = '', delay = 0 }: Props) {
  const { ref, visible } = useAnimateIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
