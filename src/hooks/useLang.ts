'use client';

import { useSearchParams } from 'next/navigation';

export type Lang = 'he' | 'ru';

export function useLang(): Lang {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');
  return lang === 'ru' ? 'ru' : 'he';
}
