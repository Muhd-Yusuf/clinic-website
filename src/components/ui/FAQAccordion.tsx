'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/Icons';

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
    <div className="space-y-0">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b py-5"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <button
              className="w-full flex items-center justify-between gap-4 text-start cursor-pointer"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className="font-medium text-base leading-snug transition-colors duration-200"
                style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text-primary)' }}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: 'var(--color-accent)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  display: 'inline-flex',
                }}
              >
                <ChevronDownIcon className="w-5 h-5" />
              </span>
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
                className="pt-4 pb-1 text-sm leading-relaxed"
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
