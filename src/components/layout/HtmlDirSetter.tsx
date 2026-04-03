'use client';

import { useEffect } from 'react';
import { useLang } from '@/hooks/useLang';

// Runs client-side to update <html dir> and <html lang> when ?lang=ru is added or removed.
// The SSR default in layout.tsx is dir="rtl" lang="he" (Hebrew).
// This component hydrates immediately and corrects the direction for Russian (LTR).
export default function HtmlDirSetter() {
  const lang = useLang();

  useEffect(() => {
    document.documentElement.dir = lang === 'ru' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'he';
  }, [lang]);

  return null;
}
