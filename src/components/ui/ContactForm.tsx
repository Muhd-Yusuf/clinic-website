'use client';

import { useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { i18n } from '@/lib/i18n';

export default function ContactForm() {
  const lang = useLang();
  const t = i18n[lang].contact;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', phone: '', treatment: '', message: '' });
  };

  const inputClass =
    'w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--color-accent)]';
  const inputStyle = {
    borderColor: 'var(--color-border)',
    color: 'var(--color-text-primary)',
    backgroundColor: 'var(--color-white)',
  };
  const labelClass = 'block text-sm font-medium mb-1';
  const labelStyle = { color: 'var(--color-text-secondary)' };

  if (submitted) {
    return (
      <div
        className="rounded-xl border p-8 text-center"
        style={{ borderColor: 'var(--color-accent-light)', backgroundColor: 'var(--color-secondary-bg)' }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
          style={{ backgroundColor: 'var(--color-accent-light)' }}
        >
          ✓
        </div>
        <p className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
          {t.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass} style={labelStyle}>
          {t.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t.namePlaceholder}
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass} style={labelStyle}>
          {t.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder={t.phonePlaceholder}
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {/* Treatment interest */}
      <div>
        <label htmlFor="treatment" className={labelClass} style={labelStyle}>
          {t.treatmentLabel}
        </label>
        <select
          id="treatment"
          name="treatment"
          value={form.treatment}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        >
          <option value="">—</option>
          <option value="vein">{t.treatmentVein}</option>
          <option value="beauty">{t.treatmentBeauty}</option>
          <option value="laser">{t.treatmentLaser}</option>
          <option value="other">{t.treatmentOther}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass} style={labelStyle}>
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        {t.submitBtn}
      </button>
    </form>
  );
}
