'use client';

import { Suspense } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';
import SectionHero from '@/components/ui/SectionHero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABlock from '@/components/ui/CTABlock';

function FAQContent() {
  const lang = useLang();
  const t = i18n[lang];
  const faq = t.faq;
  const isRu = lang === 'ru';
  const buildHref = (path: string) => (isRu ? `${path}?lang=ru` : path);

  return (
    <>
      <SectionHero
        tag={faq.heroTag}
        title={faq.heroTitle}
        subtitle={faq.heroSubtitle}
        bgColor="secondary"
      />

      {/* FAQ Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faq.items} />
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title={faq.ctaTitle}
        subtitle={faq.ctaSubtitle}
        primaryBtn={{ text: t.common.bookBtn, href: buildHref('/contact') }}
        secondaryBtn={{ text: t.common.whatsappBtn, href: 'https://wa.me/972501234567' }}
        phone="+972-50-123-4567"
      />
    </>
  );
}

export default function FAQPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }} />}>
      <FAQContent />
    </Suspense>
  );
}
