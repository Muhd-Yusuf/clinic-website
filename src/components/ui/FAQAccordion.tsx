'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              className="w-full flex items-center justify-between gap-4 text-start"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-base"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.question}
              </span>
              <svg
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                style={{
                  color: 'var(--color-accent)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer panel */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? '600px' : '0px',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                className="pt-3 pb-1 text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
