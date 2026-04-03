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
      className="fixed bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      style={{
        backgroundColor: '#25D366',
        [isRtl ? 'left' : 'right']: '1.5rem',
      }}
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
