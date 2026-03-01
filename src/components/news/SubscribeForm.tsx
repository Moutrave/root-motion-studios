'use client'

import { useState } from 'react'
import { subscribe } from '@/app/news/actions'

export function SubscribeForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('loading')

    const formData = new FormData(form)
    const result = await subscribe(formData)

    if (result.success) {
      setStatus('success')
      setMessage('You are in! Check your inbox to confirm.')
      form.reset()
    } else {
      setStatus('error')
      setMessage(result.error ?? 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 bg-void border border-void-700 rounded-md px-4 py-2.5 text-ash text-sm placeholder:text-ash-muted/50 focus:outline-none focus:border-plasma/50 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-plasma text-white font-display text-sm tracking-widest uppercase px-5 py-2.5 rounded-md hover:bg-plasma-light transition-colors disabled:opacity-50 cursor-pointer"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </div>

      {message && (
        <p className={`text-xs ${status === 'success' ? 'text-neon' : 'text-solar'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
