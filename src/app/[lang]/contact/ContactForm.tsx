'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  dict: any
}

interface FormState {
  name: string
  email: string
  org: string
  role: string
  message: string
  consent: boolean
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    org: '',
    role: '',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}
    
    if (!form.name.trim()) {
      newErrors.name = dict.contact.form.required
    }
    
    if (!form.email.trim()) {
      newErrors.email = dict.contact.form.required
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = dict.contact.form.emailInvalid
    }

    if (!form.role) {
      newErrors.role = dict.contact.form.required
    }

    if (!form.message.trim()) {
      newErrors.message = dict.contact.form.required
    }

    if (!form.consent) {
      newErrors.consent = dict.contact.form.consentRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // Simulate API Submission Endpoint
    try {
      // Wire submission to PLACEHOLDER endpoint
      const response = await fetch('/api/contact-placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      // Simulate success since api is placeholder
      setTimeout(() => {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          org: '',
          role: '',
          message: '',
          consent: false,
        })
      }, 1000)

    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="font-heading text-lg font-bold text-ink mb-6">
        {dict.contact.form.title}
      </h3>

      {status === 'success' && (
        <div 
          className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm leading-relaxed"
          role="alert"
        >
          {dict.contact.form.success}
        </div>
      )}

      {status === 'error' && (
        <div 
          className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm leading-relaxed"
          role="alert"
        >
          {dict.contact.form.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
            {dict.contact.form.name} *
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-mist border rounded-xl px-4 py-3 text-sm focus-ring ${
              errors.name ? 'border-red-500' : 'border-line focus:border-cyan'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
            required
          />
          {errors.name && (
            <p id="err-name" className="text-xs text-red-500 mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="form-email" className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
            {dict.contact.form.email} *
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full bg-mist border rounded-xl px-4 py-3 text-sm focus-ring ${
              errors.email ? 'border-red-500' : 'border-line focus:border-cyan'
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
            required
          />
          {errors.email && (
            <p id="err-email" className="text-xs text-red-500 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="form-org" className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
            {dict.contact.form.org}
          </label>
          <input
            type="text"
            id="form-org"
            name="org"
            value={form.org}
            onChange={(e) => setForm({ ...form, org: e.target.value })}
            className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm focus-ring focus:border-cyan"
          />
        </div>

        {/* Role Select */}
        <div>
          <label htmlFor="form-role" className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
            {dict.contact.form.role.label} *
          </label>
          <select
            id="form-role"
            name="role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className={`w-full bg-mist border rounded-xl px-4 py-3 text-sm focus-ring ${
              errors.role ? 'border-red-500' : 'border-line focus:border-cyan'
            }`}
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? 'err-role' : undefined}
            required
          >
            <option value="">-- {dict.contact.form.role.label} --</option>
            <option value="patient">{dict.contact.form.role.patient}</option>
            <option value="audiologist">{dict.contact.form.role.audiologist}</option>
            <option value="press">{dict.contact.form.role.press}</option>
            <option value="other">{dict.contact.form.role.other}</option>
          </select>
          {errors.role && (
            <p id="err-role" className="text-xs text-red-500 mt-1" role="alert">
              {errors.role}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">
            {dict.contact.form.message} *
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`w-full bg-mist border rounded-xl px-4 py-3 text-sm focus-ring ${
              errors.message ? 'border-red-500' : 'border-line focus:border-cyan'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'err-message' : undefined}
            required
          />
          {errors.message && (
            <p id="err-message" className="text-xs text-red-500 mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="form-consent"
            name="consent"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            className="h-4 w-4 text-cyan border-line rounded focus-ring mt-1"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'err-consent' : undefined}
            required
          />
          <div className="text-xs text-slate select-none">
            <label htmlFor="form-consent" className="font-medium cursor-pointer">
              {dict.contact.form.consent} *
            </label>
            {errors.consent && (
              <p id="err-consent" className="text-xs text-red-500 mt-1" role="alert">
                {errors.consent}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-cyan-deep hover:bg-ink text-white font-sans text-sm font-semibold py-4 rounded-xl transition-all focus-ring disabled:opacity-50 cursor-pointer text-center"
        >
          {status === 'submitting' ? '...' : dict.common.cta.submit}
        </button>

        {/* Fallback info */}
        <div className="text-center pt-2">
          <span className="text-[10px] text-slate-400">
            Fallback: Send directly to{' '}
            <a href="mailto:info@akmira-optronics.de" className="text-cyan-deep font-semibold underline">
              info@akmira-optronics.de
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}
