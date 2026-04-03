'use client';

import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import { WhatsAppIcon } from '@/components/ui/Icons';

export default function WhatsAppFab() {
  const lang = useLang();
  const t = i18n[lang];
  const isRtl = lang === 'he';

  const message = encodeURIComponent(t.common.whatsappBtn);
  const href = `https://wa.me/972501234567?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wafab-pill fixed bottom-6 z-50"
      style={{
        [isRtl ? 'left' : 'right']: '1.5rem',
        padding: '0.75rem 0.875rem',
      }}
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6 text-white flex-shrink-0" />
      <span className="wafab-label text-white text-xs font-semibold tracking-wide">
        WhatsApp
      </span>
    </a>
  );
}
